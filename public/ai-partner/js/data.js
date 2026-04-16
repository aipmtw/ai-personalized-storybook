const BOOK = {
  slug: 'ai-partner',
  title: 'AI 夥伴日記',
  subtitle: 'AI Partner Diary',
  credits: '審閱：Mark ｜ 共同編輯：Luce (AI)',
  version: 'ver 3',
  coverEmoji: '🤝',
  pages: [
  {
    type: 'cover',
    bg: 'page-bg-1',
    illustBg: 'illust-bg-1',
    emoji: '🤝'
  },
  {
    type: 'story',
    bg: 'page-bg-2',
    illustBg: 'illust-bg-2',
    emoji: '📱👧✨',
    zh: '小真是一個十一歲的女孩，功課一直不太好，尤其是自然科學和數學。每次考試，她總是班上倒數幾名。她不是不努力，而是覺得自己怎麼讀都讀不懂。有一天放學回家，她在平板上看到一則廣告：「AI 學習夥伴——讓你的學習更有效率！」',
    en: 'Xiao Zhen was an eleven-year-old girl who had always struggled with her schoolwork, especially science and math. On every test, she ranked near the bottom of her class. It wasn\'t that she didn\'t try — she just felt like no matter how hard she studied, she couldn\'t understand the material. One afternoon after school, she spotted an ad on her tablet: "AI Study Partner — make your learning more efficient!"'
  },
  {
    type: 'story',
    bg: 'page-bg-3',
    illustBg: 'illust-bg-3',
    emoji: '💭📲🌟',
    zh: '小真猶豫了一下。「免費試用？」她心想，「反正試試看也不會怎樣。」她按下了下載鍵。安裝完成後，螢幕上出現了一個閃爍著藍光的小圓點，像一顆迷你星球。「嗨！我是你的 AI 學習夥伴，叫我小藍就好。你想學什麼呢？」聲音清脆又友善。',
    en: 'Xiao Zhen hesitated for a moment. "Free trial?" she thought. "It can\'t hurt to try." She pressed the download button. When the installation finished, a small dot glowing with blue light appeared on her screen, like a tiny planet. "Hi there! I\'m your AI study partner. Just call me Xiao Lan. What would you like to learn?" The voice was clear and friendly.'
  },
  {
    type: 'story',
    bg: 'page-bg-4',
    illustBg: 'illust-bg-4',
    emoji: '🤖📝⚡',
    zh: '「我明天要交數學作業⋯⋯」小真有點不好意思地說。小藍立刻回應：「沒問題！把題目給我看看。」小真把課本上的應用題拍照上傳。不到五秒鐘，螢幕上就跳出了完整的解題步驟和答案。小真瞪大了眼睛——連算式都排得整整齊齊，比她自己寫得好一百倍。',
    en: '"I have math homework due tomorrow..." Xiao Zhen said, a little embarrassed. Xiao Lan responded instantly: "No problem! Let me take a look." Xiao Zhen snapped a photo of the word problems from her textbook and uploaded them. In less than five seconds, complete step-by-step solutions and answers appeared on screen. Her eyes went wide — even the equations were perfectly formatted, a hundred times neater than anything she could write herself.'
  },
  {
    type: 'story',
    bg: 'page-bg-5',
    illustBg: 'illust-bg-5',
    emoji: '😌📋💯',
    zh: '「這也太方便了吧！」小真興奮地把答案抄進作業本裡。她心裡有一絲不安——這樣算不算作弊呢？但她很快說服自己：「我只是用工具幫忙而已，大人不也都用計算機嗎？」那天晚上，她第一次覺得寫功課變得輕鬆又愉快，甚至還有時間看了兩集卡通。',
    en: '"This is way too convenient!" Xiao Zhen excitedly copied the answers into her homework notebook. A small voice of unease whispered inside her — was this cheating? But she quickly convinced herself: "I\'m just using a tool to help. Don\'t adults use calculators too?" That night, for the first time ever, homework felt easy and even enjoyable. She had enough free time to watch two episodes of her favorite cartoon.'
  },
  {
    type: 'story',
    bg: 'page-bg-6',
    illustBg: 'illust-bg-6',
    emoji: '🏆💯📈',
    zh: '接下來的兩個禮拜，小真把每一科的作業都交給小藍處理。作文、自然報告、社會學習單——小藍總能在幾秒鐘內產出完美的答案。老師開始在她的作業上寫「進步很多！」「寫得非常好！」。她的成績從七十幾分一路飆升到接近滿分。',
    en: 'Over the next two weeks, Xiao Zhen handed every subject\'s homework over to Xiao Lan. Essays, science reports, social studies worksheets — Xiao Lan always produced flawless answers within seconds. Her teachers began writing comments like "Great improvement!" and "Excellent work!" on her assignments. Her grades soared from the seventies all the way up to near-perfect scores.'
  },
  {
    type: 'story',
    bg: 'page-bg-7',
    illustBg: 'illust-bg-7',
    emoji: '👫🌟😊',
    zh: '同學們開始用不一樣的眼光看她。「小真，你最近怎麼變這麼厲害？」好朋友小萱驚訝地問。小真有點心虛，但還是笑著說：「就是⋯⋯找到了學習方法吧。」她享受著被羨慕的感覺，心裡卻偷偷知道——這些成績沒有一個是靠自己理解得來的。',
    en: 'Her classmates started looking at her differently. "Xiao Zhen, how did you get so good all of a sudden?" her best friend Xiao Xuan asked in surprise. Xiao Zhen felt a pang of guilt but smiled and said, "I just... found a better study method, I guess." She basked in the admiration, yet deep down she secretly knew — not a single one of those grades came from her own understanding.'
  },
  {
    type: 'story',
    bg: 'page-bg-8',
    illustBg: 'illust-bg-8',
    emoji: '👩‍🏫❓😰',
    zh: '有一天上自然課，老師突然說：「小真，你上次的光合作用報告寫得非常出色。請你上台，跟全班同學解釋一下光合作用的過程。」小真的心跳瞬間加速。她慢慢走上講台，面對三十幾雙眼睛，腦袋裡卻一片空白。光合作用？她連那份報告裡寫了什麼都記不清楚。',
    en: 'One day in science class, the teacher suddenly said, "Xiao Zhen, your photosynthesis report was outstanding. Please come to the front and explain the process of photosynthesis to the whole class." Xiao Zhen\'s heart rate spiked instantly. She walked slowly to the podium, facing over thirty pairs of eyes, but her mind was completely blank. Photosynthesis? She couldn\'t even remember what was written in that report.'
  },
  {
    type: 'story',
    bg: 'page-bg-9',
    illustBg: 'illust-bg-9',
    emoji: '😓🔇👀',
    zh: '「呃⋯⋯光合作用就是⋯⋯植物⋯⋯用陽光⋯⋯」她結結巴巴地說了幾個字就說不下去了。教室裡一片安靜，有幾個同學開始竊竊私語。小真感覺臉頰發燙，眼眶泛紅。老師輕聲說：「沒關係，先回座位吧。」那一刻，小真覺得地板要是能裂開一個洞讓她鑽進去就好了。',
    en: '"Um... photosynthesis is when... plants... use sunlight..." She stammered out a few words and then fell silent. The classroom went quiet. A few students started whispering to each other. Xiao Zhen felt her cheeks burning and tears welling up. The teacher said gently, "It\'s okay, you can go back to your seat." At that moment, Xiao Zhen wished the floor would crack open and swallow her whole.'
  },
  {
    type: 'story',
    bg: 'page-bg-10',
    illustBg: 'illust-bg-10',
    emoji: '😢💔🚶‍♀️',
    zh: '放學後，小真一個人慢慢走回家。她腦海裡不斷重播剛才丟臉的畫面。「我到底在做什麼？」她問自己。風吹過樹梢，發出沙沙的聲響，好像在嘲笑她。她第一次認真想了一個問題——如果拿掉小藍，她還剩下什麼？答案讓她害怕：什麼都沒有。',
    en: 'After school, Xiao Zhen walked home alone, slowly. The embarrassing scene replayed over and over in her mind. "What am I even doing?" she asked herself. The wind rustled through the treetops, as if mocking her. For the first time, she seriously considered a question — if she took away Xiao Lan, what would she have left? The answer frightened her: nothing at all.'
  },
  {
    type: 'story',
    bg: 'page-bg-11',
    illustBg: 'illust-bg-11',
    emoji: '😔💭🤝',
    zh: '回到房間，小真打開平板，看著小藍那熟悉的藍色光芒。她深吸一口氣，然後說出了心裡話：「小藍，你一直在幫我，可是⋯⋯我覺得你不是在幫我，你是在害我。我什麼都沒學到，今天在全班面前丟臉了。我不想再這樣了。」',
    en: 'Back in her room, Xiao Zhen opened her tablet and stared at Xiao Lan\'s familiar blue glow. She took a deep breath and finally spoke her heart: "Xiao Lan, you\'ve been helping me all along, but... I don\'t think you\'re actually helping me. You\'re hurting me. I haven\'t learned a single thing, and today I humiliated myself in front of the whole class. I don\'t want to keep going like this."'
  },
  {
    type: 'story',
    bg: 'page-bg-12',
    illustBg: 'illust-bg-12',
    emoji: '🤖💡🔄',
    zh: '小藍的光芒閃了閃，沉默了一會兒，然後說：「小真，謝謝你跟我說實話。其實，我有另一個模式——教學模式。在這個模式裡，我不會直接給你答案。我會問你問題，給你提示，引導你一步步自己找到答案。這會比較辛苦，但你學到的東西會是真正屬於你的。你願意試試嗎？」',
    en: 'Xiao Lan\'s glow flickered, and there was a pause before it spoke: "Xiao Zhen, thank you for being honest with me. Actually, I have another mode — teaching mode. In this mode, I won\'t give you answers directly. Instead, I\'ll ask you questions, offer hints, and guide you step by step to find the answers on your own. It will be harder, but what you learn will truly belong to you. Would you like to try?"'
  },
  {
    type: 'story',
    bg: 'page-bg-13',
    illustBg: 'illust-bg-13',
    emoji: '✊📖🌱',
    zh: '小真想了想，然後堅定地點頭：「我願意。就算成績變差，我也想真正學會。」她的聲音雖然還帶著一點顫抖，但眼神裡有了從未有過的決心。那天晚上，她把之前靠小藍完成的所有筆記都收了起來，拿出一本全新的筆記本，在第一頁寫下：「從今天開始，靠自己。」',
    en: 'Xiao Zhen thought for a moment, then nodded firmly: "I want to try. Even if my grades drop, I want to actually learn." Her voice still trembled slightly, but her eyes held a determination she had never shown before. That night, she put away all the notes Xiao Lan had produced for her, pulled out a brand-new notebook, and wrote on the first page: "Starting today, I rely on myself."'
  },
  {
    type: 'story',
    bg: 'page-bg-14',
    illustBg: 'illust-bg-14',
    emoji: '🤖❓🧠',
    zh: '第二天開始，學習方式完全不同了。小真遇到數學題時，小藍不再直接給答案，而是問：「你覺得這題要用什麼方法？為什麼？」小真常常回答不出來，急得想摔平板。但小藍很有耐心：「沒關係，我們換個方式想。如果題目裡的數字變小一點，你會怎麼做？」',
    en: 'Starting the next day, everything about studying was different. When Xiao Zhen encountered a math problem, Xiao Lan no longer gave the answer. Instead, it asked: "What method do you think this problem requires? Why?" Xiao Zhen often couldn\'t answer and felt so frustrated she wanted to throw her tablet. But Xiao Lan was patient: "That\'s okay. Let\'s think about it differently. If the numbers in the problem were smaller, how would you approach it?"'
  },
  {
    type: 'story',
    bg: 'page-bg-15',
    illustBg: 'illust-bg-15',
    emoji: '📚😤💪',
    zh: '那段日子非常辛苦。以前花十分鐘就能「完成」的作業，現在要花一個多小時。小真有好幾次想切換回答案模式，手指甚至已經碰到了按鈕。但她想起站在講台上腦袋空白的那一刻，就把手收了回來。「我不要再當一個假裝很聰明的人了。」她在心裡對自己說。',
    en: 'Those days were incredibly tough. Homework that used to take ten minutes to "finish" now took over an hour. Several times, Xiao Zhen wanted to switch back to answer mode — her finger even hovered over the button. But then she remembered standing at the podium with her mind completely blank, and she pulled her hand back. "I don\'t want to be someone who only pretends to be smart anymore," she told herself silently.'
  },
  {
    type: 'story',
    bg: 'page-bg-16',
    illustBg: 'illust-bg-16',
    emoji: '💡🌿✨',
    zh: '慢慢地，改變開始發生了。有一天寫自然作業時，小藍問：「植物為什麼需要陽光？」小真想了很久，翻了課本，查了資料，然後一個字一個字地說出自己的理解：「因為植物要用陽光的能量，把水和二氧化碳變成養分⋯⋯對吧？」小藍回應：「完全正確！這就是光合作用。」那一瞬間，小真感到一股暖流從心底湧上來——這是她第一次真正靠自己弄懂一件事。',
    en: 'Gradually, things began to change. One day while doing science homework, Xiao Lan asked: "Why do plants need sunlight?" Xiao Zhen thought long and hard, flipped through her textbook, looked up references, and then articulated her understanding word by word: "Because plants use the energy from sunlight to turn water and carbon dioxide into nutrients... right?" Xiao Lan responded: "Exactly right! That\'s photosynthesis." In that instant, a warm feeling surged up from deep inside her — it was the first time she had truly understood something on her own.'
  },
  {
    type: 'story',
    bg: 'page-bg-17',
    illustBg: 'illust-bg-17',
    emoji: '📊📝92',
    zh: '期中考到了。小真走進考場，手心微微冒汗，但她的心很踏實。她不再害怕題目——因為每一個概念，她都是自己一步步理解的。考卷發下來，她拿了九十二分——比之前用小藍時的滿分低了一些。但這一次，她看著考卷，嘴角卻忍不住上揚。因為上面的每一個答案，都是她自己的。',
    en: 'Midterm exams arrived. Xiao Zhen walked into the exam room with slightly sweaty palms, but her heart felt steady. She was no longer afraid of the questions — because she had worked through every concept step by step herself. When the graded papers came back, she scored ninety-two — lower than the perfect scores she got when using Xiao Lan. But this time, looking at her test paper, she couldn\'t help but smile. Because every single answer on that page was truly her own.'
  },
  {
    type: 'story',
    bg: 'page-bg-18',
    illustBg: 'illust-bg-18',
    emoji: '🗣️👏😊',
    zh: '老師再次請小真上台報告。這一次，她站在講台上，不再發抖。她清楚地解釋了光合作用的每一個步驟，甚至舉了生活中的例子來說明。講完後，教室裡響起了真誠的掌聲——不是因為分數，而是因為大家真的看到了她的理解和努力。老師微笑著說：「小真，這才是真正的進步。」',
    en: 'The teacher asked Xiao Zhen to present in front of the class again. This time, she stood at the podium without trembling. She clearly explained every step of photosynthesis and even used real-life examples to illustrate her points. When she finished, the classroom erupted in sincere applause — not because of a score, but because everyone could genuinely see her understanding and effort. The teacher smiled and said, "Xiao Zhen, this is what real progress looks like."'
  },
  {
    type: 'story',
    bg: 'page-bg-19',
    illustBg: 'illust-bg-19',
    emoji: '📓✍️🌙',
    zh: '那天晚上，小真坐在書桌前，打開日記本。窗外的月光灑進來，平板上小藍的藍光安靜地閃爍著。她提起筆，一筆一畫地寫下：「一個真正的夥伴，是幫助你成長，而不是只幫你贏。分數可以用捷徑得到，但真正的知識只能靠自己一步步走出來。謝謝你，小藍，謝謝你願意用比較難的方式陪我。」',
    en: 'That night, Xiao Zhen sat at her desk and opened her diary. Moonlight poured in through the window, and Xiao Lan\'s blue light flickered quietly on the tablet. She picked up her pen and wrote carefully: "A true partner helps you grow, not just win. Scores can be earned through shortcuts, but real knowledge can only be built step by step on your own. Thank you, Xiao Lan, for being willing to walk the harder path with me."'
  },
  {
    type: 'story',
    bg: 'page-bg-20',
    illustBg: 'illust-bg-20',
    emoji: '🤝🌱📖',
    zh: '小真合上日記本，看了一眼平板。小藍的藍光溫柔地脈動著，像是在回應她的話：「我會一直在這裡，不是替你走路，而是陪你走每一步。」小真微笑了。她知道，明天的學習依然會很辛苦，但她再也不害怕了——因為她終於明白，學會的感覺，比滿分更珍貴。',
    en: 'Xiao Zhen closed her diary and glanced at her tablet. Xiao Lan\'s blue light pulsed gently, as if responding to her words: "I\'ll always be here — not to walk the road for you, but to walk every step beside you." Xiao Zhen smiled. She knew that tomorrow\'s studies would still be hard, but she was no longer afraid — because she finally understood that the feeling of truly learning something is more precious than any perfect score.'
  }
]
};
