/* ============================================
   Universal Book Reader — v3
   0-indexed: cover=0, content=1..N
   URL: /slug/ = cover, /slug/1 = page 1
   Audio: page-{currentPage}-zh.mp3
   ============================================ */

// ---- Config ----
const SLUG = BOOK.slug;
const DEMO_MAX = 3; // content pages 1-3 free
const LINE_CHANNEL_ID = '2009738746';
const totalContentPages = BOOK.pages.filter(p => p.type === 'cover' ? false : true).length;

// ---- State ----
let currentPage = getPageFromURL();
let langMode = localStorage.getItem('storybook-lang') || 'both';
let autoplayOn = false;
let audioPlaying = false;
let audioPaused = false;
let currentAudio = null;
let audioQueue = [];

// ---- DOM ----
const pageContainer = document.getElementById('pageContainer');
const pageIndicator = document.getElementById('pageIndicator');
const audioBtn = document.getElementById('audioBtn');
const audioBar = document.getElementById('audioBar');
const abPlayPause = document.getElementById('abPlayPause');
const abSlider = document.getElementById('abSlider');
const abCurrent = document.getElementById('abCurrent');
const abTotal = document.getElementById('abTotal');
const autoplayBtn = document.getElementById('autoplayBtn');

// ---- Auth ----
const isAuthenticated = (function() {
  const params = new URLSearchParams(location.search);
  if (params.get('ml_token')) return true;
  if (document.cookie.includes('ml_auth=')) return true;
  return false;
})();

// ---- URL helpers ----
// URL: /slug/ = cover (page 0), /slug/1 = content page 1, etc.
function getPageFromURL() {
  const parts = location.pathname.split('/').filter(Boolean);
  const last = parts[parts.length - 1];
  if (last === SLUG) return 0; // /slug/ = cover
  const num = parseInt(last);
  if (!isNaN(num) && num >= 1 && num <= totalContentPages) return num;
  return 0;
}

function updateURL(pageNum) {
  const url = pageNum === 0 ? `/${SLUG}/` : `/${SLUG}/${pageNum}`;
  history.pushState({ page: pageNum }, '', url);
}

// ---- Page rendering ----
function renderPage(pageNum) {
  // Universal end screen — after the last content page
  if (pageNum > totalContentPages) {
    currentPage = pageNum;
    const container = pageContainer;
    container.className = 'page-container page page-bg-1';
    container.scrollTop = 0;
    container.innerHTML = `
      <div class="page-illustration" style="background:rgba(255,255,255,.04)">
        <div class="emoji-scene">📚</div>
      </div>
      <div class="page-text">
        <div class="end-divider"><span class="i18n-zh">— 故事結束 —</span><span class="i18n-en">— The End —</span></div>
        <div class="end-actions">
          <a href="https://app.markluce.ai/" class="end-cta">
            <span class="end-cta-icon">📚</span>
            <span class="end-cta-text"><span class="i18n-zh">回到書架<small>探索更多繪本</small></span><span class="i18n-en">Back to Bookshelf<small>Explore more stories</small></span></span>
          </a>
        </div>
        <div class="end-credits">
          <span class="i18n-zh">故事由 Luce (AI) 共同編輯 · 審閱：Mark</span><span class="i18n-en">Co-edited by Luce (AI) · Reviewed by Mark</span><br>
          <span class="end-brand"><span class="i18n-zh">由 </span><a href="https://markluce.ai/" style="color:inherit;text-decoration:underline">MarkLuce.ai</a><span class="i18n-zh"> 出品</span></span>
        </div>
      </div>
    `;
    updateDots(-1); // no active dot
    applyLangMode(langMode);
    return;
  }

  // Cover page (page 0) → pages[0]
  // Content page N → pages[N] (since pages[0] is cover, pages[1] is content 1, etc.)
  const p = BOOK.pages[pageNum];
  if (!p) return;

  currentPage = pageNum;
  const container = pageContainer;
  container.className = 'page-container page ' + p.bg;
  container.scrollTop = 0;

  if (p.type === 'cover') {
    container.innerHTML = `
      <div class="page-illustration ${p.illustBg}">
        <div class="emoji-scene">${p.emoji}</div>
      </div>
      <div class="page-text">
        <div class="cover-title">${BOOK.title}</div>
        <div class="cover-subtitle">${BOOK.subtitle}</div>
        <div class="cover-credits">${BOOK.credits}</div>
        <div class="cover-stats" id="coverStats"><span class="i18n-zh">${totalContentPages} 頁</span><span class="i18n-en">${totalContentPages} pages</span><span class="i18n-both">${totalContentPages} pages</span></div>
        <button class="cover-start-btn" onclick="startReading()"><span class="i18n-zh">開始閱讀 </span><span class="i18n-en">Start Reading </span><span class="i18n-both">開始閱讀 Start Reading </span>▶</button>
        <div class="cover-version">${BOOK.version}</div>
      </div>
    `;
    probeCoverStats(totalContentPages);
  } else {
    container.innerHTML = `
      <div class="page-illustration ${p.illustBg}">
        <div class="emoji-scene">${p.emoji}</div>
      </div>
      <div class="page-text">
        <div class="text-zh">${p.zh}</div>
        <div class="text-en">${p.en}</div>
      </div>
    `;
  }

  // Update dots
  updateDots(pageNum);

  // Update theme color
  const colors = ['#ff6f61','#f5f5f5','#fff3e0','#e8f5e9','#fce4ec','#e3f2fd','#fff8e1','#e0f7fa','#f3e5f5','#fbe9e7','#ede7f6','#e8eaf6',
    '#ffccbc','#c8e6c9','#bbdefb','#d1c4e9','#ffecb3','#b2dfdb','#f8bbd0','#dcedc8'];
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = colors[pageNum] || colors[0];

  applyLangMode(langMode);
}

