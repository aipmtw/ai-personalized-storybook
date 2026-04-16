/* ============================================
   Universal Book Reader — URL per page
   One page at a time, clean and simple
   ============================================ */

// ---- Config ----
const SLUG = BOOK.slug;
const DEMO_MAX = 3; // pages 1-3 free
const LINE_CHANNEL_ID = '2009738746';

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
function getPageFromURL() {
  const parts = location.pathname.split('/').filter(Boolean);
  // /{slug}/{pageNum} or /{slug}/
  const last = parts[parts.length - 1];
  const num = parseInt(last);
  if (!isNaN(num) && num >= 1 && num <= (BOOK?.pages?.length || 99)) return num;
  return 1;
}

function updateURL(pageNum) {
  const url = pageNum === 1 ? `/${SLUG}/` : `/${SLUG}/${pageNum}`;
  history.pushState({ page: pageNum }, '', url);
}

// ---- Page rendering ----
function renderPage(pageNum) {
  const p = BOOK.pages[pageNum - 1];
  if (!p) return;

  currentPage = pageNum;
  const container = pageContainer;

  // Apply background + scroll to top
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
        <div class="cover-version">${BOOK.version}</div>
      </div>
    `;
  } else if (p.type === 'end') {
    container.innerHTML = `
      <div class="page-illustration ${p.illustBg}">
        <div class="emoji-scene">${p.emoji}</div>
      </div>
      <div class="page-text">
        <div class="text-zh">${p.zh}</div>
        <div class="text-en">${p.en}</div>
        <div class="end-divider">— 故事結束 —</div>
        <div class="end-actions">
          <a href="https://app.markluce.ai/" class="end-cta">
            <span class="end-cta-icon">📚</span>
            <span class="end-cta-text">回到書架<small>探索更多繪本</small></span>
          </a>
        </div>
        <div class="end-credits">
          故事由 Luce (AI) 共同編輯 · 審閱：Mark<br>
          <span class="end-brand">由 <a href="https://markluce.ai/" style="color:inherit;text-decoration:underline">MarkLuce.ai</a> 出品</span>
        </div>
      </div>
    `;
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

  // Update indicator
  pageIndicator.textContent = `${pageNum} / ${BOOK.pages.length}`;

  // Update theme color
  const colors = ['#ff6f61','#f5f5f5','#fff3e0','#e8f5e9','#fce4ec','#e3f2fd','#fff8e1','#e0f7fa','#f3e5f5','#fbe9e7','#ede7f6','#e8eaf6',
    '#ffccbc','#c8e6c9','#bbdefb','#d1c4e9','#ffecb3','#b2dfdb','#f8bbd0','#dcedc8'];
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = colors[pageNum - 1] || colors[0];

  // Apply language mode
  applyLangMode(langMode);
}

// ---- Navigation ----
function goToPage(pageNum) {
  if (pageNum < 1 || pageNum > BOOK.pages.length) return;

  // Demo gate
  if (!isAuthenticated && pageNum > DEMO_MAX) {
    stopAudio();
    autoplayOn = false;
    if (autoplayBtn) autoplayBtn.classList.remove('active');
    showDemoGate();
    return;
  }

  // Stop audio on manual nav (not autoplay)
  if (audioPlaying && !autoplayOn) stopAudio();

  // Simple fade transition
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
  if (e.target.closest('a, button')) return; // Don't interfere with links/buttons
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
  const page = e.state?.page || getPageFromURL();
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

  // Cover and end pages have no audio
  const page = BOOK.pages[pageNum - 1];
  if (!page || page.type === 'cover' || page.type === 'end') return;

  // Audio files numbered from 1 for first content page; cover is page 1, so audioNum = pageNum - 1
  const audioNum = pageNum - 1;
  const files = [];
  if (langMode === 'both' || langMode === 'zh') files.push(`/${SLUG}/audio/page-${audioNum}-zh.mp3`);
  if (langMode === 'both' || langMode === 'en') files.push(`/${SLUG}/audio/page-${audioNum}-en.mp3`);
  if (!files.length) return;

  showAudioBar();

  for (const file of files) {
    if (!audioPlaying && file !== files[0]) break; // stopped mid-sequence
    try {
      await playFile(file);
      // Brief pause between zh and en
      if (files.length > 1) await new Promise(r => setTimeout(r, 500));
    } catch {
      // Audio file not found — stop gracefully
      break;
    }
  }

  // Done playing this page
  audioPlaying = false;
  if (audioBtn) audioBtn.classList.remove('playing');
  hideAudioBar();
  currentAudio = null;

  // Autoplay: advance to next page
  if (autoplayOn && currentPage < BOOK.pages.length) {
    setTimeout(() => {
      goToPage(currentPage + 1);
      setTimeout(() => {
        if (autoplayOn) playPageAudio(currentPage);
      }, 800);
    }, 1000);
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
    <br><a href="#" onclick="document.getElementById('demoGate').style.display='none';goToPage(1);return false" style="font-size:.85rem;color:#adb5bd;text-decoration:underline">返回第一頁</a>
  </div>`;
  document.body.appendChild(gate);
}

function lineLoginFromGate() {
  const redirectUri = encodeURIComponent('https://markluce.ai/api/line-auth');
  // Return to the page they were trying to access (DEMO_MAX + 1)
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

// ---- Language mode CSS ----
// (defined in stylesheet)
// body.lang-zh .text-en, body.lang-zh .cover-subtitle { display: none }
// body.lang-en .text-zh, body.lang-en .cover-title { display: none }

// ---- Version display ----
const versionEl = document.createElement('span');
versionEl.style.cssText = 'font-size:.6rem;color:rgba(255,255,255,0.3);margin-left:.5rem';
versionEl.textContent = BOOK.version || '';
if (autoplayBtn) autoplayBtn.parentNode.insertBefore(versionEl, autoplayBtn.nextSibling);

// ---- Init ----
applyLangMode(langMode);

// Check auth and enforce demo gate on direct URL access
if (!isAuthenticated && currentPage > DEMO_MAX) {
  currentPage = 1;
  history.replaceState({ page: 1 }, '', `/${SLUG}/`);
}

renderPage(currentPage);
pageContainer.style.opacity = '1';
history.replaceState({ page: currentPage }, '', currentPage === 1 ? `/${SLUG}/` : `/${SLUG}/${currentPage}`);

// Expose for inline handlers
window.goToPage = goToPage;
window.lineLoginFromGate = lineLoginFromGate;
