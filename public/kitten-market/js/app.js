/* ============================================
   Book Reader — app.js
   小貓逛市場 / Kitten Goes to Market
   ============================================ */

// Story data
const pages = [
  {
    type: 'cover',
    bg: 'page-bg-1',
    illustBg: 'illust-bg-1',
    emoji: '\u{1F431}',
    zh: '',
    en: '',
    coverTitle: '\u5C0F\u8C93\u901B\u5E02\u5834',
    coverSubtitle: 'Kitten Goes to Market',
    coverCredits: '\u5BE9\u95B1\uFF1AMark \uFF5C \u5171\u540C\u7DE8\u8F2F\uFF1ALuce (AI)',
    version: 'ver 1'
  },
  {
    type: 'story',
    bg: 'page-bg-2',
    illustBg: 'illust-bg-2',
    emoji: '\u{1F431}\u{1F469}\u{1F3EA}',
    zh: '\u5C0F\u8C93\u54AA\u54AA\u4ECA\u5929\u8DDF\u8457\u5ABD\u5ABD\u4E00\u8D77\u53BB\u50B3\u7D71\u5E02\u5834\u3002\u300C\u5E02\u5834\u88E1\u6709\u4EC0\u9EBC\u5462\uFF1F\u300D\u54AA\u54AA\u597D\u671F\u5F85\u3002',
    en: 'Kitten Mimi goes to the traditional market with mama today. "What\u2019s in the market?" Mimi is so excited.'
  },
  {
    type: 'story',
    bg: 'page-bg-3',
    illustBg: 'illust-bg-3',
    emoji: '\u{1F34E}\u{1F34A}\u{1F347}\u{1F349}',
    zh: '\u5E02\u5834\u88E1\u64FA\u6EFF\u4E86\u4E94\u984F\u516D\u8272\u7684\u6C34\u679C\uFF0C\u7D05\u7684\u3001\u6A58\u7684\u3001\u7D2B\u7684\uFF0C\u770B\u5F97\u54AA\u54AA\u773C\u775B\u90FD\u767C\u4EAE\u4E86\uFF01',
    en: 'The market is full of colorful fruits \u2014 red, orange, purple. Mimi\u2019s eyes light up with wonder!'
  },
  {
    type: 'story',
    bg: 'page-bg-4',
    illustBg: 'illust-bg-4',
    emoji: '\u{1F41F}\u{1F431}\u{1F44B}',
    zh: '\u9B5A\u651C\u7684\u963F\u59E8\u7B11\u7687\u7687\u5730\u548C\u54AA\u54AA\u6253\u62DB\u547C\uFF1A\u300C\u5C0F\u8C93\u54AA\u554A\uFF0C\u4F60\u53C8\u4F86\u5566\uFF01\u300D\u54AA\u54AA\u958B\u5FC3\u5730\u63EE\u63EE\u722A\u722A\u3002',
    en: 'The friendly fish seller auntie waves at Mimi: "Little kitten, you\u2019re here again!" Mimi happily waves her paws.'
  },
  {
    type: 'story',
    bg: 'page-bg-5',
    illustBg: 'illust-bg-5',
    emoji: '\u{1F431}\u2728\u{1F9C6}',
    zh: '\u8C46\u8150\u651C\u8B93\u54AA\u54AA\u8A66\u5403\u4E00\u5C0F\u584A\u65B0\u9BAE\u7684\u8C46\u8150\uFF0C\u8EDF\u8EDF\u5AE9\u5AE9\u7684\uFF0C\u54AA\u54AA\u8AAA\uFF1A\u300C\u597D\u597D\u5403\u5594\uFF01\u300D',
    en: 'The tofu seller lets Mimi try a piece of fresh tofu. It\u2019s so soft and smooth! "Yummy!" says Mimi.'
  },
  {
    type: 'story',
    bg: 'page-bg-6',
    illustBg: 'illust-bg-6',
    emoji: '\u{1F966}\u{1F955}\u{1F431}',
    zh: '\u54AA\u54AA\u5E6B\u5ABD\u5ABD\u6311\u9078\u9752\u83DC\uFF0C\u4ED4\u7D30\u5730\u770B\u6BCF\u4E00\u68B5\u3002\u300C\u9019\u68B5\u6700\u7DA0\u6700\u6F02\u4EAE\uFF01\u300D\u54AA\u54AA\u5F97\u610F\u5730\u8AAA\u3002',
    en: 'Mimi helps mama pick vegetables, carefully looking at each one. "This one is the greenest and prettiest!" Mimi says proudly.'
  },
  {
    type: 'story',
    bg: 'page-bg-7',
    illustBg: 'illust-bg-7',
    emoji: '\u{1F431}\u{1F4AA}\u{1F6CD}\uFE0F',
    zh: '\u5ABD\u5ABD\u8B93\u54AA\u54AA\u63D0\u4E00\u500B\u5C0F\u888B\u5B50\uFF0C\u54AA\u54AA\u89BA\u5F97\u81EA\u5DF1\u597D\u5389\u5BB3\uFF0C\u50CF\u500B\u5C0F\u5927\u4EBA\u4E00\u6A23\uFF01',
    en: 'Mama lets Mimi carry a small bag. Mimi feels so grown up and important, just like a little adult!'
  },
  {
    type: 'story',
    bg: 'page-bg-8',
    illustBg: 'illust-bg-8',
    emoji: '\u{1F431}\u{1F60B}\u{1F35E}',
    zh: '\u56DE\u5BB6\u524D\uFF0C\u5ABD\u5ABD\u8CB7\u4E86\u4E00\u500B\u7D05\u8C46\u9EB5\u5305\u7D66\u54AA\u54AA\u7576\u734E\u52F5\u3002\u71B1\u9A30\u9A30\u7684\uFF0C\u597D\u9999\u554A\uFF01',
    en: 'Before heading home, mama buys Mimi a red bean bun as a treat. It\u2019s warm and smells so good!'
  },
  {
    type: 'story',
    bg: 'page-bg-9',
    illustBg: 'illust-bg-9',
    emoji: '\u{1F3D8}\uFE0F\u{1F431}\u{1F469}',
    zh: '\u54AA\u54AA\u548C\u5ABD\u5ABD\u8D70\u904E\u8001\u8857\u56DE\u5BB6\uFF0C\u4E00\u8DEF\u4E0A\u770B\u5230\u9130\u5C45\u7684\u82B1\u3001\u806F\u5929\u7684\u963F\u516C\u3001\u548C\u66EC\u66EC\u7684\u8001\u623F\u5B50\u3002',
    en: 'Mimi and mama walk home through the old streets, passing neighbors\u2019 flowers, chatting grandpas, and warm old houses.'
  },
  {
    type: 'story',
    bg: 'page-bg-10',
    illustBg: 'illust-bg-10',
    emoji: '\u{1F431}\u{1F469}\u{1F373}',
    zh: '\u56DE\u5230\u5BB6\uFF0C\u54AA\u54AA\u548C\u5ABD\u5ABD\u4E00\u8D77\u7528\u5E02\u5834\u8CB7\u7684\u98DF\u6750\u505A\u98EF\u3002\u5EDA\u623F\u88E1\u5145\u6EFF\u4E86\u9999\u5473\u548C\u7B11\u8072\u3002',
    en: 'Back home, Mimi and mama cook together with the ingredients from the market. The kitchen is filled with delicious smells and laughter.'
  },
  {
    type: 'end',
    bg: 'page-bg-1',
    illustBg: 'illust-bg-1',
    emoji: '\u{1F431}\u2764\uFE0F\u{1F3EA}',
    zh: '\u54AA\u54AA\u5B78\u5230\u4E86\uFF0C\u5E02\u5834\u4E0D\u53EA\u662F\u8CB7\u6771\u897F\u7684\u5730\u65B9\uFF0C\u66F4\u662F\u5145\u6EFF\u6545\u4E8B\u548C\u6EAB\u6696\u7684\u5730\u65B9\u3002',
    en: 'Mimi learned that the market isn\u2019t just a place to buy things \u2014 it\u2019s a place full of stories and warmth.'
  }
];

