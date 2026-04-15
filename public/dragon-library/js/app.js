/* ============================================
   Book Reader — app.js
   龍的圖書館 / Dragon's Library
   Vertical scroll layout
   ============================================ */

// Story data
const pages = [
  {
    type: 'cover',
    bg: 'page-bg-1',
    illustBg: 'illust-bg-1',
    emoji: '🐉📚',
    zh: '',
    en: '',
    coverTitle: '龍的圖書館',
    coverSubtitle: "Dragon's Library",
    coverCredits: '審閱：Mark ｜ 共同編輯：Luce (AI)',
    version: 'ver 2'
  },
  {
    type: 'story',
    bg: 'page-bg-2',
    illustBg: 'illust-bg-2',
    emoji: '🏔️🐉📚',
    zh: '在世界盡頭的雲霧山脈之中，隱藏著一座由水晶和古木建造的圖書館。這座圖書館收藏了超過一百萬本書籍，每一本都散發著淡淡的光芒。而守護這座圖書館的，是一條名叫小焰的年輕龍。',
    en: 'Hidden within the Cloud Mist Mountains at the edge of the world stood a library built from crystal and ancient wood. This library held over a million books, each one glowing with a faint light. And the guardian of this extraordinary library was a young dragon named Little Flame.'
  },
  {
    type: 'story',
    bg: 'page-bg-3',
    illustBg: 'illust-bg-3',
    emoji: '🐉✨📖',
    zh: '小焰從出生起就被賦予了守護圖書館的使命。他每天穿梭在高聳的書架之間，用尾巴輕輕拂去書本上的灰塵，用溫暖的龍息為褪色的書頁重新上色。「每一個故事都是一個活著的靈魂，」他的老師曾經告訴他，「只要有人閱讀，故事就永遠不會消亡。」',
    en: 'Little Flame had been entrusted with guarding the library since birth. Every day he wove between the towering shelves, gently dusting the books with his tail and breathing warm dragon-breath to restore color to fading pages. "Every story is a living soul," his teacher had once told him. "As long as someone reads them, stories will never die."'
  },
  {
    type: 'story',
    bg: 'page-bg-4',
    illustBg: 'illust-bg-4',
    emoji: '📖😰💨',
    zh: '然而，這天早晨，小焰發現了一件可怕的事情。他最喜歡的那本童話故事書——《月光森林》——書頁上的文字正在一個接一個地消失！原本黑色的墨水像被風吹散的沙子一樣，緩緩地從紙上飄走。「不！這不可能！」小焰驚慌地翻開更多書籍，發現同樣的情況正在蔓延。',
    en: 'But this morning, Little Flame discovered something terrible. His favorite fairy tale, "The Moonlight Forest," was losing its words one by one! The black ink drifted off the pages like sand blown by the wind, slowly dissolving into nothing. "No! This can\'t be happening!" Little Flame frantically opened more books, only to find the same thing spreading everywhere.'
  },
  {
    type: 'story',
    bg: 'page-bg-5',
    illustBg: 'illust-bg-5',
    emoji: '🌑👤🔍',
    zh: '小焰注意到，每當文字消失的時候，書架之間總會閃過一道淡淡的黑影。那個影子移動得很快，幾乎無法捕捉，但小焰憑著敏銳的龍眼看見了它的輪廓——那是一個沒有面孔的生物，身體像煙霧一樣飄忽不定。「你是誰？為什麼要偷走文字？」小焰大聲質問，但影子只是無聲地消失在黑暗中。',
    en: 'Little Flame noticed that whenever words vanished, a faint dark shadow flickered between the shelves. It moved so quickly it was nearly impossible to catch, but with his sharp dragon eyes, he glimpsed its outline — a faceless creature whose body drifted like smoke. "Who are you? Why are you stealing the words?" Little Flame demanded, but the shadow simply dissolved into the darkness without a sound.'
  },
  {
    type: 'story',
    bg: 'page-bg-6',
    illustBg: 'illust-bg-6',
    emoji: '📚🗺️💡',
    zh: '小焰決定追蹤這個神秘的影子。他翻開圖書館最古老的一本書——《萬界之門》，書中記載著一個秘密：圖書館裡的每一本書都連結著一個真實存在的故事世界。如果文字消失，那些世界也會隨之崩塌。「我必須進入書中的世界，找到那個影子，」小焰深吸一口氣，「在一切都太遲之前。」',
    en: 'Little Flame decided to track the mysterious shadow. He opened the library\'s oldest book — "The Gate of Ten Thousand Worlds" — which revealed a secret: every book in the library was connected to a real story-world. If the words disappeared, those worlds would collapse too. "I must enter the worlds inside the books and find that shadow," Little Flame took a deep breath, "before it\'s too late."'
  },
  {
    type: 'story',
    bg: 'page-bg-7',
    illustBg: 'illust-bg-7',
    emoji: '🌲🏰🧚',
    zh: '小焰首先跳進了《月光森林》的書頁中。瞬間，他被一片銀色的森林包圍。巨大的蘑菇散發著柔和的光芒，螢火蟲在樹叢間飛舞。但他立刻發現不對勁——樹木正在變得透明，花朵正在失去顏色。一位穿著綠色長裙的精靈公主匆匆跑來：「你是外來者嗎？快救救我們！我們的世界正在消失！」',
    en: 'Little Flame leaped into the pages of "The Moonlight Forest." Instantly, he was surrounded by a silver woodland. Giant mushrooms glowed softly, and fireflies danced among the trees. But he quickly noticed something was wrong — the trees were becoming transparent, and the flowers were losing their color. An elf princess in a green gown rushed toward him: "Are you an outsider? Please save us! Our world is disappearing!"'
  },
  {
    type: 'story',
    bg: 'page-bg-8',
    illustBg: 'illust-bg-8',
    emoji: '🧚🐉🌙',
    zh: '精靈公主名叫月見，她告訴小焰：「黑影從北方的枯萎之地來，每到夜晚，它就會吸走我們故事裡的詞句。沒有了文字，角色就會失去記憶，最後整個世界都會變成一片空白。」小焰握緊了拳頭：「我一定會阻止它。你有沒有看到它往哪個方向去了？」月見指向一本散落在地上、半透明的書：「它跳進了那本科幻故事裡。」',
    en: '"The shadow comes from the Withered Lands to the north," said the elf princess, whose name was Moonview. "Every night, it drains the words from our story. Without words, the characters lose their memories, and eventually the entire world turns blank." Little Flame clenched his fists: "I will stop it. Did you see which way it went?" Moonview pointed to a half-transparent book lying on the ground: "It jumped into that science fiction story."'
  },
  {
    type: 'story',
    bg: 'page-bg-9',
    illustBg: 'illust-bg-9',
    emoji: '🚀🌌🤖',
    zh: '小焰翻開那本書，一躍而入。這次他來到了一個完全不同的世界——巨大的太空站漂浮在星海之中，機器人在走廊裡來回穿梭。一個銀色頭髮的少年船長走向他：「你是從其他維度來的？太好了！我們的航行日誌正在被某種力量抹去，沒有紀錄，我們就不知道自己從哪裡來，要往哪裡去。」',
    en: 'Little Flame opened the book and leaped inside. This time he arrived in an entirely different world — a massive space station floating in a sea of stars, with robots bustling through the corridors. A silver-haired young captain approached him: "You\'re from another dimension? Thank goodness! Our navigation logs are being erased by some force. Without our records, we don\'t know where we came from or where we\'re going."'
  },
  {
    type: 'story',
    bg: 'page-bg-10',
    illustBg: 'illust-bg-10',
    emoji: '🖥️👤💫',
    zh: '少年船長名叫星河，他帶小焰來到太空站的中央控制室。巨大的螢幕上，數據正在一行行消失。星河焦急地說：「那個黑影出現在我們的系統核心裡，它把所有的故事代碼都吃掉了。我試著用防火牆阻擋它，但它像煙一樣穿過了所有防線。」小焰在螢幕的倒影中看到了黑影一閃而過的身形。「它又跑了，」小焰說，「但這次我不會讓它逃走。」',
    en: 'The young captain, named Galaxy, led Little Flame to the station\'s central control room. On the enormous screens, data was vanishing line by line. Galaxy said anxiously: "That shadow appeared in our system core and devoured all the story code. I tried blocking it with firewalls, but it passed through every defense like smoke." Little Flame caught a glimpse of the shadow\'s fleeting form reflected in the screen. "It ran again," Little Flame said, "but this time I won\'t let it escape."'
  },
  {
    type: 'story',
    bg: 'page-bg-11',
    illustBg: 'illust-bg-11',
    emoji: '🔍🕵️🌧️',
    zh: '黑影的蹤跡指向了第三本書——一個偵探推理的故事世界。小焰穿越書頁，來到一座永遠下著雨的灰色城市。街道上的路牌文字正在褪去，商店招牌變成了空白。一位戴著圓框眼鏡的偵探從暗巷中走出：「又一個尋找真相的人嗎？我是偵探柯靈。這座城市的所有案件檔案都被偷走了，沒有線索，就沒有故事可以繼續。」',
    en: 'The shadow\'s trail led to a third book — a detective mystery world. Little Flame crossed through the pages and arrived in a gray city where it always rained. Street signs were fading, and shop names had turned blank. A detective wearing round spectacles stepped out from a dark alley: "Another seeker of truth? I\'m Detective Keling. All the case files in this city have been stolen. Without clues, there\'s no story to continue."'
  },
  {
    type: 'story',
    bg: 'page-bg-12',
    illustBg: 'illust-bg-12',
    emoji: '🕵️🐉🔎',
    zh: '柯靈帶小焰來到他的辦公室，牆上釘滿了紅線和照片，但照片上的人臉都變成了模糊的空白。「我追蹤那個影子很久了，」柯靈推了推眼鏡說，「它不是普通的怪物。我觀察到一個規律——它只吃文字，但從不傷害任何角色。而且每次它離開之後，我都能在地上找到一滴墨水形成的淚珠。你不覺得奇怪嗎？」',
    en: 'Keling led Little Flame to his office, where red string and photos covered the walls — but every face in the photos had become a blurred blank. "I\'ve been tracking that shadow for a long time," Keling said, pushing up his glasses. "It\'s not an ordinary monster. I\'ve noticed a pattern — it only eats words but never harms any character. And every time it leaves, I find a teardrop made of ink on the ground. Don\'t you find that strange?"'
  },
  {
    type: 'story',
    bg: 'page-bg-13',
    illustBg: 'illust-bg-13',
    emoji: '💡🐉❤️',
    zh: '小焰突然明白了什麼。墨水的淚珠——那不是破壞的痕跡，而是悲傷的證據。「它不是在偷文字，」小焰輕聲說，「它是在尋找什麼。」柯靈點了點頭：「沒錯。每一個故事裡都有角色、有對話、有冒險。但那個影子呢？它沒有名字，沒有故事，沒有任何人為它寫過哪怕一個句子。它吞下文字，也許只是想知道——擁有自己的故事是什麼感覺。」',
    en: 'Little Flame suddenly understood. Ink teardrops — those weren\'t marks of destruction, but evidence of sadness. "It\'s not stealing words," Little Flame whispered, "it\'s searching for something." Keling nodded: "Exactly. Every story has characters, dialogue, adventures. But what about that shadow? It has no name, no story — not a single sentence has ever been written for it. It swallows words perhaps just to know what it feels like to have a story of its own."'
  },
  {
    type: 'story',
    bg: 'page-bg-14',
    illustBg: 'illust-bg-14',
    emoji: '🐉📢🌑',
    zh: '小焰做了一個大膽的決定。他回到圖書館的中心大廳，站在最高的書架頂端，深吸一口氣，然後大聲呼喚：「影子！我知道你在聽！我不是來抓你的——我想聽你的故事！」整座圖書館陷入了寂靜。然後，從最深的黑暗角落裡，那個影子緩緩地浮現了出來。它的身體在微微顫抖。',
    en: 'Little Flame made a bold decision. He returned to the library\'s central hall, climbed to the top of the tallest bookshelf, took a deep breath, and called out: "Shadow! I know you\'re listening! I\'m not here to catch you — I want to hear your story!" The entire library fell silent. Then, from the deepest dark corner, the shadow slowly emerged. Its body was trembling.'
  },
  {
    type: 'story',
    bg: 'page-bg-15',
    illustBg: 'illust-bg-15',
    emoji: '👤😢💧',
    zh: '影子的聲音像風穿過空房間一樣微弱：「我……沒有故事。我看過一百萬本書裡的一百萬個角色——英雄、公主、船長、偵探——他們都有名字，都有人愛。可是我什麼都沒有。我只是……書頁之間的空隙，段落之間的沉默。我吞下那些文字，只是因為我太想知道，被寫進故事裡是什麼滋味。」說完，一滴墨色的淚珠從它模糊的臉上滑落。',
    en: 'The shadow\'s voice was as faint as wind through an empty room: "I... have no story. I\'ve watched a million characters in a million books — heroes, princesses, captains, detectives — they all have names, they are all loved. But I have nothing. I\'m just... the gap between pages, the silence between paragraphs. I swallowed those words only because I desperately wanted to know what it feels like to be written into a story." A single ink-black tear slid down its blurred face.'
  },
  {
    type: 'story',
    bg: 'page-bg-16',
    illustBg: 'illust-bg-16',
    emoji: '🐉✍️📖',
    zh: '小焰感到心中湧起一股強烈的溫暖。他走到影子面前，用爪子輕輕碰了碰它冰涼的手。「那麼，讓我為你寫一個故事吧。」小焰找來一本空白的書，用龍息在第一頁寫下了金色的文字：「在世界盡頭的圖書館裡，住著一個沒有名字的影子。它是所有故事的守望者，見證了一百萬個夢想的誕生……」',
    en: 'Little Flame felt a powerful warmth surge through his heart. He walked up to the shadow and gently touched its cold hand with his claw. "Then let me write a story for you." Little Flame found a blank book and used his dragon-breath to inscribe golden words on the first page: "In a library at the edge of the world, there lived a nameless shadow. It was the watcher of all stories, witness to the birth of a million dreams..."'
  },
  {
    type: 'story',
    bg: 'page-bg-17',
    illustBg: 'illust-bg-17',
    emoji: '✨📚🌈',
    zh: '隨著小焰一個字一個字地書寫，奇蹟發生了。影子的身體開始發出微弱的光芒，它模糊的輪廓漸漸變得清晰。與此同時，所有被吞噬的文字像金色的蝴蝶一樣從影子的身體裡飛了出來，回到了各自的書頁上。月見的森林重新長出了綠葉，星河的航行日誌恢復了數據，柯靈的案件檔案回到了牆上。整座圖書館重新綻放出耀眼的光芒。',
    en: 'As Little Flame wrote word by word, a miracle unfolded. The shadow\'s body began to emit a soft glow, its blurred outline gradually becoming clear. At the same time, all the devoured words flew out of the shadow\'s body like golden butterflies, returning to their rightful pages. Moonview\'s forest sprouted green leaves again, Galaxy\'s navigation logs restored their data, and Keling\'s case files reappeared on the wall. The entire library blazed with radiant light once more.'
  },
  {
    type: 'story',
    bg: 'page-bg-18',
    illustBg: 'illust-bg-18',
    emoji: '🌟👤🐉',
    zh: '影子終於有了自己的模樣——它變成了一個由星光和墨水編織而成的生物，眼睛像兩顆小小的星星。「謝謝你，小焰，」它的聲音不再微弱，而是清澈如溪水，「我終於知道自己是誰了。我叫……墨星。」小焰笑了：「墨星，歡迎你。從今以後，你不再是書頁之間的空隙——你是這座圖書館裡最特別的故事。」',
    en: 'The shadow finally had a form of its own — it became a creature woven from starlight and ink, with eyes like two tiny stars. "Thank you, Little Flame," its voice was no longer faint but clear as a stream. "I finally know who I am. My name is... Ink Star." Little Flame smiled: "Ink Star, welcome. From now on, you\'re no longer the gap between pages — you are the most special story in this entire library."'
  },
  {
    type: 'story',
    bg: 'page-bg-19',
    illustBg: 'illust-bg-19',
    emoji: '📖❤️🌍',
    zh: '從那天起，墨星成為了小焰的夥伴，一起守護著龍的圖書館。而小焰也明白了一個深刻的道理：故事不僅僅活在書頁上，它們真正活在每一個閱讀它們的人心中。每當有人翻開一本書，認真地讀著每一個字，那個故事的世界就會變得更加真實、更加明亮。因為每一個讀者，都是故事最好的守護者。',
    en: 'From that day on, Ink Star became Little Flame\'s companion, and together they guarded the Dragon\'s Library. Little Flame also came to understand a profound truth: stories don\'t just live on pages — they truly live in the hearts of everyone who reads them. Every time someone opens a book and reads each word with care, that story\'s world becomes more real, more luminous. Because every reader is a story\'s greatest guardian.'
  },
  {
    type: 'end',
    bg: 'page-bg-20',
    illustBg: 'illust-bg-20',
    emoji: '📚🐉🌟',
    zh: '如果你仔細聽，也許能聽到書頁間傳來的低語——那是小焰和墨星在邀請你，走進下一本書的世界。因為在龍的圖書館裡，永遠有一個故事，正在等待著你……',
    en: 'If you listen closely, you might hear a whisper from between the pages — that\'s Little Flame and Ink Star inviting you to step into the next book\'s world. Because in the Dragon\'s Library, there is always a story waiting for you...'
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
  const colors = ['#c62828','#1a0a0a','#1a0a0a','#0d0d0d','#1a237e','#004d40','#311b92','#1b5e20','#4a148c','#0d47a1','#263238','#37474f','#4e342e','#b71c1c','#1a1a2e','#4a148c','#006064','#e65100','#1b5e20','#c62828'];
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = colors[currentPage] || '#c62828';
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
        if (langMode === 'both' || langMode === 'zh') files.push(`/dragon-library/audio/page-${pageNum}-zh.mp3`);
        if (langMode === 'both' || langMode === 'en') files.push(`/dragon-library/audio/page-${pageNum}-en.mp3`);
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
  if (langMode === 'both' || langMode === 'zh') files.push(`/dragon-library/audio/page-${pageNum}-zh.mp3`);
  if (langMode === 'both' || langMode === 'en') files.push(`/dragon-library/audio/page-${pageNum}-en.mp3`);
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
  navigator.serviceWorker.register('/dragon-library/sw.js', { updateViaCache: 'none' });
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
