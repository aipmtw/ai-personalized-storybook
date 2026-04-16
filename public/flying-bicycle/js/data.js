const BOOK = {
  slug: 'flying-bicycle',
  title: '飛天腳踏車',
  subtitle: 'The Flying Bicycle',
  credits: '審閱：Mark ｜ 共同編輯：Luce (AI)',
  version: 'ver 2',
  coverEmoji: '🚲',
  pages: [
  {
    type: 'cover',
    bg: 'page-bg-1',
    illustBg: 'illust-bg-1',
    emoji: '🚲'
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
    type: 'story',
    bg: 'page-bg-16',
    illustBg: 'illust-bg-16',
    emoji: '\uD83D\uDCA1\uD83D\uDEB2\u2728',
    zh: '回到家，小飛把紙翅膀小心地掛在房間的牆上。爺爺問：「今天玩得開心嗎？」小飛笑著抱住爺爺說：「爺爺，我發現了一個大秘密——只要有想像力，再加上一點點努力，什麼事情都有可能！」',
    en: 'Back home, Xiao Fei carefully hung the cardboard wings on her bedroom wall. Grandpa asked, "Did you have fun today?" Xiao Fei hugged him with a big smile and said, "Grandpa, I discovered a huge secret — with imagination and a little bit of effort, anything is possible!"'
  }
]
};
