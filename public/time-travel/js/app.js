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
    version: 'ver 2'
  },
  {
    type: 'story',
    bg: 'page-bg-2',
    illustBg: 'illust-bg-2',
    emoji: '\uD83C\uDFE0\uD83D\uDCD3\u2728',
    zh: '放暑假的第一天，小安跟著爸媽回阿公家。他在閣樓的舊木箱裡，發現了一本泛黃的日記本。封面用金色的字寫著「時光日記」，角落還畫了一個小小的時鐘。小安的手指輕輕撫過封面，感覺日記本微微發燙。',
    en: 'On the first day of summer vacation, Xiao An went with his parents to visit Grandpa. In an old wooden chest in the attic, he found a yellowed diary. Its cover read "Time Diary" in golden letters, with a tiny clock drawn in the corner. As Xiao An\'s fingers gently touched the cover, the diary felt warm.'
  },
  {
    type: 'story',
    bg: 'page-bg-3',
    illustBg: 'illust-bg-3',
    emoji: '\uD83D\uDCD6\uD83C\uDF00\uD83C\uDF1F',
    zh: '小安翻開日記本的第一頁，突然間金色的光芒噴湧而出！閣樓的天花板像漩渦一樣旋轉，他的身體變得好輕好輕。等光芒散去，小安發現自己站在一條泥土路上，空氣中飄著稻草和花生的香味。',
    en: 'Xiao An opened the diary to the first page, and suddenly golden light burst out! The attic ceiling swirled like a whirlpool, and his body felt weightless. When the light faded, Xiao An found himself standing on a dirt road, with the scent of straw and peanuts floating in the air.'
  },
  {
    type: 'story',
    bg: 'page-bg-4',
    illustBg: 'illust-bg-4',
    emoji: '\uD83D\uDE82\uD83D\uDCA8\uD83D\uDE32',
    zh: '「嗚——嗚——」一陣響亮的汽笛聲從遠方傳來。小安轉頭一看，一列黑色的蒸汽火車正冒著白煙，慢慢地駛過田野。火車頭好大好壯觀！小安從來沒有看過真正的蒸汽火車，他興奮地拍著手跳了起來。',
    en: '"Woo—woo—" A loud whistle sounded from far away. Xiao An turned and saw a black steam train puffing white smoke, slowly chugging across the fields. The locomotive was huge and magnificent! Xiao An had never seen a real steam train before. He clapped his hands and jumped up with excitement.'
  },
  {
    type: 'story',
    bg: 'page-bg-5',
    illustBg: 'illust-bg-5',
    emoji: '\uD83E\uDDD1\u200D\uD83C\uDF3E\uD83C\uDFEA\uD83E\uDD5C',
    zh: '小安跟著人群走進熱鬧的傳統市場。攤販阿婆用竹籃裝著綠油油的蔬菜，隔壁攤子的阿伯正在炸著金黃色的蔥油餅。地上鋪著草蓆，上面擺滿了手工編的草帽和竹扇。小安的肚子咕嚕咕嚕叫了起來。',
    en: 'Xiao An followed the crowd into a bustling traditional market. An old lady sold bright green vegetables from bamboo baskets, while the uncle next door was frying golden scallion pancakes. Straw mats on the ground displayed handmade straw hats and bamboo fans. Xiao An\'s stomach began to rumble.'
  },
  {
    type: 'story',
    bg: 'page-bg-6',
    illustBg: 'illust-bg-6',
    emoji: '\uD83D\uDC67\uD83D\uDC4B\uD83D\uDE04',
    zh: '「你的衣服好奇怪喔！你從哪裡來的？」一個紮著辮子的女孩好奇地看著小安。「我⋯⋯我叫小安。」「我叫阿梅！走，我帶你去吃碗粿，很好吃的！」阿梅大方地拉著小安的手，帶他穿過市場的小巷。',
    en: '"Your clothes are so strange! Where are you from?" A girl with braids looked curiously at Xiao An. "I... my name is Xiao An." "I\'m Ah Mei! Come on, I\'ll take you to try rice cakes—they\'re delicious!" Ah Mei cheerfully grabbed Xiao An\'s hand and led him through the market alleys.'
  },
  {
    type: 'story',
    bg: 'page-bg-7',
    illustBg: 'illust-bg-7',
    emoji: '\u270D\uFE0F\uD83C\uDFA8\uD83D\uDCD6',
    zh: '吃完碗粿後，阿梅帶小安到私塾門口偷看。先生正在教小朋友寫毛筆字。「你想試試看嗎？」阿梅悄悄遞給小安一枝毛筆。小安學著蘸墨汁，歪歪扭扭地寫了一個「安」字。阿梅笑著說：「寫得不錯嘛！」',
    en: 'After eating, Ah Mei took Xiao An to peek at the village school. The teacher was showing children calligraphy. "Want to try?" Ah Mei whispered, handing him a brush. Xiao An dipped it in ink and wrote a wobbly character for "An"—his own name. Ah Mei grinned and said, "Not bad at all!"'
  },
  {
    type: 'story',
    bg: 'page-bg-8',
    illustBg: 'illust-bg-8',
    emoji: '\uD83C\uDFAD\uD83E\uDE86\uD83D\uDE02',
    zh: '午後，廟口擠滿了人。原來是布袋戲開演了！操偶師傅躲在戲台後面，用不同的聲音扮演英雄和壞蛋。戲偶在他的手中又跳又翻，像真的在打架一樣。小安和阿梅看得哈哈大笑，拍手叫好。',
    en: 'In the afternoon, the temple square was packed with people. A puppet show was starting! The puppet master hid behind the stage, using different voices for heroes and villains. The puppets leaped and flipped in his hands, as if truly fighting. Xiao An and Ah Mei laughed and cheered with delight.'
  },
  {
    type: 'story',
    bg: 'page-bg-9',
    illustBg: 'illust-bg-9',
    emoji: '\uD83D\uDC75\uD83C\uDF5A\uD83E\uDD62',
    zh: '阿梅帶小安回家，阿嬤正在做麻糬。她把蒸好的糯米倒進石臼裡，讓小安拿木杵用力搗。「搗越久越Q喔！加油！」阿嬤一邊翻糯米一邊說。小安搗得滿頭大汗，但捏好的麻糬沾上花生粉，一口咬下去，又甜又軟！',
    en: 'Ah Mei brought Xiao An home, where Grandma was making mochi. She poured steamed sticky rice into a stone mortar and let Xiao An pound it with a wooden mallet. "The longer you pound, the chewier it gets! Keep going!" Grandma said, turning the rice. Xiao An was dripping with sweat, but when he bit into the mochi coated with peanut powder, it was sweet and soft!'
  },
  {
    type: 'story',
    bg: 'page-bg-10',
    illustBg: 'illust-bg-10',
    emoji: '\uD83C\uDFEE\uD83D\uDC32\uD83C\uDF86',
    zh: '傍晚時分，鞭炮聲劈里啪啦響了起來，原來今天是廟會！街上掛滿了紅燈籠，舞龍隊伍在鑼鼓聲中穿街而過。小安提著阿梅做的小燈籠，跟著大家一起遊行。夜空中綻放的煙火把每個人的臉都照得好亮好亮。',
    en: 'As evening came, firecrackers crackled and popped—it was a temple festival! Red lanterns hung everywhere, and a dragon dance troupe paraded through streets to the beat of drums. Xiao An carried a small lantern Ah Mei had made, joining the parade. Fireworks bloomed in the night sky, lighting up everyone\'s faces.'
  },
  {
    type: 'story',
    bg: 'page-bg-11',
    illustBg: 'illust-bg-11',
    emoji: '\uD83C\uDF19\uD83D\uDC74\u2B50',
    zh: '廟會結束後，阿梅的阿公坐在大榕樹下乘涼。他摸摸小安的頭說：「孩子，以前我們沒有電燈，晚上就看星星講故事。日子雖然辛苦，但鄰居像家人一樣互相幫忙。」小安望著滿天星斗，心裡覺得好溫暖。',
    en: 'After the festival, Ah Mei\'s grandpa sat under a big banyan tree to cool off. He patted Xiao An\'s head and said, "Child, we had no electric lights back then. At night, we watched stars and told stories. Life was hard, but neighbors helped each other like family." Xiao An gazed at the starry sky, feeling warm inside.'
  },
  {
    type: 'story',
    bg: 'page-bg-12',
    illustBg: 'illust-bg-12',
    emoji: '\uD83D\uDCA1\uD83D\uDCD3\u2728',
    zh: '突然，小安口袋裡的日記本開始發光。他知道，時光旅行要結束了。「我要走了⋯⋯」小安的眼眶紅了。阿梅塞給他一個手編的竹蜻蜓：「帶著這個，就不會忘記我了！」小安緊緊握住竹蜻蜓，用力點了點頭。',
    en: 'Suddenly, the diary in Xiao An\'s pocket began to glow. He knew the time travel was ending. "I have to go..." Xiao An\'s eyes turned red. Ah Mei pressed a handmade bamboo dragonfly into his palm. "Take this, so you won\'t forget me!" Xiao An gripped the bamboo dragonfly tightly and nodded hard.'
  },
  {
    type: 'story',
    bg: 'page-bg-13',
    illustBg: 'illust-bg-13',
    emoji: '\uD83C\uDF00\uD83C\uDFE0\uD83D\uDE22',
    zh: '一道溫暖的金光包圍了小安，世界再次旋轉。等他睜開眼睛，他已經回到了阿公家的閣樓。手裡還緊緊握著那隻竹蜻蜓。他把竹蜻蜓放在鼻子前聞了聞，還有一點點竹子和花生粉的味道。一百年前的一切，都是真的！',
    en: 'A warm golden light surrounded Xiao An, and the world spun again. When he opened his eyes, he was back in Grandpa\'s attic, still clutching the bamboo dragonfly. He held it to his nose and sniffed—it still smelled faintly of bamboo and peanut powder. Everything from a hundred years ago had been real!'
  },
  {
    type: 'story',
    bg: 'page-bg-14',
    illustBg: 'illust-bg-14',
    emoji: '\uD83D\uDE0A\u2764\uFE0F\uD83C\uDF3F',
    zh: '小安跑下樓，抱住正在泡茶的阿公。「阿公，以前的台灣好美好溫暖喔！」阿公笑著說：「那些美好的東西，其實一直都在我們心裡啊。」小安把竹蜻蜓放在書桌上，決定好好珍惜身邊的每一個人、每一件事。',
    en: 'Xiao An ran downstairs and hugged Grandpa, who was making tea. "Grandpa, Taiwan in the old days was so beautiful and warm!" Grandpa smiled and said, "Those beautiful things have always been in our hearts." Xiao An placed the bamboo dragonfly on his desk, deciding to treasure every person and every moment around him.'
  },
  {
    type: 'end',
    bg: 'page-bg-15',
    illustBg: 'illust-bg-15',
    emoji: '\u270D\uFE0F\uD83D\uDCD6\uD83D\uDE0A',
    zh: '那天晚上，小安坐在書桌前，翻開時光日記，在空白的一頁認真地寫下：「今天我去了一百年前的台灣。我學會了寫毛筆字、搗麻糬，還交到了一個好朋友。我要把這些故事寫下來，讓更多人知道從前的美好。」',
    en: 'That night, Xiao An sat at his desk, opened the Time Diary, and carefully wrote on a blank page: "Today I traveled to Taiwan one hundred years ago. I learned calligraphy, made mochi, and found a wonderful friend. I want to write down these stories so more people can know the beauty of the past."'
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
  const colors = ['#8d6e63','#faf3e0','#fff8e1','#efebe9','#fff3e0','#fbe9e7','#f5f5dc','#fff8e1','#efebe9','#faf3e0','#fff3e0','#fbe9e7','#fff8e1','#efebe9','#faf3e0','#f5e6d0'];
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
