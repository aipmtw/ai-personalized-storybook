/* ============================================
   Book Reader — app.js
   Amy 的故事魔法
   ============================================ */

// Story data
const pages = [
  {
    type: 'cover',
    bg: 'page-bg-1',
    illustBg: 'illust-bg-1',
    emoji: '\uD83C\uDF24',
    zh: '',
    en: '',
    coverTitle: 'Amy 的故事魔法',
    coverSubtitle: "Amy's Story Magic",
    coverCredits: '審閱：Mark ｜ 共同編輯：Luce (AI)',
    version: 'ver 1'
  },
  {
    type: 'story',
    bg: 'page-bg-2',
    illustBg: 'illust-bg-2',
    emoji: '\uD83D\uDE30\uD83C\uDFEB\uD83D\uDCDA',
    zh: 'Amy 是二年三班最安靜的女孩。上課的時候，她總是低著頭，不敢看任何人的眼睛。每次老師問問題，她明明知道答案，卻把嘴巴閉得緊緊的。',
    en: 'Amy was the quietest girl in Class 2-3. During lessons, she always kept her head down and never dared to look anyone in the eye. Whenever the teacher asked a question, she knew the answer but kept her mouth shut tight.'
  },
  {
    type: 'story',
    bg: 'page-bg-3',
    illustBg: 'illust-bg-3',
    emoji: '\uD83C\uDFA4\uD83D\uDE2D\uD83D\uDC94',
    zh: '有一天，老師宣布：「下個月，全校要舉辦說故事比賽！每個班都要派一位同學參加。」Amy 的心跳得好快好快。她最害怕的事情，就是站在很多人面前開口說話。',
    en: 'One day, the teacher announced, "Next month, the school will hold a storytelling competition! Every class must send one student to participate." Amy\'s heart began to race. The thing she feared most was speaking in front of a crowd.'
  },
  {
    type: 'story',
    bg: 'page-bg-4',
    illustBg: 'illust-bg-4',
    emoji: '\uD83E\uDE9E\uD83D\uDCF1\u2728',
    zh: '放學回家後，Amy 對著房間的大鏡子偷偷練習。「從前從前……」她的聲音小到連自己都聽不見。突然，桌上的平板亮了起來，一個圓圓的笑臉出現在螢幕上：「嗨！我是 Echo，你的 AI 說故事教練！」',
    en: 'After school, Amy secretly practiced in front of her bedroom mirror. "Once upon a time..." Her voice was so soft she could barely hear herself. Suddenly, her tablet lit up and a round, smiling face appeared on the screen: "Hi! I\'m Echo, your AI storytelling coach!"'
  },
  {
    type: 'story',
    bg: 'page-bg-5',
    illustBg: 'illust-bg-5',
    emoji: '\uD83D\uDE33\uD83E\uDD16\uD83D\uDCAC',
    zh: '「你是誰？你怎麼知道我在練習？」Amy 嚇了一跳。Echo 眨眨眼說：「因為我能感覺到你很想把故事說好！別擔心，我會教你三個說故事的魔法秘訣，保證你變成最棒的說書人！」',
    en: '"Who are you? How did you know I was practicing?" Amy was startled. Echo winked and said, "Because I can sense that you really want to tell stories well! Don\'t worry, I\'ll teach you three magical storytelling secrets that will turn you into the best storyteller ever!"'
  },
  {
    type: 'story',
    bg: 'page-bg-6',
    illustBg: 'illust-bg-6',
    emoji: '\uD83D\uDC40\uD83D\uDE0A\uD83D\uDCA1',
    zh: '「第一個秘訣——眼神魔法！」Echo 說。「說故事的時候，要看著聽你說話的人。假裝你在跟最好的朋友分享一個超級有趣的祕密。」Amy 試著看著鏡子裡的自己，想像在跟好朋友說話，嘴角不知不覺就笑了。',
    en: '"Secret number one \u2014 eye contact magic!" said Echo. "When telling a story, look at your listeners. Pretend you\'re sharing a super exciting secret with your best friend." Amy tried looking at herself in the mirror, imagining she was talking to her best friend, and a smile crept across her face without her even noticing.'
  },
  {
    type: 'story',
    bg: 'page-bg-7',
    illustBg: 'illust-bg-7',
    emoji: '\uD83D\uDC4B\uD83D\uDC09\uD83D\uDCA8',
    zh: '「第二個秘訣——手勢魔法！」Echo 接著說。「用你的手和身體讓故事活起來！」Amy 一邊說「巨龍張開大嘴吐出火焰」，一邊張開雙臂，再用手做出噴火的動作。Echo 開心地叫：「太棒了！你簡直是天生的演員！」',
    en: '"Secret number two \u2014 gesture magic!" Echo continued. "Use your hands and body to bring the story alive!" As Amy said, "The dragon opened its huge mouth and breathed fire," she spread her arms wide and made a fire-breathing motion with her hands. Echo cheered, "Amazing! You\'re a natural performer!"'
  },
  {
    type: 'story',
    bg: 'page-bg-8',
    illustBg: 'illust-bg-8',
    emoji: '\uD83D\uDDE3\uFE0F\uD83C\uDFB5\uD83D\uDC3B',
    zh: '「第三個秘訣——聲音魔法！」Echo 教她用不同的聲音演不同的角色。Amy 用粗粗的聲音演大熊，細細的聲音演小鳥，還學會在緊張的時候放慢速度，讓聽的人屏住呼吸。',
    en: '"Secret number three \u2014 voice magic!" Echo taught her to use different voices for different characters. Amy used a deep, grumbly voice for the big bear and a high, chirpy voice for the little bird. She also learned to slow down during tense moments, making listeners hold their breath.'
  },
  {
    type: 'story',
    bg: 'page-bg-9',
    illustBg: 'illust-bg-9',
    emoji: '\uD83D\uDCF9\uD83D\uDCCA\u2B06\uFE0F',
    zh: '從那天起，Amy 每天放學後都跟 Echo 一起練習。Echo 會幫她錄影，然後一起看回放。「你今天的聲音比昨天大了喔！」「停頓的時機抓得好棒！」一天比一天進步，Amy 開始覺得說故事其實很好玩。',
    en: 'From that day on, Amy practiced with Echo every day after school. Echo recorded her and they watched the playback together. "Your voice was louder than yesterday!" "Your pauses were perfectly timed!" She improved day by day, and Amy began to think storytelling was actually really fun.'
  },
  {
    type: 'story',
    bg: 'page-bg-10',
    illustBg: 'illust-bg-10',
    emoji: '\u270B\uD83D\uDE2E\uD83E\uDEC1',
    zh: '兩個星期後，老師問：「有誰願意代表我們班參加說故事比賽？」教室裡安靜了好幾秒。Amy 的心又開始砰砰跳，但她深吸一口氣，想起 Echo 教她的呼吸法——然後慢慢舉起了手。全班都睜大了眼睛。',
    en: 'Two weeks later, the teacher asked, "Who would like to represent our class in the storytelling competition?" The room was silent for several seconds. Amy\'s heart pounded again, but she took a deep breath, remembering the breathing technique Echo taught her \u2014 and slowly raised her hand. The entire class stared in amazement.'
  },
  {
    type: 'story',
    bg: 'page-bg-11',
    illustBg: 'illust-bg-11',
    emoji: '\uD83C\uDFAD\uD83D\uDE28\uD83C\uDF1F',
    zh: '比賽那天，Amy 站在大禮堂的舞台上。台下坐滿了同學和老師，至少有兩百多個人。她的腿有點發抖，但她記得 Echo 說的話：「緊張是正常的，那代表你在乎。深呼吸，然後把注意力放在你的故事上。」',
    en: 'On the day of the competition, Amy stood on the stage in the school auditorium. The seats were filled with students and teachers \u2014 at least two hundred people. Her legs trembled a little, but she remembered Echo\'s words: "Being nervous is normal. It means you care. Take a deep breath and focus on your story."'
  },
  {
    type: 'story',
    bg: 'page-bg-12',
    illustBg: 'illust-bg-12',
    emoji: '\uD83C\uDF32\uD83E\uDD81\uD83D\uDC30',
    zh: 'Amy 深吸一口氣，微笑著開始說：「在一座很遠很遠的魔法森林裡，住著一隻膽小的兔子……」她的眼睛看著台下的同學，用手勢比出森林的樣子，聲音一下子大，一下子小。每個人都聽得入迷了。',
    en: 'Amy took a deep breath, smiled, and began: "In a faraway magical forest, there lived a timid little rabbit..." Her eyes swept across the audience, her hands painted the shape of the forest, and her voice rose and fell like music. Everyone was completely captivated.'
  },
  {
    type: 'story',
    bg: 'page-bg-13',
    illustBg: 'illust-bg-13',
    emoji: '\uD83D\uDC4F\uD83C\uDF89\uD83C\uDFC6',
    zh: '故事說完的那一刻，全場安靜了一秒鐘——然後爆出雷鳴般的掌聲！有人站起來拍手，有人大喊「再說一個！」老師走上台，笑著宣布：「Amy 得到了第一名！」Amy 的眼眶紅了，那是開心的眼淚。',
    en: 'The moment she finished, the whole auditorium went silent for one second \u2014 and then erupted in thunderous applause! Some people stood up clapping, others shouted, "Tell another one!" The teacher walked on stage and announced with a smile, "Amy wins first place!" Amy\'s eyes turned red with happy tears.'
  },
  {
    type: 'story',
    bg: 'page-bg-14',
    illustBg: 'illust-bg-14',
    emoji: '\uD83D\uDCF1\uD83D\uDE0A\uD83D\uDC96',
    zh: '回到家，Amy 打開平板，Echo 的笑臉已經在螢幕上等著她了。「恭喜你，Amy！你做到了！」Amy 笑著說：「謝謝你，Echo。是你教會了我，原來我的聲音也可以很有力量。」Echo 回答：「那個力量一直都在你心裡喔。」',
    en: 'Back home, Amy opened her tablet. Echo\'s smiling face was already waiting on the screen. "Congratulations, Amy! You did it!" Amy smiled and said, "Thank you, Echo. You taught me that my voice can be powerful too." Echo replied, "That power was always inside you."'
  },
  {
    type: 'end',
    bg: 'page-bg-15',
    illustBg: 'illust-bg-15',
    emoji: '\uD83C\uDF19\uD83D\uDCD6\uD83C\uDF1F',
    zh: '那天晚上，Amy 在日記裡寫道：「我不再是那個安靜的女孩了。我發現，每個人都有屬於自己的故事，而說出來的那一刻，故事就變成了魔法。」她合上日記，微笑著入睡，夢裡全是新的冒險故事。',
    en: 'That night, Amy wrote in her diary: "I\'m no longer the quiet girl. I\'ve learned that everyone has their own story, and the moment you speak it aloud, it becomes magic." She closed her diary, fell asleep with a smile, and dreamed of brand new adventures waiting to be told.'
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
    <div style="font-size:2.5rem;margin-bottom:.8rem">\uD83D\uDD12</div>
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
  const returnUrl = encodeURIComponent(window.location.origin + '/amy/book.html');
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
  const colors = ['#e91e63','#f5f5f5','#fff3e0','#fce4ec','#e8f5e9','#e3f2fd','#fff8e1','#f3e5f5','#fbe9e7','#ede7f6','#e0f7fa','#fff9c4','#f1f8e9','#fce4ec','#e8eaf6','#f5f5f5'];
  document.querySelector('meta[name="theme-color"]').content = colors[currentPage] || '#e91e63';
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
    // No audio file — stop autoplay, don't advance
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
    files.push(`/amy/audio/page-${pageNum}-zh.mp3`);
  }
  if (langMode === 'both' || langMode === 'en') {
    files.push(`/amy/audio/page-${pageNum}-en.mp3`);
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
        if (langMode === 'both' || langMode === 'zh') files.push(`/amy/audio/page-${pageNum}-zh.mp3`);
        if (langMode === 'both' || langMode === 'en') files.push(`/amy/audio/page-${pageNum}-en.mp3`);
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
  if (langMode === 'both' || langMode === 'zh') files.push(`/amy/audio/page-${pageNum}-zh.mp3`);
  if (langMode === 'both' || langMode === 'en') files.push(`/amy/audio/page-${pageNum}-en.mp3`);
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



// Service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/amy/sw.js', { updateViaCache: 'none' });
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
