/* ============================================
   Book Reader — app.js
   未來城市 / Future City
   Vertical scroll layout
   ============================================ */

// Story data
const pages = [
  {
    type: 'cover',
    bg: 'page-bg-1',
    illustBg: 'illust-bg-1',
    emoji: '🏙️',
    zh: '',
    en: '',
    coverTitle: '未來城市',
    coverSubtitle: 'Future City',
    coverCredits: '審閱：Mark ｜ 共同編輯：Luce (AI)',
    version: 'ver 2'
  },
  {
    type: 'story',
    bg: 'page-bg-2',
    illustBg: 'illust-bg-2',
    emoji: '🏆🎨👧',
    zh: '2060 年，十二歲的小澄站在全國城市設計大賽的舞台上，面對三百多名參賽者。她的心臟怦怦跳，手裡緊握著那份花了整整一年設計的藍圖——一座會呼吸的城市。',
    en: 'In the year 2060, twelve-year-old Xiao Cheng stood on the stage of the National City Design Competition, facing over three hundred contestants. Her heart pounded as she clutched the blueprint she had spent an entire year designing — a city that could breathe.'
  },
  {
    type: 'story',
    bg: 'page-bg-3',
    illustBg: 'illust-bg-3',
    emoji: '📐💡🌟',
    zh: '當評審宣布冠軍的名字時，全場安靜了一秒，然後爆出雷鳴般的掌聲。小澄不敢相信自己的耳朵——她贏了！評審說：「這是我們見過最大膽、最有遠見的城市設計。」',
    en: 'When the judges announced the winner, the hall fell silent for a moment, then erupted in thunderous applause. Xiao Cheng could not believe her ears — she had won! The head judge declared, "This is the most daring and visionary city design we have ever seen."'
  },
  {
    type: 'story',
    bg: 'page-bg-4',
    illustBg: 'illust-bg-4',
    emoji: '🌳🏢🌿',
    zh: '她的設計核心是「活建築」——每一棟大樓都像一棵巨大的樹木。牆壁由生物混凝土製成，能隨著溫度自動調節厚度。陽台像樹枝一樣向外伸展，隨著季節改變形狀，夏天展開遮陽，冬天收攏保暖。',
    en: 'The core of her design was "living architecture" — every building grew like a giant tree. The walls were made of bio-concrete that automatically adjusted thickness based on temperature. Balconies stretched outward like branches, changing shape with the seasons — spreading wide for summer shade and folding inward for winter warmth.'
  },
  {
    type: 'story',
    bg: 'page-bg-5',
    illustBg: 'illust-bg-5',
    emoji: '🧬🏗️🔬',
    zh: '這些建築物的根基深入地下三十公尺，像真正的樹根一樣吸收地下水來冷卻整棟大樓。建築表面佈滿了微小的氣孔，能過濾空氣中的汙染物，把髒空氣變成乾淨的氧氣。',
    en: 'The foundations of these buildings reached thirty meters underground, absorbing groundwater to cool the entire structure just like real tree roots. The building surfaces were covered with tiny pores that filtered pollutants from the air, transforming dirty air into clean oxygen.'
  },
  {
    type: 'story',
    bg: 'page-bg-6',
    illustBg: 'illust-bg-6',
    emoji: '☀️🍃💡',
    zh: '最令人驚嘆的是太陽能葉片系統。數百萬片人造葉子覆蓋在每棟建築的外牆上，白天像向日葵一樣追蹤太陽，將光能轉化為電力。一棟大樓產生的電力足夠供應整個社區使用。',
    en: 'The most astonishing feature was the solar leaf system. Millions of artificial leaves covered every building exterior, tracking the sun like sunflowers during the day and converting light into electricity. A single building generated enough power to supply an entire neighborhood.'
  },
  {
    type: 'story',
    bg: 'page-bg-7',
    illustBg: 'illust-bg-7',
    emoji: '🌙✨🏮',
    zh: '到了夜晚，這些太陽能葉片會發出柔和的光芒——有的是金色，有的是翠綠色，有的是淡藍色。整座城市不需要路燈，因為建築物本身就是最美的光源，像一片會發光的魔幻森林。',
    en: 'At night, the solar leaves emitted a soft glow — some golden, some emerald green, some pale blue. The entire city needed no streetlights because the buildings themselves were the most beautiful light source, like a magical luminous forest.'
  },
  {
    type: 'story',
    bg: 'page-bg-8',
    illustBg: 'illust-bg-8',
    emoji: '🌊🐟🛤️',
    zh: '在小澄的城市裡，所有的馬路都被拆除了，取而代之的是縱橫交錯的河流水道。清澈的河水從山上自然流下，穿過每一個街區。河底鋪著特殊的淨水石，讓水永遠保持透明。魚群在水中自由穿梭，河岸邊種滿了開花的植物。',
    en: 'In Xiao Cheng\'s city, all roads were removed and replaced by a network of intersecting river channels. Crystal-clear water flowed naturally from the mountains, winding through every block. The riverbeds were lined with special purification stones that kept the water forever transparent. Schools of fish swam freely while flowering plants lined every bank.'
  },
  {
    type: 'story',
    bg: 'page-bg-9',
    illustBg: 'illust-bg-9',
    emoji: '🚤🌉💧',
    zh: '人們搭乘安靜的太陽能小船在河道上穿梭，或是走在河流上方的空中步道上。每座橋都是用回收材料建造的拱形花園橋，橋上長滿了藤蔓和鮮花，蝴蝶和蜜蜂在橋間飛舞。',
    en: 'People traveled on quiet solar-powered boats gliding along the waterways, or walked on elevated sky paths above the rivers. Every bridge was an arched garden bridge built from recycled materials, covered in vines and flowers, with butterflies and bees dancing between them.'
  },
  {
    type: 'story',
    bg: 'page-bg-10',
    illustBg: 'illust-bg-10',
    emoji: '🤖📦🛸',
    zh: '所有的貨物運送都交給了智慧無人機隊。這些安靜的飛行器有著仿生蜻蜓的翅膀，能在建築物之間靈活穿梭。它們會自動避開鳥群，在每戶人家的陽台輕輕降落，放下包裹後無聲離開。',
    en: 'All deliveries were handled by a fleet of smart drones. These quiet aircraft had biomimetic dragonfly wings, allowing them to navigate nimbly between buildings. They automatically avoided flocks of birds, landing gently on each household\'s balcony to set down packages before departing silently.'
  },
  {
    type: 'story',
    bg: 'page-bg-11',
    illustBg: 'illust-bg-11',
    emoji: '🏭♻️🌱',
    zh: '無人機的能量來自建築物頂端的無線充電站，它們甚至能在飛行途中收集空氣中的微塵粒子，帶回處理中心轉化為建築材料。在這座城市裡，連灰塵都不會被浪費。',
    en: 'The drones drew power from wireless charging stations atop the buildings. They could even collect micro-dust particles from the air during flight, bringing them back to processing centers to be converted into building materials. In this city, not even dust was wasted.'
  },
  {
    type: 'story',
    bg: 'page-bg-12',
    illustBg: 'illust-bg-12',
    emoji: '👩‍💼🎤📊',
    zh: '小澄被邀請到市政廳向市長親自報告。她穿上最整齊的衣服，帶著全息投影設備走進會議室。她深吸一口氣，按下按鈕——整座未來城市的立體模型在空中旋轉展開，光芒照亮了每個人的臉。',
    en: 'Xiao Cheng was invited to City Hall to present directly to the mayor. She put on her best clothes and walked into the conference room carrying a holographic projector. She took a deep breath and pressed the button — a three-dimensional model of the entire future city unfolded and rotated in midair, its glow illuminating every face in the room.'
  },
  {
    type: 'story',
    bg: 'page-bg-13',
    illustBg: 'illust-bg-13',
    emoji: '🗣️💬🌍',
    zh: '「這座城市不只是環保，」小澄指著模型說，「它會跟大自然一起呼吸、一起成長。每棟建築都是活的，每條河流都是城市的血管。我希望人們走在這裡，會忘記自己住在城市裡。」',
    en: '"This city does not just protect the environment," Xiao Cheng said, pointing at the model. "It breathes and grows together with nature. Every building is alive, and every river is the city\'s bloodstream. I want people walking here to forget they are in a city at all."'
  },
  {
    type: 'story',
    bg: 'page-bg-14',
    illustBg: 'illust-bg-14',
    emoji: '🤔❓😟',
    zh: '市長沉默了一會兒，然後問了一個小澄沒有想過的問題：「你的城市非常美麗，但是人們要在哪裡玩耍？孩子們放學後去哪裡跑步、踢球、盪鞦韆？」小澄的心一沉——她設計了完美的生態系統，卻忘記了人最基本的需要：快樂。',
    en: 'The mayor was silent for a moment, then asked a question Xiao Cheng had never considered: "Your city is beautiful, but where will people play? Where will children run, kick balls, and swing after school?" Xiao Cheng\'s heart sank — she had designed a perfect ecosystem but forgotten humanity\'s most basic need: joy.'
  },
  {
    type: 'story',
    bg: 'page-bg-15',
    illustBg: 'illust-bg-15',
    emoji: '💭🌙📝',
    zh: '那天晚上，小澄坐在書桌前，看著窗外的月亮，陷入了深深的思考。她回想起自己小時候在公園裡奔跑的快樂，在草地上翻滾的自由，和朋友們一起爬樹的興奮。突然，一個靈感像閃電一樣劈開了她的腦海。',
    en: 'That evening, Xiao Cheng sat at her desk gazing at the moon through the window, lost in deep thought. She recalled the joy of running through parks as a little girl, the freedom of tumbling on grass, the thrill of climbing trees with friends. Suddenly, an idea struck her mind like a bolt of lightning.'
  },
  {
    type: 'story',
    bg: 'page-bg-16',
    illustBg: 'illust-bg-16',
    emoji: '🎡🛝🌳',
    zh: '小澄連夜修改設計，在每一棟建築物的屋頂加上了空中公園。有的屋頂是冒險樂園，設有攀岩牆和高空繩索；有的是安靜的閱讀花園，種滿了薰衣草和櫻花樹；還有的是運動場，籃球場和跑道懸浮在雲端之上。',
    en: 'Xiao Cheng worked through the night redesigning, adding sky parks to every rooftop. Some rooftops became adventure playgrounds with climbing walls and aerial rope courses. Others were quiet reading gardens filled with lavender and cherry blossom trees. Still others were sports arenas, with basketball courts and running tracks suspended above the clouds.'
  },
  {
    type: 'story',
    bg: 'page-bg-17',
    illustBg: 'illust-bg-17',
    emoji: '🌉🎪👨‍👩‍👧‍👦',
    zh: '她還設計了連接各棟大樓屋頂的空中走廊，讓孩子們可以從一個公園走到另一個公園，永遠不需要回到地面。走廊兩側種滿了會結果的樹木，走累了隨手就能摘到新鮮的水果。',
    en: 'She also designed sky corridors connecting the rooftops of different buildings, allowing children to walk from one park to another without ever returning to the ground. Fruit-bearing trees lined both sides of the corridors, so anyone who grew tired could simply reach out and pick fresh fruit.'
  },
  {
    type: 'story',
    bg: 'page-bg-18',
    illustBg: 'illust-bg-18',
    emoji: '👏🎉🏛️',
    zh: '第二天，小澄再次站在市長面前，展示了完整的新設計。市長看完後站起來，用力鼓掌：「太完美了！這才是真正為人設計的城市——不只是活著，還要活得快樂。我們馬上開始建造！」',
    en: 'The next day, Xiao Cheng stood before the mayor again and presented the complete revised design. After reviewing it, the mayor rose to his feet and applauded vigorously. "This is perfect! This is a city truly designed for people — not just to live, but to live joyfully. Let us begin building immediately!"'
  },
  {
    type: 'story',
    bg: 'page-bg-19',
    illustBg: 'illust-bg-19',
    emoji: '🏗️⚡🌏',
    zh: '建設工程歷時十年。生物混凝土在陽光下慢慢生長，太陽能葉片一片一片被安裝上去，河流被引入城市的每一條街道。小澄從一個女孩長成了一位年輕的建築師，親眼見證著自己的夢想一點一滴變成現實。',
    en: 'Construction took ten years. The bio-concrete grew slowly under sunlight, solar leaves were installed one by one, and rivers were channeled into every street. Xiao Cheng grew from a girl into a young architect, witnessing her dream become reality piece by piece.'
  },
  {
    type: 'end',
    bg: 'page-bg-20',
    illustBg: 'illust-bg-20',
    emoji: '🌆🌿✨',
    zh: '十年後的清晨，二十二歲的小澄走在自己設計的城市裡。陽光穿過太陽能樹葉灑下金色光斑，腳邊的河水倒映著綠色的天際線。屋頂上傳來孩子們的歡笑聲，無人機像蜻蜓一樣輕盈飛過。她微笑著想：這座城市真的活了——而且，活得很快樂。',
    en: 'On a morning ten years later, twenty-two-year-old Xiao Cheng walked through the city she had designed. Sunlight filtered through solar leaves, casting golden dapples on the ground, while rivers at her feet reflected the green skyline. Children\'s laughter drifted down from rooftop parks, and drones glided past as gracefully as dragonflies. She smiled and thought: this city is truly alive — and it is living joyfully.'
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
  const colors = ['#0a1a0f','#0d1f14','#0a1a0f','#0f2318','#0a1a12','#0d1f17','#0a1510','#0f2518','#0a1a0f','#0d2818','#0b1c11','#0e2015','#0a1910','#0f2419','#0c1d13','#0d1f16','#0b1b10','#0e2117','#0a1a0e','#0d2818'];
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = colors[currentPage] || '#0a1a0f';
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
        if (langMode === 'both' || langMode === 'zh') files.push(`/future-city/audio/page-${pageNum}-zh.mp3`);
        if (langMode === 'both' || langMode === 'en') files.push(`/future-city/audio/page-${pageNum}-en.mp3`);
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
  if (langMode === 'both' || langMode === 'zh') files.push(`/future-city/audio/page-${pageNum}-zh.mp3`);
  if (langMode === 'both' || langMode === 'en') files.push(`/future-city/audio/page-${pageNum}-en.mp3`);
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
  navigator.serviceWorker.register('/future-city/sw.js', { updateViaCache: 'none' });
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
