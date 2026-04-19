# ECPay 綠界 — Service & Pricing

Source: emails from **Melody Chen 陳梅玉** (`melody.chen@ecpay.com.tw`, 0939-333-003, ext. 3802), 2026-04-17.
Merchant account: **馬克路思科技有限公司 60670979** (ECPay vendor ID `3497326`, login `2026markluce`).
Sales rep code to fill in the application: **6233** (so Melody can see the case).

---

## 1. 金流服務 — Payment Gateway (特約賣家 / Large Merchant Plan)

### Fixed fees (含稅)
| Item | Amount |
|---|---|
| Setup fee (one-time) | **NT$5,250** |
| Annual fee | **NT$13,650** |
| **Year-1 total** | **NT$18,900** |

### Per-transaction fees (未稅)
| Channel | Fee |
|---|---|
| Domestic credit card | 2.5% |
| Foreign credit card | 3.8% |
| Credit card order processing | NT$1 / order |
| ATM / WEBATM | 1% (min NT$15) |
| 超商條碼 (barcode) | NT$16 |
| 超商代碼 (code) | NT$31 |

### Settlement terms
- Monthly collection cap: **NT$500,000**
- Security deposit: **10% (NT$50,000)** held within that cap
- Deposit returnable **60 days after contract end** if no trade disputes (must actively apply for refund)
- Payout cycle: **T+7** (T = bank settlement day)

---

## 2. 電子發票 — E-Invoice Service

### Pricing — 2026 新戶優惠 (deadline **2026-06-30**)
| Plan | Invoices/yr | Setup | Annual |
|---|---|---|---|
| **首購新戶** (promo) | 20,000 | **NT$3,780 (含稅)** / NT$3,600 (未稅) | **$0 year-1** (原價 NT$6,000 未稅 / NT$6,300 含稅) |

### Auto-renewal pricing after year-1 (未稅)
| Tier | Invoices/yr | Annual |
|---|---|---|
| 入門型 | 5,000 | NT$3,600 |
| **基本型** (default renewal) | ~20,000 | NT$6,000 |
| 進階型 | ~120,000 | NT$12,000 |
| 經濟型 | ~300,000 | NT$18,000 |
| 豪華型 | ~1,000,000 | NT$30,000 |
| 尊榮型 | 1,000,001+ | NT$50,000 |

> Renewal defaults to **基本型 20,000 張**. To switch plans, notify ECPay **2 months before** expiry. If invoices run out early, must upgrade mid-term.

### Application — three required steps
1. **郵寄紙本** — 電子發票字軌申請書 12 pages
   - Fill red fields; 大小章 on pages **P3, P6, P10, P11, P12**
   - Mail to: `115020 台北市南港區成功路一段58號3樓 ECPay Melody 收`
2. **Reply email with invoice sample data** — two sample SKUs (name, unit price, unit).
3. **Payment** — one of:
   - **Wire transfer** — 玉山銀行 (808) 三重分行, account `0325-940-011369`, name `綠界科技股份有限公司`.
     Remitter **must** be the company / legal rep / finance staff name.
   - **Online** — https://p.ecpay.com.tw/QSzti (item: 電子發票; name field: company name)
   - Reply with: company name, payment date/amount, remitter name + last-5, receipt screenshot.

### Timeline after submission
| Stage | Duration |
|---|---|
| Receipt of docs + payment | 1–2 days |
| Create invoice sample | 10–15 days |
| Submit to 國稅局 | 3–4 days |
| Receive 財政部 account email (`einvoice@fia.gov.tw`) | 2–3 days |
| Activate ECPay invoice system | 2–3 days |
| Signed contract return | 20–30 days |

---

## 3. 特約賣家 Upgrade — Application Flow

Login: https://vendor.ecpay.com.tw/ (account `2026markluce`)

1. Top-right → **✅申請其他服務** → 申請多項服務 → **電子發票**
2. Top-right → **⭐升級特約賣家** → 不申請物流
3. Fill business info
4. Upload the following (rejected 3× so far — see TODOs below):
   - **最新公司變更登記表** — **full page count** (not just the function page; include top-right page numbers)
   - **負責人身分證 正反面** — latest 換補發 date, clear images
   - **Photos**: 聯絡地址門牌 + 大樓外觀 + 商品庫存 + 電腦設備桌椅 + 內部環境
