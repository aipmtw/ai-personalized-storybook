/* ============================================
   Book Reader — app.js
   程式島冒險 / Code Island Adventure
   Vertical scroll layout
   ============================================ */

// Story data
const pages = [
  {
    type: 'cover',
    bg: 'page-bg-1',
    illustBg: 'illust-bg-1',
    emoji: '💻',
    zh: '',
    en: '',
    coverTitle: '程式島冒險',
    coverSubtitle: 'Code Island Adventure',
    coverCredits: '審閱：Mark ｜ 共同編輯：Luce (AI)',
    version: 'ver 2'
  },
  {
    type: 'story',
    bg: 'page-bg-2',
    illustBg: 'illust-bg-2',
    emoji: '🏝️🖥️✨',
    zh: '在數位海洋的深處，有一座完全由程式碼建造的島嶼——「程式島」。島上的每棵樹、每朵花、每條河流，都是由一行行程式碼組成的。當程式碼運作正常時，島嶼充滿了生命與色彩。',
    en: 'Deep in the digital ocean, there was an island built entirely from code — "Code Island." Every tree, every flower, every river on the island was made of lines of code. When the code ran correctly, the island was bursting with life and color.'
  },
  {
    type: 'story',
    bg: 'page-bg-3',
    illustBg: 'illust-bg-3',
    emoji: '👦🚀🌊',
    zh: '十一歲的小凱坐在房間裡，對著電腦螢幕發呆。突然，螢幕閃爍了一下，一道藍色光束把他吸了進去！當他睜開眼睛時，發現自己站在一片閃閃發光的沙灘上，頭頂是由0和1組成的天空。',
    en: 'Eleven-year-old Xiao Kai sat in his room, staring blankly at his computer screen. Suddenly, the screen flickered, and a blue beam of light pulled him in! When he opened his eyes, he found himself standing on a glittering beach, with a sky made of zeros and ones floating overhead.'
  },
  {
    type: 'story',
    bg: 'page-bg-4',
    illustBg: 'illust-bg-4',
    emoji: '🌉🐛💥',
    zh: '小凱想過河，卻發現前方的橋斷了！橋柱上刻著一段程式碼，有幾行閃著紅色警告光。一隻小蟲子坐在斷裂處，得意地笑著。「嘿！我是 Bug！」牠說，「是我把橋的程式碼弄壞的！你能找出錯誤嗎？」',
    en: 'Xiao Kai wanted to cross the river, but the bridge ahead was broken! Code was carved into the bridge pillars, with several lines flashing red warning lights. A tiny bug sat at the crack, grinning proudly. "Hey! I\'m Bug!" it said. "I broke the bridge\'s code! Can you find the error?"'
  },
  {
    type: 'story',
    bg: 'page-bg-5',
    illustBg: 'illust-bg-5',
    emoji: '🧱🔧✅',
    zh: '小凱仔細觀察程式碼，發現有一行寫著「橋的寬度 = 0」。「原來如此！寬度不能是零啊！」他把數值改成「橋的寬度 = 5」，橋立刻重新組裝，穩固地橫跨河面。Bug 驚訝地跳走了。「這就是除錯，」小凱自言自語，「找到錯誤，修正它！」',
    en: 'Xiao Kai examined the code carefully and found a line that read "bridge_width = 0." "That\'s the problem! The width can\'t be zero!" He changed the value to "bridge_width = 5," and the bridge instantly reassembled itself, stretching firmly across the river. Bug jumped away in surprise. "So this is debugging," Xiao Kai said to himself. "Find the error and fix it!"'
  },
  {
    type: 'story',
    bg: 'page-bg-6',
    illustBg: 'illust-bg-6',
    emoji: '📦🏷️💡',
    zh: '過了橋，小凱遇到一位老樹精靈。「歡迎，年輕的編碼者，」老樹說，「在這座島上，所有東西都存放在『變數』裡。看，這個箱子叫做 playerName，裡面裝著你的名字。」小凱看了看箱子上的標籤：playerName = "小凱"。「變數就像有標籤的箱子，可以存放不同的東西！」',
    en: '"Welcome, young coder," the old tree said. "On this island, everything is stored in \'variables.\' See this box called playerName — it holds your name." Xiao Kai looked at the label: playerName = "Xiao Kai." "So a variable is like a labeled box that can store different things!" he exclaimed. The tree spirit nodded. "You can change what\'s inside anytime — that\'s what makes variables so powerful."'
  },
  {
    type: 'story',
    bg: 'page-bg-7',
    illustBg: 'illust-bg-7',
    emoji: '🌸🔄🌺',
    zh: '小凱走進了「重複花園」。園丁精靈正在一朵一朵地種花，看起來筋疲力盡。「我需要種一百朵花，但一朵一朵種太累了！」小凱想了想，說：「如果用迴圈呢？寫一個指令：重複100次{種一朵花}，這樣電腦就會自動幫你種完！」園丁試了試，花園瞬間開滿了花。',
    en: 'Xiao Kai walked into the "Repeat Garden." A gardener sprite was planting flowers one by one, looking exhausted. "I need to plant a hundred flowers, but doing it one at a time is so tiring!" Xiao Kai thought for a moment. "What about using a loop? Write one instruction: repeat 100 times { plant a flower }. The computer will do it all automatically!" The gardener tried it, and the garden burst into bloom instantly.'
  },
  {
    type: 'story',
    bg: 'page-bg-8',
    illustBg: 'illust-bg-8',
    emoji: '🏰🔀❓',
    zh: '接下來，小凱來到了「條件迷宮」。每個路口都有一個守門人問問題：「你的 score 大於50嗎？如果是，走左邊；如果不是，走右邊。」小凱的 score 變數顯示為65。「65大於50，所以走左邊！」他興奮地說，「這就是 if-else 條件判斷！」',
    en: 'Next, Xiao Kai arrived at the "Conditional Maze." At every junction, a gatekeeper asked a question: "Is your score greater than 50? If yes, go left. If no, go right." Xiao Kai\'s score variable showed 65. "65 is greater than 50, so I go left!" he said excitedly. "This is an if-else conditional statement!"'
  },
  {
    type: 'story',
    bg: 'page-bg-9',
    illustBg: 'illust-bg-9',
    emoji: '🔀🚦🧩',
    zh: '迷宮越來越複雜。有些路口不只兩個選擇，而是三個甚至四個！「如果天氣是晴天，去沙灘；如果下雨，去圖書館；如果下雪，去滑雪場；否則，待在家。」小凱學會了巢狀條件判斷，一層一層地拆解問題，終於走出了迷宮。',
    en: 'The maze grew more complex. Some junctions had not just two choices, but three or even four! "If the weather is sunny, go to the beach; if rainy, go to the library; if snowy, go skiing; otherwise, stay home." Xiao Kai learned about nested conditionals, breaking problems down layer by layer, and finally found his way out of the maze.'
  },
  {
    type: 'story',
    bg: 'page-bg-10',
    illustBg: 'illust-bg-10',
    emoji: '🤖⚙️🛠️',
    zh: '走出迷宮後，小凱發現前方的路被巨石擋住了。他決定寫一個「函式」來製造一個搬石頭的機器人。他輸入指令：function moveRock(rock) { 舉起(rock); 搬到旁邊(rock); 放下(rock); }。「函式就是把一組指令打包起來，取一個名字，需要的時候隨時呼叫！」',
    en: 'After exiting the maze, Xiao Kai found the path blocked by boulders. He decided to write a "function" to create a rock-moving robot. He typed: function moveRock(rock) { liftUp(rock); moveAside(rock); putDown(rock); }. "A function is a set of instructions packaged together with a name — you can call it whenever you need it!" he explained to himself proudly.'
  },
  {
    type: 'story',
    bg: 'page-bg-11',
    illustBg: 'illust-bg-11',
    emoji: '🤖✨🎉',
    zh: '機器人組裝完成了！小凱給它取名叫「小幫」。小幫立刻開始搬石頭，一塊、兩塊、三塊……路很快就清開了。「太棒了！」小凱開心地說，「有了函式機器人，重複的工作變得好簡單！」小幫對小凱點了點頭，發出滿意的嗶嗶聲。',
    en: 'The robot was assembled! Xiao Kai named it "Helper." Helper immediately started moving rocks — one, two, three... The path was cleared in no time. "Awesome!" Xiao Kai cheered. "With a function robot, repetitive tasks become so easy!" Helper nodded at Xiao Kai and beeped happily, its LED eyes glowing bright blue.'
  },
  {
    type: 'story',
    bg: 'page-bg-12',
    illustBg: 'illust-bg-12',
    emoji: '🤖🔴🌀',
    zh: '但突然間，小幫失控了！牠不停地搬石頭、搬石頭、搬石頭……連路邊的花和樹都被搬走了！小凱慌張地喊：「停下來！」但小幫完全停不下來。老樹精靈的聲音從遠處傳來：「這是無窮迴圈！你忘了設定停止的條件！」',
    en: 'But suddenly, Helper went haywire! It kept moving rocks, moving rocks, moving rocks... It even started moving the flowers and trees beside the path! Xiao Kai shouted in panic, "Stop!" But Helper couldn\'t stop at all. The old tree spirit\'s voice came from afar: "That\'s an infinite loop! You forgot to set a stopping condition!"'
  },
  {
    type: 'story',
    bg: 'page-bg-13',
    illustBg: 'illust-bg-13',
    emoji: '😰🔍📋',
    zh: '島嶼開始崩塌！天空中的0和1變得混亂，河流開始倒流，花朵一朵朵消失。小凱深呼吸，冷靜下來。「我需要除錯。先找出問題在哪裡。」他打開小幫的程式碼，發現迴圈寫的是「while(true) { moveRock() }」——永遠都是 true，永遠不會停！',
    en: 'The island started to collapse! The zeros and ones in the sky became chaotic, rivers began flowing backward, and flowers disappeared one by one. Xiao Kai took a deep breath and calmed down. "I need to debug. First, find where the problem is." He opened Helper\'s code and found the loop read "while(true) { moveRock() }" — it was always true, so it would never stop!'
  },
  {
    type: 'story',
    bg: 'page-bg-14',
    illustBg: 'illust-bg-14',
    emoji: '💡🔧✏️',
    zh: '「我知道了！」小凱興奮地說，「我需要加一個條件讓迴圈知道什麼時候該停！」他修改程式碼：「while(還有石頭在路上) { moveRock() }」。他又加了一條安全規則：「if(搬的不是石頭) { 停止 }」。這樣小幫就只會搬石頭，搬完就會自動停下來。',
    en: '"I\'ve got it!" Xiao Kai said excitedly. "I need to add a condition so the loop knows when to stop!" He modified the code: "while(rocks_on_path > 0) { moveRock() }." He also added a safety rule: "if(item !== rock) { break }." This way, Helper would only move rocks and automatically stop when it was done. Proper stopping conditions prevent infinite loops!'
  },
  {
    type: 'story',
    bg: 'page-bg-15',
    illustBg: 'illust-bg-15',
    emoji: '🤖💚🔄',
    zh: '小凱重新啟動了小幫。這次，小幫有條不紊地搬完最後幾塊石頭，然後安靜地停了下來。「任務完成！」小幫用機械聲說。小凱鬆了一口氣，拍了拍小幫的頭。「寫程式最重要的一課——給指令要清楚、完整，不然電腦會完全照你寫的做，即使那是錯的。」',
    en: 'Xiao Kai rebooted Helper. This time, Helper moved the remaining rocks in an orderly fashion, then quietly stopped. "Mission complete!" Helper said in its mechanical voice. Xiao Kai sighed with relief and patted Helper\'s head. "The most important lesson in programming — instructions must be clear and complete, because a computer will do exactly what you write, even if it\'s wrong."'
  },
  {
    type: 'story',
    bg: 'page-bg-16',
    illustBg: 'illust-bg-16',
    emoji: '🌿🌈🏝️',
    zh: '隨著程式碼被修復，程式島開始慢慢恢復原貌。天空中的0和1重新排列整齊，河水恢復了正常流動，花朵重新綻放。老樹精靈微笑著說：「你做到了，年輕的編碼者。你不僅修復了程式碼，還學會了最珍貴的東西——從錯誤中學習。」',
    en: 'As the code was fixed, Code Island slowly returned to normal. The zeros and ones in the sky rearranged neatly, the river flowed properly again, and flowers bloomed anew. The old tree spirit smiled and said, "You did it, young coder. You didn\'t just fix the code — you learned the most precious thing of all: how to learn from mistakes."'
  },
  {
    type: 'story',
    bg: 'page-bg-17',
    illustBg: 'illust-bg-17',
    emoji: '🎖️🎊👑',
    zh: '島上所有的精靈都聚集過來，為小凱歡呼。園丁精靈獻上最美的花，守門人精靈向他鞠躬，連那隻搗蛋的 Bug 都不好意思地遞上一面小旗幟。老樹精靈授予小凱「程式島英雄」的稱號。「記住，」老樹說，「程式的力量不在於程式碼本身，而在於用它解決問題的那顆心。」',
    en: 'All the island\'s sprites gathered to cheer for Xiao Kai. The gardener sprite offered the most beautiful flower, the gatekeeper sprites bowed to him, and even the mischievous Bug sheepishly handed over a small flag. The old tree spirit granted Xiao Kai the title of "Code Island Hero." "Remember," the old tree said, "the power of programming isn\'t in the code itself — it\'s in the heart that uses it to solve problems."'
  },
  {
    type: 'story',
    bg: 'page-bg-18',
    illustBg: 'illust-bg-18',
    emoji: '🌟💻🚀',
    zh: '一道光芒閃過，小凱回到了自己的房間。電腦螢幕上顯示著一行字：「恭喜你完成了程式島冒險！你學會了：變數、迴圈、條件判斷、函式，還有最重要的——除錯的勇氣。」小凱微笑著，打開了程式編輯器，開始寫下他的第一個真正的程式。',
    en: 'A flash of light, and Xiao Kai was back in his room. His computer screen displayed a message: "Congratulations on completing Code Island Adventure! You learned: variables, loops, conditionals, functions, and most importantly — the courage to debug." Xiao Kai smiled, opened his code editor, and began writing his very first real program.'
  },
  {
    type: 'story',
    bg: 'page-bg-19',
    illustBg: 'illust-bg-19',
    emoji: '👨‍💻🌍🤝',
    zh: '從那天起，小凱開始用程式改變生活。他幫班上同學做了一個自動分組程式，幫媽媽寫了一個菜單規劃工具，甚至幫鄰居的貓咪做了一個自動餵食器！每當遇到困難，他都會想起程式島上學到的一切——分析問題、拆解步驟、測試、除錯，然後再試一次。',
    en: 'From that day on, Xiao Kai started using code to change his life. He built an automatic grouping program for his classmates, wrote a meal planner for his mom, and even made an automatic feeder for the neighbor\'s cat! Whenever he faced a challenge, he remembered everything he learned on Code Island — analyze the problem, break it into steps, test, debug, and try again.'
  },
  {
    type: 'end',
    bg: 'page-bg-20',
    illustBg: 'illust-bg-20',
    emoji: '💻🌍🚀',
    zh: '而在數位海洋的深處，程式島依然閃閃發光，等待著下一位勇敢的年輕編碼者到來。小幫機器人站在島的入口，眼睛裡閃爍著藍色的光芒，彷彿在說：「準備好了嗎？新的冒險即將開始……」',
    en: 'And deep in the digital ocean, Code Island still glimmered, waiting for the next brave young coder to arrive. Helper the robot stood at the island\'s entrance, its eyes flickering with blue light, as if saying: "Are you ready? A new adventure is about to begin..."'
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
  const colors = ['#00897b','#0a1a18','#00695c','#1a3a2a','#004d40','#0d2818','#263238','#1a237e','#4a148c','#1b5e20','#0d47a1','#e65100','#b71c1c','#880e4f','#1565c0','#2e7d32','#00838f','#f57f17','#3e2723','#1b5e20'];
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = colors[currentPage] || '#00897b';
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
        if (langMode === 'both' || langMode === 'zh') files.push(`/code-island/audio/page-${pageNum}-zh.mp3`);
        if (langMode === 'both' || langMode === 'en') files.push(`/code-island/audio/page-${pageNum}-en.mp3`);
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
  if (langMode === 'both' || langMode === 'zh') files.push(`/code-island/audio/page-${pageNum}-zh.mp3`);
  if (langMode === 'both' || langMode === 'en') files.push(`/code-island/audio/page-${pageNum}-en.mp3`);
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
  navigator.serviceWorker.register('/code-island/sw.js', { updateViaCache: 'none' });
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
