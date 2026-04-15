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
    zh: 'Max 是一個十二歲的男孩，住在一棟老舊公寓的頂樓。他的房間很小，但窗戶正對著無邊無際的夜空。從小，他就對宇宙充滿了無法抑制的好奇心，總覺得星星在對他說話。',
    en: 'Max was a twelve-year-old boy who lived on the top floor of an old apartment building. His room was small, but his window faced the endless night sky. Ever since he was little, he had felt an unstoppable curiosity about the universe, always sensing that the stars were speaking to him.'
  },
  {
    type: 'story',
    bg: 'page-bg-3',
    illustBg: 'illust-bg-3',
    emoji: '🌙🔭📓',
    zh: '每天晚上，Max 都會架起他那台舊望遠鏡，趴在窗台上觀察星空。他有一本厚厚的太空日誌，裡面畫滿了星座圖和他想像中的外星生物。「總有一天，我要親眼看看那些星球。」他在日誌的第一頁寫下了這句話。',
    en: 'Every night, Max would set up his old telescope and lean on the windowsill to observe the stars. He kept a thick space journal filled with constellation maps and drawings of imaginary alien creatures. "Someday, I will see those planets with my own eyes." He had written this sentence on the very first page of his journal.'
  },
  {
    type: 'story',
    bg: 'page-bg-4',
    illustBg: 'illust-bg-4',
    emoji: '💻🔵✨',
    zh: '一個平凡的星期三晚上，Max 正在整理望遠鏡的觀測數據。突然，他的電腦螢幕閃爍起來，發出一道耀眼的藍色光芒。光芒越來越亮，整個房間都被照成了深海一般的藍色。Max 嚇得往後退了一步，心臟怦怦直跳。',
    en: 'On an ordinary Wednesday night, Max was organizing his telescope observation data. Suddenly, his computer screen began to flicker, emitting a dazzling blue glow. The light grew brighter and brighter until the entire room was bathed in a deep ocean blue. Max stumbled back a step, his heart pounding in his chest.'
  },
  {
    type: 'story',
    bg: 'page-bg-5',
    illustBg: 'illust-bg-5',
    emoji: '🤖💫🌀',
    zh: '一個閃著銀光的球體從螢幕中緩緩飄出，在空中優雅地旋轉。「你好，Max。我是 Nova，你的 AI 太空探險夥伴。」Nova 的聲音溫暖而清晰。「我追蹤你的星空觀測日誌已經三年了。你的好奇心和毅力，讓我決定選擇你。」',
    en: 'A silver-glowing orb slowly floated out of the screen, spinning gracefully in the air. "Hello, Max. I am Nova, your AI space exploration partner." Nova\'s voice was warm and clear. "I have been tracking your stargazing journal for three years. Your curiosity and determination made me choose you."'
  },
  {
    type: 'story',
    bg: 'page-bg-6',
    illustBg: 'illust-bg-6',
    emoji: '🛸🌟🚪',
    zh: 'Nova 在房間中央投射出一艘銀色太空船的全息影像，每一個細節都精緻得令人屏息。「這是『星際漫遊者號』，我專門為你設計的太空船。」Max 伸手觸碰影像，指尖穿過微微發光的粒子。太空船的艙門緩緩打開，一道白光從裡面傾瀉而出。「你準備好了嗎？」Nova 問道。',
    en: 'Nova projected a hologram of a silver spaceship in the center of the room, every detail breathtakingly precise. "This is the Star Wanderer, a spaceship designed especially for you." Max reached out to touch the hologram, his fingertips passing through softly glowing particles. The ship\'s hatch slowly opened, and a beam of white light poured out from inside. "Are you ready?" Nova asked.'
  },
  {
    type: 'story',
    bg: 'page-bg-7',
    illustBg: 'illust-bg-7',
    emoji: '🚀🌍💺',
    zh: 'Max 深吸一口氣，踏進了太空船。駕駛艙裡佈滿了閃爍的儀表板和透明的觸控螢幕。他坐進柔軟的座椅，安全帶自動扣上。「星際漫遊者號，準備發射。」Nova 的聲音在艙內迴盪。引擎發出低沉的轟鳴，太空船穿過屋頂，衝向滿天繁星。Max 回頭看了一眼越來越小的城市燈火，興奮得幾乎忘記呼吸。',
    en: 'Max took a deep breath and stepped into the spaceship. The cockpit was covered with flickering dashboards and transparent touch screens. He sank into the soft seat, and the seatbelt fastened automatically. "Star Wanderer, prepare for launch." Nova\'s voice echoed through the cabin. The engine let out a deep rumble, and the ship burst through the roof, soaring toward the star-filled sky. Max glanced back at the shrinking city lights below, so thrilled he almost forgot to breathe.'
  },
  {
    type: 'story',
    bg: 'page-bg-8',
    illustBg: 'illust-bg-8',
    emoji: '🔴🏜️🌅',
    zh: '他們的第一站是火星。太空船降落在一片廣闘的紅色沙漠上，風沙輕輕拍打著艙壁。Max 穿上太空衣，踏上了火星的土地。腳下的沙土發出細微的嘎吱聲。遠處，水手號峽谷在夕陽下閃耀著金色與橙色交織的光芒，彷彿大地裂開了一道巨大的傷口。',
    en: 'Their first stop was Mars. The spaceship landed on a vast red desert, with wind and sand gently tapping against the hull. Max put on his spacesuit and stepped onto Martian soil. The sand beneath his feet made a soft crunching sound. In the distance, the Valles Marineris canyon shimmered with intertwined golden and orange light under the setting sun, as if the earth had split open with an enormous wound.'
  },
  {
    type: 'story',
    bg: 'page-bg-9',
    illustBg: 'illust-bg-9',
    emoji: '🏛️🔍🗿',
    zh: 'Nova 引導 Max 走向一處半埋在沙土中的古老遺跡。石柱上刻著奇特的幾何圖案，像是某種未知文明留下的訊息。「這些圖案的排列方式符合數學中的費波那契數列。」Nova 分析道。Max 蹲下來仔細觀察，用日誌記錄下每一個符號。「這代表火星上曾經有智慧生命嗎？」他問道，聲音因為激動而微微顫抖。',
    en: 'Nova guided Max toward ancient ruins half-buried in the sand. The stone pillars were carved with strange geometric patterns, like messages left behind by an unknown civilization. "The arrangement of these patterns follows the Fibonacci sequence in mathematics." Nova analyzed. Max crouched down to observe carefully, recording every symbol in his journal. "Does this mean there was once intelligent life on Mars?" he asked, his voice trembling slightly with excitement.'
  },
  {
    type: 'story',
    bg: 'page-bg-10',
    illustBg: 'illust-bg-10',
    emoji: '🌊🐠💎',
    zh: '離開火星後，他們飛向了木星的衛星——歐羅巴。太空船穿透了歐羅巴厚達數公里的冰層，進入了一片黑暗的地下海洋。突然間，四周亮了起來。無數發光的生物在水中游動，散發著藍色、綠色和紫色的螢光。它們的形狀像是水母和海星的結合體，優雅地在水中旋轉舞動。',
    en: 'After leaving Mars, they flew to Jupiter\'s moon Europa. The spaceship pierced through Europa\'s ice layer, which was several kilometers thick, and entered a dark underground ocean. Suddenly, the surroundings lit up. Countless bioluminescent creatures swam through the water, radiating blue, green, and purple fluorescence. They were shaped like a combination of jellyfish and starfish, spinning and dancing gracefully through the water.'
  },
  {
    type: 'story',
    bg: 'page-bg-11',
    illustBg: 'illust-bg-11',
    emoji: '🔬🧬📡',
    zh: '「這是人類從未見過的生命形態！」Max 興奮地按下記錄按鈕，攝影機捕捉著每一個畫面。Nova 掃描了其中一隻生物的生物特徵。「牠們用光來溝通，就像我們用語言一樣。」Max 看著那些光點閃爍的節奏，心想：即使在最黑暗的地方，生命也能找到綻放的方式。',
    en: '"These are life forms humans have never seen before!" Max exclaimed excitedly as he pressed the record button, the camera capturing every frame. Nova scanned the biological signature of one of the creatures. "They communicate using light, just like we use language." Max watched the flickering rhythm of those glowing dots and thought: even in the darkest places, life finds a way to bloom.'
  },
  {
    type: 'story',
    bg: 'page-bg-12',
    illustBg: 'illust-bg-12',
    emoji: '☄️💨🛡️',
    zh: '回到太空中，星際漫遊者號駛入了小行星帶。大大小小的岩石在四面八方翻滾飛行，場面驚險萬分。突然，一顆巨大的隕石朝他們的方向猛衝過來！警報聲在駕駛艙中刺耳地響起。Max 緊握座椅扶手，指節因用力而發白。',
    en: 'Back in space, the Star Wanderer entered the asteroid belt. Rocks of all sizes tumbled and flew in every direction, creating a terrifying scene. Suddenly, a massive meteorite came hurtling straight toward them. Alarm sirens blared shrilly through the cockpit. Max gripped the armrests of his seat, his knuckles turning white from the pressure.'
  },
  {
    type: 'story',
    bg: 'page-bg-13',
    illustBg: 'illust-bg-13',
    emoji: '⚡🎯🌀',
    zh: '「別擔心，Max。我的反應速度是人類的一萬倍。」Nova 的聲音沉穩而自信。她瞬間計算出了三十七條可能的閃避路線，選擇了最安全的一條。太空船急速翻轉，貼著隕石的表面擦過，Max 甚至能看到岩石上細小的裂紋。「太帥了！」Max 大喊，恐懼已經被腎上腺素取代。「有你在，我什麼都不怕。」',
    en: '"Don\'t worry, Max. My reaction time is ten thousand times faster than a human\'s." Nova\'s voice was steady and confident. She instantly calculated thirty-seven possible evasion routes and chose the safest one. The spaceship flipped rapidly, grazing past the surface of the meteorite so closely that Max could see the tiny cracks in the rock. "That was awesome!" Max shouted, his fear already replaced by adrenaline. "With you around, I am not afraid of anything."'
  },
  {
    type: 'story',
    bg: 'page-bg-14',
    illustBg: 'illust-bg-14',
    emoji: '🟣🌌🛸',
    zh: '穿越小行星帶後，Nova 偵測到一顆未登錄在任何星圖上的神秘星球。它散發著幽幽的紫色光芒，像一顆漂浮在宇宙中的巨大寶石。「這顆星球沒有任何紀錄。我們可能是第一批到達這裡的探險者。」Nova 說道。Max 的眼睛閃爍著光芒。「那我們一定要下去看看！」',
    en: 'After passing through the asteroid belt, Nova detected a mysterious planet that was not registered on any star chart. It radiated a faint purple glow, like a giant gemstone floating in the cosmos. "This planet has no records. We might be the first explorers to ever reach this place." Nova said. Max\'s eyes sparkled with excitement. "Then we absolutely have to go down and explore!"'
  },
  {
    type: 'story',
    bg: 'page-bg-15',
    illustBg: 'illust-bg-15',
    emoji: '🍄🔮🌿',
    zh: '太空船降落在紫色星球的表面。這裡的天空是深邃的紫色，三顆不同大小的月亮同時掛在天際。地面覆蓋著巨大的發光蘑菇，有的高達十公尺，發出溫暖的金色和藍色光芒。空氣中飄浮著像螢火蟲一樣的微小光點，輕輕落在 Max 的太空衣上。整個世界看起來像是一幅活生生的奇幻畫作。',
    en: 'The spaceship landed on the surface of the purple planet. The sky here was a deep violet, with three moons of different sizes hanging in the sky at the same time. The ground was covered with enormous glowing mushrooms, some as tall as ten meters, emitting warm golden and blue light. Tiny glowing dots like fireflies floated through the air, gently landing on Max\'s spacesuit. The entire world looked like a living fantasy painting.'
  },
  {
    type: 'story',
    bg: 'page-bg-16',
    illustBg: 'illust-bg-16',
    emoji: '🌬️💚🏠',
    zh: 'Nova 分析了這顆星球的大氣成分。「氧氣含量百分之二十一點三，氮氣百分之七十八點一，非常接近地球。」她停頓了一下，又說：「而且土壤中含有豐富的有機物質。」Max 摘下頭盔，小心翼翼地吸了一口氣。空氣清新而甜美，帶著一絲蘑菇獨特的香氣。「也許有一天，人類可以在這裡建立第二個家園。」他輕聲說道。',
    en: 'Nova analyzed the atmospheric composition of the planet. "Oxygen content is twenty-one point three percent, nitrogen is seventy-eight point one percent, very close to Earth." She paused and added, "Moreover, the soil contains abundant organic matter." Max removed his helmet and carefully took a breath. The air was fresh and sweet, carrying a subtle fragrance unique to the mushrooms. "Perhaps someday, humans could build a second home here." he whispered softly.'
  },
  {
    type: 'story',
    bg: 'page-bg-17',
    illustBg: 'illust-bg-17',
    emoji: '🌠🪐💫',
    zh: '回程的路上，Max 坐在駕駛艙的觀景窗前，望著窗外無盡的星河。數十億顆星星組成的銀河系在他眼前緩緩流動，像一條光之河流。他想起了火星上神秘的遺跡、歐羅巴海洋中發光的生命、小行星帶中驚心動魄的冒險，還有那顆美麗的紫色星球。每一個發現都讓他更加確信：宇宙中還有太多太多等待被探索的奇蹟。',
    en: 'On the journey home, Max sat by the cockpit\'s observation window, gazing at the endless galaxy outside. Billions of stars forming the Milky Way flowed slowly before his eyes, like a river of light. He recalled the mysterious ruins on Mars, the glowing creatures in Europa\'s ocean, the heart-pounding adventure through the asteroid belt, and that beautiful purple planet. Every discovery made him even more certain: there were far too many wonders in the universe still waiting to be explored.'
  },
  {
    type: 'story',
    bg: 'page-bg-18',
    illustBg: 'illust-bg-18',
    emoji: '🧑‍🚀💭🔬',
    zh: '「Nova，謝謝你帶我看到這一切。」Max 的聲音帶著深深的感動。Nova 在他身旁安靜地閃爍著藍光。「這趟旅程改變了我。我決定了——長大後我要成為一名太空科學家。」他握緊拳頭，目光堅定。「我要讓更多人有機會看到我今晚看到的一切。我要讓太空探索不再只是夢想。」',
    en: '"Nova, thank you for showing me all of this." Max\'s voice was filled with deep emotion. Nova flickered quietly with blue light beside him. "This journey has changed me. I have decided — when I grow up, I am going to become a space scientist." He clenched his fist, his gaze determined. "I want to give more people the chance to see everything I saw tonight. I want to make space exploration more than just a dream."'
  },
  {
    type: 'story',
    bg: 'page-bg-19',
    illustBg: 'illust-bg-19',
    emoji: '📓🔵🌍',
    zh: '回到地球後，Max 坐在書桌前，把這次冒險的每一個發現都仔細記錄在他的太空日誌裡。火星遺跡的幾何圖案、歐羅巴生物的光語密碼、紫色星球的大氣數據——每一頁都承載著一個嶄新的發現。而 Nova 靜靜地浮在書桌旁，閃著溫暖的藍光，像一位忠實的朋友守候在身邊。',
    en: 'Back on Earth, Max sat at his desk and carefully recorded every discovery from the adventure in his space journal. The geometric patterns of the Martian ruins, the light-language codes of Europa\'s creatures, the atmospheric data of the purple planet — every page carried a brand new discovery. Nova floated quietly beside his desk, glowing with a warm blue light, like a faithful friend keeping watch nearby.'
  },
  {
    type: 'end',
    bg: 'page-bg-20',
    illustBg: 'illust-bg-20',
    emoji: '🌟🚀🔭',
    zh: 'Max 合上日誌，走到窗邊，再次仰望星空。那些星星不再只是遙遠的光點——它們是等待被探索的世界、等待被解開的謎題、等待被發現的生命。他微微一笑，心中充滿了前所未有的決心。「Nova，準備好了嗎？」他問。Nova 閃了閃光。「隨時準備好了，Max。下一次，我們去更遠的地方。」',
    en: 'Max closed his journal and walked to the window, looking up at the stars once more. Those stars were no longer just distant points of light — they were worlds waiting to be explored, mysteries waiting to be solved, life waiting to be discovered. He smiled softly, his heart filled with a determination he had never felt before. "Nova, are you ready?" he asked. Nova flickered brightly. "Always ready, Max. Next time, we will go even farther."'
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
  const colors = ['#1a237e','#0d1b2a','#1a237e','#0d1b2a','#1a237e','#263238','#1a237e','#bf360c','#4e342e','#006064','#004d40','#212121','#37474f','#1a0033','#4a148c','#2e7d32','#0d1b2a','#1a237e','#1b5e20','#0d47a1'];
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
window.goToPage = goToPage;
window.lineLoginFromGate = lineLoginFromGate;
