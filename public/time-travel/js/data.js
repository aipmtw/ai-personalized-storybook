const BOOK = {
  slug: 'time-travel',
  title: '時光旅行日記',
  subtitle: 'Time Travel Diary',
  credits: '審閱：Mark ｜ 共同編輯：Luce (AI)',
  version: 'ver 2',
  coverEmoji: '⏰',
  pages: [
  {
    type: 'cover',
    bg: 'page-bg-1',
    illustBg: 'illust-bg-1',
    emoji: '⏰'
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
]
};