let currentPage = 0;
let startX = 0;
let startY = 0;
let deltaX = 0;
let isSwiping = false;
let isTouch = false;

const wrapper = document.getElementById('pagesWrapper');
const container = document.getElementById('bookContainer');
const dotsContainer = document.getElementById('progressDots');
const hintLeft = document.getElementById('hintLeft');
const hintRight = document.getElementById('hintRight');

// Render pages
function renderPages() {
  wrapper.innerHTML = '';
  pages.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = `page ${p.bg}`;

    if (p.type === 'cover') {
      div.classList.add('page-cover');
      div.innerHTML = `
        <div class="page-illustration ${p.illustBg}">
          <div class="emoji-scene">${p.emoji}</div>
        </div>
        <div class="page-text">
          <div class="cover-title">${p.coverTitle}</div>
          <div class="cover-subtitle">${p.coverSubtitle}</div>
          <div class="cover-credits">${p.coverCredits}</div>
          ${p.version ? '<div class="cover-version">' + p.version + '</div>' : ''}
        </div>
      `;
    } else if (p.type === 'end') {
      div.classList.add('page-end');
      div.innerHTML = `
        <div class="page-illustration ${p.illustBg}">
          <div class="emoji-scene">${p.emoji}</div>
        </div>
        <div class="page-text">
          <div class="text-zh">${p.zh}</div>
          <div class="text-en">${p.en}</div>
          <div class="end-divider">\u2014 \u6545\u4E8B\u7D50\u675F \u2014</div>
          <div class="end-actions">
            <a href="https://app.markluce.ai/" class="end-cta">
              <span class="end-cta-icon">\u{1F4DA}</span>
              <span class="end-cta-text">\u56DE\u5230\u66F8\u67B6<small>\u63A2\u7D22\u66F4\u591A\u7E6A\u672C</small></span>
            </a>
          </div>
          <div class="end-credits">
            \u6545\u4E8B\u7531 Luce (AI) \u5171\u540C\u7DE8\u8F2F \u00B7 \u5BE9\u95B1\uFF1AMark<br>
            <span class="end-brand">\u7531 <a href="https://markluce.ai/" style="color:inherit;text-decoration:underline">MarkLuce.ai</a> \u51FA\u54C1</span>
          </div>
        </div>
      `;
    } else {
      div.innerHTML = `
        <div class="page-illustration ${p.illustBg}">
          <div class="emoji-scene">${p.emoji}</div>
        </div>
        <div class="page-text">
          <div class="text-zh">${p.zh}</div>
          <div class="text-en">${p.en}</div>
        </div>
      `;
    }

    wrapper.appendChild(div);
  });

  // Render progress dots (clickable)
  dotsContainer.innerHTML = '';
  pages.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'progress-dot' + (i === 0 ? ' active' : '');
    dot.title = 'Page ' + (i + 1);
    dot.addEventListener('click', () => goToPage(i));
    dotsContainer.appendChild(dot);
  });
}

