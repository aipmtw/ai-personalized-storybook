/* ============================================
   Book Reader — app.js
   平行世界 / Parallel Worlds
   Vertical scroll layout
   ============================================ */

// Story data
const pages = [
  {
    type: 'cover',
    bg: 'page-bg-1',
    illustBg: 'illust-bg-1',
    emoji: '\u{1F300}',
    zh: '',
    en: '',
    coverTitle: '平行世界',
    coverSubtitle: 'Parallel Worlds',
    coverCredits: '審閱：Mark ｜ 共同編輯：Luce (AI)',
    version: 'ver 1'
  },
  {
    type: 'story',
    bg: 'page-bg-2',
    illustBg: 'illust-bg-2',
    emoji: '\u{1FA9E}\u{2728}\u{1F469}',
    zh: '小萍在阿嬤的閣樓裡發現一面古老的鏡子。當她好奇地湊近去看時，鏡子裡映出的不是她自己——而是另一個版本的她，穿著不同的衣服，綁著不同的髮型，正微微笑著看向她。',
    en: 'Xiao Ping discovered an ancient mirror in her grandma\'s attic. When she leaned in curiously, the mirror didn\'t reflect her — instead, it showed another version of herself, wearing different clothes, with a different hairstyle, smiling gently back at her.'
  },
  {
    type: 'story',
    bg: 'page-bg-3',
    illustBg: 'illust-bg-3',
    emoji: '\u{1F3B9}\u{26BD}\u{1F914}',
    zh: '鏡中的小萍正在彈鋼琴，手指在琴鍵上飛舞。「在那個世界裡，我選了鋼琴，而不是足球。」小萍喃喃自語。她想起自己當初在音樂教室和足球場之間猶豫了好久。',
    en: 'Mirror-Xiao Ping was playing piano, her fingers dancing across the keys. "In that world, I chose piano instead of soccer," Xiao Ping murmured. She remembered how she\'d hesitated for so long between the music room and the soccer field.'
  },
  {
    type: 'story',
    bg: 'page-bg-4',
    illustBg: 'illust-bg-4',
    emoji: '\u{1F3D8}\uFE0F\u{1F333}\u{1F30A}',
    zh: '鏡子閃爍了一下，畫面變了。這次，小萍看見自己走在一個海邊小鎮上，和她從未見過的朋友們一起笑著。那是她從來沒有搬到台北的世界——如果爸爸當年沒有換工作的話。',
    en: 'The mirror flickered, and the scene changed. This time, Xiao Ping saw herself walking through a seaside town, laughing with friends she\'d never met. This was a world where she never moved to Taipei — where Dad never changed jobs.'
  },
  {
    type: 'story',
    bg: 'page-bg-5',
    illustBg: 'illust-bg-5',
    emoji: '\u{1F4DA}\u{1F60A}\u{1F910}',
    zh: '下一個世界讓她最驚訝。那個版本的小萍安靜而害羞，總是低著頭看書，不太敢跟別人說話。「這真的是我嗎？」小萍想著。她現在在班上可是出了名的愛講話。',
    en: 'The next world surprised her the most. That version of Xiao Ping was quiet and shy, always reading with her head down, barely daring to speak to anyone. "Is that really me?" she thought. In her own class, she was known for never stopping talking.'
  },
  {
    type: 'story',
    bg: 'page-bg-6',
    illustBg: 'illust-bg-6',
    emoji: '\u{1F9EE}\u{1F4DD}\u{1F3C6}',
    zh: '接著出現了一個數學天才版本的自己——站在講台上，手裡拿著數學競賽的獎盃，自信滿滿地微笑。小萍看著她，覺得又佩服又陌生。「原來如果我多花時間在數學上，可能也會這麼厲害。」',
    en: 'Then appeared a math genius version of herself — standing on a stage, holding a math competition trophy, smiling with pure confidence. Xiao Ping watched her with admiration and wonder. "So if I\'d spent more time on math, I could be that good too."'
  },
  {
    type: 'story',
    bg: 'page-bg-7',
    illustBg: 'illust-bg-7',
    emoji: '\u{1F500}\u{1F30C}\u{1F6E4}\uFE0F',
    zh: '鏡子裡的畫面越來越快，一個接一個的世界閃過：有的小萍養了三隻貓、有的住在日本、有的是游泳選手、有的喜歡畫畫⋯⋯每一個世界，都代表她曾經可以做出的不同選擇。',
    en: 'The scenes in the mirror flashed faster and faster — one world after another: a Xiao Ping with three cats, one living in Japan, one who was a swimmer, one who loved painting... each world represented a different choice she could have made.'
  },
  {
    type: 'story',
    bg: 'page-bg-8',
    illustBg: 'illust-bg-8',
    emoji: '\u{1F4A1}\u{2696}\uFE0F\u{2728}',
    zh: '小萍慢慢理解了：每一個決定都會創造一條新的路。不管走了哪條路，都不會比另一條更好或更差——它們只是不同而已。每個版本的她，都在自己的世界裡努力、成長、微笑。',
    en: 'Slowly, Xiao Ping understood: every decision creates a new path. No matter which path is taken, none is better or worse than another — they\'re simply different. Every version of her was working hard, growing, and smiling in her own world.'
  },
  {
    type: 'story',
    bg: 'page-bg-9',
    illustBg: 'illust-bg-9',
    emoji: '\u{1F3E0}\u{1F49C}\u{1F60C}',
    zh: '小萍微笑著把手放在鏡子上。鏡中所有的自己也同時舉起手，輕輕貼上來。她感到一陣溫暖，然後回到了自己的世界。看著窗外熟悉的台北街景，她第一次覺得如此感恩。',
    en: 'Xiao Ping smiled and placed her hand on the mirror. All the versions of herself raised their hands at the same time, gently pressing back. She felt a wave of warmth, and then returned to her own world. Looking at the familiar Taipei streets outside, she felt grateful for the first time.'
  },
  {
    type: 'end',
    bg: 'page-bg-10',
    illustBg: 'illust-bg-10',
    emoji: '\u{1F4D3}\u{270D}\uFE0F\u{1F300}',
    zh: '那天晚上，小萍翻開日記本，寫下了一句話：「我是我所有選擇的總和。」她合上日記，關了檯燈，帶著微笑入睡。在夢裡，無數個版本的她一起奔跑在星空下。',
    en: 'That night, Xiao Ping opened her journal and wrote a single sentence: "I am the sum of all my choices." She closed the journal, turned off the lamp, and fell asleep with a smile. In her dreams, countless versions of herself ran together under the starry sky.'
  }
];

