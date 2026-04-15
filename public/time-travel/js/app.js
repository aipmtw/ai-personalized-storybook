/* ============================================
   Book Reader — app.js
   時光旅行日記 / Time Travel Diary
   ============================================ */

// Story data
const pages = [
  {
    type: 'cover',
    bg: 'page-bg-1',
    illustBg: 'illust-bg-1',
    emoji: '\u23F0',
    zh: '',
    en: '',
    coverTitle: '時光旅行日記',
    coverSubtitle: 'Time Travel Diary',
    coverCredits: '審閱：Mark ｜ 共同編輯：Luce (AI)',
    version: 'ver 1'
  },
  {
    type: 'story',
    bg: 'page-bg-2',
    illustBg: 'illust-bg-2',
    emoji: '\uD83C\uDFE0\uD83D\uDCD3\u2728',
    zh: '小安在阿公家的閣樓裡翻找舊東西。他在一個滿是灰塵的木箱子裡，發現了一本古老的日記本。封面寫著「時光日記」四個金色的字，還散發著一股淡淡的檀香味。',
    en: 'Xiao An was rummaging through old things in Grandpa\'s attic. Inside a dusty wooden chest, he found an ancient diary. The cover had four golden characters reading "Time Diary" and gave off a faint scent of sandalwood.'
  },
  {
    type: 'story',
    bg: 'page-bg-3',
    illustBg: 'illust-bg-3',
    emoji: '\uD83D\uDCD6\uD83C\uDF00\uD83C\uDF1F',
    zh: '小安好奇地翻開日記本，突然一道金色的光芒從書頁間閃耀而出！整個閣樓開始旋轉，他感覺自己像是被一陣溫暖的風捲了起來。等他睜開眼睛，他已經站在一百年前的台灣街頭。',
    en: 'Xiao An curiously opened the diary, and suddenly a golden light burst from its pages! The whole attic began to spin, and he felt himself being swept up by a warm wind. When he opened his eyes, he was standing on a Taiwan street from a hundred years ago.'
  },
  {
    type: 'story',
    bg: 'page-bg-4',
    illustBg: 'illust-bg-4',
    emoji: '\uD83D\uDE82\uD83C\uDFEA\uD83E\uDDD1\u200D\uD83C\uDF3E',
    zh: '小安看見一列冒著白煙的蒸汽火車緩緩駛過。街道兩旁是熱鬧的傳統市場，賣菜的阿婆用竹籃裝著新鮮的蔬果，豆花攤前排著長長的隊伍。到處都是叫賣聲和歡笑聲。',
    en: 'Xiao An saw a steam train puffing white smoke as it slowly passed by. On both sides of the street were bustling traditional markets. An old lady sold fresh vegetables from bamboo baskets, and a long line waited at the tofu pudding stall. Everywhere was filled with hawkers\' calls and laughter.'
  },
  {
    type: 'story',
    bg: 'page-bg-5',
    illustBg: 'illust-bg-5',
    emoji: '\uD83D\uDC67\u270D\uFE0F\uD83C\uDFA8',
    zh: '一個穿著碎花洋裝的女孩跑過來，笑著對小安說：「你是新來的吧？我叫阿梅！來，我教你寫毛筆字。」阿梅拉著小安坐下，手把手教他用毛筆蘸墨汁，在宣紙上寫下了「福」這個字。',
    en: 'A girl in a floral dress ran over and smiled at Xiao An, saying, "You must be new! My name is Ah Mei! Come, I\'ll teach you calligraphy." Ah Mei sat Xiao An down and guided his hand as he dipped a brush in ink, writing the character "Fu" (blessing) on rice paper.'
  },
  {
    type: 'story',
    bg: 'page-bg-6',
    illustBg: 'illust-bg-6',
    emoji: '\uD83C\uDFAD\uD83E\uDE86\uD83D\uDE02',
    zh: '阿梅帶小安去廟口看布袋戲。操偶師傅手指靈活地操控著戲偶，一邊用不同的聲音說著精彩的故事。小安看得目不轉睛，跟著觀眾一起大笑。戲偶好像真的活了起來！',
    en: 'Ah Mei took Xiao An to the temple square to watch a puppet show. The puppet master\'s fingers danced skillfully as he voiced different characters in an exciting story. Xiao An watched with wide eyes, laughing along with the audience. The puppets seemed to truly come alive!'
  },
  {
    type: 'story',
    bg: 'page-bg-7',
    illustBg: 'illust-bg-7',
    emoji: '\uD83D\uDC75\uD83C\uDF5A\uD83E\uDD62',
    zh: '阿梅的阿嬤在廚房裡教小安做傳統的麻糬。阿嬤把糯米飯放進石臼裡，讓小安拿著木杵用力搗。「要用力搗，才會Q彈好吃喔！」阿嬤笑著說。小安搗得滿頭大汗，但吃到香甜的麻糬時，覺得好幸福。',
    en: 'Ah Mei\'s grandmother taught Xiao An to make traditional mochi in the kitchen. Grandma put sticky rice in a stone mortar and let Xiao An pound it with a wooden mallet. "You have to pound hard so it becomes chewy and delicious!" Grandma said with a smile. Xiao An was dripping with sweat, but when he tasted the sweet mochi, he felt so happy.'
  },
  {
    type: 'story',
    bg: 'page-bg-8',
    illustBg: 'illust-bg-8',
    emoji: '\uD83C\uDFEE\uD83C\uDF86\uD83C\uDF8A',
    zh: '傍晚時分，整個小鎮都熱鬧了起來。原來今天是傳統節慶！天空中掛滿了紅色的燈籠，舞龍舞獅在街上表演，鞭炮聲劈里啪啦地響著。小安興奮地跟著大家一起提燈籠遊行。',
    en: 'As evening fell, the whole town came alive. It was a traditional festival! The sky was filled with red lanterns, dragon and lion dances paraded through the streets, and firecrackers crackled and popped. Xiao An excitedly joined everyone in the lantern parade.'
  },
  {
    type: 'story',
    bg: 'page-bg-9',
    illustBg: 'illust-bg-9',
    emoji: '\uD83D\uDC74\uD83D\uDCA1\u2764\uFE0F',
    zh: '在節慶的尾聲，阿梅的阿公坐在大榕樹下，跟小安說起從前的故事。「以前的人雖然沒有手機和電腦，但大家會在晚上一起講故事、看星星。每天都過得很簡單，但心裡很踏實。」小安聽著，覺得好感動。',
    en: 'At the end of the festival, Ah Mei\'s grandpa sat under a big banyan tree and told Xiao An stories of the past. "People back then didn\'t have phones or computers, but at night everyone would tell stories together and watch the stars. Life was simple, but our hearts were full." Xiao An listened, deeply moved.'
  },
  {
    type: 'story',
    bg: 'page-bg-10',
    illustBg: 'illust-bg-10',
    emoji: '\uD83D\uDCD3\u2728\uD83C\uDFE0',
    zh: '天色漸漸暗了，日記本突然又發出了金色的光芒。小安知道，是時候回去了。他跟阿梅和大家揮手道別：「謝謝你們，我會記住這一切的！」一陣溫暖的光芒包圍了他，他又回到了阿公家的閣樓。',
    en: 'As the sky grew dark, the diary suddenly glowed golden again. Xiao An knew it was time to go back. He waved goodbye to Ah Mei and everyone, "Thank you all, I will remember everything!" A warm glow surrounded him, and he was back in Grandpa\'s attic.'
  },
  {
    type: 'end',
    bg: 'page-bg-11',
    illustBg: 'illust-bg-11',
    emoji: '\u270D\uFE0F\uD83D\uDCD6\uD83D\uDE0A',
    zh: '小安坐在書桌前，翻開那本時光日記，在最後一頁寫下：「今天我去了一百年前的台灣，那裡的人好溫暖，生活好美好。我要珍惜現在擁有的一切，也要記住那些美好的過去。」他輕輕合上日記本，心裡充滿了感恩和溫暖。',
    en: 'Xiao An sat at his desk, opened the Time Diary, and wrote on the last page: "Today I traveled to Taiwan a hundred years ago. The people there were so warm, and life was so beautiful. I want to treasure everything I have now, and remember all the beautiful things from the past." He gently closed the diary, his heart filled with gratitude and warmth.'
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
              <span class="end-cta-icon">\uD83D\uDCDA</span>
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
    <h2 style="font-size:1.3rem;font-weight:800;margin-bottom:.5rem;color:#3e2723">試閱結束</h2>
    <p style="font-size:1rem;color:#8d6e63;line-height:1.7;margin-bottom:1.5rem">免費試閱前 3 頁已結束。<br>用 LINE 登入即可閱讀完整繪本！</p>
    <a href="#" onclick="lineLoginFromGate()" style="display:inline-block;background:#06C755;color:#fff;padding:.7rem 2rem;border-radius:12px;font-size:1rem;font-weight:700;text-decoration:none;margin-bottom:.8rem">用 LINE 登入繼續閱讀</a>
    <br><a href="#" onclick="document.getElementById('demoGate').style.display='none';goToPage(0);return false" style="font-size:.85rem;color:#bcaaa4;text-decoration:underline">返回第一頁</a>
  </div>`;
  document.body.appendChild(gate);
}

function lineLoginFromGate() {
  const channelId = '2009738746';
  const redirectUri = encodeURIComponent('https://markluce.ai/api/line-auth');
  const returnUrl = encodeURIComponent(window.location.origin + '/time-travel/book.html');
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
  const colors = ['#8d6e63','#faf3e0','#fff8e1','#efebe9','#fff3e0','#fbe9e7','#f5f5dc','#fff8e1','#efebe9','#faf3e0','#fff3e0','#f5e6d0'];
  document.querySelector('meta[name="theme-color"]').content = colors[currentPage] || '#8d6e63';
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
}

function toggleAudio() {
  if (audioPlaying) {
    stopAudio();
    return;
  }

  const pageNum = currentPage + 1;
  const files = [];

  if (langMode === 'both' || langMode === 'zh') {
    files.push(`/time-travel/audio/page-${pageNum}-zh.mp3`);
  }
  if (langMode === 'both' || langMode === 'en') {
    files.push(`/time-travel/audio/page-${pageNum}-en.mp3`);
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
        if (langMode === 'both' || langMode === 'zh') files.push(`/time-travel/audio/page-${pageNum}-zh.mp3`);
        if (langMode === 'both' || langMode === 'en') files.push(`/time-travel/audio/page-${pageNum}-en.mp3`);
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
  if (langMode === 'both' || langMode === 'zh') files.push(`/time-travel/audio/page-${pageNum}-zh.mp3`);
  if (langMode === 'both' || langMode === 'en') files.push(`/time-travel/audio/page-${pageNum}-en.mp3`);
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
  navigator.serviceWorker.register('/time-travel/sw.js', { updateViaCache: 'none' });
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