// Page turn sound using Web Audio API
let audioCtx = null;
function playPageTurnSound() {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const duration = 0.15;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + duration);
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch {}
}

// Auth check — demo users can only see pages 1-3 (index 0-2)
const isAuthenticated = (function() {
  const params = new URLSearchParams(location.search);
  if (params.get('ml_token')) return true;
  if (document.cookie.includes('ml_auth=')) return true;
  return false;
})();
const DEMO_MAX_PAGE = 2; // index 2 = page 3

function showDemoGate() {
  let gate = document.getElementById('demoGate');
  if (gate) { gate.style.display = 'flex'; return; }
  gate = document.createElement('div');
  gate.id = 'demoGate';
  gate.style.cssText = 'position:fixed;inset:0;z-index:200;background:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center;backdrop-filter:blur(6px)';
  gate.innerHTML = `<div style="background:#fff;border-radius:20px;padding:2.5rem;max-width:380px;text-align:center;margin:1rem">
    <div style="font-size:2.5rem;margin-bottom:.8rem">\u{1F512}</div>
    <h2 style="font-size:1.3rem;font-weight:800;margin-bottom:.5rem;color:#212529">\u8A66\u95B1\u7D50\u675F</h2>
    <p style="font-size:1rem;color:#6c757d;line-height:1.7;margin-bottom:1.5rem">\u514D\u8CBB\u8A66\u95B1\u524D 3 \u9801\u5DF2\u7D50\u675F\u3002<br>\u7528 LINE \u767B\u5165\u5373\u53EF\u95B1\u8B80\u5B8C\u6574\u7E6A\u672C\uFF01</p>
    <a href="#" onclick="lineLoginFromGate()" style="display:inline-block;background:#06C755;color:#fff;padding:.7rem 2rem;border-radius:12px;font-size:1rem;font-weight:700;text-decoration:none;margin-bottom:.8rem">\u7528 LINE \u767B\u5165\u7E7C\u7E8C\u95B1\u8B80</a>
    <br><a href="#" onclick="document.getElementById('demoGate').style.display='none';goToPage(0);return false" style="font-size:.85rem;color:#adb5bd;text-decoration:underline">\u8FD4\u56DE\u7B2C\u4E00\u9801</a>
  </div>`;
  document.body.appendChild(gate);
}

