# PayUni Test Integration — How to Run

**Status:** 2026-04-19 — scaffolded, UNTESTED against live sandbox. Needs env vars + first-call verification.

---

## 1. What was built

```
lib/payuni.js                    # AES-256-GCM + SHA256 helpers (encrypt/decrypt/hash/verify)
api/payuni/checkout.js           # POST — builds UPP order, returns auto-submit HTML form
api/payuni/notify.js             # POST — server-to-server webhook (logs result, returns "success")
api/payuni/return.js             # GET/POST — user-facing return page with decrypted payload
public/payuni-test.html          # Test UI — NT$1 default checkout form
```

Flow:
```
[User clicks 前往付款]
   → POST /api/payuni/checkout
     → returns auto-submit form → POSTs to https://sandbox-api.payuni.com.tw/api/upp
   → User completes payment on PayUni hosted page
   → PayUni server calls /api/payuni/notify (webhook, authoritative)
   → PayUni browser redirects to /api/payuni/return (display only)
```

---

## 2. How to register for sandbox

1. Sign up at https://www.payuni.com.tw/signup as a merchant (商家).
2. In the merchant backend, find **廠商整合資訊** / **API 串接資訊**.
3. Switch to **測試環境 / 沙盒** (sandbox) view to get:
   - **MerID** (商店代號)
   - **HashKey** (32-char, used as AES key)
   - **HashIV** (16-char, used as AES IV)
4. Set **API IP 白名單** — Vercel serverless IPs are dynamic, so you may need to either:
   - Leave whitelist empty in sandbox (if PayUni permits), OR
   - Add `0.0.0.0/0` temporarily for sandbox testing, OR
   - Use a Vercel egress static IP (Pro feature) or a proxy.

---

## 3. Env vars to set (Vercel → Settings → Environment Variables)

| Variable | Example value | Notes |
|---|---|---|
| `PAYUNI_MODE` | `test` | or `prod` |
| `PAYUNI_MER_ID` | `S12345678` | from PayUni backend |
| `PAYUNI_HASH_KEY` | `12345678901234567890123456789012` | 32-char ASCII |
| `PAYUNI_HASH_IV` | `1234567890123456` | 16-char ASCII |

Set them for **Preview** + **Production** environments on Vercel.

For local dev with `vercel dev`, add them to `.env.local` (do NOT commit).

---

## 4. Local run

```bash
# in project root
vercel dev
# visit http://localhost:3000/payuni-test.html
```

If PayUni's sandbox requires HTTPS for NotifyURL/ReturnURL, use `vercel deploy` to a preview URL instead of localhost.

---

## 5. Deployed run

1. `vercel --prod` (or push to `main` for auto-deploy)
2. Visit `https://app.markluce.ai/payuni-test.html`
3. Click 前往付款, complete test transaction with sandbox test card
4. Verify:
   - Browser lands on `/api/payuni/return` with `Status=SUCCESS`, `Hash valid = ✓`
   - Vercel logs show `[payuni:notify]` entry with `hashValid: true` and decrypted trade info
   - Trade appears in PayUni sandbox backend

### PayUni sandbox test cards
Check PayUni's developer backend for the current test-card list. Typical format:
- Test CC number (e.g. `4000-0000-0000-0002`)
- Any future expiry
- Any 3-digit CVV

---

## 6. What to verify on first test

- [ ] Checkout HTML loads without error at `/payuni-test.html`
- [ ] POST to `/api/payuni/checkout` returns an auto-submit form pointing to `sandbox-api.payuni.com.tw/api/upp`
- [ ] PayUni accepts the POST (no "HashInfo mismatch" error) — **this is the main thing to confirm our AES-256-GCM + SHA256 hashing matches their spec**
- [ ] Payment methods shown on PayUni page: 信用卡 / ATM / 超商代碼 / Apple Pay / Google Pay / LINE Pay
- [ ] Return page decrypts successfully, hash matches
- [ ] Notify webhook fires (check Vercel logs)

### If "HashInfo mismatch"
Most likely cause: Node's `aes-256-gcm` tag handling differs from PHP's `openssl_encrypt` output format. Check:
1. PHP does `openssl_encrypt(..., 0, ...)` → returns base64 by default. Our Node code also outputs base64 before hex-encoding. ✓
2. PHP concatenates `bin2hex($enc . ':::' . base64_encode($tag))`. Node concatenates the same way. ✓
3. `$enc` in PHP (with options=0) is the **base64 string**, not raw bytes. Our `encrypted` variable is also a base64 string. ✓
4. If still broken, try passing `OPENSSL_RAW_DATA` equivalent — change Node code to use `'binary'` output from cipher, then base64-encode afterward.

---

## 7. Known gaps / next steps after test passes

1. **Persistence**: checkout does not store the `tradeNo` anywhere. Add a DB write (Supabase) so notify can look up the order and mark it paid.
2. **Idempotency**: notify has no "already processed" check. Needed before production.
3. **Subscription (定期定額)**: current scaffold is one-shot (UPP). For 綁卡扣款 use `credit_bind/*` endpoints.
4. **Refund / cancel**: endpoints `trade/cancel`, `trade/refund/*` — not scaffolded yet.
5. **Replace ECPay TODO**: once verified, update `TODO.md` to de-prioritize ECPay 特約賣家 onboarding.
6. **Amount format**: we send `TradeAmt` as integer (NT$). Verify PayUni expects integer (not cents/fractional) — PHP SDK suggests integer is correct for TWD.

---

## 8. Security notes

- `lib/payuni.js` is outside `/api/`, so it's NEVER exposed as a route. Safe for shared helpers.
- `HashKey` + `HashIV` must NEVER be committed. Use Vercel env only.
- Return-page display of decrypted payload is for **testing only** — remove the raw-payload dump before production.
- Notify handler must validate `hashValid === true` before trusting any fields.

---

## 9. References

- PHP SDK source: https://github.com/payuni/PHP_SDK
- WooCommerce plugin (has the full UPP field list we based ours on): https://github.com/payuni/PAYUNi_for_WooCommerce
- Official docs: https://docs.payuni.com.tw/ (requires login for full API reference)
- Sandbox base URL: `https://sandbox-api.payuni.com.tw/api/`
- Production base URL: `https://api.payuni.com.tw/api/`
