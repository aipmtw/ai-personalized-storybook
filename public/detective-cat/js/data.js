const BOOK = {
  slug: 'detective-cat',
  title: '偵探貓咪',
  subtitle: 'Detective Cat',
  credits: '審閱：Mark ｜ 共同編輯：Luce (AI)',
  version: 'ver 2',
  coverEmoji: '🔍🐱',
  pages: [
  {
    type: 'cover',
    bg: 'page-bg-1',
    illustBg: 'illust-bg-1',
    emoji: '🔍🐱'
  },
  {
    type: 'story',
    bg: 'page-bg-2',
    illustBg: 'illust-bg-2',
    emoji: '\uD83D\uDC31\uD83D\uDCE6\uD83D\uDD0D',
    zh: '在一條安靜的小巷裡，有一家特別的偵探事務所。偵探貓毛毛戴著格紋偵探帽，桌上擺著放大鏡和一本厚厚的筆記本，隨時準備幫助有困難的朋友。',
    en: 'In a quiet little alley, there was a very special detective agency. Detective Cat Mao Mao wore a plaid detective hat. On her desk sat a magnifying glass and a thick notebook, always ready to help friends in need.'
  },
  {
    type: 'story',
    bg: 'page-bg-3',
    illustBg: 'illust-bg-3',
    emoji: '\uD83D\uDC31\u2615\uD83D\uDCCB',
    zh: '每天早上，毛毛會泡一杯牛奶茶，翻開筆記本，回顧以前破過的案件。她相信每一個小細節都很重要，「線索就藏在別人忽略的地方，」她常常這樣說。',
    en: 'Every morning, Mao Mao would make a cup of milk tea, open her notebook, and review past cases. She believed every small detail mattered. "Clues hide where others overlook," she always said.'
  },
  {
    type: 'story',
    bg: 'page-bg-4',
    illustBg: 'illust-bg-4',
    emoji: '\uD83D\uDC39\uD83C\uDF3B\uD83D\uDE2D',
    zh: '這天，一隻小倉鼠氣喘吁吁地跑進來：「毛毛偵探，快幫幫我！我最珍貴的葵花籽不見了！那是我存了一整個冬天的寶貝，今天早上突然就消失了！」',
    en: 'That day, a little hamster rushed in, out of breath. "Detective Mao Mao, please help! My most precious sunflower seed is gone! I saved it all winter long, and this morning it just vanished!"'
  },
  {
    type: 'story',
    bg: 'page-bg-5',
    illustBg: 'illust-bg-5',
    emoji: '\uD83D\uDC31\uD83D\uDD0D\uD83D\uDC3E',
    zh: '毛毛拿起放大鏡，跟著倉鼠來到牠的小窩。她蹲下來仔細看地板，發現了幾個淡淡的小腳印，從窩邊一路延伸到門外。「有線索了！」毛毛的眼睛亮了起來。',
    en: 'Mao Mao grabbed her magnifying glass and followed the hamster to its little nest. She crouched down to examine the floor and spotted faint little footprints leading from the nest all the way out the door. "A clue!" Mao Mao\'s eyes lit up.'
  },
  {
    type: 'story',
    bg: 'page-bg-6',
    illustBg: 'illust-bg-6',
    emoji: '\uD83D\uDC3E\u27A1\uFE0F\uD83C\uDF3F',
    zh: '毛毛沿著腳印往前走，腳印穿過走廊，經過陽台，一直延伸到廚房門口。她注意到腳印旁邊有一條細細的拖痕，好像有什麼圓圓的東西在地上滾過。',
    en: 'Mao Mao followed the footprints forward. They went through the hallway, past the balcony, all the way to the kitchen door. She noticed a thin trail beside the prints, as if something round had rolled across the floor.'
  },
  {
    type: 'story',
    bg: 'page-bg-7',
    illustBg: 'illust-bg-7',
    emoji: '\uD83C\uDF73\uD83D\uDC31\uD83E\uDDD0',
    zh: '走進廚房，毛毛看到地上有一些細小的碎屑。她用放大鏡仔細觀察，「這些是葵花籽殼的碎片！」她把碎片放進小袋子裡當作證據。',
    en: 'Inside the kitchen, Mao Mao saw tiny crumbs scattered on the floor. She examined them with her magnifying glass. "These are bits of sunflower seed shell!" She carefully collected the fragments in a small bag as evidence.'
  },
  {
    type: 'story',
    bg: 'page-bg-8',
    illustBg: 'illust-bg-8',
    emoji: '\uD83D\uDCDA\uD83D\uDD0D\u2728',
    zh: '碎屑的痕跡從廚房延伸到書架旁邊。毛毛在書架腳下找到更多殼屑，還看到地板上有淺淺的滾動痕跡。「葵花籽一定從這裡滾過去的，」她自言自語。',
    en: 'The trail of crumbs led from the kitchen to the bookshelf. Mao Mao found more shell fragments at the base of the bookshelf and noticed faint rolling marks on the floor. "The seed must have rolled right past here," she murmured to herself.'
  },
  {
    type: 'story',
    bg: 'page-bg-9',
    illustBg: 'illust-bg-9',
    emoji: '\uD83E\uDD9C\uD83D\uDC31\uD83D\uDDE3\uFE0F',
    zh: '毛毛決定訪問住在客廳的鸚鵡波波。「波波，你昨天晚上有看到什麼特別的事嗎？」波波歪著頭想了想，拍拍翅膀說：「我有看到喔！」',
    en: 'Mao Mao decided to interview Boba the parrot in the living room. "Boba, did you see anything unusual last night?" Boba tilted his head, thought for a moment, flapped his wings and said, "I did see something!"'
  },
  {
    type: 'story',
    bg: 'page-bg-10',
    illustBg: 'illust-bg-10',
    emoji: '\uD83E\uDD9C\uD83D\uDCAC\uD83D\uDCA8',
    zh: '「我看到一個圓圓的小東西從架子上掉下來，然後咕嚕咕嚕地滾走了！它滾得好快，一路滾到廚房那邊去了。」波波學著東西滾動的樣子，逗得毛毛笑了。',
    en: '"I saw a small round thing fall off the shelf, and then it rolled away really fast! It kept rolling all the way toward the kitchen." Boba imitated the rolling motion so well that it made Mao Mao laugh.'
  },
  {
    type: 'story',
    bg: 'page-bg-11',
    illustBg: 'illust-bg-11',
    emoji: '\uD83D\uDC31\uD83D\uDCDD\uD83E\uDDE9',
    zh: '毛毛把所有線索寫在筆記本上：腳印、滾動痕跡、碎屑、還有波波的證詞。她用筆畫出葵花籽可能走過的路線，每一條線索都指向同一個方向。',
    en: 'Mao Mao wrote all the clues in her notebook: footprints, rolling marks, shell crumbs, and Boba\'s testimony. She drew the seed\'s possible path. Every single clue pointed in the same direction.'
  },
  {
    type: 'story',
    bg: 'page-bg-12',
    illustBg: 'illust-bg-12',
    emoji: '\uD83D\uDC31\uD83D\uDCA1\u2744\uFE0F',
    zh: '「我知道了！」毛毛站起來大聲說，「葵花籽是圓的，它從架子上滾落，經過書架旁邊，一路滾進廚房，最後一定滾到了——冰箱底下！」',
    en: '"I\'ve got it!" Mao Mao stood up and announced. "The sunflower seed is round. It rolled off the shelf, past the bookshelf, through the kitchen, and must have ended up \u2014 under the fridge!"'
  },
  {
    type: 'story',
    bg: 'page-bg-13',
    illustBg: 'illust-bg-13',
    emoji: '\uD83C\uDF3B\u2728\uD83D\uDC39',
    zh: '毛毛趴在冰箱前，把手伸進底下的縫隙。她摸到了！不只找到倉鼠丟失的那一顆葵花籽，居然還有另外四顆葵花籽藏在裡面！倉鼠開心得跳了起來。',
    en: 'Mao Mao lay down in front of the fridge and reached into the gap underneath. She found it! Not only the hamster\'s lost seed, but four more sunflower seeds hidden in there! The hamster jumped up and down with joy.'
  },
  {
    type: 'story',
    bg: 'page-bg-14',
    illustBg: 'illust-bg-14',
    emoji: '\uD83C\uDF3B\uD83C\uDF3B\uD83C\uDF3B\uD83C\uDF3B\uD83C\uDF3B',
    zh: '「太棒了！比我丟掉的還多呢！」倉鼠捧著五顆葵花籽，眼眶都紅了。毛毛笑著說：「這些大概都是以前不小心滾進去的，冰箱底下就像一個秘密寶庫。」',
    en: '"Amazing! Even more than I lost!" The hamster held the five sunflower seeds close, eyes glistening with happy tears. Mao Mao smiled and said, "These probably all rolled under there over time. The fridge is like a secret treasure vault."'
  },
  {
    type: 'story',
    bg: 'page-bg-15',
    illustBg: 'illust-bg-15',
    emoji: '\uD83D\uDC31\uD83D\uDD0D\u2B50',
    zh: '回到事務所，毛毛在筆記本上寫下今天的心得：「好的偵探要跟著證據走，不能只靠猜測。每一個腳印、每一片碎屑，都在告訴我們真相。」',
    en: 'Back at her agency, Mao Mao wrote today\'s lesson in her notebook: "A good detective follows the evidence, not assumptions. Every footprint and every crumb is telling us the truth."'
  },
  {
    type: 'story',
    bg: 'page-bg-16',
    illustBg: 'illust-bg-16',
    emoji: '\uD83D\uDC31\uD83D\uDCDA\uD83C\uDF1F',
    zh: '毛毛滿意地合上筆記本，喝了一口牛奶茶。窗外的夕陽把小巷染成金色。她知道，只要有耐心、有觀察力，任何謎題都能被解開。下一個案件，她準備好了！',
    en: 'Mao Mao closed her notebook with satisfaction and took a sip of milk tea. The sunset outside painted the alley in gold. She knew that with patience and sharp observation, any mystery could be solved. She was ready for the next case!'
  }
]
};