function lineLoginFromGate() {
  const channelId = '2009738746';
  const redirectUri = encodeURIComponent('https://markluce.ai/api/line-auth');
  const returnUrl = encodeURIComponent(window.location.origin + window.location.pathname);
  window.location.href = 'https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id='+channelId+'&redirect_uri='+redirectUri+'&state='+returnUrl+'&scope=profile%20openid';
}

function goToPage(index) {
  if (index < 0 || index >= pages.length) return;
  // Demo gate: block beyond page 3
  if (!isAuthenticated && index > DEMO_MAX_PAGE) {
    stopAudio();
    if (autoplayOn) { autoplayOn = false; if(autoplayBtn) autoplayBtn.classList.remove('active'); }
    showDemoGate();
    return;
  }
  const direction = index > currentPage ? 'right' : 'left';
  if (index !== currentPage) {
    playPageTurnSound();
    wrapper.classList.add('turning-' + direction);
    setTimeout(() => wrapper.classList.remove('turning-' + direction), 500);
  }
  currentPage = index;
  wrapper.style.transform = `translateX(-${currentPage * 100}%)`;
  updateUI();
}

function updateUI() {
  // Update dots
  const dots = dotsContainer.querySelectorAll('.progress-dot');
  dots.forEach((d, i) => {
    d.classList.toggle('active', i === currentPage);
  });

  // Update hints
  hintLeft.style.opacity = currentPage > 0 ? '1' : '0';
  hintRight.style.opacity = currentPage < pages.length - 1 ? '1' : '0';

  // Update theme color per page
  const colors = ['#ffa726','#ff7043','#42a5f5','#ef5350','#66bb6a','#ffb300','#ab47bc','#8d6e63','#ff7043','#ffa726','#ffa726'];
  document.querySelector('meta[name="theme-color"]').content = colors[currentPage] || '#ffa726';
}

function nextPage() {
  if (currentPage < pages.length - 1) goToPage(currentPage + 1);
}

function prevPage() {
  if (currentPage > 0) goToPage(currentPage - 1);
}

// Touch handling
container.addEventListener('touchstart', (e) => {
  isTouch = true;
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
  deltaX = 0;
  isSwiping = false;
}, { passive: true });

container.addEventListener('touchmove', (e) => {
  const dx = e.touches[0].clientX - startX;
  const dy = e.touches[0].clientY - startY;

  // Only swipe horizontally
  if (!isSwiping && Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
    isSwiping = true;
    wrapper.classList.add('swiping');
  }

  if (isSwiping) {
    deltaX = dx;
    const offset = -currentPage * 100 + (deltaX / window.innerWidth) * 100;
    wrapper.style.transform = `translateX(${offset}%)`;
  }
}, { passive: true });

container.addEventListener('touchend', () => {
  wrapper.classList.remove('swiping');
  if (isSwiping) {
    if (deltaX < -50) nextPage();
    else if (deltaX > 50) prevPage();
    else goToPage(currentPage);
  }
  isSwiping = false;
});

// Mouse / click handling (tap edges)
container.addEventListener('click', (e) => {
  if (isTouch) return; // Skip on touch devices
  const x = e.clientX;
  const w = window.innerWidth;
  if (x < w * 0.3) prevPage();
  else if (x > w * 0.7) nextPage();
});

// Keyboard
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === ' ') nextPage();
  if (e.key === 'ArrowLeft') prevPage();
});