// ---- Dot indicator ----
function buildDots() {
  // Replace pageIndicator with dots: one dot per content page + cover icon
  pageIndicator.innerHTML = '';
  pageIndicator.style.cssText = 'display:flex;align-items:center;gap:4px;cursor:default';

  // Cover dot (book icon)
  const coverDot = document.createElement('span');
  coverDot.textContent = '📖';
  coverDot.style.cssText = 'font-size:.6rem;cursor:pointer;opacity:.5;transition:opacity .15s';
  coverDot.dataset.page = '0';
  coverDot.addEventListener('click', () => goToPage(0));
  pageIndicator.appendChild(coverDot);

  // Content dots
  for (let i = 1; i <= totalContentPages; i++) {
    const dot = document.createElement('span');
    dot.style.cssText = 'width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.3);transition:all .15s;cursor:pointer';
    dot.dataset.page = String(i);
    dot.addEventListener('click', () => goToPage(i));
    pageIndicator.appendChild(dot);
  }
}

function updateDots(activePageNum) {
  const dots = pageIndicator.querySelectorAll('span');
  dots.forEach(dot => {
    const p = parseInt(dot.dataset.page);
    if (p === 0) {
      // Cover icon
      dot.style.opacity = activePageNum === 0 ? '1' : '.4';
    } else {
      // Content dot
      const isActive = p === activePageNum;
      dot.style.background = isActive ? '#4ecdc4' : 'rgba(255,255,255,.3)';
      dot.style.width = isActive ? '8px' : '6px';
      dot.style.height = isActive ? '8px' : '6px';
    }
  });
}

// ---- Navigation ----
function goToPage(pageNum) {
  if (pageNum < 0 || pageNum > totalContentPages + 1) return; // +1 for end screen

  // Demo gate: content pages beyond DEMO_MAX
  if (!isAuthenticated && pageNum > DEMO_MAX) {
    stopAudio();
    autoplayOn = false;
    if (autoplayBtn) autoplayBtn.classList.remove('active');
    showDemoGate();
    return;
  }

  // Stop audio on manual nav (not autoplay)
  if (audioPlaying && !autoplayOn) stopAudio();

  pageContainer.style.opacity = '0';
  setTimeout(() => {
    renderPage(pageNum);
    updateURL(pageNum);
    pageContainer.style.opacity = '1';
  }, 150);
}

