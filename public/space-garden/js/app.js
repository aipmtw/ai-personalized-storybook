/* ============================================
   Book Reader — app.js
   太空花園 / Space Garden
   Vertical scroll layout
   ============================================ */

// Story data
const pages = [
  {
    type: 'cover',
    bg: 'page-bg-1',
    illustBg: 'illust-bg-1',
    emoji: '\u{1F33F}',
    zh: '',
    en: '',
    coverTitle: '太空花園',
    coverSubtitle: 'Space Garden',
    coverCredits: '審閱：Mark ｜ 共同編輯：Luce (AI)',
    version: 'ver 1'
  },
  {
    type: 'story',
    bg: 'page-bg-2',
    illustBg: 'illust-bg-2',
    emoji: '\u{1F680}\u{1F30C}\u{1F469}\u200D\u{1F52C}',
    zh: '西元 2065 年，火星殖民地「紅沙城」已經運轉了三年。小花是這裡最年輕的植物學家，才十二歲，卻被大家叫做「小花博士」。她的夢想很簡單——在火星上種出第一座花園。',
    en: 'In the year 2065, the Mars colony "Red Sand City" had been running for three years. Xiao Hua was the youngest botanist there — only twelve years old, yet everyone called her "Dr. Xiao Hua." Her dream was simple: grow the first garden on Mars.'
  },
  {
    type: 'story',
    bg: 'page-bg-3',
    illustBg: 'illust-bg-3',
    emoji: '\u{1F33E}\u{1F3D7}\uFE0F\u2600\uFE0F',
    zh: '她的任務是在溫室裡培育作物，為殖民地提供新鮮食物。指揮官對她說：「如果你能讓植物在這裡存活，我們就不再需要從地球運送補給品了。」小花點點頭，感受到責任的重量。',
    en: 'Her job was to cultivate crops in the greenhouse, providing fresh food for the colony. The commander told her, "If you can make plants survive here, we won\'t need supply shipments from Earth anymore." Xiao Hua nodded, feeling the weight of responsibility.'
  },
  {
    type: 'story',
    bg: 'page-bg-4',
    illustBg: 'illust-bg-4',
    emoji: '\u{1FA78}\u{1F3DC}\uFE0F\u{1F6AB}',
    zh: '火星的土壤是一片死寂的紅色沙塵，不含任何有機物質。小花用手捧起一把紅土，風乾得像碎裂的磚塊。「這裡什麼都長不出來……」她在日誌裡寫下第一行字。',
    en: 'The Martian soil was a lifeless red dust, devoid of any organic matter. Xiao Hua scooped up a handful of red dirt — dry and crumbly like broken bricks. "Nothing can grow here..." she wrote as the first line in her journal.'
  },
  {
    type: 'story',
    bg: 'page-bg-5',
    illustBg: 'illust-bg-5',
    emoji: '\u{1F9EA}\u{1FAA8}\u{1F4A1}',
    zh: '她開始實驗。她把從地球帶來的堆肥和火星礦物質混合在一起，調配出一種全新的「火星培養土」。她小心翼翼地測試酸鹼度、含水量，每一個步驟都記錄得清清楚楚。',
    en: 'She began experimenting. She mixed Earth compost with Martian minerals, creating a brand-new "Mars growing soil." She carefully tested the pH levels and moisture content, documenting every single step.'
  },
  {
    type: 'story',
    bg: 'page-bg-6',
    illustBg: 'illust-bg-6',
    emoji: '\u{1F331}\u{1F3E0}\u2728',
    zh: '小花把種子埋進溫室的培養槽裡。番茄、萵苣、小黃瓜——她選了最強韌的品種。澆上經過過濾的水，打開人造日光燈，然後等待。「拜託，長出來吧。」她每天對著土壤說。',
    en: 'Xiao Hua planted seeds in the greenhouse cultivation beds. Tomatoes, lettuce, cucumbers — she chose the hardiest varieties. She watered them with filtered water, turned on the artificial sunlights, and waited. "Please, grow," she whispered to the soil every day.'
  },
  {
    type: 'story',
    bg: 'page-bg-7',
    illustBg: 'illust-bg-7',
    emoji: '\u{1F554}\u{1F614}\u{1F4AD}',
    zh: '一個星期過去了，什麼都沒有。兩個星期、三個星期……培養槽裡依然只有沉默的紅土。其他科學家開始搖頭，有人說：「也許火星就不適合種東西。」小花把頭埋進臂彎裡，幾乎想放棄了。',
    en: 'One week passed — nothing. Two weeks, three weeks... the cultivation beds remained silent red soil. Other scientists began shaking their heads. Someone said, "Maybe Mars just isn\'t meant for growing things." Xiao Hua buried her face in her arms, almost ready to give up.'
  },
  {
    type: 'story',
    bg: 'page-bg-8',
    illustBg: 'illust-bg-8',
    emoji: '\u{1F345}\u2764\uFE0F\u{1F60D}',
    zh: '但就在第二十三天的清晨，她走進溫室，看見了一抹不同的顏色。一株小小的綠芽，從紅色的土壤裡冒了出來。她蹲下來，眼眶泛紅——那是一株番茄苗，紅色星球上的第一抹綠色。',
    en: 'But on the morning of the twenty-third day, she walked into the greenhouse and spotted something different. A tiny green sprout had pushed through the red soil. She knelt down, eyes glistening — it was a tomato seedling, the first touch of green on the red planet.'
  },
  {
    type: 'story',
    bg: 'page-bg-9',
    illustBg: 'illust-bg-9',
    emoji: '\u{1F33F}\u{1F345}\u{1F96C}',
    zh: '消息傳遍了整個殖民地。人們湧進溫室，看著越來越多的芽苗從土裡冒出來。番茄開了花、萵苣長出嫩葉、小黃瓜攀上了支架。曾經死寂的溫室，變成了一片充滿生機的綠色世界。',
    en: 'The news spread across the entire colony. People flooded into the greenhouse, watching as more and more sprouts emerged from the soil. Tomatoes bloomed, lettuce unfurled tender leaves, and cucumbers climbed up trellises. The once-lifeless greenhouse transformed into a vibrant green world.'
  },
  {
    type: 'end',
    bg: 'page-bg-10',
    illustBg: 'illust-bg-10',
    emoji: '\u{1F30D}\u{1F33F}\u{1F31F}',
    zh: '小花的花園成了殖民地的心臟。人們在這裡吃到了火星上第一顆番茄，嘗到了離開地球後第一口新鮮蔬菜。小花站在花園中央，望著穹頂外的星空，微微笑了。「生命，會找到自己的路。」',
    en: 'Xiao Hua\'s garden became the heart of the colony. People tasted the first tomato grown on Mars, the first fresh vegetable since leaving Earth. Xiao Hua stood in the center of her garden, gazing at the stars beyond the dome, and smiled softly. "Life finds a way."'
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
  const colors = ['#1b5e20','#0a1a0d','#4e342e','#3e2723','#1b5e20','#0a1a0d','#1a237e','#bf360c','#1b5e20','#2e7d32'];
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = colors[currentPage] || '#2e7d32';
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
        if (langMode === 'both' || langMode === 'zh') files.push(`/space-garden/audio/page-${pageNum}-zh.mp3`);
        if (langMode === 'both' || langMode === 'en') files.push(`/space-garden/audio/page-${pageNum}-en.mp3`);
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
  if (langMode === 'both' || langMode === 'zh') files.push(`/space-garden/audio/page-${pageNum}-zh.mp3`);
  if (langMode === 'both' || langMode === 'en') files.push(`/space-garden/audio/page-${pageNum}-en.mp3`);
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
  navigator.serviceWorker.register('/space-garden/sw.js', { updateViaCache: 'none' });
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
