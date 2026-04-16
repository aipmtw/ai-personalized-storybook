# Luce 繪本誌 — Product Spec

> app.markluce.ai · Monthly bilingual storybook subscription for kids 3-12

## Subscription Model

| Item | Detail |
|------|--------|
| Price | NT$99/month |
| Content | All age groups (3-6, 7-9, 10-12), all books for the current + previous month |
| Access | Online reading (browser) + PWA offline download |
| Trial (anonymous) | First 3 pages free per book, no login required |
| Trial (LINE login) | First 6 pages free per book (3 anonymous + 3 login bonus) |
| Payment | ECPay recurring billing (定期定額) |
| Cancellation | Cancel anytime, access continues until end of billing period |

### Content Access Tiers

| Tier | Access | Pages | Login |
|------|--------|-------|-------|
| Anonymous | Cover + pages 1-3 | 3 free | No |
| LINE Login (free) | Cover + pages 1-6 | 6 free | Yes |
| Subscriber (NT$99/mo) | All pages, current + previous month | Unlimited | Yes |
| Archived months | Future premium tier | TBD | Yes |

### Conversion Funnel
1. **Anonymous** → reads 3 pages → demo gate → "用 LINE 登入 解鎖更多"
2. **LINE Login (free)** → reads 6 pages → subscribe gate → "訂閱解鎖完整繪本 NT$99/月"
3. **Subscriber** → full access, PWA download, offline reading

### Offline & Expiry Policy

**Principle: Downloaded = yours to keep. New content requires active subscription.**

| Status | Online reading | Offline (downloaded books) |
|--------|---------------|--------------------------|
| Active subscriber | All current + previous month | All downloaded books play freely |
| Expired < 30 days | Gate at page 6 (login tier) | Downloaded books still play |
| Expired > 30 days | Gate at page 3 (anonymous tier) | Downloaded books still play, soft banner: "訂閱已過期 — 重新訂閱解鎖新繪本" |
| Never subscribed | Gate at page 3/6 | N/A (download requires active subscription) |

**Why allow expired offline reading:**
- Kids don't understand billing — blocking mid-read (e.g., on a plane) is a terrible experience
- Content is self-produced, no licensing pressure to revoke
- Generous policy builds trust and improves resubscription rates
- Files are already cached locally — artificial DRM is hostile UX

**Soft banner (not a block):**
- Shown on app launch when subscription expired > 30 days
- "你的訂閱已過期。已下載的繪本仍可閱讀。重新訂閱即可取得最新繪本！"
- Dismiss button + subscribe CTA
- Does NOT prevent reading downloaded content

## Authentication

- **Login method**: LINE Login (LIFF v2.1, OIDC)
- **No Google auth** (design decision — Taiwan market, LINE-first)
- **Token**: Base64-encoded JSON with `userId`, `displayName`, `exp`
- **Cookie**: `ml_auth` for session persistence
- **Offline auth**: Downloaded PWA books require one-time login to activate; token auto-refreshes on next online visit
- **Admin access**: Restricted to Mark's LINE user ID only

## Reader Features (shared/reader.js v3)

### Page Model
```
Page 0     = Cover      URL: /slug/       No audio
Page 1..N  = Content    URL: /slug/1      Audio: page-{N}-{lang}.mp3
End        = Universal  URL: /slug/end    No audio, congrats + CTA
```

- Page numbering aligned across reader URL, admin, and audio files
- No off-by-one: `/amy/1` = admin page 1 = `page-1-zh.mp3`

### Cover Page
- Book title (中 + EN), credits, version
- Stats bar: page count, ZH/EN audio count (via HEAD probe)
- **[開始閱讀 Start Reading ▶]** button → navigates to page 1 + auto-plays audio
- All elements respect language selector

### Content Pages
- Emoji illustration + bilingual text (中文 + English)
- **[下一頁 Next Page ▶]** button at bottom → navigates + auto-plays audio
- Last page shows **[故事結束 The End ▶]** → navigates to `/slug/end`
- Taipei time displayed below next button
- Text visibility controlled by language selector (zh/en/both)

### End Screen (`/slug/end`)
- 🎉 Congrats message: "恭喜你讀完了！Congratulations!"
- Book title + subtitle recap
- Page count recap: "你剛讀完 N 頁的精彩故事！"
- **[📚 探索更多繪本 ▶]** — strong green CTA to bookshelf
- Credits + version
- All bilingual, respects language selector

