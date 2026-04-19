# Biz Model — Monthly Subscription vs One-Time Book Purchase

**Date:** 2026-04-19
**Product:** app.markluce.ai — personalized bilingual storybooks (Traditional Chinese + English), 12 books, LINE-only auth, currently NT$99/mo subscription, 3-tier access (3 pages anon / 6 pages login / full for subscribers).

**Question:** Is NT$99/mo subscription the right model, or should we shift (fully or partly) to one-time per-book purchase with offline access?

---

## 1. The three models on the table

### A. Pure subscription (current: NT$99/mo)
All 12 books unlocked while subscribed. Cancel = lose access.

### B. Pure one-time purchase
Each book purchased individually (NT$149–NT$249), **kept forever offline** (PWA cache / downloadable PDF / EPUB). No recurring charge.

### C. Hybrid — own-it OR all-you-can-read
- **Free tier** (already built): 3 pages anon, 6 pages login
- **One-time**: NT$199/book, personalized with child's name/face, cached offline forever
- **Subscription NT$199/mo**: unlimited reads + unlimited personalization regenerations + new books as released + family (2–3 kids) support
- **Lifetime / 家庭方案**: NT$2,999 one-shot — all 12 current books personalized for up to 2 kids + 12 months of new releases included

---

## 2. Economics at the level Mark actually cares about

### Assumptions (Taiwan market, 2026)
- **CAC** (blended LINE Ads + Meta + organic): ~NT$300–500 per paying user
- **Churn on NT$99/mo kids content**: 15–25% monthly is industry norm — kids "finish" the books, parents cancel
- **Avg subscription lifetime**: ~4–6 months
- **Per-book cost of generation** (LLM text + image gen for name/face substitution + Chinese TTS if any): ~NT$15–40 cost per book generation depending on model choice
- **Gateway cost**: PayUni-base ≈ **2.8% CC + NT$25 超商代碼** — no fixed fees (per our comparison doc)

### A. Pure subscription @ NT$99/mo

| Metric | Value |
|---|---|
| Gross per user over 5-mo lifetime | NT$495 |
| Gateway fee (~3% blended) | −NT$15 |
| Content generation (say 20 personalized generations over lifetime × NT$25) | −NT$500 |
| **Net margin per user** | **~−NT$20** (!!) |

**This is the hidden trap:** if subscribers treat personalization as "unlimited regens," each NT$99/mo can be gross-margin negative once you count per-generation AI cost. Netflix doesn't have this problem because the movie is already made. **You're paying OpenAI/Replicate per click.**

### B. Pure one-time @ NT$199/book

| Metric | Value |
|---|---|
| Avg books bought per family (12 available, people pick 2–3 favorites) | 2.5 |
| Gross per family | NT$497.5 |
| Gateway fee (~3%) | −NT$15 |
| Content generation (one-shot per book, ~3 regens for "looks right") | −NT$75 |
| **Net margin per family** | **~NT$407** (+) |

**Plus:** no churn anxiety, no 定期定額/綁卡扣款/特約賣家 gateway complexity, gift-friendly, screenshot-able ownership, cleaner parent psychology ("bought a book for my kid" vs "another subscription").

### C. Hybrid

Let families self-select:
- **80% one-time buyers** @ NT$199 × 2.5 books = NT$497 avg, high margin
- **15% subscribers** @ NT$199/mo × 5 mo = NT$995 avg — but constrain regen count (e.g. 5 regens/book/mo) so AI cost stays bounded
- **5% lifetime** @ NT$2,999 one-shot — whale hunters, gift givers, grandparent buyers

Blended revenue per converted free user: **~NT$540** at much healthier margin than pure subscription.

---

## 3. Where each model wins and breaks

| Dimension | Subscription | One-time | Hybrid |
|---|---|---|---|
| Gateway complexity | **Hard** (特約賣家 / PayUni 定期定額) | **Easy** (any tier, any gateway) | Medium (both rails needed) |
| Revenue predictability | ARR/MRR = VC-friendly story | Lumpy, hard to forecast | Mixed |
| AI cost exposure | **High** (unlimited regens) | **Capped** (N regens per purchase) | Controllable per tier |
| Taiwan parent psychology | Subscription fatigue (Netflix/Disney+/YT overlap) | Aligns with 買書 mental model | Best of both |
| Gift-ability | Awkward (gift a subscription?) | **Native** (gift a book, grandparents love this) | Strong |
| Churn | Structural — kids age out at 6–18mo | N/A | Only on subscribers (smaller segment) |
| Virality / WOM | Weak (hard to share a login) | **Strong** (share "my kid's book") | Strong |
| LTV ceiling | Low (~4–6mo lifetime) | Medium (2.5 books) | **Highest** (5% lifetime buyers drive tail) |
| Dev burden | 定期定額 billing, dunning, prorating, cancel flows | Checkout + entitlement only | Both |
| Cost of failure | High (gateway rejections blocking launch) | Low (launch week one on PayUni base) | Medium |

---

## 4. The personalization moat is also the cost trap

The reason markluce.ai exists (vs just selling PDFs on Pchome) is **personalization** — kid's name/face/gender baked into the story. This is the moat. BUT:

