const BOOK = {
  slug: 'code-island',
  title: '程式島冒險',
  subtitle: 'Code Island Adventure',
  credits: '審閱：Mark ｜ 共同編輯：Luce (AI)',
  version: 'ver 2',
  coverEmoji: '💻',
  pages: [
  {
    type: 'cover',
    bg: 'page-bg-1',
    illustBg: 'illust-bg-1',
    emoji: '💻'
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
    type: 'story',
    bg: 'page-bg-20',
    illustBg: 'illust-bg-20',
    emoji: '💻🌍🚀',
    zh: '而在數位海洋的深處，程式島依然閃閃發光，等待著下一位勇敢的年輕編碼者到來。小幫機器人站在島的入口，眼睛裡閃爍著藍色的光芒，彷彿在說：「準備好了嗎？新的冒險即將開始……」',
    en: 'And deep in the digital ocean, Code Island still glimmered, waiting for the next brave young coder to arrive. Helper the robot stood at the island\'s entrance, its eyes flickering with blue light, as if saying: "Are you ready? A new adventure is about to begin..."'
  }
]
};