// ============================================
// Language toggle
// ============================================
let langMode = localStorage.getItem('storybook-lang') || 'both';

function initLangToggle() {
  const toggle = document.getElementById('langToggle');
  if (!toggle) return;

  applyLangMode(langMode);

  toggle.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-lang]');
    if (!btn) return;
    langMode = btn.dataset.lang;
    localStorage.setItem('storybook-lang', langMode);
    applyLangMode(langMode);
  });
}

function applyLangMode(mode) {
  document.body.classList.remove('lang-zh', 'lang-en');
  if (mode === 'zh') document.body.classList.add('lang-zh');
  if (mode === 'en') document.body.classList.add('lang-en');

  // Update active button
  const btns = document.querySelectorAll('#langToggle button');
  btns.forEach(b => b.classList.toggle('active', b.dataset.lang === mode));
}

// ============================================
// Audio playback with player bar
// ============================================
let audioPlaying = false;
let audioPaused = false;
let currentAudio = null;
let audioQueue = [];
let totalDurations = [];
let currentFileIndex = 0;
const audioBtn = document.getElementById('audioBtn');
const audioBar = document.getElementById('audioBar');
const abPlayPause = document.getElementById('abPlayPause');
const abSlider = document.getElementById('abSlider');
const abCurrent = document.getElementById('abCurrent');
const abTotal = document.getElementById('abTotal');
let sliderDragging = false;
let rafId = null;

