# PayUni 統一金流 vs ECPay 綠界 — Pricing Comparison

**Date:** 2026-04-19
**Why this matters:** PayUni is part of the **統一 7-ELEVEN group**, which is the same biz group that owns the 超商代碼 pickup/payment rails. If ECPay (where 超商代碼 is a resold channel) charges NT$31/txn for that code, the vertically-integrated PayUni should be cheaper on that specific lever — and it is. More importantly, PayUni charges **zero fixed fees** (no setup, no annual) while still supporting 定期定額.

---

## Full-fee side-by-side

Normalized to **含稅 (VAT-inclusive)** where possible. ECPay 特約 row is from Melody's 2026-04-17 quote (她報價 per-txn 用未稅, 固定費用用含稅 — I've normalized).

| Item | **ECPay 特約賣家** | **PayUni (base)** | Winner |
|---|---|---|---|
| Setup fee (one-time) | **NT$5,250 含稅** | **NT$0** | PayUni |
| Annual fee | **NT$13,650 含稅** | **NT$0** | PayUni |
| Year-1 fixed total | **NT$18,900** | **NT$0** | PayUni |
| 信用卡 國內 | 2.5% 未稅 ≈ **2.625% 含稅** | **2.8% 含稅** | ECPay (by ~0.18 pp) |
| 信用卡 國外 | 3.8% 未稅 ≈ **3.99% 含稅** | **3.5% 含稅** | PayUni |
| 銀聯卡 | (同國外) | **2.8% 含稅** | PayUni |
| 紅利折抵 | — | **2.8% 含稅** | PayUni |
| 信用卡 3期 分期 | (needs quote) | 2.9% 含稅 | — |
| 信用卡 6期 分期 | (needs quote) | 3.5% 含稅 | — |
| 信用卡 12期 分期 | (needs quote) | 6.5% 含稅 | — |
| 信用卡 24期 分期 | (needs quote) | 11.0% 含稅 | — |
| 信用卡訂單處理費 | **NT$1 未稅 / 筆** | — (not listed) | PayUni (no extra) |
| ATM / 虛擬帳戶 | 1%, 最低 NT$15 未稅 | **1%, 最高 NT$15 含稅** | PayUni (capped not floored) |
| **超商條碼** | **NT$16 未稅** (≈ NT$16.8) | not listed on fee page | — |
| **超商代碼** (7-ELEVEN ibon) | **NT$31 未稅** (≈ NT$32.55) | **NT$25 含稅** | **PayUni (~23% cheaper)** |
| 電子錢包 (Apple/Google Pay) | (via CC rails) | supported | tie |
| 定期定額 / 綁卡扣款 | ✅ 特約 only | **✅ base tier** (per WooCommerce integration) | PayUni |
| 月收款上限 | NT$500,000 | 個人 20萬/月, **公司 100萬/月 累積** | PayUni (2×) |
| 押擔保金 | **10% = NT$50,000** held | none stated | PayUni |
| 撥款週期 | T+7 | T+7 | tie |
| Verification bar | 高 (rejected 3× so far) | 一般 / 標準商業文件 | PayUni |