### Language Selector
- Three modes: 中文 / English / 中＋EN
- Persisted in `localStorage`
- Controls visibility of:
  - Cover: title, subtitle, credits, stats, start button
  - Content: text-zh / text-en divs
  - End screen: congrats, recap, CTA, credits
  - Autoplay button: 自動讀整本書 / Auto-Read Book
  - UI spans use `i18n-zh`/`i18n-en`/`i18n-both` classes (separate from content `text-zh`/`text-en`)

### Navigation
- Dot indicator in toolbar: 📖 (cover) + N content dots, active dot highlighted teal
- Swipe left/right, click edges (25%/75%), keyboard arrows
- Back to cover via 📖 dot click
- Prev/next from end screen works correctly

### Audio
- Per-page TTS audio: `page-{N}-zh.mp3`, `page-{N}-en.mp3`
- Azure Neural TTS: zh-TW-HsiaoChenNeural, en-US-JennyNeural
- Audio bar: play/pause, scrubber, time display, close
- Auto-play on Start Reading and Next Page buttons
- **[▶▶ 自動讀整本書 / Auto-Read Book]**: reads entire book, auto-advances pages, shows end screen when done

### Auth & Demo Gate (two-tier)
- **Anonymous**: Cover + pages 1-3 free → gate at page 4
  - Gate modal: "試閱結束 — 用 LINE 登入解鎖更多頁面"
  - LINE login button + "返回封面" link
- **LINE Login (free, no subscription)**: Cover + pages 1-6 free → gate at page 7
  - Gate modal: "免費試閱結束 — 訂閱 NT$99/月 解鎖完整繪本"
  - Subscribe button + "返回封面" link
- **Subscriber**: All pages, no gate
- After login, returns to the page user was trying to access
- Login status shown top-right: user name (teal) or "未登入" (dimmed)

### Toolbar
- 🏠 Home link
- 🔊 Audio play button
- Dot navigation (📖 + content dots)
- ⛶ Fullscreen toggle
- Version number (right-aligned, subtle)

### PWA & Offline

**Installation: One app-level PWA** — users install "Luce 繪本誌" once at `app.markluce.ai`, not 36 individual book apps.

| Layer | Scope | Strategy | Caches |
|-------|-------|----------|--------|
| App SW (`/sw.js`) | Entire app | Network-first for HTML, shared JS | Bookshelf, shared/reader.js |
| Per-book SW (`/{slug}/sw.js`) | Single book | Network-first for HTML + /shared/, cache-first for assets | Book HTML, CSS, data.js, audio MP3s |

- Root manifest: "Luce 繪本誌" with app icon, `start_url: "/"`
- Per-book manifests remain for individual book metadata
- Cache versioning for forced updates
- Downloaded books require one-time online auth, then play offline

**Auto-upgrade flow:**
1. SW detects new version (cache name changed)
2. New SW installs in background (`skipWaiting`)
3. On activate, shows toast: "新版本已準備好 / New version ready — 點擊更新 / Tap to update"
4. User taps → page reloads with new version
5. If user ignores → next natural page load uses new version anyway (via `clients.claim`)
6. Toast respects language selector

## Domain Architecture

| Domain | Purpose | Repo |
|--------|---------|------|
| markluce.ai | Marketing site, APIs, ESL, features, briefs | markluce-ai |
| app.markluce.ai | Storybook app (reader + admin + bookshelf) | ai-personalized-storybook |

**Admin stays on app.markluce.ai** (not markluce.ai/app/admin). Reasons:
- Same-origin access to book data.js and audio MP3s — no CORS issues
- Same repo, same deployment — no cross-repo build complexity
- Shared LINE Login auth flow — same cookies, same session
- Convention: admin panel lives on same domain as the app it manages
- Cleaner URL: `/admin/amy` vs `/app/admin/amy`

## Admin (app.markluce.ai/admin/)

### Overview (`/admin/`)
- LINE auth (admin only)
- Current issue control (set live month)
- Book table: #, slug, title zh/en, age, pages, estimated zh/en/bilingual duration, audio status, month, status
- Filters: status, age, month, sort, search
- Content spec reference table