function fmtTime(s) {
  if (!s || isNaN(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return m + ':' + (sec < 10 ? '0' : '') + sec;
}

function showAudioBar() {
  if (audioBar) audioBar.classList.remove('hidden');
}

function hideAudioBar() {
  if (audioBar) audioBar.classList.add('hidden');
  if (abSlider) { abSlider.value = 0; }
  if (abCurrent) abCurrent.textContent = '0:00';
  if (abTotal) abTotal.textContent = '0:00';
  if (abPlayPause) abPlayPause.innerHTML = '&#9654;';
  cancelAnimationFrame(rafId);
}

function updateAudioUI() {
  if (!currentAudio || sliderDragging) return;

  // Calculate cumulative position across all files
  let elapsed = 0;
  for (let i = 0; i < currentFileIndex; i++) {
    elapsed += totalDurations[i] || 0;
  }
  elapsed += currentAudio.currentTime || 0;

  let total = 0;
  for (const d of totalDurations) total += d || 0;

  if (abCurrent) abCurrent.textContent = fmtTime(elapsed);
  if (abTotal) abTotal.textContent = fmtTime(total);
  if (abSlider && total > 0) abSlider.value = (elapsed / total) * 100;
  if (abPlayPause) abPlayPause.innerHTML = audioPaused ? '&#9654;' : '&#9646;&#9646;';

  if (audioPlaying) rafId = requestAnimationFrame(updateAudioUI);
}

function stopAudio() {
  audioPlaying = false;
  audioPaused = false;
  audioQueue = [];
  totalDurations = [];
  currentFileIndex = 0;
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
  if (audioBtn) audioBtn.classList.remove('playing');
  hideAudioBar();
}

function playAudioFile(file, index) {
  currentFileIndex = index;
  currentAudio = new Audio(file);
  audioPlaying = true;
  audioPaused = false;
  if (audioBtn) audioBtn.classList.add('playing');
  if (abPlayPause) abPlayPause.innerHTML = '&#9646;&#9646;';

  currentAudio.addEventListener('loadedmetadata', () => {
    totalDurations[index] = currentAudio.duration;
    updateAudioUI();
  });

  currentAudio.addEventListener('ended', () => {
    if (audioQueue.length > 0) {
      const next = audioQueue.shift();
      setTimeout(() => {
        if (audioPlaying) playAudioFile(next.file, next.index);
      }, 500);
    } else {
      stopAudio();
    }
  });

  currentAudio.addEventListener('error', () => {
    if (audioQueue.length > 0 && audioPlaying) {
      const next = audioQueue.shift();
      playAudioFile(next.file, next.index);
    } else {
      stopAudio();
    }
  });

  currentAudio.play().then(() => {
    rafId = requestAnimationFrame(updateAudioUI);
  }).catch(() => stopAudio());
}

function toggleAudio() {
  if (audioPlaying) {
    stopAudio();
    return;
  }

  const pageNum = currentPage + 1;
  const files = [];

  if (langMode === 'both' || langMode === 'zh') {
    files.push(`/kitten-market/audio/page-${pageNum}-zh.mp3`);
  }
  if (langMode === 'both' || langMode === 'en') {
    files.push(`/kitten-market/audio/page-${pageNum}-en.mp3`);
  }

  if (files.length === 0) return;

  // Preload durations
  totalDurations = new Array(files.length).fill(0);
  files.forEach((f, i) => {
    const a = new Audio(f);
    a.addEventListener('loadedmetadata', () => { totalDurations[i] = a.duration; });
  });

  // Build queue
  audioQueue = files.slice(1).map((f, i) => ({ file: f, index: i + 1 }));
  showAudioBar();
  playAudioFile(files[0], 0);
}

function toggleAudioPlayPause() {
  if (!currentAudio) return;
  if (audioPaused) {
    currentAudio.play();
    audioPaused = false;
    audioPlaying = true;
    if (audioBtn) audioBtn.classList.add('playing');
    rafId = requestAnimationFrame(updateAudioUI);
  } else {
    currentAudio.pause();
    audioPaused = true;
    if (audioBtn) audioBtn.classList.remove('playing');
    if (abPlayPause) abPlayPause.innerHTML = '&#9654;';
    cancelAnimationFrame(rafId);
  }
}

function seekAudio(val) {
  let total = 0;
  for (const d of totalDurations) total += d || 0;
  if (total === 0) return;

  const target = (val / 100) * total;

  // Find which file and position
  let cumulative = 0;
  for (let i = 0; i < totalDurations.length; i++) {
    const d = totalDurations[i] || 0;
    if (cumulative + d >= target) {
      const posInFile = target - cumulative;
      if (i === currentFileIndex && currentAudio) {
        currentAudio.currentTime = posInFile;
      } else {
        // Need to switch files
        if (currentAudio) { currentAudio.pause(); }
        const pageNum = currentPage + 1;
        const files = [];
        if (langMode === 'both' || langMode === 'zh') files.push(`/kitten-market/audio/page-${pageNum}-zh.mp3`);
        if (langMode === 'both' || langMode === 'en') files.push(`/kitten-market/audio/page-${pageNum}-en.mp3`);
        audioQueue = files.slice(i + 1).map((f, idx) => ({ file: f, index: i + 1 + idx }));
        currentAudio = new Audio(files[i]);
        currentFileIndex = i;
        currentAudio.addEventListener('loadedmetadata', () => {
          totalDurations[i] = currentAudio.duration;
          currentAudio.currentTime = posInFile;
          if (!audioPaused) currentAudio.play();
        });
        currentAudio.addEventListener('ended', () => {
          if (audioQueue.length > 0) {
            const next = audioQueue.shift();
            setTimeout(() => { if (audioPlaying) playAudioFile(next.file, next.index); }, 500);
          } else { stopAudio(); }
        });
        currentAudio.load();
      }
      break;
    }
    cumulative += d;
  }
}

// Slider drag handling
if (abSlider) {
  abSlider.addEventListener('mousedown', () => { sliderDragging = true; });
  abSlider.addEventListener('touchstart', () => { sliderDragging = true; }, { passive: true });
  abSlider.addEventListener('mouseup', () => { sliderDragging = false; });
  abSlider.addEventListener('touchend', () => { sliderDragging = false; });
}

// ============================================
// Autoplay mode
// ============================================
let autoplayOn = false;
let userStoppedAudio = false;
const autoplayBtn = document.getElementById('autoplayBtn');

function onAudioFinished() {
  // Called when audio ends naturally (not user-stopped)
  if (autoplayOn && currentPage < pages.length - 1) {
    setTimeout(() => {
      goToPage(currentPage + 1);
      setTimeout(() => {
        if (autoplayOn) playCurrentPage();
      }, 600);
    }, 1000);
  } else if (autoplayOn && currentPage >= pages.length - 1) {
    autoplayOn = false;
    if (autoplayBtn) autoplayBtn.classList.remove('active');
  }
}

function playCurrentPage() {
  if (audioPlaying) return;
  const pageNum = currentPage + 1;
  const files = [];
  if (langMode === 'both' || langMode === 'zh') files.push(`/kitten-market/audio/page-${pageNum}-zh.mp3`);
  if (langMode === 'both' || langMode === 'en') files.push(`/kitten-market/audio/page-${pageNum}-en.mp3`);
  if (files.length === 0) return;

  totalDurations = new Array(files.length).fill(0);
  files.forEach((f, i) => {
    const a = new Audio(f);
    a.addEventListener('loadedmetadata', () => { totalDurations[i] = a.duration; });
  });

  audioQueue = files.slice(1).map((f, i) => ({ file: f, index: i + 1 }));
  showAudioBar();
  userStoppedAudio = false;
  playAudioFile(files[0], 0);
}

// Patch the ended handler in playAudioFile to call onAudioFinished
const _origPlayAudioFile = playAudioFile;
playAudioFile = function(file, index) {
  currentFileIndex = index;
  currentAudio = new Audio(file);
  audioPlaying = true;
  audioPaused = false;
  if (audioBtn) audioBtn.classList.add('playing');
  if (abPlayPause) abPlayPause.innerHTML = '&#9646;&#9646;';

  currentAudio.addEventListener('loadedmetadata', () => {
    totalDurations[index] = currentAudio.duration;
    updateAudioUI();
  });

  currentAudio.addEventListener('ended', () => {
    if (audioQueue.length > 0) {
      const next = audioQueue.shift();
      setTimeout(() => {
        if (audioPlaying) playAudioFile(next.file, next.index);
      }, 500);
    } else {
      // All files for this page done
      audioPlaying = false;
      audioPaused = false;
      if (audioBtn) audioBtn.classList.remove('playing');
      hideAudioBar();
      if (currentAudio) { currentAudio = null; }
      // Trigger autoplay chain
      if (!userStoppedAudio) onAudioFinished();
    }
  });

  currentAudio.addEventListener('error', () => {
    if (audioQueue.length > 0 && audioPlaying) {
      const next = audioQueue.shift();
      playAudioFile(next.file, next.index);
    } else {
      audioPlaying = false;
      hideAudioBar();
      if (!userStoppedAudio) onAudioFinished();
    }
  });

  currentAudio.play().then(() => {
    rafId = requestAnimationFrame(updateAudioUI);
  }).catch(() => { audioPlaying = false; hideAudioBar(); });
};

function toggleAutoplay() {
  autoplayOn = !autoplayOn;
  if (autoplayBtn) autoplayBtn.classList.toggle('active', autoplayOn);
  if (autoplayOn && !audioPlaying) {
    playCurrentPage();
  }
  if (!autoplayOn) {
    // Keep current audio playing, just stop auto-advance
  }
}

// Stop audio on page turn (manual only)
const origGoToPage = goToPage;
goToPage = function(index) {
  if (audioPlaying && !autoplayOn) {
    userStoppedAudio = true;
    stopAudio();
  }
  origGoToPage(index);
};

// Fullscreen
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen();
  }
}

// PWA install
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('installBanner').classList.remove('hidden');
});

function installApp() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      deferredPrompt = null;
      document.getElementById('installBanner').classList.add('hidden');
    });
  }
}

function dismissInstall() {
  document.getElementById('installBanner').classList.add('hidden');
}

// Service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/kitten-market/sw.js', { updateViaCache: 'none' });
}

// Init
renderPages();
initLangToggle();
goToPage(0);

// Expose for toolbar
window.toggleFullscreen = toggleFullscreen;
window.toggleAudio = function() {
  if (audioPlaying) { userStoppedAudio = true; stopAudio(); return; }
  playCurrentPage();
};
window.toggleAudioPlayPause = toggleAudioPlayPause;
window.seekAudio = seekAudio;
window.stopAudio = function() { userStoppedAudio = true; autoplayOn = false; if(autoplayBtn) autoplayBtn.classList.remove('active'); stopAudio(); };
window.toggleAutoplay = toggleAutoplay;
window.installApp = installApp;
window.dismissInstall = dismissInstall;