function nextPage() { goToPage(currentPage + 1); }
function prevPage() { goToPage(currentPage - 1); }

// ---- Touch / swipe ----
let touchStartX = 0;
let touchStartY = 0;

pageContainer.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: true });

pageContainer.addEventListener('touchend', (e) => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
    if (dx < 0) nextPage();
    else prevPage();
  }
});

// ---- Click edges ----
pageContainer.addEventListener('click', (e) => {
  if (e.target.closest('a, button')) return;
  const x = e.clientX;
  const w = window.innerWidth;
  if (x < w * 0.25) prevPage();
  else if (x > w * 0.75) nextPage();
});

// ---- Keyboard ----
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); nextPage(); }
  if (e.key === 'ArrowLeft') { e.preventDefault(); prevPage(); }
});

// ---- Browser back/forward ----
window.addEventListener('popstate', (e) => {
  const page = e.state?.page ?? getPageFromURL();
  renderPage(page);
});

// ---- Language toggle ----
function applyLangMode(mode) {
  document.body.classList.remove('lang-zh', 'lang-en');
  if (mode === 'zh') document.body.classList.add('lang-zh');
  if (mode === 'en') document.body.classList.add('lang-en');
  const btns = document.querySelectorAll('#langToggle button');
  btns.forEach(b => b.classList.toggle('active', b.dataset.lang === mode));
}

document.getElementById('langToggle').addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-lang]');
  if (!btn) return;
  langMode = btn.dataset.lang;
  localStorage.setItem('storybook-lang', langMode);
  applyLangMode(langMode);
});

