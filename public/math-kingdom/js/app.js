/* ============================================
   Book Reader — app.js
   數學王國 / Math Kingdom
   Vertical scroll layout
   ============================================ */

// Story data
const pages = [
  {
    type: 'cover',
    bg: 'page-bg-1',
    illustBg: 'illust-bg-1',
    emoji: '🔢',
    zh: '',
    en: '',
    coverTitle: '數學王國',
    coverSubtitle: 'Math Kingdom',
    coverCredits: '審閱：Mark ｜ 共同編輯：Luce (AI)',
    version: 'ver 1'
  },
  {
    type: 'story',
    bg: 'page-bg-2',
    illustBg: 'illust-bg-2',
    emoji: '😩📐✏️',
    zh: '小數最討厭數學了。每次看到課本上的數字和公式，她的腦袋就像被塞滿棉花一樣，什麼都想不出來。「數學到底有什麼用？」她趴在書桌上嘆了一口氣。',
    en: 'Xiao Shu hated math more than anything. Every time she saw numbers and formulas in her textbook, her mind went blank like it was stuffed with cotton. "What\'s the point of math anyway?" she sighed, slumping over her desk.'
  },
  {
    type: 'story',
    bg: 'page-bg-3',
    illustBg: 'illust-bg-3',
    emoji: '🌀🏰✨',
    zh: '突然，課本上的數字開始旋轉發光！一個巨大的漩渦出現在書頁上，把小數吸了進去。她尖叫著穿越了一道彩虹般的隧道，落在一座金色城堡前。城門上刻著：「歡迎來到數學王國」。',
    en: 'Suddenly, the numbers on her textbook began to spin and glow! A massive vortex appeared on the page and pulled her in. She screamed as she tumbled through a rainbow tunnel, landing before a golden castle. Carved on the gate: "Welcome to Math Kingdom."'
  },
  {
    type: 'story',
    bg: 'page-bg-4',
    illustBg: 'illust-bg-4',
    emoji: '🌉🔢❓',
    zh: '城堡前有一座搖搖欲墜的數字橋。橋上的石板寫著方程式：「3x + 7 = 22，x = ?」小數深呼吸，慢慢算出 x = 5。石板亮起金光，橋變得堅固了！她一步一步解開每個方程式，安全走到對岸。',
    en: 'Before the castle stood a crumbling Number Bridge. The stone slabs displayed equations: "3x + 7 = 22, x = ?" Xiao Shu took a deep breath and carefully solved x = 5. The slab glowed gold, and the bridge became solid! Step by step, she solved each equation and crossed safely.'
  },
  {
    type: 'story',
    bg: 'page-bg-5',
    illustBg: 'illust-bg-5',
    emoji: '🦊½🍰',
    zh: '過了橋，她遇到一隻狐狸——身體被分成了兩半！「我是分數狐狸，有人把我切成了½。」小數幫他找到了另一個½，又學會了把⅓和⅔組合在一起。分數狐狸變回完整的自己，開心地搖著尾巴帶她進了城堡。',
    en: 'Across the bridge, she met a fox split right down the middle! "I\'m the Fraction Fox — someone cut me into ½." Xiao Shu helped him find the other ½, then learned to combine ⅓ and ⅔ together. The Fraction Fox became whole again, happily wagging his tail as he led her into the castle.'
  },
  {
    type: 'story',
    bg: 'page-bg-6',
    illustBg: 'illust-bg-6',
    emoji: '🏰🔺🔷',
    zh: '城堡裡面一片混亂——幾何城堡正在崩塌！「我們需要用正確的形狀重建！」城堡的建築師喊道。小數用三角形堆出穩固的屋頂，用長方形拼成牆壁，用圓形做成窗戶。她發現，形狀就是建築的語言！',
    en: 'Inside the castle was chaos — Geometry Castle was crumbling! "We need the right shapes to rebuild!" cried the castle architect. Xiao Shu used triangles for sturdy roofs, rectangles for walls, and circles for windows. She discovered that shapes are the language of architecture!'
  },
  {
    type: 'story',
    bg: 'page-bg-7',
    illustBg: 'illust-bg-7',
    emoji: '⚔️➖🛡️',
    zh: '重建完城堡後，一位穿著黑色鎧甲的騎士出現了——他是負數騎士！「我會讓一切都消失！-10 加上你的 10，就等於零！」小數冷靜思考後說：「但 -5 加上 8 等於 3，負數不是毀滅，而是平衡的一部分！」負數騎士聽了，放下了劍。',
    en: 'After rebuilding, a knight in black armor appeared — the Negative Knight! "I will make everything vanish! -10 plus your 10 equals zero!" Xiao Shu thought calmly and said, "But -5 plus 8 equals 3. Negatives aren\'t destruction — they\'re part of balance!" The Negative Knight lowered his sword.'
  },
  {
    type: 'story',
    bg: 'page-bg-8',
    illustBg: 'illust-bg-8',
    emoji: '🌀🥧♾️',
    zh: '在城堡的最高塔裡，她發現了一個不斷旋轉的螺旋——那是圓周率 Pi！「3.14159265358...我永遠不會結束，」Pi 微笑著說。小數驚嘆道：「原來數學裡有永恆的東西！」她看著 Pi 的數字延伸到無限遠。',
    en: 'In the castle\'s highest tower, she found an endlessly spinning spiral — it was Pi! "3.14159265358... I never end," Pi smiled. Xiao Shu marveled, "So there are infinite things in math!" She watched Pi\'s digits stretch toward infinity.'
  },
  {
    type: 'story',
    bg: 'page-bg-9',
    illustBg: 'illust-bg-9',
    emoji: '💧⚖️🌾',
    zh: '走出高塔，她看到王國的田地乾裂了——缺水危機！「我們有 1000 升水，要分給 4 塊田，面積比是 1:2:3:4。」小數用比例算出每塊田該分到的水量：100、200、300、400 升。水渠打開了，田地重新變綠。',
    en: 'Leaving the tower, she saw the kingdom\'s fields cracking — a water crisis! "We have 1000 liters to share among 4 fields in a 1:2:3:4 ratio." Xiao Shu used ratios to calculate each field\'s share: 100, 200, 300, and 400 liters. The channels opened, and the fields turned green again.'
  },
  {
    type: 'story',
    bg: 'page-bg-1',
    illustBg: 'illust-bg-1',
    emoji: '👑🔢🎭',
    zh: '數學女王從王座上站起來，微笑著對小數說：「妳已經通過了所有考驗。記住——數學不是冷冰冰的數字，它只是偽裝起來的規律。看穿它的偽裝，妳就能看到世界的秘密。」小數的眼睛亮了起來。',
    en: 'The Math Queen rose from her throne and smiled at Xiao Shu. "You\'ve passed every trial. Remember — math isn\'t cold, lifeless numbers. It\'s just patterns in disguise. See through its mask, and you\'ll see the world\'s secrets." Xiao Shu\'s eyes sparkled.'
  },
  {
    type: 'story',
    bg: 'page-bg-3',
    illustBg: 'illust-bg-3',
    emoji: '📝💯🎉',
    zh: '小數醒來了——原來她趴在書桌上睡著了。數學考卷就在眼前。但這次，她看到的不再是可怕的數字，而是等待被解開的謎題。她一題一題自信地寫下答案，交卷後，老師驚訝地說：「滿分！」',
    en: 'Xiao Shu woke up — she had fallen asleep at her desk. The math test was right in front of her. But this time, she didn\'t see scary numbers — she saw puzzles waiting to be solved. Confidently, she wrote each answer. When she turned it in, the teacher exclaimed, "Perfect score!"'
  },
  {
    type: 'end',
    bg: 'page-bg-10',
    illustBg: 'illust-bg-10',
    emoji: '🌳🔢🌍',
    zh: '從那天起，小數在生活中到處都能看見數學——樹枝的分叉是碎形、花瓣的排列是費氏數列、雨滴落下的速度是加速度。數學不再是她的敵人，而是她理解世界的一把金鑰匙。',
    en: 'From that day on, Xiao Shu saw math everywhere — tree branches were fractals, petal arrangements were Fibonacci sequences, and raindrops fell with acceleration. Math was no longer her enemy, but a golden key to understanding the world.'
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
  const colors = ['#4a148c','#1a0a2a','#311b92','#1a237e','#880e4f','#4a148c','#0d47a1','#6a1b9a','#1a0a2a','#2e7d32','#311b92','#4a148c'];
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = colors[currentPage] || '#6a1b9a';
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
        if (langMode === 'both' || langMode === 'zh') files.push(`/math-kingdom/audio/page-${pageNum}-zh.mp3`);
        if (langMode === 'both' || langMode === 'en') files.push(`/math-kingdom/audio/page-${pageNum}-en.mp3`);
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
  if (langMode === 'both' || langMode === 'zh') files.push(`/math-kingdom/audio/page-${pageNum}-zh.mp3`);
  if (langMode === 'both' || langMode === 'en') files.push(`/math-kingdom/audio/page-${pageNum}-en.mp3`);
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
  navigator.serviceWorker.register('/math-kingdom/sw.js', { updateViaCache: 'none' });
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