- Every regeneration = another OpenAI/Replicate bill
- In subscription, users regenerate aggressively ("try my daughter's name," "now my son's," "now with blue hair," "now in Taiwanese")
- In one-time, users regenerate a bounded number of times ("good enough, locked in, bought")

→ **One-time purchase aligns the unit economics with the cost structure of AI generation.** Subscription fights it.

Defensive moves if you keep subscription:
- Hard cap regens (e.g. 3 per book per month per kid)
- Or: subscription unlocks **reading**, personalization stays one-time paid (à la IAP for each new character swap)

---

## 5. The Taiwan-specific considerations

1. **買斷 vs 訂閱 mental model** — Taiwanese parents (especially 阿公阿嬤 as gifters) default to buying, not subscribing. Subscription feels Western-SaaS-y.
2. **LINE ecosystem** — You already have LINE Login + LINE OA. One-time purchases push well via LINE Pay / LINE OA broadcast ("新書上架 NT$199"). Subscription fits worse.
3. **Gifts & 紅包 culture** — Chinese New Year, 滿月, birthday. One-time "give a book with their name in it" = killer gift. "Give them a subscription" = awkward.
4. **Government subsidies / 幼兒園 bulk sales** — easier to invoice a 幼兒園 for 30 copies of one book than to onboard 30 parents into recurring billing.
5. **ECPay/PayUni 定期定額 friction is real** — the 特約賣家 verification loop is blocking launch right now. Removing the subscription requirement removes that blocker entirely. You could be live on PayUni with one-time checkout **this week**.

---

## 6. What I would actually recommend

**Go hybrid, but lead with one-time purchase.** Specifically:

1. **Keep** the free tier (3 anon / 6 login) as discovery funnel.
2. **Default paid CTA**: "**買這本 NT$199** — 專屬 {child-name} 繪本，永久收藏、離線可讀"
3. **Secondary CTA**: "**全家無限看 NT$199/mo** — 所有繪本任讀 + 每月新書" (for heavy users)
4. **Gift SKU**: "**送禮方案 NT$299** — 繪本 + 印刷精裝版寄到家" (if you can do POD)
5. **Lifetime offer at checkout #2**: Once someone buys one book, offer "再加 NT$2,799 全套 12 本 + 2 小孩 + 未來一年新書" as upsell

### Why this works
- **Unblocks launch** — PayUni base tier handles one-time cleanly; 特約賣家 review becomes nice-to-have, not critical-path.
- **Aligns cost & revenue** — personalization fee per purchase, not per subscription-month.
- **Multiple price points** — NT$199 entry, NT$2,999 whale catch.
- **LINE-native marketing** — broadcast book drops via LINE OA, direct-buy in-chat.
- **Preserves subscription optionality** — you can still run it, you just don't depend on it.

### What to kill / de-prioritize
- Heavy investment in churn-reduction tooling, dunning flows, win-back campaigns — low ROI vs. just adding a 3rd or 4th book to the catalog.
- The 特約賣家 annual fee (NT$18,900) — not worth it in year-1 if subscription is a secondary offer on PayUni.

---

## 7. Decisions to make with Mark

- [ ] **Lead model**: subscription-first, purchase-first, or hybrid-equal? → **I'd pick purchase-first hybrid.**
- [ ] **Per-book price point**: NT$149 / NT$199 / NT$249? Needs A/B testing. Start NT$199.
- [ ] **Subscription price if kept**: NT$99 is probably underpriced (doesn't cover AI cost at heavy use). Consider NT$199/mo with regen caps, OR NT$399/mo for "family unlimited."
- [ ] **Lifetime SKU**: yes/no? If yes, what's inside? → I'd include it as the "hero" upsell.
- [ ] **Gateway primary**: switch to PayUni, keep ECPay 特約 only if we commit to subscription-first.
- [ ] **Offline delivery mechanism**: PWA cache + service worker (already partial) vs. downloadable PDF vs. both? PWA wins on anti-piracy; PDF wins on "real" ownership feeling.
- [ ] **DRM stance**: zero DRM (trust the customer) vs. soft watermarking (kid's name already is a watermark) vs. hard DRM. → I'd go zero DRM + personalized name as natural watermark.

---

## 8. Reading list (follow-ups)

- Pull actual Taiwan children's ebook pricing from Kobo, Readmoo, Pchome 24h for comparables
- Research Taiwan subscription-churn benchmarks for kids content specifically (Google Analytics/AppFigures proxies)
- Sketch the AI cost per book generation end-to-end with current providers — then decide if NT$199 one-time is profitable at the regen budget you'll offer

---

## Sources

- PayUni vs ECPay pricing comparison — [`ai-2-mark/payuni-vs-ecpay-pricing.md`](../ai-2-mark/payuni-vs-ecpay-pricing.md)
- ECPay 特約賣家 requirement for 定期定額 — [`ai-2-mark/ecpay-subscription-requires-tokushop.md`](../ai-2-mark/ecpay-subscription-requires-tokushop.md)
- ECPay full service & pricing — [`biz-model/ecpay-service-and-pricing.md`](./ecpay-service-and-pricing.md)