// ---- Audio playback ----
function fmtTime(s) {
  if (!s || isNaN(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return m + ':' + (sec < 10 ? '0' : '') + sec;
}

function showAudioBar() { audioBar.classList.remove('hidden'); }
function hideAudioBar() {
  audioBar.classList.add('hidden');
  if (abSlider) abSlider.value = 0;
  if (abCurrent) abCurrent.textContent = '0:00';
  if (abTotal) abTotal.textContent = '0:00';
  if (abPlayPause) abPlayPause.innerHTML = '&#9654;';
}

function stopAudio() {
  audioPlaying = false;
  audioPaused = false;
  audioQueue = [];
  if (currentAudio) { currentAudio.pause(); currentAudio = null; }
  if (audioBtn) audioBtn.classList.remove('playing');
  hideAudioBar();
}

function playFile(url) {
  return new Promise((resolve, reject) => {
    const audio = new Audio(url);
    currentAudio = audio;
    audioPlaying = true;
    if (audioBtn) audioBtn.classList.add('playing');

    const updateUI = () => {
      if (!currentAudio || currentAudio !== audio) return;
      if (abCurrent) abCurrent.textContent = fmtTime(audio.currentTime);
      if (abTotal) abTotal.textContent = fmtTime(audio.duration);
      if (abSlider && audio.duration) abSlider.value = (audio.currentTime / audio.duration) * 100;
      if (abPlayPause) abPlayPause.innerHTML = audioPaused ? '&#9654;' : '&#9646;&#9646;';
      if (audioPlaying) requestAnimationFrame(updateUI);
    };

    audio.addEventListener('loadedmetadata', updateUI);
    audio.addEventListener('ended', () => resolve());
    audio.addEventListener('error', () => reject());
    audio.play().then(updateUI).catch(() => reject());
  });
}

async function playPageAudio(pageNum) {
  if (audioPlaying) return;

  // Only content pages have audio (pageNum >= 1)
  if (pageNum < 1 || pageNum > totalContentPages) return;

  // Audio file: page-{pageNum}-{lang}.mp3 — direct mapping, no offset
  const files = [];
  if (langMode === 'both' || langMode === 'zh') files.push(`/${SLUG}/audio/page-${pageNum}-zh.mp3`);
  if (langMode === 'both' || langMode === 'en') files.push(`/${SLUG}/audio/page-${pageNum}-en.mp3`);
  if (!files.length) return;

  showAudioBar();

  for (const file of files) {
    if (!audioPlaying && file !== files[0]) break;
    try {
      await playFile(file);
      if (files.length > 1) await new Promise(r => setTimeout(r, 500));
    } catch {
      break;
    }
  }

  audioPlaying = false;
  if (audioBtn) audioBtn.classList.remove('playing');
  hideAudioBar();
  currentAudio = null;

  // Autoplay: advance to next page
  if (autoplayOn && currentPage < totalContentPages) {
    setTimeout(() => {
      goToPage(currentPage + 1);
      setTimeout(() => {
        if (autoplayOn) playPageAudio(currentPage);
      }, 800);
    }, 1000);
  } else if (autoplayOn && currentPage === totalContentPages) {
    // Last story page done — show end screen
    setTimeout(() => goToPage(totalContentPages + 1), 1000);
    autoplayOn = false;
    if (autoplayBtn) autoplayBtn.classList.remove('active');
  } else if (autoplayOn) {
    autoplayOn = false;
    if (autoplayBtn) autoplayBtn.classList.remove('active');
  }
}

function playCurrentPageAudio() {
  if (audioPlaying) { stopAudio(); return; }
  playPageAudio(currentPage);
}

// Audio bar controls
abPlayPause.addEventListener('click', () => {
  if (!currentAudio) return;
  if (audioPaused) {
    currentAudio.play();
    audioPaused = false;
  } else {
    currentAudio.pause();
    audioPaused = true;
  }
});

abSlider.addEventListener('input', () => {
  if (currentAudio && currentAudio.duration) {
    currentAudio.currentTime = (abSlider.value / 100) * currentAudio.duration;
  }
});

document.getElementById('abClose').addEventListener('click', stopAudio);
audioBtn.addEventListener('click', playCurrentPageAudio);

// ---- Autoplay ----
function toggleAutoplay() {
  autoplayOn = !autoplayOn;
  if (autoplayBtn) autoplayBtn.classList.toggle('active', autoplayOn);
  if (autoplayOn && !audioPlaying) {
    playPageAudio(currentPage);
  }
}
autoplayBtn.addEventListener('click', toggleAutoplay);

// ---- Demo gate ----
function showDemoGate() {
  let gate = document.getElementById('demoGate');
  if (gate) { gate.style.display = 'flex'; return; }
  gate = document.createElement('div');
  gate.id = 'demoGate';
  gate.style.cssText = 'position:fixed;inset:0;z-index:200;background:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center;backdrop-filter:blur(6px)';
  gate.innerHTML = `<div style="background:#fff;border-radius:20px;padding:2.5rem;max-width:380px;text-align:center;margin:1rem">
    <div style="font-size:2.5rem;margin-bottom:.8rem">\u{1F512}</div>
    <h2 style="font-size:1.3rem;font-weight:800;margin-bottom:.5rem;color:#212529">試閱結束</h2>
    <p style="font-size:1rem;color:#6c757d;line-height:1.7;margin-bottom:1.5rem">免費試閱前 3 頁已結束。<br>訂閱即可閱讀完整繪本！</p>
    <a href="#" onclick="lineLoginFromGate()" style="display:inline-block;background:#06C755;color:#fff;padding:.7rem 2rem;border-radius:12px;font-size:1rem;font-weight:700;text-decoration:none;margin-bottom:.8rem">用 LINE 登入</a>
    <br><a href="#" onclick="document.getElementById('demoGate').style.display='none';goToPage(0);return false" style="font-size:.85rem;color:#adb5bd;text-decoration:underline">返回封面</a>
  </div>`;
  document.body.appendChild(gate);
}

function lineLoginFromGate() {
  const redirectUri = encodeURIComponent('https://markluce.ai/api/line-auth');
  const nextPage = currentPage > DEMO_MAX ? currentPage : DEMO_MAX + 1;
  const returnUrl = encodeURIComponent(window.location.origin + '/' + SLUG + '/' + nextPage);
  window.location.href = 'https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=' + LINE_CHANNEL_ID + '&redirect_uri=' + redirectUri + '&state=' + returnUrl + '&scope=profile%20openid';
}

// ---- Fullscreen ----
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen();
  }
}
document.getElementById('fullscreenBtn').addEventListener('click', toggleFullscreen);

