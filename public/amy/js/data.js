const BOOK = {
  slug: 'amy',
  title: 'Amy 的故事魔法',
  subtitle: 'Amy\'s Story Magic',
  credits: '審閱：Mark ｜ 共同編輯：Luce (AI)',
  version: 'ver 3',
  coverEmoji: '🌤',
  pages: [
  {
    type: 'cover',
    bg: 'page-bg-1',
    illustBg: 'illust-bg-1',
    emoji: '🌤'
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
    type: 'story',
    bg: 'page-bg-15',
    illustBg: 'illust-bg-15',
    emoji: '\uD83C\uDF19\uD83D\uDCD6\uD83C\uDF1F',
    zh: '那天晚上，Amy 在日記裡寫道：「我不再是那個安靜的女孩了。我發現，每個人都有屬於自己的故事，而說出來的那一刻，故事就變成了魔法。」她合上日記，微笑著入睡，夢裡全是新的冒險故事。',
    en: 'That night, Amy wrote in her diary: "I\'m no longer the quiet girl. I\'ve learned that everyone has their own story, and the moment you speak it aloud, it becomes magic." She closed her diary, fell asleep with a smile, and dreamed of brand new adventures waiting to be told.'
  }
]
};
