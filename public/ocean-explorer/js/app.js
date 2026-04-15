/* ============================================
   Book Reader — app.js
   深海探險家 / Deep Sea Explorer
   Vertical scroll layout
   ============================================ */

// Story data
const pages = [
  {
    type: 'cover',
    bg: 'page-bg-1',
    illustBg: 'illust-bg-1',
    emoji: '\u{1F30A}',
    zh: '',
    en: '',
    coverTitle: '深海探險家',
    coverSubtitle: 'Deep Sea Explorer',
    coverCredits: '審閱：Mark ｜ 共同編輯：Luce (AI)',
    version: 'ver 1'
  },
  {
    type: 'story',
    bg: 'page-bg-2',
    illustBg: 'illust-bg-2',
    emoji: '\u{1F6A2}\u{1F469}\u200D\u{1F52C}\u{1F467}',
    zh: '海洋生物學家林博士站在研究船的甲板上，迎著海風微笑。她身旁是十歲的女兒小海，眼裡閃爍著興奮的光芒。「小海，準備好了嗎？今天我們要搭潛水艇，去看看海底深處的世界！」',
    en: 'Marine biologist Dr. Lin stood on the research ship\'s deck, smiling into the sea breeze. Beside her was her ten-year-old daughter Xiao Hai, eyes sparkling with excitement. "Xiao Hai, are you ready? Today we\'re taking a submarine to explore the deep ocean!"'
  },
  {
    type: 'story',
    bg: 'page-bg-3',
    illustBg: 'illust-bg-3',
    emoji: '\u{1F6F0}\u{FE0F}\u2B07\u{FE0F}\u{1F30A}',
    zh: '潛水艇緩緩下沉。陽光從海面穿透下來，把水染成一片碧綠。隨著深度增加，光線越來越暗，周圍從明亮的藍色變成了深邃的靛藍。「我們正在離開透光層，」林博士解釋，「再往下，陽光就完全到不了了。」',
    en: 'The submarine slowly descended. Sunlight pierced through the surface, turning the water emerald green. As they went deeper, the light dimmed — bright blue faded into deep indigo. "We\'re leaving the sunlight zone," Dr. Lin explained. "Further down, no sunlight can reach."'
  },
  {
    type: 'story',
    bg: 'page-bg-4',
    illustBg: 'illust-bg-4',
    emoji: '\u{1F4A1}\u{1FABF}\u2728',
    zh: '黑暗中，突然出現了一片夢幻般的光芒。數百隻水母在四周漂浮，身體散發著藍色和紫色的柔和光芒。「那是生物發光！」小海驚嘆道。「沒錯，這些水母自己會發光，是海洋裡最美的燈籠。」',
    en: 'In the darkness, a dreamlike glow suddenly appeared. Hundreds of jellyfish drifted around them, their bodies radiating soft blue and purple light. "That\'s bioluminescence!" Xiao Hai exclaimed. "Exactly — these jellyfish create their own light. They\'re the ocean\'s most beautiful lanterns."'
  },
  {
    type: 'story',
    bg: 'page-bg-5',
    illustBg: 'illust-bg-5',
    emoji: '\u{1F30B}\u{1FAB1}\u{1F525}',
    zh: '潛水艇的探照燈照亮了一座海底熱泉。滾燙的黑色煙霧從裂縫中噴湧而出，周圍長滿了奇異的管狀蠕蟲，紅色的觸手在水中搖擺。「這些管蟲不需要陽光，它們靠化學物質維生，」林博士說，「這裡就像另一個世界。」',
    en: 'The submarine\'s searchlight illuminated a hydrothermal vent. Scalding black smoke billowed from cracks in the seafloor, surrounded by strange tube worms with red tentacles swaying in the current. "These tube worms don\'t need sunlight — they survive on chemicals," said Dr. Lin. "It\'s like another world down here."'
  },
  {
    type: 'story',
    bg: 'page-bg-6',
    illustBg: 'illust-bg-6',
    emoji: '\u{1F50D}\u{1F41F}\u2753',
    zh: '就在這時，小海指著螢幕大喊：「媽媽，快看！那是什麼？」一隻從未見過的生物出現在鏡頭前——它有透明的身體、八條閃爍著金色光芒的觸手，還有兩隻像寶石一樣的藍色眼睛。林博士瞪大了眼睛：「我從來沒在任何文獻裡看過這個物種……」',
    en: 'Just then, Xiao Hai pointed at the screen and shouted, "Mom, look! What is that?" A creature never seen before appeared on camera — with a transparent body, eight tentacles shimmering with golden light, and two gem-like blue eyes. Dr. Lin\'s eyes widened: "I\'ve never seen this species in any scientific record..."'
  },
  {
    type: 'story',
    bg: 'page-bg-7',
    illustBg: 'illust-bg-7',
    emoji: '\u{1F41F}\u2728\u{1F4DD}',
    zh: '「既然是新發現，發現者有命名的權利，」林博士溫柔地看著小海。小海想了想，說：「牠的眼睛像星星，觸手像太陽的光芒……就叫牠『星光章魚』吧！學名可以叫 Octopus stellalucis。」林博士笑了：「完美的名字。」',
    en: '"Since it\'s a new discovery, the discoverer gets naming rights," Dr. Lin said gently. Xiao Hai thought for a moment. "Its eyes are like stars, and its tentacles glow like sunbeams... Let\'s call it the \'Starlight Octopus\'! The scientific name could be Octopus stellalucis." Dr. Lin smiled: "A perfect name."'
  },
  {
    type: 'story',
    bg: 'page-bg-8',
    illustBg: 'illust-bg-8',
    emoji: '\u{1F6A8}\u{1F4C9}\u26A0\u{FE0F}',
    zh: '突然，警報聲響起！螢幕上的壓力計指針迅速攀升。「水壓太高了！我們必須開始上浮！」林博士冷靜地操控潛水艇。小海緊緊握住把手，心跳加速，但她記得媽媽說過：科學家要冷靜面對挑戰。',
    en: 'Suddenly, an alarm blared! The pressure gauge on screen surged rapidly. "The water pressure is too high! We need to start ascending!" Dr. Lin calmly maneuvered the submarine. Xiao Hai gripped the handle tightly, her heart racing — but she remembered her mother\'s words: a scientist must stay calm in the face of challenges.'
  },
  {
    type: 'story',
    bg: 'page-bg-9',
    illustBg: 'illust-bg-9',
    emoji: '\u{1F6A2}\u{1F4BB}\u{1F3C6}',
    zh: '潛水艇安全浮出水面，回到了陽光下。回到船上，林博士和小海立刻將錄影資料和樣本數據上傳到國際海洋研究資料庫。「星光章魚」的發現很快引起了全球科學家的關注。小海看著螢幕上的回覆，露出了驕傲的微笑。',
    en: 'The submarine surfaced safely, returning to sunlight. Back on the ship, Dr. Lin and Xiao Hai immediately uploaded the video footage and sample data to the international marine research database. The discovery of the "Starlight Octopus" quickly captured the attention of scientists worldwide. Xiao Hai smiled proudly at the responses on screen.'
  },
  {
    type: 'end',
    bg: 'page-bg-10',
    illustBg: 'illust-bg-10',
    emoji: '\u{1F469}\u200D\u{1F52C}\u{1F30A}\u{1F31F}',
    zh: '那天晚上，小海站在甲板上，仰望滿天星斗，耳邊是海浪輕柔的聲音。「媽媽，我決定了——長大以後，我也要成為一個海洋科學家，去發現更多海底的秘密。」林博士輕輕擁抱女兒：「大海永遠在等著勇敢的探險家。」',
    en: 'That evening, Xiao Hai stood on the deck, gazing at the starry sky, the gentle sound of waves in her ears. "Mom, I\'ve decided — when I grow up, I want to become an ocean scientist too, and discover more secrets of the deep sea." Dr. Lin hugged her daughter gently: "The ocean is always waiting for brave explorers."'
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
  const colors = ['#01579b','#0a1520','#004d40','#0d1b2a','#1b0a2e','#bf360c','#01579b','#b71c1c','#0d2137','#004d40'];
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = colors[currentPage] || '#0277bd';
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
        if (langMode === 'both' || langMode === 'zh') files.push(`/ocean-explorer/audio/page-${pageNum}-zh.mp3`);
        if (langMode === 'both' || langMode === 'en') files.push(`/ocean-explorer/audio/page-${pageNum}-en.mp3`);
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
  if (langMode === 'both' || langMode === 'zh') files.push(`/ocean-explorer/audio/page-${pageNum}-zh.mp3`);
  if (langMode === 'both' || langMode === 'en') files.push(`/ocean-explorer/audio/page-${pageNum}-en.mp3`);
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
  navigator.serviceWorker.register('/ocean-explorer/sw.js', { updateViaCache: 'none' });
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