5. Once "成功送出" screen appears, reply to Melody.

**Sales code 6233 must be entered** so Melody can track the case.

---

## 4. Current Status — Outstanding TODOs (as of 2026-04-19)

### Blocker: identity verification rejected 3×
Dates: **2026-04-15, 04-16, 04-17** — same reason each time:
- 公司設立登記表 not complete (all pages required, with page numbers visible)
- 負責人身分證 正反面 clearer images

**Non-credit-card collection (ATM / 超商)** also blocked until this passes + 銀行帳號 is set up. (`【非信用卡收款 審核通知】審核不通過` on 2026-04-17)

### Action items
- [ ] **Re-upload** complete 公司變更登記表 (every page, including page-number header) + sharp front/back of negotiable ID
- [ ] **Upload business premises photos** (5 types listed above) if not already attached
- [ ] **Set up 銀行帳號** in vendor console to unblock non-CC collection
- [ ] **Mail** signed 12-page 電子發票申請書 (大小章 on P3/P6/P10/P11/P12) to 南港 ECPay
- [ ] **Wire NT$3,780** to 玉山 808 / 0325-940-011369 from company/legal-rep name, then reply with receipt
- [ ] **Reply** to Melody with 2 invoice sample SKUs (name / unit price / unit)
- [ ] **Confirm** sales code **6233** is entered in the application
- [ ] **Follow up** on the 0902-159-959 phone-call request Mark sent on 04-17 (no reply in thread)

---

## 5. My Comments & Observations

### Cost reality check against current pricing
Storybook subscription is **NT$99/mo** (per memory). Back-of-envelope on year-1 fixed overhead:

- Payment gateway: **NT$18,900/yr** fixed
- E-invoice: **NT$3,780/yr** (year-1 promo)
- **Total fixed: ~NT$22,680/yr** before a single transaction

Break-even just to cover fixed costs: **~229 paid-month-equivalents/year** (~19 active subs running all year, ignoring per-txn fees). That's achievable but it's a real hurdle — worth being explicit about when modeling LTV.

Per-transaction drag on NT$99: `NT$99 × 2.5% + NT$1 = ~NT$3.48` = **~3.5% effective rate** on domestic CC. On foreign cards it's **~4.8%**. Not crazy, but meaningful against a thin subscription margin.

### Strategic notes
1. **The 6/30 deadline is real money.** NT$6,300 (含稅) annual invoice fee waived in year-1 = ~NT$6,000 saved. Don't let the verification loop push past 6/30.
2. **The verification rejection is the only real blocker.** All downstream steps (mailing, payment, sample invoices) are fast — this is a document-quality issue, not a process issue. Worth spending 30 min to get a clean full-document scan + high-res ID photos done once properly.
3. **Consider whether 特約賣家 is even needed yet.** Large-merchant plan has a NT$500k/month cap and a NT$50k held deposit. For an early-stage NT$99/mo app, the simpler 一般賣家 plan may cost less fixed fee — worth asking Melody explicitly about the tier difference before committing to NT$18,900/yr. If monthly revenue is under ~NT$100k, a general-merchant plan likely wins on economics even at higher per-txn rates.
4. **Auto-renewal default is a trap to watch.** E-invoice auto-renews to 基本型 NT$6,000/yr. If storybook never exceeds 5,000 invoices/yr, actively downgrade to 入門型 (NT$3,600) 2 months before expiry.
5. **Security deposit is working capital drag.** NT$50k locked for 60 days post-contract + ongoing float. Factor into cash-flow planning.
6. **The "6233 sales code" detail is easy to miss** — without it, Melody can't see the case and the whole thread of back-and-forth becomes useless. Double-check this in the current submission.

### Open questions for Melody (suggested reply)
- Is there a **一般賣家** option with lower fixed fees for early-stage SaaS?
- Can the security deposit be reduced or structured differently for subscription businesses (predictable, low-dispute)?
- What's the **minimum-viable document set** that will pass verification on the first try? (Ask her to list them concretely.)
- Does ECPay support **recurring subscription billing** (tokenized card, auto-charge monthly), or does each month require a fresh checkout?
