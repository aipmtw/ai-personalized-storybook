/* ============================================
   Book Reader — app.js
   Max 的太空探險
   Vertical scroll layout
   ============================================ */

// Story data
const pages = [
  {
    type: 'cover',
    bg: 'page-bg-1',
    illustBg: 'illust-bg-1',
    emoji: '🚀',
    zh: '',
    en: '',
    coverTitle: 'Max 的太空探險',
    coverSubtitle: "Max's Space Adventure",
    coverCredits: '審閱：Mark ｜ 共同編輯：Luce (AI)',
    version: 'ver 1'
  },
  {
    type: 'story',
    bg: 'page-bg-2',
    illustBg: 'illust-bg-2',
    emoji: '🔭🌌⭐',
    zh: 'Max 是一個十二歲的男孩，他最大的夢想就是探索宇宙。每天晚上，他都會用望遠鏡觀察星空，想像著遙遠星球上的奇妙世界。',
    en: 'Max is a twelve-year-old boy whose biggest dream is exploring the universe. Every night, he gazes at the stars through his telescope, imagining the wondrous worlds on distant planets.'
  },
  {
    type: 'story',
    bg: 'page-bg-3',
    illustBg: 'illust-bg-3',
    emoji: '💻🔵✨',
    zh: '有一天，Max 的電腦螢幕突然亮起一道藍光。一個發著光的球體飛了出來，在空中旋轉。「嗨，Max！我是 Nova，你的 AI 太空探險夥伴。準備好出發了嗎？」',
    en: 'One day, a blue light burst from Max\'s computer screen. A glowing orb flew out, spinning in the air. "Hi, Max! I\'m Nova, your AI space exploration partner. Ready to launch?"'
  },
  {
    type: 'story',
    bg: 'page-bg-4',
    illustBg: 'illust-bg-4',
    emoji: '🛸🌟🚪',
    zh: 'Nova 投射出一艘銀色的太空船全息影像。「這是『星際漫遊者號』，我為你設計的。」Max 簡直不敢相信自己的眼睛——太空船的艙門正在打開，邀請他走進去。',
    en: 'Nova projected a hologram of a silver spaceship. "This is the \'Star Wanderer,\' designed just for you." Max couldn\'t believe his eyes — the ship\'s door was opening, inviting him aboard.'
  },
  {
    type: 'story',
    bg: 'page-bg-5',
    illustBg: 'illust-bg-5',
    emoji: '🔴🏜️🌅',
    zh: '他們的第一站是火星。Nova 說：「火星上有我們還不了解的古老遺跡。」Max 穿上太空衣，踏上了這片紅色的土地。遠處，巨大的峽谷在夕陽下閃耀著金色的光芒。',
    en: 'Their first stop was Mars. Nova said, "There are ancient ruins on Mars that we don\'t fully understand yet." Max put on his spacesuit and stepped onto the red soil. In the distance, enormous canyons gleamed golden under the sunset.'
  },
  {
    type: 'story',
    bg: 'page-bg-6',
    illustBg: 'illust-bg-6',
    emoji: '🌊🐠💎',
    zh: '接下來，他們飛向了木星的衛星——歐羅巴。Nova 在冰層下發現了一片地下海洋，裡面有發光的生物在游動。「這是人類從未見過的生命形態！」Max 興奮地記錄下每一個細節。',
    en: 'Next, they flew to Jupiter\'s moon Europa. Nova detected an underground ocean beneath the ice, filled with bioluminescent creatures swimming gracefully. "These are life forms humans have never seen!" Max excitedly documented every detail.'
  },
  {
    type: 'story',
    bg: 'page-bg-7',
    illustBg: 'illust-bg-7',
    emoji: '☄️💨🛡️',
    zh: '穿越小行星帶時，一顆隕石朝他們飛來！Nova 迅速計算軌道，引導太空船閃避。「別擔心，Max。我的反應速度是人類的一萬倍。」Max 笑了：「有你在，我什麼都不怕。」',
    en: 'While crossing the asteroid belt, a meteorite hurtled toward them! Nova instantly calculated the trajectory and guided the ship to dodge. "Don\'t worry, Max. My reaction time is ten thousand times faster than a human\'s." Max smiled, "With you around, I\'m not afraid of anything."'
  },
  {
    type: 'story',
    bg: 'page-bg-8',
    illustBg: 'illust-bg-8',
    emoji: '🍄🔮🌌',
    zh: '他們最後來到了一顆未知的星球。這裡的天空是紫色的，地面長滿了會發光的巨大蘑菇。Nova 分析後說：「這個星球的大氣層含有適合人類呼吸的氧氣。也許有一天，人類可以在這裡建立第二個家園。」',
    en: 'They finally arrived at an unknown planet. The sky was purple, and the ground was covered with giant glowing mushrooms. After analyzing, Nova said, "This planet\'s atmosphere contains oxygen suitable for humans. Perhaps one day, humanity could build a second home here."'
  },
  {
    type: 'story',
    bg: 'page-bg-9',
    illustBg: 'illust-bg-9',
    emoji: '🌠🧑‍🚀💭',
    zh: '回程的路上，Max 望著窗外的星河，心中充滿感動。「Nova，謝謝你帶我看到這一切。我決定了——長大後我要成為一名太空科學家，讓更多人有機會探索宇宙。」',
    en: 'On the way home, Max gazed at the galaxy through the window, deeply moved. "Nova, thank you for showing me all of this. I\'ve decided — when I grow up, I\'m going to become a space scientist, so more people can explore the universe."'
  },
  {
    type: 'end',
    bg: 'page-bg-10',
    illustBg: 'illust-bg-10',
    emoji: '📓🔵🌍',
    zh: '回到地球後，Max 把這次冒險的每一個發現都記錄在他的太空日誌裡。而 Nova 靜靜地浮在書桌旁，閃著溫暖的藍光，等待著下一次探險的開始…',
    en: 'Back on Earth, Max recorded every discovery from the adventure in his space journal. And Nova floated quietly beside his desk, glowing with a warm blue light, waiting for the next expedition to begin...'
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
    <div style="font-size:2.5rem;margin-bottom:.8rem">🔒</div>
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
  const colors = ['#1a237e','#0d1b2a','#1a237e','#263238','#bf360c','#006064','#212121','#4a148c','#0d1b2a','#1b5e20'];
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = colors[currentPage] || '#1a237e';
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
        if (langMode === 'both' || langMode === 'zh') files.push(`/max/audio/page-${pageNum}-zh.mp3`);
        if (langMode === 'both' || langMode === 'en') files.push(`/max/audio/page-${pageNum}-en.mp3`);
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
  if (langMode === 'both' || langMode === 'zh') files.push(`/max/audio/page-${pageNum}-zh.mp3`);
  if (langMode === 'both' || langMode === 'en') files.push(`/max/audio/page-${pageNum}-en.mp3`);
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
  navigator.serviceWorker.register('/sw.js', { updateViaCache: 'none' });
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
window.installApp = installApp;
window.dismissInstall = dismissInstall;
window.goToPage = goToPage;
window.lineLoginFromGate = lineLoginFromGate;