let currentPage = 0;
let scrollingTo = false;

const wrapper = document.getElementById('pagesWrapper');
const container = document.getElementById('bookContainer');
const dotsContainer = document.getElementById('progressDots');

// Render pages
function renderPages() {
  wrapper.innerHTML = '';
  pages.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = `page ${p.bg}`;
    div.id = `page-${i}`;
    div.dataset.index = i;

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

  // Render progress dots
  dotsContainer.innerHTML = '';
  pages.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'progress-dot' + (i === 0 ? ' active' : '');
    dot.title = 'Page ' + (i + 1);
    dot.addEventListener('click', () => goToPage(i));
    dotsContainer.appendChild(dot);
  });
}

// Intersection Observer — track which page is visible
function setupScrollObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;
      const index = parseInt(el.dataset.index);

      // Add visible class for fade-in animation
      if (entry.isIntersecting) {
        el.classList.add('visible');
      }

      // Update current page based on which page is most visible
      if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
        if (!scrollingTo) {
          currentPage = index;
          updateDots();
          updateThemeColor();
        }
      }
    });
  }, {
    threshold: [0, 0.4, 0.6, 1],
    rootMargin: '-10% 0px -10% 0px'
  });

  document.querySelectorAll('.page').forEach(page => observer.observe(page));
}