// ---- Cover stats & Start Reading ----
function startReading() {
  goToPage(1); // page 1 = first content page — aligned with admin and audio
  setTimeout(() => playPageAudio(1), 500);
}

async function probeCoverStats(contentPages) {
  const el = document.getElementById('coverStats');
  if (!el) return;

  let zhCount = 0, enCount = 0;
  for (let i = 1; i <= contentPages; i++) {
    const [zhR, enR] = await Promise.all([
      fetch(`/${SLUG}/audio/page-${i}-zh.mp3`, { method: 'HEAD' }).catch(() => null),
      fetch(`/${SLUG}/audio/page-${i}-en.mp3`, { method: 'HEAD' }).catch(() => null)
    ]);
    if (zhR?.ok) zhCount++;
    if (enR?.ok) enCount++;
  }

  const zhParts = [`${contentPages} 頁`];
  const enParts = [`${contentPages} pages`];
  const bothParts = [`${contentPages} pages`];

  if (zhCount) { zhParts.push(`${zhCount} 篇音檔`); bothParts.push(`${zhCount} ZH audio`); }
  if (enCount) { enParts.push(`${enCount} audio tracks`); bothParts.push(`${enCount} EN audio`); }

  el.innerHTML = `<span class="i18n-zh">${zhParts.join(' · ')}</span><span class="i18n-en">${enParts.join(' · ')}</span><span class="i18n-both">${bothParts.join(' · ')}</span>`;
}

window.startReading = startReading;

// ---- Version display ----
const versionEl = document.createElement('span');
versionEl.style.cssText = 'font-size:.6rem;color:rgba(255,255,255,0.3);margin-left:.5rem';
versionEl.textContent = BOOK.version || '';
if (autoplayBtn) autoplayBtn.parentNode.insertBefore(versionEl, autoplayBtn.nextSibling);

// ---- Inject styles ----
const readerStyle = document.createElement('style');
readerStyle.textContent = `
.cover-stats{font-size:.85rem;color:var(--text-medium,#888);margin:.8rem 0 .5rem;letter-spacing:.02em}
.cover-start-btn{display:inline-block;padding:.7rem 2rem;background:#06C755;color:#fff;border:none;border-radius:12px;font-size:1.1rem;font-weight:700;cursor:pointer;font-family:inherit;margin:.5rem 0;transition:transform .1s,box-shadow .1s;box-shadow:0 4px 12px rgba(6,199,85,.3)}
.cover-start-btn:hover{transform:scale(1.03);box-shadow:0 6px 16px rgba(6,199,85,.4)}
.cover-start-btn:active{transform:scale(.97)}
.i18n-both{display:inline}
body:not(.lang-zh):not(.lang-en) .text-zh{display:block !important}
body:not(.lang-zh):not(.lang-en) .text-en{display:block !important}
.i18n-zh,.i18n-en{display:inline}
body.lang-zh .i18n-en,body.lang-zh .i18n-both{display:none}
body.lang-en .i18n-zh,body.lang-en .i18n-both{display:none}
body:not(.lang-zh):not(.lang-en) .i18n-zh,body:not(.lang-zh):not(.lang-en) .i18n-en{display:none}
`;
document.head.appendChild(readerStyle);

// ---- Init ----
applyLangMode(langMode);
buildDots();

// Check auth and enforce demo gate on direct URL access
if (!isAuthenticated && currentPage > DEMO_MAX) {
  currentPage = 0;
  history.replaceState({ page: 0 }, '', `/${SLUG}/`);
}

renderPage(currentPage);
pageContainer.style.opacity = '1';
history.replaceState({ page: currentPage }, '', currentPage === 0 ? `/${SLUG}/` : `/${SLUG}/${currentPage}`);

// Expose for inline handlers
window.goToPage = goToPage;
window.lineLoginFromGate = lineLoginFromGate;
