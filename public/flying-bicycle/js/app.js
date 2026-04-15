/* ============================================
   Book Reader — app.js
   飛天腳踏車 / The Flying Bicycle
   ============================================ */

// Story data
const pages = [
  {
    type: 'cover',
    bg: 'page-bg-1',
    illustBg: 'illust-bg-1',
    emoji: '\uD83D\uDEB2',
    zh: '',
    en: '',
    coverTitle: '飛天腳踏車',
    coverSubtitle: 'The Flying Bicycle',
    coverCredits: '審閱：Mark ｜ 共同編輯：Luce (AI)',
    version: 'ver 2'
  },
  {
    type: 'story',
    bg: 'page-bg-2',
    illustBg: 'illust-bg-2',
    emoji: '\uD83E\uDDD3\uD83D\uDEB2\uD83D\uDD27',
    zh: '暑假的第一天，小飛跑到爺爺家玩。車庫的角落堆滿了舊東西，她好奇地翻來翻去。突然，一塊灰色的布底下露出了一個生鏽的車把。小飛用力一拉——是一輛好舊好舊的腳踏車！',
    en: 'On the first day of summer break, Xiao Fei went to Grandpa\'s house to play. The garage corner was piled high with old things, and she rummaged around curiously. Suddenly, a rusty handlebar peeked out from under a grey cloth. She pulled hard — it was a very, very old bicycle!'
  },
  {
    type: 'story',
    bg: 'page-bg-3',
    illustBg: 'illust-bg-3',
    emoji: '\uD83E\uDDD3\u2B50\uD83D\uDEB2',
    zh: '爺爺走過來，摸了摸車把上刻著的小星星，眼睛亮了起來。「這是我小時候的寶貝，」爺爺說，「我以前總覺得，只要騎得夠快，它就能飛起來。」小飛的眼睛也亮了：「真的嗎？」',
    en: 'Grandpa walked over and touched the little star carved on the handlebars, his eyes lighting up. "This was my treasure when I was little," he said. "I always believed that if I pedaled fast enough, it could fly." Xiao Fei\'s eyes lit up too: "Really?"'
  },
  {
    type: 'story',
    bg: 'page-bg-4',
    illustBg: 'illust-bg-4',
    emoji: '\uD83D\uDCE6\u2702\uFE0F\u2728',
    zh: '小飛在回收箱裡找到了一個大紙箱。她畫了翅膀的形狀，用剪刀小心地剪下來，再用膠帶牢牢地黏在腳踏車的兩邊。鄰居阿姨經過時笑著說：「哇，好酷的發明！」',
    en: 'Xiao Fei found a big cardboard box in the recycling bin. She drew wing shapes, carefully cut them out with scissors, and taped them firmly to both sides of the bicycle. A neighbor auntie walked by and laughed, "Wow, what a cool invention!"'
  },
  {
    type: 'story',
    bg: 'page-bg-5',
    illustBg: 'illust-bg-5',
    emoji: '\uD83D\uDC36\uD83D\uDE02\uD83D\uDEB2',
    zh: '小飛站在車庫前，看著自己的作品。紙翅膀有點歪歪的，膠帶貼得到處都是，但她覺得超級帥。鄰居的小狗阿黃跑過來聞了聞，歪著頭看她，尾巴搖個不停，好像在說：「我也想坐！」',
    en: 'Xiao Fei stood in front of the garage, admiring her creation. The cardboard wings were a bit crooked, with tape everywhere, but she thought it looked super cool. The neighbor\'s dog Ah Huang ran over to sniff it, tilting his head with his tail wagging nonstop, as if saying, "I want a ride too!"'
  },
  {
    type: 'story',
    bg: 'page-bg-6',
    illustBg: 'illust-bg-6',
    emoji: '\uD83D\uDEB4\u200D\u2640\uFE0F\uD83D\uDCA8\u26F0\uFE0F',
    zh: '小飛騎上腳踏車，來到社區後面的小山坡。她深吸一口氣，用力踩下踏板，開始往下衝。風越來越大，呼呼地吹過耳邊，頭髮在風中飛舞。她越踩越快，心跳也越來越快！',
    en: 'Xiao Fei climbed onto the bicycle and rode to the small hill behind the neighborhood. She took a deep breath, pressed down hard on the pedals, and started racing downhill. The wind grew stronger, whooshing past her ears, her hair dancing in the breeze. She pedaled faster and faster, her heart pounding!'
  },
  {
    type: 'story',
    bg: 'page-bg-7',
    illustBg: 'illust-bg-7',
    emoji: '\uD83D\uDEB2\u2728\uD83D\uDE32',
    zh: '突然，前輪離開了地面！紙翅膀在風中用力拍動，整輛腳踏車慢慢往上升。小飛嚇了一跳，緊緊抓住車把。「天啊！我⋯⋯我真的在飛！」她忍不住大叫，聲音被風帶到了遠方。',
    en: 'Suddenly, the front wheel left the ground! The cardboard wings flapped hard in the wind, and the whole bicycle slowly rose upward. Xiao Fei was startled and gripped the handlebars tightly. "Oh my! I\'m... I\'m really flying!" she couldn\'t help shouting, her voice carried away by the wind.'
  },
  {
    type: 'story',
    bg: 'page-bg-8',
    illustBg: 'illust-bg-8',
    emoji: '\uD83C\uDFE0\uD83C\uDF33\u2601\uFE0F',
    zh: '腳踏車越飛越高，整個社區變得好小好小。屋頂像彩色的積木，游泳池像藍色的郵票，馬路像灰色的緞帶。小飛張開嘴巴，覺得世界好大、好美，每一樣東西從天空看都不一樣了。',
    en: 'The bicycle flew higher and higher, and the whole neighborhood shrank below. Rooftops looked like colorful building blocks, swimming pools like blue stamps, and roads like grey ribbons. Xiao Fei\'s mouth hung open — the world was so big and beautiful, everything looked different from the sky.'
  },
  {
    type: 'story',
    bg: 'page-bg-9',
    illustBg: 'illust-bg-9',
    emoji: '\uD83C\uDFEB\uD83D\uDC4B\uD83D\uDC1C',
    zh: '她看見了自己的學校！操場上有幾個小朋友在打球，從天空看，他們像一群小螞蟻在跑來跑去。「嗨——我在這裡——」小飛用力揮手大喊，可是沒有人聽見，她自己倒是笑得停不下來。',
    en: 'She spotted her school! A few kids were playing ball on the playground, and from the sky they looked like tiny ants running around. "Hey — I\'m up here —" Xiao Fei waved and shouted with all her might, but nobody heard her. She couldn\'t stop laughing at the sight.'
  },
  {
    type: 'story',
    bg: 'page-bg-10',
    illustBg: 'illust-bg-10',
    emoji: '\uD83C\uDF0A\u26F0\uFE0F\uD83C\uDF32',
    zh: '腳踏車飛過一條閃閃發光的河流。河面像一面大鏡子，小飛可以看見自己和腳踏車的倒影。對岸是一座長滿綠樹的大山，山頂被薄薄的白雲圍繞著，像戴了一頂棉花帽子。',
    en: 'The bicycle flew over a sparkling river. The water surface was like a giant mirror, and Xiao Fei could see her own reflection with the bicycle. On the other side stood a big mountain covered in green trees, its peak wrapped in thin white clouds, like wearing a cotton hat.'
  },
  {
    type: 'story',
    bg: 'page-bg-11',
    illustBg: 'illust-bg-11',
    emoji: '\uD83E\uDD85\uD83D\uDEB2\uD83D\uDDE3\uFE0F',
    zh: '一隻大老鷹飛到她身旁，金色的眼睛好奇地盯著紙翅膀看。牠繞著腳踏車飛了一圈，好像在檢查這個奇怪的飛行物。小飛大喊：「嘿，要不要比賽看誰飛得快？」老鷹尖叫一聲，拍拍翅膀衝了出去！',
    en: 'A big eagle flew up beside her, its golden eyes curiously staring at the cardboard wings. It circled around the bicycle, as if inspecting this strange flying object. Xiao Fei shouted, "Hey, wanna race and see who\'s faster?" The eagle screeched, flapped its wings, and shot forward!'
  },
  {
    type: 'story',
    bg: 'page-bg-12',
    illustBg: 'illust-bg-12',
    emoji: '\uD83C\uDFC1\uD83E\uDD85\uD83D\uDE04',
    zh: '小飛拚命踩踏板追老鷹。她們在白雲之間穿來穿去，忽上忽下，像在玩捉迷藏。雲朵軟軟的、涼涼的，碰到臉上好舒服。最後老鷹贏了，但牠停在一棵大樹上，好像在等小飛趕上來。',
    en: 'Xiao Fei pedaled furiously to chase the eagle. They weaved in and out of white clouds, soaring up and diving down, like playing hide and seek. The clouds were soft and cool, feeling wonderful against her face. The eagle won in the end, but it perched on a big tree, as if waiting for Xiao Fei to catch up.'
  },
  {
    type: 'story',
    bg: 'page-bg-13',
    illustBg: 'illust-bg-13',
    emoji: '\uD83C\uDF2C\uFE0F\uD83D\uDE28\uD83D\uDEB2',
    zh: '突然一陣強風吹來，腳踏車猛烈搖晃！左邊的紙翅膀被吹得快要掉下來。小飛嚇得心跳加速，雙手緊緊握住車把。她想起爺爺常說的話：「騎車最重要的就是平衡，身體放鬆，眼睛看前方。」',
    en: 'Suddenly a powerful gust of wind hit, and the bicycle shook violently! The left cardboard wing was nearly blown off. Xiao Fei\'s heart raced with fear, and she gripped the handlebars with all her strength. She remembered what Grandpa always said: "The most important thing about riding is balance — relax your body and keep your eyes forward."'
  },
  {
    type: 'story',
    bg: 'page-bg-14',
    illustBg: 'illust-bg-14',
    emoji: '\uD83D\uDEB2\u2696\uFE0F\uD83D\uDE0C',
    zh: '小飛慢慢放鬆肩膀，輕輕調整身體的重心。往左一點、往右一點，就像在騎腳踏車過彎一樣。腳踏車漸漸不再搖晃，穩穩地在天空中滑行。「我學會了！用平衡來轉彎！」她興奮地喊。',
    en: 'Xiao Fei slowly relaxed her shoulders and gently shifted her weight. A little left, a little right, just like leaning into a turn on a bicycle. The bicycle gradually stopped wobbling and glided steadily through the sky. "I figured it out! I steer with balance!" she shouted excitedly.'
  },
  {
    type: 'story',
    bg: 'page-bg-15',
    illustBg: 'illust-bg-15',
    emoji: '\uD83C\uDF05\uD83C\uDF3E\uD83D\uDEB2',
    zh: '太陽慢慢變成橘紅色，天空染上了美麗的晚霞。小飛知道該回家了。她輕輕降低高度，對準一片金黃色的稻田。「咚！」輪胎碰到泥土，畫出兩條長長的線。紙翅膀皺巴巴的，但小飛覺得它們是全世界最美的翅膀。',
    en: 'The sun slowly turned orange-red, painting the sky with beautiful sunset colors. Xiao Fei knew it was time to go home. She gently lowered her altitude and aimed for a golden rice field. "Thud!" The tires touched the dirt, drawing two long lines. The cardboard wings were all crumpled, but Xiao Fei thought they were the most beautiful wings in the whole world.'
  },
  {
    type: 'end',
    bg: 'page-bg-16',
    illustBg: 'illust-bg-16',
    emoji: '\uD83D\uDCA1\uD83D\uDEB2\u2728',
    zh: '回到家，小飛把紙翅膀小心地掛在房間的牆上。爺爺問：「今天玩得開心嗎？」小飛笑著抱住爺爺說：「爺爺，我發現了一個大秘密——只要有想像力，再加上一點點努力，什麼事情都有可能！」',
    en: 'Back home, Xiao Fei carefully hung the cardboard wings on her bedroom wall. Grandpa asked, "Did you have fun today?" Xiao Fei hugged him with a big smile and said, "Grandpa, I discovered a huge secret — with imagination and a little bit of effort, anything is possible!"'
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
  const returnUrl = encodeURIComponent(window.location.origin + '/flying-bicycle/book.html');
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
  const colors = ['#42a5f5','#e8eaf6','#fff3e0','#e3f2fd','#f3e5f5','#fff8e1','#e0f7fa','#e8f5e9','#e3f2fd','#fff3e0','#e0f2f1','#fce4ec','#e8eaf6','#f1f8e9','#fbe9e7','#fff3e0'];
  document.querySelector('meta[name="theme-color"]').content = colors[currentPage] || '#42a5f5';
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
    files.push(`/flying-bicycle/audio/page-${pageNum}-zh.mp3`);
  }
  if (langMode === 'both' || langMode === 'en') {
    files.push(`/flying-bicycle/audio/page-${pageNum}-en.mp3`);
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
        if (langMode === 'both' || langMode === 'zh') files.push(`/flying-bicycle/audio/page-${pageNum}-zh.mp3`);
        if (langMode === 'both' || langMode === 'en') files.push(`/flying-bicycle/audio/page-${pageNum}-en.mp3`);
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
  if (langMode === 'both' || langMode === 'zh') files.push(`/flying-bicycle/audio/page-${pageNum}-zh.mp3`);
  if (langMode === 'both' || langMode === 'en') files.push(`/flying-bicycle/audio/page-${pageNum}-en.mp3`);
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
  navigator.serviceWorker.register('/flying-bicycle/sw.js', { updateViaCache: 'none' });
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