// Auth check — demo users can only see pages 1-3 (index 0-2)
const isAuthenticated = (function() {
  const params = new URLSearchParams(location.search);
  if (params.get('ml_token')) return true;
  if (document.cookie.includes('ml_auth=')) return true;
  return false;
})();
const DEMO_MAX_PAGE = 2;

function showDemoGate() {
  let gate = document.getElementById('demoGate');
  if (gate) { gate.style.display = 'flex'; return; }
  gate = document.createElement('div');
  gate.id = 'demoGate';
  gate.style.cssText = 'position:fixed;inset:0;z-index:200;background:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center;backdrop-filter:blur(6px)';
  gate.innerHTML = `<div style="background:#fff;border-radius:20px;padding:2.5rem;max-width:380px;text-align:center;margin:1rem">
    <div style="font-size:2.5rem;margin-bottom:.8rem">\u{1F512}</div>
    <h2 style="font-size:1.3rem;font-weight:800;margin-bottom:.5rem;color:#212529">試閱結束</h2>
    <p style="font-size:1rem;color:#6c757d;line-height:1.7;margin-bottom:1.5rem">免費試閱前 3 頁已結束。<br>用 LINE 登入即可閱讀完整繪本！</p>
    <a href="#" onclick="lineLoginFromGate()" style="display:inline-block;background:#06C755;color:#fff;padding:.7rem 2rem;border-radius:12px;font-size:1rem;font-weight:700;text-decoration:none;margin-bottom:.8rem">用 LINE 登入繼續閱讀</a>
    <br><a href="#" onclick="document.getElementById('demoGate').style.display='none';goToPage(0);return false" style="font-size:.85rem;color:#adb5bd;text-decoration:underline">返回第一頁</a>
  </div>`;
  document.body.appendChild(gate);
}

function lineLoginFromGate() {
  const channelId = '2009738746';
  const redirectUri = encodeURIComponent('https://markluce.ai/api/line-auth');
  const returnUrl = encodeURIComponent(window.location.origin + window.location.pathname);
  window.location.href = 'https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id='+channelId+'&redirect_uri='+redirectUri+'&state='+returnUrl+'&scope=profile%20openid';
}

// Demo gate on scroll — block scrolling past demo pages
if (!isAuthenticated) {
  let gateShown = false;
  window.addEventListener('scroll', () => {
    if (gateShown) return;
    const gatePage = document.getElementById(`page-${DEMO_MAX_PAGE + 1}`);
    if (!gatePage) return;
    const rect = gatePage.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.6) {
      gateShown = true;
      stopAudio();
      if (autoplayOn) { autoplayOn = false; if(autoplayBtn) autoplayBtn.classList.remove('active'); }
      showDemoGate();
      goToPage(DEMO_MAX_PAGE);
    }
  }, { passive: true });
}

function goToPage(index) {
  if (index < 0 || index >= pages.length) return;
  if (!isAuthenticated && index > DEMO_MAX_PAGE) {
    stopAudio();
    if (autoplayOn) { autoplayOn = false; if(autoplayBtn) autoplayBtn.classList.remove('active'); }
    showDemoGate();
    return;
  }

  currentPage = index;
  scrollingTo = true;
  updateDots();
  updateThemeColor();

  const target = document.getElementById(`page-${index}`);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Reset scrollingTo flag after animation
    setTimeout(() => { scrollingTo = false; }, 800);
  }
}

