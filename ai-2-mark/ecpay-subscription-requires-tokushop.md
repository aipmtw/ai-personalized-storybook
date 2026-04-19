# ECPay — Monthly Subscription Requires 特約賣家 (Confirmed)

**Date:** 2026-04-19
**Context:** Mark's 身分驗證 was rejected 3× (04-15, 04-16, 04-17). The rejection emails cited incomplete documents, but the real underlying reason is that **monthly subscription (定期定額 綁卡扣款) is only available to 特約賣家**. The earlier ECPay emails did not spell this out.

---

## What ECPay's own docs say

### 1. 收款方式及費用說明 — `support.ecpay.com.tw/25132`
Lists 綁卡扣款 (the card-binding auto-debit mechanism behind real monthly subscriptions) with an explicit tier restriction:

> **「定期定額 / 綁卡扣款（綁卡扣款僅特約賣家適用）」**

### 2. FAQ nID=1202 → redirects to `support.ecpay.com.tw/16214`
On editing recurring-billing orders:

> **「編輯定期定額（僅開放特約賣家）」**

### 3. 特約賣家 overview — `support.ecpay.com.tw/26291`
Lists 特約賣家-exclusive services: 分期付款, 海外卡, 銀聯卡, 無卡分期, 街口支付, 信用卡閘道, 刷卡機, 票券, plus negotiated rates.

### 4. 信用卡定期定額 — `developers.ecpay.com.tw/?p=2868`
Describes the API ("有定期收款需求時，且收款金額相同，可使用此收款方式") but does not state tier restrictions on that developer page — the tier restriction lives on the support/collection-methods page above.

---

## Interpretation

- **一般賣家 (general seller)**: Can technically call the 定期定額 API for fixed-amount, fixed-schedule re-charges.
- **特約賣家 (contracted seller, VIP)**: Required for **綁卡扣款** (card tokenization / stored card + auto-debit) — the mechanism a real monthly subscription product needs — AND required to edit existing 定期定額 orders.

For a SaaS with monthly auto-renewing plans (like markluce.ai storybook at NT$99/mo), **特約賣家 is effectively mandatory**.

---

## Why this matters — what the earlier emails missed

The thread of rejection emails from ECPay's automated system (`sys@ns1.ecpay.com.tw`) on 04-15, 04-16, 04-17 all cited:

> 「因您未提供公司設立登記表完整頁數…」

…which made it sound like a document-quality issue. In reality, the **upgrade to 特約賣家** (which is what enables monthly subscription billing in the first place) has a stricter verification bar than a plain 一般賣家 signup. That's why the same docs that might pass for 一般賣家 keep getting rejected for 特約賣家.

Melody's 04-17 email (`19d9a6af345a40b2`) does say "升級特約賣家" and lists the required upload set — 最新公司變更登記表(完整張數) + 負責人證件正反面 + premises photos — but never explicitly connected the dots with "and the only reason you need 特約賣家 is because you want 定期定額 subscription billing."

---

## What to do

1. **Accept 特約賣家 is the path** — the NT$18,900/yr is the cost of doing monthly subscription on ECPay; there is no cheaper ECPay tier that enables tokenized recurring billing.
2. **Re-upload cleanly with 特約賣家 bar in mind:**
   - 公司變更登記表 — every page, page numbers visible, no cropping
   - 負責人身分證 正反面 — high-res, no glare
   - Premises photos (all 5 types: 門牌, 大樓外觀, 商品庫存, 電腦設備桌椅, 內部環境)
   - Sales code **6233** entered so Melody sees the case
3. **Ask Melody explicitly** (in the pending phone call on 0902-159-959):
   - "Is there any way to start on 一般賣家 while 特約賣家 review is pending?" — unlikely but worth asking, since only CC one-shot would work (no auto-renewal)
   - "What exact document format / resolution passes first-try?"
   - Pre-book verification review so you don't burn another rejection cycle
4. **Alternative to evaluate** — if 特約賣家 review drags past 2026-06-30 (the e-invoice year-1-free deadline):
   - Compare **Stripe / NewebPay 藍新 定期定額** — NewebPay in particular is known for easier onboarding for subscription SaaS in Taiwan. Worth a parallel quote as a backup path.

---

## Sources

- [收款方式及費用說明 — ECPay Support](https://support.ecpay.com.tw/25132/)
- [定期定額 FAQ (redirected) — ECPay Support](https://support.ecpay.com.tw/16214)
- [特約賣家 — ECPay Support](https://support.ecpay.com.tw/26291/)
- [信用卡定期定額 — ECPay Developers](https://developers.ecpay.com.tw/?p=2868)
