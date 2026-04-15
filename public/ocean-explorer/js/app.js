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
    version: 'ver 2'
  },
  {
    type: 'story',
    bg: 'page-bg-2',
    illustBg: 'illust-bg-2',
    emoji: '\u{1F6A2}\u{1F469}\u200D\u{1F52C}\u{1F467}',
    zh: '海洋生物學家林博士站在「海洋號」研究船的甲板上，迎著溫暖的太平洋海風微笑。她身旁是十一歲的女兒小海，綁著馬尾、背著筆記本，眼裡閃爍著興奮的光芒。「小海，今天是特別的一天——我們要搭深海潛水艇『蛟龍號』，下潛到三千公尺的海底去！」',
    en: 'Marine biologist Dr. Lin stood on the deck of the research vessel Ocean One, smiling into the warm Pacific breeze. Beside her was her eleven-year-old daughter Xiao Hai, hair in a ponytail, notebook slung over her shoulder, eyes sparkling with excitement. "Xiao Hai, today is special — we\'re taking the deep-sea submersible Dragon down to three thousand meters below the surface!"'
  },
  {
    type: 'story',
    bg: 'page-bg-3',
    illustBg: 'illust-bg-3',
    emoji: '\u{1F6F0}\u{FE0F}\u{1F4CB}\u2699\u{FE0F}',
    zh: '小海跟著媽媽走進潛水艇狹小的駕駛艙。艙壁上佈滿了儀表板——深度計、壓力計、氧氣濃度表，還有一排排閃爍的指示燈。「每一個數字都關乎我們的安全，」林博士一邊檢查設備一邊說，「深海的水壓非常大，每下潛十公尺，壓力就增加一個大氣壓。」',
    en: 'Xiao Hai followed her mother into the submersible\'s compact cockpit. The walls were covered with instrument panels — a depth gauge, pressure meter, oxygen concentration monitor, and rows of blinking indicator lights. "Every number here matters for our safety," Dr. Lin said while checking the equipment. "The water pressure in the deep ocean is enormous. For every ten meters we descend, the pressure increases by one atmosphere."'
  },
  {
    type: 'story',
    bg: 'page-bg-4',
    illustBg: 'illust-bg-4',
    emoji: '\u2B07\u{FE0F}\u{1F30A}\u2600\u{FE0F}',
    zh: '潛水艇緩緩離開船底，開始下潛。陽光從海面穿透下來，把周圍的水染成一片碧綠和金黃。成群的沙丁魚從窗前掠過，銀色的鱗片閃閃發光。「這裡是透光層，」林博士解釋，「陽光能到達大約兩百公尺深，海洋中百分之九十的生物都住在這一層。」',
    en: 'The submersible slowly detached from the ship\'s hull and began its descent. Sunlight pierced through the surface, painting the surrounding water in shades of emerald and gold. Schools of sardines darted past the viewport, their silver scales glinting. "This is the sunlight zone — the epipelagic layer," Dr. Lin explained. "Sunlight penetrates to about two hundred meters deep, and ninety percent of all ocean life lives in this layer."'
  },
  {
    type: 'story',
    bg: 'page-bg-5',
    illustBg: 'illust-bg-5',
    emoji: '\u{1F433}\u{1F419}\u{1F535}',
    zh: '隨著深度增加，光線漸漸減弱。明亮的藍色變成了深邃的靛藍，最後變成幾乎伸手不見五指的暗藍。一隻巨大的抹香鯨從遠處游過，牠正準備去更深的地方獵食大王烏賊。「我們正在通過暮光層，」林博士說，「這裡只有微弱的光線，很多生物在這裡靠回聲定位來尋找食物。」',
    en: 'As they descended further, the light gradually faded. Bright blue shifted to deep indigo, then to a darkness where you could barely see your hand in front of you. A massive sperm whale glided past in the distance, heading deeper to hunt giant squid. "We\'re passing through the twilight zone — the mesopelagic layer," said Dr. Lin. "Only faint light reaches here. Many creatures rely on echolocation to find food in this dim world."'
  },
  {
    type: 'story',
    bg: 'page-bg-6',
    illustBg: 'illust-bg-6',
    emoji: '\u{1F311}\u{1F30C}\u{1F9ED}',
    zh: '深度計顯示一千公尺。窗外已經完全漆黑，彷彿被吞進了無邊的夜空。小海不由自主地屏住了呼吸。「別害怕，」林博士輕聲說，「我們已經進入了午夜層——這裡完全沒有陽光，溫度只有攝氏二到四度，但這片黑暗裡藏著你無法想像的奇蹟。」',
    en: 'The depth gauge read one thousand meters. Outside the viewport, total blackness enveloped them, as if they had been swallowed by an endless night sky. Xiao Hai held her breath involuntarily. "Don\'t be afraid," Dr. Lin said softly. "We\'ve entered the midnight zone — the bathypelagic layer. There is absolutely no sunlight here, the temperature is only two to four degrees Celsius, but this darkness hides wonders beyond your imagination."'
  },
  {
    type: 'story',
    bg: 'page-bg-7',
    illustBg: 'illust-bg-7',
    emoji: '\u{1F4A1}\u{1FABF}\u2728',
    zh: '就在這時，黑暗中突然出現了一片夢幻般的光芒。數百隻水母在四周漂浮，身體散發著藍色、紫色和綠色的柔和光芒，像一場水中的燈光秀。「那是生物發光！」小海驚嘆著把鼻子貼在窗上。「沒錯，這叫做生物螢光。牠們體內有一種叫螢光素的化學物質，跟氧氣反應後就會發光。」',
    en: 'Just then, a dreamlike glow appeared in the darkness. Hundreds of jellyfish drifted around them, their bodies radiating soft blue, purple, and green light — like an underwater light show. "That\'s bioluminescence!" Xiao Hai exclaimed, pressing her nose against the viewport. "Exactly. It\'s called bioluminescence. They have a chemical called luciferin in their bodies. When it reacts with oxygen, it produces light — no electricity needed."'
  },
  {
    type: 'story',
    bg: 'page-bg-8',
    illustBg: 'illust-bg-8',
    emoji: '\u{1F41F}\u{1F4A1}\u{1F440}',
    zh: '一條長相奇特的魚游到窗前——牠的頭頂懸掛著一根會發光的「釣竿」，嘴裡滿是像針一樣的尖牙。「那是鮟鱇魚，」林博士說，「牠用頭上的發光器官來引誘獵物。深海裡食物很少，所以生物演化出了各種聰明的捕食策略。」小海認真地在筆記本上畫下了牠的樣子。',
    en: 'A bizarre-looking fish swam up to the viewport — dangling from its head was a glowing "fishing rod," and its mouth was packed with needle-sharp teeth. "That\'s an anglerfish," said Dr. Lin. "It uses the bioluminescent lure on its head to attract prey. Food is scarce in the deep ocean, so creatures have evolved all sorts of clever hunting strategies." Xiao Hai carefully sketched the creature in her notebook.'
  },
  {
    type: 'story',
    bg: 'page-bg-9',
    illustBg: 'illust-bg-9',
    emoji: '\u{1F9CA}\u{1F321}\u{FE0F}\u{1F4CA}',
    zh: '潛水艇繼續向下。小海注意到溫度計上的數字越來越低，而壓力計上的數字卻飆升到三百個大氣壓。「三百個大氣壓！」小海驚訝地說，「那就像有三百頭大象站在你身上！」林博士笑了：「比喻得很好。這就是為什麼潛水艇要用特殊的鈦合金建造，才能承受這麼大的壓力。」',
    en: 'The submersible continued downward. Xiao Hai noticed the thermometer reading dropping steadily while the pressure gauge soared to three hundred atmospheres. "Three hundred atmospheres!" Xiao Hai exclaimed. "That\'s like having three hundred elephants standing on you!" Dr. Lin laughed. "Great analogy. That\'s exactly why submersibles are built with special titanium alloy — it\'s the only way to withstand such immense pressure."'
  },
  {
    type: 'story',
    bg: 'page-bg-10',
    illustBg: 'illust-bg-10',
    emoji: '\u{1F30B}\u{1F4A8}\u{1F525}',
    zh: '深度計指向兩千八百公尺時，潛水艇的探照燈照亮了一幅壯觀的景象——一座海底熱泉！滾燙的黑色礦物煙霧從海底裂縫中噴湧而出，溫度高達攝氏四百度。「這些叫做黑煙囪，」林博士說，「海水滲入地殼裂縫，被岩漿加熱後噴出，帶出了大量的硫化物和礦物質。」',
    en: 'When the depth gauge reached twenty-eight hundred meters, the submersible\'s searchlights illuminated a spectacular sight — a hydrothermal vent field! Scalding black mineral-laden smoke billowed from cracks in the seafloor, reaching temperatures of four hundred degrees Celsius. "These are called black smokers," said Dr. Lin. "Seawater seeps into cracks in the Earth\'s crust, gets superheated by magma below, and shoots back out carrying sulfides and minerals."'
  },
  {
    type: 'story',
    bg: 'page-bg-11',
    illustBg: 'illust-bg-11',
    emoji: '\u{1FAB1}\u{1F9EC}\u2697\u{FE0F}',
    zh: '熱泉周圍長滿了密密麻麻的管狀蠕蟲，牠們有著雪白的管身和鮮紅色的羽毛狀觸手，在熱流中優雅地搖擺。「這些管蟲完全不需要陽光，」林博士解釋，「牠們體內住著一種特殊的細菌，能把硫化氫轉化成能量。這個過程叫做化學合成，跟植物的光合作用完全不同。」',
    en: 'Surrounding the vents were dense clusters of tube worms with snow-white tubes and vivid crimson, feather-like tentacles swaying gracefully in the hot current. "These tube worms need absolutely no sunlight," Dr. Lin explained. "Inside their bodies live special bacteria that convert hydrogen sulfide into energy. This process is called chemosynthesis — completely different from the photosynthesis that plants use."'
  },
  {
    type: 'story',
    bg: 'page-bg-12',
    illustBg: 'illust-bg-12',
    emoji: '\u{1F990}\u{1F9AB}\u{1F52C}',
    zh: '小海發現熱泉旁邊還有一群白色的螃蟹和半透明的蝦子，在滾燙的水流邊來回穿梭。「牠們不怕燙嗎？」她問。「牠們的身體已經適應了這種極端環境，」林博士回答，「科學家把這些叫做嗜極生物。研究牠們可以幫助我們了解，生命是否可能存在於其他星球上，比如木星的衛星歐羅巴。」',
    en: 'Xiao Hai spotted a group of ghostly white crabs and translucent shrimp scuttling back and forth near the edge of the scalding water flow. "Aren\'t they afraid of the heat?" she asked. "Their bodies have adapted to this extreme environment," Dr. Lin replied. "Scientists call them extremophiles. Studying these organisms helps us understand whether life could exist on other worlds — like Europa, one of Jupiter\'s moons, which has a hidden ocean beneath its icy surface."'
  },
  {
    type: 'story',
    bg: 'page-bg-13',
    illustBg: 'illust-bg-13',
    emoji: '\u{1F50D}\u2753\u2728',
    zh: '就在林博士用機械手臂採集岩石樣本時，小海突然指著螢幕大喊：「媽媽，快看那邊！那塊岩石後面有什麼東西在動！」鏡頭轉過去，一個從未見過的生物緩緩地從岩縫中探出身來——牠有著完全透明的身體，可以看見體內流動的藍色液體，八條修長的觸手末端閃爍著金色的光點。',
    en: 'Just as Dr. Lin was using the robotic arm to collect rock samples, Xiao Hai suddenly pointed at the screen and shouted, "Mom, look over there! Something is moving behind that rock!" The camera swiveled, and a creature never before seen slowly emerged from a crack in the rocks — its body was completely transparent, revealing blue fluid flowing inside. Eight slender tentacles tipped with golden points of light extended outward.'
  },
  {
    type: 'story',
    bg: 'page-bg-14',
    illustBg: 'illust-bg-14',
    emoji: '\u{1F41F}\u{1F4F7}\u{1F4D6}',
    zh: '那隻神秘生物有兩隻像藍寶石一樣的大眼睛，正好奇地望著潛水艇的探照燈。牠的觸手會隨著動作變換顏色——從金色到藍色到紫色，像是在用光芒說話。林博士瞪大了眼睛，迅速啟動了所有攝影機和感測器。「這……我從來沒有在任何文獻、任何資料庫裡見過這個物種。小海，我們可能發現了一個全新的物種！」',
    en: 'The mysterious creature had two large eyes like blue sapphires, gazing curiously at the submersible\'s searchlight. Its tentacles shifted colors with each movement — from gold to blue to purple — as if communicating through light. Dr. Lin\'s eyes went wide, and she quickly activated all cameras and sensors. "This... I have never seen this species in any publication or database. Xiao Hai, we may have discovered an entirely new species!"'
  },
  {
    type: 'story',
    bg: 'page-bg-15',
    illustBg: 'illust-bg-15',
    emoji: '\u{1F41F}\u2728\u{1F4DD}',
    zh: '小海興奮地緊握拳頭。林博士溫柔地看著她說：「按照國際動物命名法規，新物種的發現者有命名的權利。你是第一個注意到牠的人——你來取名吧。」小海盯著那隻生物看了好一會兒，認真地說：「牠的眼睛像星星，觸手的光芒像太陽的光線……就叫牠『星光章魚』吧！學名可以叫 Octopus stellalucis——stella 是星星，lucis 是光。」',
    en: 'Xiao Hai clenched her fists with excitement. Dr. Lin looked at her gently and said, "According to the International Code of Zoological Nomenclature, the discoverer of a new species has naming rights. You were the first to spot it — you should name it." Xiao Hai stared at the creature for a long moment, then said seriously, "Its eyes are like stars, and its tentacles glow like rays of the sun... Let\'s call it the Starlight Octopus! The scientific name could be Octopus stellalucis — stella means star, and lucis means light."'
  },
  {
    type: 'story',
    bg: 'page-bg-16',
    illustBg: 'illust-bg-16',
    emoji: '\u{1F4F9}\u{1F9EA}\u{1F4BE}',
    zh: '林博士微笑著把名字輸入電腦。她用機械手臂小心翼翼地採集了一小片星光章魚脫落的皮膚組織，放進無菌採樣瓶。「這個DNA樣本可以讓我們分析牠跟其他頭足類動物的親緣關係，」她解釋道，「同時，所有影像資料都會成為正式描述這個新物種的證據。」',
    en: 'Dr. Lin smiled and typed the name into the computer. Using the robotic arm, she carefully collected a tiny piece of shed skin tissue from the Starlight Octopus and placed it in a sterile sample container. "This DNA sample will let us analyze its evolutionary relationship with other cephalopods," she explained. "Meanwhile, all the video footage will serve as formal evidence for describing this new species."'
  },
  {
    type: 'story',
    bg: 'page-bg-17',
    illustBg: 'illust-bg-17',
    emoji: '\u{1F6A8}\u{1F4C9}\u26A0\u{FE0F}',
    zh: '突然，刺耳的警報聲響徹駕駛艙！螢幕上的壓力警示燈閃爍著紅光，深度計顯示他們已經超過了安全深度極限。「外殼承受的壓力接近臨界值！」林博士的表情瞬間嚴肅起來，「我們必須立刻開始上浮！」小海心跳加速，但她深吸一口氣，想起媽媽教過她的話：真正的科學家，要在危險面前保持冷靜。',
    en: 'Suddenly, a piercing alarm blared through the cockpit! The pressure warning light on screen flashed red, and the depth gauge showed they had exceeded the safe depth limit. "Hull pressure is approaching critical levels!" Dr. Lin\'s expression turned instantly serious. "We must begin ascending immediately!" Xiao Hai\'s heart pounded, but she took a deep breath, remembering what her mother had taught her: a true scientist stays calm in the face of danger.'
  },
  {
    type: 'story',
    bg: 'page-bg-18',
    illustBg: 'illust-bg-18',
    emoji: '\u2B06\u{FE0F}\u{1F6E1}\u{FE0F}\u{1F4AA}',
    zh: '林博士冷靜地操控潛水艇，釋放壓載水，讓蛟龍號慢慢上浮。「不能上升太快，」她解釋道，「就像潛水員不能突然浮出水面一樣，壓力的急遽變化會造成危險。」小海緊握把手，透過窗戶看著那些發光的水母漸漸從視野中消失。她在心裡默默對星光章魚說：「我會回來找你的。」',
    en: 'Dr. Lin calmly operated the submersible, releasing ballast water to let Dragon rise slowly. "We can\'t ascend too quickly," she explained. "Just like scuba divers can\'t rush to the surface, rapid pressure changes can be extremely dangerous." Xiao Hai gripped the handle tightly, watching through the viewport as the glowing jellyfish gradually faded from view. In her heart, she silently whispered to the Starlight Octopus: "I\'ll come back for you."'
  },
  {
    type: 'story',
    bg: 'page-bg-19',
    illustBg: 'illust-bg-19',
    emoji: '\u{1F6A2}\u{1F4BB}\u{1F30D}',
    zh: '潛水艇安全浮出水面，重新回到了溫暖的陽光下。回到研究船上，林博士和小海立刻將所有錄影資料、感測器數據和DNA樣本資訊上傳到國際海洋生物多樣性資料庫。幾個小時內，「星光章魚」的發現就引起了全球科學家的關注。來自美國、日本、法國的海洋研究團隊紛紛發來訊息，祝賀她們的發現。',
    en: 'The submersible surfaced safely, returning to warm sunlight. Back on the research ship, Dr. Lin and Xiao Hai immediately uploaded all video footage, sensor data, and DNA sample information to the international marine biodiversity database. Within hours, the discovery of the Starlight Octopus captured the attention of scientists worldwide. Marine research teams from the United States, Japan, and France sent messages congratulating them on the find.'
  },
  {
    type: 'end',
    bg: 'page-bg-20',
    illustBg: 'illust-bg-20',
    emoji: '\u{1F469}\u200D\u{1F52C}\u{1F30A}\u{1F31F}',
    zh: '那天晚上，小海站在甲板上，仰望滿天星斗，耳邊是海浪輕柔的聲音。深海裡的星光章魚、發光水母和熱泉旁的奇異生物，在她腦海中一幕幕重現。「媽媽，我決定了，」她堅定地說，「長大以後，我要成為一個海洋科學家，去探索那些人類還沒發現的深海秘密。」林博士輕輕擁抱女兒，微笑著說：「大海永遠在等著勇敢的探險家。」',
    en: 'That evening, Xiao Hai stood on the deck, gazing at the star-filled sky, the gentle sound of waves in her ears. The Starlight Octopus, the glowing jellyfish, the strange creatures by the hydrothermal vents — each scene replayed vividly in her mind. "Mom, I\'ve decided," she said firmly. "When I grow up, I want to become an ocean scientist and explore the deep-sea secrets that humans haven\'t yet discovered." Dr. Lin hugged her daughter gently and smiled: "The ocean is always waiting for brave explorers."'
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
  const colors = ['#01579b','#0a1520','#0d2137','#004d40','#0d1b2a','#0a0a2e','#1b0a2e','#1a0533','#0d1b2a','#bf360c','#8b1a00','#004d40','#1b0a2e','#0d2137','#01579b','#004d40','#b71c1c','#0d1b2a','#0a1520','#004d40'];
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