function updateDots() {
  const dots = dotsContainer.querySelectorAll('.progress-dot');
  dots.forEach((d, i) => {
    d.classList.toggle('active', i === currentPage);
  });
  // Scroll active dot into view
  const activeDot = dotsContainer.querySelector('.progress-dot.active');
  if (activeDot) {
    activeDot.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
}

function updateThemeColor() {
  const colors = ['#1a1a3e','#0a0a1a','#283593','#0d1b2a','#1a237e','#0a0a1a','#311b92','#1a1a3e','#283593','#0a0a1a'];
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = colors[currentPage] || '#283593';
}

function nextPage() {
  if (currentPage < pages.length - 1) goToPage(currentPage + 1);
}

function prevPage() {
  if (currentPage > 0) goToPage(currentPage - 1);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === ' ' || e.key === 'ArrowRight') {
    e.preventDefault();
    nextPage();
  }
  if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
    e.preventDefault();
    prevPage();
  }
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
      audioPlaying = false;
      audioPaused = false;
      if (audioBtn) audioBtn.classList.remove('playing');
      hideAudioBar();
      if (currentAudio) { currentAudio = null; }
      if (!userStoppedAudio) onAudioFinished();
    }
  });

  currentAudio.addEventListener('error', () => {
    // No audio file — stop autoplay, don't advance
    if (audioQueue.length > 0 && audioPlaying) {
      const next = audioQueue.shift();
      playAudioFile(next.file, next.index);
    } else {
      audioPlaying = false;
      hideAudioBar();
      // No audio file — just stop, dont auto-advance
    }
  });

  currentAudio.play().then(() => {
    rafId = requestAnimationFrame(updateAudioUI);
  }).catch(() => { audioPlaying = false; hideAudioBar(); if (currentAudio) { currentAudio = null; } });
}

function toggleAudio() {
  if (audioPlaying) {
    userStoppedAudio = true;
    stopAudio();
    return;
  }
  playCurrentPage();
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

  let cumulative = 0;
  for (let i = 0; i < totalDurations.length; i++) {
    const d = totalDurations[i] || 0;
    if (cumulative + d >= target) {
      const posInFile = target - cumulative;
      if (i === currentFileIndex && currentAudio) {
        currentAudio.currentTime = posInFile;
      } else {
        if (currentAudio) { currentAudio.pause(); }
        const pageNum = currentPage + 1;
        const files = [];
        if (langMode === 'both' || langMode === 'zh') files.push(`/parallel-worlds/audio/page-${pageNum}-zh.mp3`);
        if (langMode === 'both' || langMode === 'en') files.push(`/parallel-worlds/audio/page-${pageNum}-en.mp3`);
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
  if (autoplayOn && currentPage < pages.length - 1) {
    setTimeout(() => {
      goToPage(currentPage + 1);
      setTimeout(() => {
        if (autoplayOn) playCurrentPage();
      }, 900);
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
  if (langMode === 'both' || langMode === 'zh') files.push(`/parallel-worlds/audio/page-${pageNum}-zh.mp3`);
  if (langMode === 'both' || langMode === 'en') files.push(`/parallel-worlds/audio/page-${pageNum}-en.mp3`);
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

function toggleAutoplay() {
  autoplayOn = !autoplayOn;
  if (autoplayBtn) autoplayBtn.classList.toggle('active', autoplayOn);
  if (autoplayOn && !audioPlaying) {
    playCurrentPage();
  }
}

// Fullscreen
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen();
  }
}



// Service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/parallel-worlds/sw.js', { updateViaCache: 'none' });
}

// Init
renderPages();
initLangToggle();
setupScrollObserver();

// Make first page visible immediately
const firstPage = document.getElementById('page-0');
if (firstPage) firstPage.classList.add('visible');

// Enable snap scrolling after initial render
document.body.classList.add('snap-scroll');

// Expose for toolbar
window.toggleFullscreen = toggleFullscreen;
window.toggleAudio = toggleAudio;
window.toggleAudioPlayPause = toggleAudioPlayPause;
window.seekAudio = seekAudio;
window.stopAudio = function() { userStoppedAudio = true; autoplayOn = false; if(autoplayBtn) autoplayBtn.classList.remove('active'); stopAudio(); };
window.toggleAutoplay = toggleAutoplay;
window.goToPage = goToPage;
window.lineLoginFromGate = lineLoginFromGate;
