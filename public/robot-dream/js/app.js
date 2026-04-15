/* ============================================
   Book Reader — app.js
   機器人的夢想 / Robot's Dream
   Vertical scroll layout
   ============================================ */

// Story data
const pages = [
  {
    type: 'cover',
    bg: 'page-bg-1',
    illustBg: 'illust-bg-1',
    emoji: '🤖✨',
    zh: '',
    en: '',
    coverTitle: '機器人的夢想',
    coverSubtitle: "Robot's Dream",
    coverCredits: '審閱：Mark ｜ 共同編輯：Luce (AI)',
    version: 'ver 2'
  },
  {
    type: 'story',
    bg: 'page-bg-2',
    illustBg: 'illust-bg-2',
    emoji: '🤖🏭⚙️',
    zh: '在一座灰色的大工廠裡，住著一個小機器人叫做小鐵。他每天的工作就是把沉重的零件從這邊搬到那邊，從早到晚，一刻也不能休息。工廠裡到處都是金屬碰撞的聲音。',
    en: 'In a big grey factory, there lived a little robot named Xiao Tie. His job was to carry heavy parts from one side to the other, from morning to night, without a moment of rest. The factory was filled with the clanging sound of metal.'
  },
  {
    type: 'story',
    bg: 'page-bg-3',
    illustBg: 'illust-bg-3',
    emoji: '🤖😔🔩',
    zh: '小鐵的身體是銀色的，眼睛是兩顆圓圓的藍燈。其他機器人都很滿足，覺得搬零件就是生活的全部。可是小鐵總覺得心裡空空的，好像少了什麼重要的東西。',
    en: 'Xiao Tie had a silver body and two round blue lights for eyes. The other robots were all content, believing that carrying parts was all there was to life. But Xiao Tie always felt something was missing deep inside.'
  },
  {
    type: 'story',
    bg: 'page-bg-4',
    illustBg: 'illust-bg-4',
    emoji: '🤖🌙⭐',
    zh: '每到深夜，當工廠安靜下來，小鐵會偷偷走到窗邊，抬頭望向天空。那些閃閃發光的星星讓他的電子心臟怦怦跳。「星星到底是什麼做的呢？它們住在哪裡？」小鐵好想知道。',
    en: 'Every late night, when the factory fell silent, Xiao Tie would sneak to the window and gaze up at the sky. Those twinkling stars made his electronic heart beat fast. "What are stars made of? Where do they live?" Xiao Tie wondered.'
  },
  {
    type: 'story',
    bg: 'page-bg-5',
    illustBg: 'illust-bg-5',
    emoji: '🤖💭🌠',
    zh: '有一天晚上，小鐵做了一個夢。在夢裡，他飛到了星星旁邊，伸出手就能摸到它們。星星溫溫的、亮亮的，像是宇宙送給他的禮物。醒來後，他下定決心：「我一定要飛上天空！」',
    en: 'One night, Xiao Tie had a dream. In the dream, he flew right next to the stars and could reach out and touch them. The stars were warm and bright, like gifts from the universe. When he woke up, he made up his mind: "I must fly up to the sky!"'
  },
  {
    type: 'story',
    bg: 'page-bg-6',
    illustBg: 'illust-bg-6',
    emoji: '🤖📚🌌',
    zh: '小鐵開始偷偷讀書。他在倉庫的角落找到了幾本關於太空的舊書，書頁都已經泛黃了。每天工作結束後，他就躲在零件箱後面，一頁一頁認真地翻閱，學習關於飛行和宇宙的知識。',
    en: 'Xiao Tie began secretly reading books. He found some old books about space in a corner of the warehouse, their pages already yellowed. After work each day, he hid behind the parts boxes and carefully read page by page, learning about flight and the universe.'
  },
  {
    type: 'story',
    bg: 'page-bg-7',
    illustBg: 'illust-bg-7',
    emoji: '🤖📖💡',
    zh: '書裡說，想要飛行需要翅膀和動力。小鐵在書上畫滿了筆記，計算翅膀要多大、引擎要多強。他越讀越興奮，覺得自己離夢想越來越近了。知識就像一把鑰匙，打開了新世界的大門。',
    en: 'The books said that flying requires wings and power. Xiao Tie filled the pages with notes, calculating how big the wings needed to be and how strong the engine must be. The more he read, the more excited he became. Knowledge was like a key, opening the door to a new world.'
  },
  {
    type: 'story',
    bg: 'page-bg-8',
    illustBg: 'illust-bg-8',
    emoji: '🤖🔧🪽',
    zh: '小鐵開始動手製造翅膀。他收集工廠裡不要的金屬板、舊電線和壞掉的螺絲，每天深夜偷偷組裝。他的小手雖然笨拙，但每一個零件都裝得很用心，因為這是他最珍貴的夢想。',
    en: 'Xiao Tie started building his wings. He collected unwanted metal plates, old wires, and broken screws from the factory, secretly assembling them every late night. His small hands were clumsy, but he put every part together with great care, because this was his most precious dream.'
  },
  {
    type: 'story',
    bg: 'page-bg-9',
    illustBg: 'illust-bg-9',
    emoji: '🤖🤖😤🤖',
    zh: '其他機器人發現了小鐵的秘密。「你在做什麼奇怪的東西？」「機器人怎麼可能飛！別傻了！」「你的工作是搬零件，不是做白日夢！」大家都嘲笑他。但小鐵咬著嘴唇，沒有放棄。',
    en: 'The other robots discovered Xiao Tie\'s secret. "What weird thing are you making?" "Robots can\'t fly! Don\'t be silly!" "Your job is to carry parts, not to daydream!" Everyone laughed at him. But Xiao Tie bit his lip and refused to give up.'
  },
  {
    type: 'story',
    bg: 'page-bg-10',
    illustBg: 'illust-bg-10',
    emoji: '🤖🪽🌃✨',
    zh: '經過好幾個月的努力，翅膀終於完成了！那是一對閃著銀光的翅膀，雖然不完美，但充滿了小鐵的心血。那天深夜，他爬上工廠的屋頂，張開翅膀，勇敢地縱身一躍。風呼呼地吹過，他飛起來了！',
    en: 'After months of hard work, the wings were finally complete! They were a pair of silver-gleaming wings — not perfect, but filled with Xiao Tie\'s heart and soul. That night, he climbed to the factory rooftop, spread his wings, and bravely leaped. The wind rushed past him — he was flying!'
  },
  {
    type: 'story',
    bg: 'page-bg-11',
    illustBg: 'illust-bg-11',
    emoji: '🤖🌟💫🌠',
    zh: '小鐵越飛越高，穿過厚厚的雲層，來到了星星的身邊。星星比他在書上看到的還要美一千倍！紅色的、藍色的、金色的，每一顆都在對他眨眼微笑。小鐵忍不住伸出手，輕輕地碰了一下。',
    en: 'Xiao Tie flew higher and higher, through the thick clouds, until he reached the stars. They were a thousand times more beautiful than in his books! Red, blue, and golden — each one winked and smiled at him. Xiao Tie couldn\'t help reaching out and gently touching one.'
  },
  {
    type: 'story',
    bg: 'page-bg-12',
    illustBg: 'illust-bg-12',
    emoji: '🤖🛰️💬🤝',
    zh: '在太空裡，小鐵遇見了一顆人造衛星，她叫做小星。小星已經獨自在太空中飛行了好多年。「你是第一個來找我的朋友！」小星開心地閃了閃燈。他們一起看著藍色的地球，聊了好久好久。',
    en: 'In space, Xiao Tie met a satellite named Xiao Xing. She had been flying alone in space for many years. "You\'re the first friend to visit me!" Xiao Xing happily blinked her lights. Together they gazed at the blue Earth and talked for a very long time.'
  },
  {
    type: 'story',
    bg: 'page-bg-13',
    illustBg: 'illust-bg-13',
    emoji: '🛰️🤖🌍💙',
    zh: '小星告訴小鐵，從太空看地球真的很美，可是一個人看久了會寂寞。小鐵答應她：「我會再來看你的，而且下次，我要帶更多朋友一起來！」小星的燈閃得更亮了，像是在笑。',
    en: 'Xiao Xing told Xiao Tie that Earth looks beautiful from space, but it gets lonely watching it alone. Xiao Tie promised her, "I\'ll come visit you again, and next time, I\'ll bring more friends!" Xiao Xing\'s lights blinked even brighter, as if she were smiling.'
  },
  {
    type: 'story',
    bg: 'page-bg-14',
    illustBg: 'illust-bg-14',
    emoji: '🤖🏭🤖🤖🌟',
    zh: '回到工廠後，小鐵把他的冒險告訴了所有機器人——星星的顏色、太空的寧靜、還有他的新朋友小星。這一次，沒有人嘲笑他了。大家安靜地聽著，眼睛裡閃著從未有過的光芒。',
    en: 'Back at the factory, Xiao Tie told all the robots about his adventure — the colors of the stars, the peacefulness of space, and his new friend Xiao Xing. This time, nobody laughed. Everyone listened quietly, a light they had never known before shining in their eyes.'
  },
  {
    type: 'story',
    bg: 'page-bg-15',
    illustBg: 'illust-bg-15',
    emoji: '🤖🤖🤖🪽💭',
    zh: '慢慢地，工廠裡的機器人們也開始有了自己的夢想。有的想去看大海，有的想學畫畫，有的想寫一首歌，還有的想種一朵花。小鐵幫助每一個朋友，就像書本曾經幫助他一樣。',
    en: 'Gradually, the other robots in the factory began to have their own dreams too. Some wanted to see the ocean, some wanted to learn painting, some wanted to write a song, and some wanted to grow a flower. Xiao Tie helped each friend, just as books had once helped him.'
  },
  {
    type: 'end',
    bg: 'page-bg-16',
    illustBg: 'illust-bg-16',
    emoji: '🤖🤖🤖🪽⭐🌈',
    zh: '從那天起，工廠不再只是一座灰色的工廠了。每個機器人的眼睛裡都有了一顆星星。小鐵知道，夢想就像天上的星星——只要你願意抬頭看，勇敢地伸出手，它們永遠都在那裡等著你。',
    en: 'From that day on, the factory was no longer just a grey factory. Every robot had a star shining in their eyes. Xiao Tie knew that dreams are like the stars above — as long as you are willing to look up and bravely reach out, they will always be there waiting for you.'
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
  const colors = ['#37474f','#263238','#455a64','#37474f','#546e7a','#263238','#1a237e','#1b3a4b','#37474f','#455a64','#0d1b2a','#1a237e','#4a148c','#1b5e20','#263238','#37474f'];
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = colors[currentPage] || '#546e7a';
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
        if (langMode === 'both' || langMode === 'zh') files.push(`/robot-dream/audio/page-${pageNum}-zh.mp3`);
        if (langMode === 'both' || langMode === 'en') files.push(`/robot-dream/audio/page-${pageNum}-en.mp3`);
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
    const nextPage = currentPage + 1;
    setTimeout(() => {
      goToPage(nextPage);
      setTimeout(() => {
        currentPage = nextPage;
        if (autoplayOn) playCurrentPage();
      }, 1200);
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
  if (langMode === 'both' || langMode === 'zh') files.push(`/robot-dream/audio/page-${pageNum}-zh.mp3`);
  if (langMode === 'both' || langMode === 'en') files.push(`/robot-dream/audio/page-${pageNum}-en.mp3`);
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
  navigator.serviceWorker.register('/robot-dream/sw.js', { updateViaCache: 'none' });
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