> ⚠️ The **ATM fee wording** is a subtle footgun — ECPay says "1% **最低** 15元" (minimum NT$15 floor), PayUni says "1% **最高** 15元" (max NT$15 cap). At NT$99/mo (1% = ~NT$1), ECPay would charge you NT$15 (the floor), PayUni would charge NT$1 (since it's under the cap). **On ATM, PayUni is ~15× cheaper per small transaction.**

---

## The 超商代碼 lever specifically

- **ECPay 特約**: NT$31 未稅 (~NT$32.55 含稅)
- **PayUni**: NT$25 含稅 (~NT$23.8 未稅)
- **Delta: NT$8.75 cheaper per 超商代碼 transaction at PayUni (~27% saving pre-tax, ~23% post-tax)**

The reason is structural: PayUni is inside 統一 7-ELEVEN group. ECPay has to pay 統一 a wholesale rate for 超商代碼 access; PayUni is effectively eating their own dog food. Same story for 超商 logistics where PayUni's rates are competitive too (50元 B2C 常溫).

---

## What this means for a NT$99/mo storybook subscription

Assumptions: 100 subs/month, 70% credit card (domestic), 20% ATM, 10% 超商代碼.

### Monthly transaction cost

| Channel | Vol | ECPay per-txn cost | PayUni per-txn cost |
|---|---|---|---|
| CC domestic (70 txn × NT$99) | 70 | 99 × 2.625% + NT$1 = **NT$3.60** | 99 × 2.8% = **NT$2.77** |
| ATM (20 txn) | 20 | **NT$15 floor** | 99 × 1% = **NT$0.99** |
| 超商代碼 (10 txn) | 10 | **NT$32.55** | **NT$25** |
| **Total per-txn cost** | 100 | **252 + 300 + 325.5 = NT$877.5** | **193.9 + 19.8 + 250 = NT$463.7** |

### Year-1 total (fixed + txn @ 100 subs/mo)

- **ECPay 特約**: NT$18,900 + 12 × NT$877.5 = **NT$29,430**
- **PayUni**: NT$0 + 12 × NT$463.7 = **NT$5,564**
- **PayUni saves ~NT$23,866 in year 1** at this volume.

The gap only closes at much higher volumes where ECPay's lower domestic CC % starts to matter, AND only on the CC channel. Even optimistic ECPay scenarios need **~500+ subs** before the fixed fee becomes a rounding error.

---

## Caveats / things to verify before switching

1. **Does PayUni's 定期定額 actually work without a tier upgrade?** The fee page and WooCommerce integration imply yes. Confirm with PayUni directly — make sure 綁卡扣款 (token vault) is on the base plan, not gated the way ECPay gates it behind 特約.
2. **Verification still exists at PayUni** — it's easier than ECPay 特約 but not zero. Company registration + rep ID + business description still required. Ask PayUni sales for the exact document list before starting.
3. **超商條碼 (barcode) isn't on PayUni's public fee page** — may not be offered, or bundled differently. If you need that specific channel, ask.
4. **Foreign CC ratio matters** — if most subscribers are overseas (e.g. mainland / international Taiwanese), PayUni's 3.5% foreign also wins over ECPay's 3.99%.
5. **Invoice service** — ECPay's 電子發票 promo (NT$3,780 setup, $0 year-1) is separate. PayUni's e-invoice pricing needs its own quote. Don't let the ECPay 6/30 invoice deadline push you into committing to ECPay payment gateway if PayUni is the better gateway answer.

---

## Recommendation

For a NT$99/mo subscription SaaS at early stage:
- **PayUni is the clear economic winner** — zero fixed fees, cheaper on 超商代碼 (the lever you asked about) by 23–27%, cheaper on ATM by ~15× at small txn sizes, cheaper on foreign cards. Only loses on domestic CC % by 0.18 pp which is noise at this scale.
- **Open a PayUni merchant account in parallel** to the ECPay 特約 process. Don't cancel ECPay — once the NT$5,250 setup is paid and approved, keep it as a backup if a specific bank refuses PayUni or if you later want ECPay's specific installment bank list.
- **Do the phone call with Melody** to negotiate — if ECPay won't waive setup/year-1 fee, PayUni becomes the primary gateway.

---

## Sources

- [PAYUNi 統一金流 — 費用一覽](https://www.payuni.com.tw/fee)
- [PAYUNi 統一金流 費用一覽 — 1shop 一頁購物](https://support.1shop.tw/%E7%B5%B1%E4%B8%80%E9%87%91%E6%B5%81-payuni-%E8%B2%BB%E7%94%A8%E4%B8%80%E8%A6%BD/)
- [PAYUNi 金流服務](https://www.payuni.com.tw/payment)
- [PAYUNi 統一金流 Pro x WooCommerce (confirms 定期定額 support)](https://wpbrewer.com/product/wpbr-payuni-pro/)
- [2025 金流費率與優惠比較 — LINE Pay、綠界、藍新、統一](https://ke2b.com/zh-hant/charge-rates-payment-gateways-comparison-taiwan/)
- Melody Chen (ECPay) quote email `19d9a6af345a40b2`, 2026-04-17 — for ECPay 特約賣家 numbers