### Book Detail (`/admin/{slug}`)
- Overview table: cover (blank #) + content pages (1-N) + end row
- Per-page: type badge, text preview (clickable), word count, ZH/EN MP3 actual duration, emoji
- Audio probing via `AudioContext.decodeAudioData` (reliable, sequential)
- Audio summary: file counts, total durations, missing alerts
- Clickable rows → detail view

### Cover Preview (`/admin/{slug}/cover`)
- Visual mock of reader cover (emoji, titles, stats, start button)
- Book info badges
- Audio summary after probe

### Page Detail (`/admin/{slug}/{N}`)
- Visual preview (emoji + full text)
- Text analysis: character/word count vs age-group spec
- Inline `<audio>` players for ZH + EN MP3 with duration
- Prev/next navigation + open in reader

### End Preview (`/admin/{slug}/end`)
- Visual mock of reader end screen
- Info badges

## Book Data Architecture

### Per-book files (18 books with new reader)
```
public/{slug}/
├── index.html          ← references shared/reader.js?v=5
├── css/style.css       ← unique theme per book
├── js/data.js          ← BOOK object: slug, title, pages[]
├── audio/              ← page-{N}-{zh,en}.mp3
├── manifest.json       ← PWA manifest
└── sw.js               ← service worker (v4, network-first for /shared/)
```

### Shared files
```
public/shared/
└── reader.js           ← universal reader logic (single source)
```

### Page types in data.js
- `type: 'cover'` — always `pages[0]`, no text, no audio
- `type: 'story'` — content pages with zh/en text + emoji
- (No more `type: 'end'` — removed, universal end rendered by reader.js)

### Spec per age group
| Age | Pages/Book | 字/Page | Words/Page | TTS Rate |
|-----|-----------|---------|------------|----------|
| 3-6 | 12 | 20-40 | 15-30 | zh -20%, en -25% |
| 7-9 | 16 | 40-70 | 30-50 | zh -10%, en -15% |
| 10-12 | 20 | 60-100 | 50-100 | zh 0%, en -5% |

## Legal Pages

### 服務條款 (`/terms/`)
- Service: monthly bilingual storybook subscription
- Price: NT$99/month via ECPay recurring billing
- Content access: current + previous month, all age groups
- Free trial: first 3 pages per book, no account needed
- LINE Login only, one account per LINE user
- PWA download allowed, offline reading requires initial auth
- Content is AI-generated, reviewed by human editor

### 隱私權政策 (`/privacy/`)
- Data collected: LINE profile (user ID, display name, profile picture)
- Reading analytics: pages viewed, audio play events, device info
- Children's privacy: no data collected from children directly; parent's LINE account is the subscriber
- Payment: handled entirely by ECPay, no card data stored
- No third-party data sharing except ECPay for billing
- Data deletion: request via email, processed within 30 days

### 退款政策 (`/refund/`)
- Digital content: generally non-refundable after access
- First month guarantee: full refund if requested within 7 days of first subscription
- Cancellation: takes effect at end of current billing period, no partial refunds
- Technical issues: case-by-case compensation (extended access or refund)

### 關於 (`/about/`)
- Luce 繪本誌 by MarkLuce.ai
- Monthly bilingual storybook magazine for kids 3-12
- AI-generated stories, human-reviewed
- Taiwan-based, Traditional Chinese + English

### 聯繫
- Email: mark@aipm.com.tw (mailto link in footer, no dedicated page)

## Bugs Fixed (2026-04-16)

1. **Audio off-by-one**: Cover played page-1 audio, content pages shifted by 1
2. **36 identical reader.js copies**: Consolidated to single `/shared/reader.js`
3. **Page numbering misalignment**: Reader/admin/audio now all use same 0-indexed system
4. **Bilingual mode hiding text**: CSS class conflict between i18n spans and content divs
5. **Cover credits not bilingual**: Now respects language selector
6. **No back-to-cover**: Dot navigation with 📖 cover icon
7. **End page was story content**: Separated last story page from universal end screen
8. **Audio probing stalls**: Switched from Audio elements to AudioContext.decodeAudioData
9. **SW caching stale reader.js**: Network-first for `/shared/` files
10. **Next Page not auto-playing audio**: Fixed with goToPageAndPlay + proper timing

## Features Added (2026-04-16)

1. **Shared reader.js** — single source of truth for all 18 books
2. **Admin book detail** (`/admin/{slug}`) — per-page MP3 duration probing
3. **Admin cover preview** (`/admin/{slug}/cover`)
4. **Admin page detail** (`/admin/{slug}/{N}`) — full text, audio players, spec check
5. **Admin end preview** (`/admin/{slug}/end`)
6. **Cover stats bar** — page count + audio count via HEAD probes
7. **[Start Reading] button** on cover with auto-play
8. **[Next Page] button** on content pages with auto-play
9. **Dot navigation** replacing text page indicator
10. **Universal end screen** with congrats, recap, bookshelf CTA
11. **`/slug/end` URL** — semantic end screen URL
12. **Language selector** — all UI elements respect zh/en/both
13. **Autoplay renamed** — 自動讀整本書 / Auto-Read Book
14. **Login status** — top-right display (name or 未登入)
15. **Version in toolbar footer** — subtle right-aligned display
16. **Taipei time** — shown below Next Page button
