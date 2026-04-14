/**
 * Generate TTS audio files for Amy's Story Magic using Azure Speech Services.
 *
 * Usage:
 *   AZURE_SPEECH_KEY=... AZURE_SPEECH_REGION=eastasia node scripts/generate-audio-amy.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const SPEECH_KEY = process.env.AZURE_SPEECH_KEY;
const SPEECH_REGION = process.env.AZURE_SPEECH_REGION || 'eastasia';

if (!SPEECH_KEY) {
  console.error('ERROR: Set AZURE_SPEECH_KEY env var.');
  process.exit(1);
}

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'amy', 'audio');

// Story text for each page (1-10)
const pages = [
  { zh: 'Amy 的故事魔法', en: "Amy's Story Magic" },
  { zh: 'Amy 是班上最安靜的女孩。每次老師請同學上台說故事，她的心就砰砰跳，手心冒汗，聲音小得像蚊子。她好羨慕那些可以大方說話的同學。', en: "Amy was the quietest girl in class. Every time the teacher asked someone to tell a story on stage, her heart pounded, her palms sweated, and her voice was as tiny as a mosquito's. She envied the classmates who could speak so freely." },
  { zh: '有一天放學後，Amy 對著房間裡的大鏡子練習說故事。「從前從前，有一隻……」她的聲音好小好小。這時，她的手機突然亮了起來：「嗨！我是 Echo，你的 AI 說故事教練。我聽到你在練習呢！」', en: 'One afternoon after school, Amy practiced telling a story in front of her bedroom mirror. "Once upon a time, there was a..." Her voice was so, so quiet. Suddenly, her phone lit up: "Hey! I\'m Echo, your AI storytelling coach. I heard you practicing!"' },
  { zh: '「說故事的第一個秘訣，」Echo 說，「是用你的眼睛說話。看著鏡子裡的自己，假裝你在跟最好的朋友聊天。」Amy 試了試，對著鏡子微笑——突然覺得沒那麼可怕了。', en: '"The first secret of storytelling," said Echo, "is to speak with your eyes. Look at yourself in the mirror and pretend you\'re chatting with your best friend." Amy tried it, smiling at her reflection — suddenly, it didn\'t feel so scary anymore.' },
  { zh: 'Echo 在手機上幫 Amy 錄影。「來，再說一次。這次加上手勢，讓故事活起來！」Amy 一邊說「大野狼用力吹」，一邊張開雙手做出吹氣的動作。Echo 播放給她看：「哇，你看！好生動！」', en: 'Echo recorded Amy on her phone. "Now, try again. This time, use gestures to bring the story alive!" Amy spread her arms wide as she said, "The big wolf blew and blew!" Echo played it back: "Wow, look at that! So vivid!"' },
  { zh: '每天放學後，Amy 都會對著鏡子練習，Echo 會給她打分數和建議。「今天你的聲音比昨天大了一點喔！」「這裡如果停頓一下，效果會更好。」慢慢地，Amy 的故事越說越好聽。', en: 'Every day after school, Amy practiced in front of the mirror while Echo scored her and gave tips. "Your voice was a little louder today!" "If you pause here, the effect will be even better." Gradually, Amy\'s storytelling got better and better.' },
  { zh: '一個星期後，老師又問：「誰想上台說故事？」Amy 的心還是在跳，但她想起 Echo 教她的深呼吸法。她慢慢舉起了手。全班同學都驚訝地看著她。', en: 'A week later, the teacher asked again, "Who wants to tell a story on stage?" Amy\'s heart was still pounding, but she remembered the deep breathing technique Echo taught her. She slowly raised her hand. The whole class looked at her in surprise.' },
  { zh: 'Amy 站上講台，深吸一口氣。「從前從前，在一座魔法森林裡……」她的聲音清楚又有力，配上表情和手勢，同學們全都聽得入迷了。有人張大嘴巴，有人忍不住笑出來。', en: 'Amy stood on the stage and took a deep breath. "Once upon a time, in a magical forest..." Her voice was clear and strong, with expressions and gestures that captivated everyone. Some classmates had their mouths wide open; others couldn\'t help but laugh.' },
  { zh: '故事說完，全班響起熱烈的掌聲。老師笑著說：「Amy，你什麼時候變得這麼會說故事？」Amy 偷偷看了一眼口袋裡的手機，心裡想：「謝謝你，Echo。」', en: 'When the story ended, the whole class erupted in applause. The teacher smiled and said, "Amy, when did you become such a great storyteller?" Amy glanced secretly at the phone in her pocket and thought, "Thank you, Echo."' },
  { zh: '那天晚上，Amy 對著鏡子說：「Echo，我想學怎麼說更長的故事！」Echo 回答：「沒問題！明天我們來挑戰五分鐘的冒險故事吧！」Amy 笑了——她已經等不及了。', en: 'That night, Amy said to the mirror, "Echo, I want to learn how to tell longer stories!" Echo replied, "No problem! Tomorrow let\'s try a five-minute adventure story!" Amy smiled — she couldn\'t wait.' }
];

function buildSSML(text, voice, lang) {
  const langTag = lang === 'zh' ? 'zh-TW' : 'en-US';
  return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="${langTag}">
  <voice name="${voice}">
    <prosody rate="-10%">
      ${escapeXml(text)}
    </prosody>
  </voice>
</speak>`;
}

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function synthesize(ssml, outputPath) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: `${SPEECH_REGION}.tts.speech.microsoft.com`,
      path: '/cognitiveservices/v1',
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': SPEECH_KEY,
        'Content-Type': 'application/ssml+xml',
        'X-Microsoft-OutputFormat': 'audio-48khz-192kbitrate-mono-mp3',
        'User-Agent': 'ai-storybook-tts'
      }
    };

    const req = https.request(options, (res) => {
      if (res.statusCode !== 200) {
        let body = '';
        res.on('data', d => body += d);
        res.on('end', () => reject(new Error(`HTTP ${res.statusCode}: ${body}`)));
        return;
      }

      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => {
        const buffer = Buffer.concat(chunks);
        fs.writeFileSync(outputPath, buffer);
        resolve(buffer.length);
      });
    });

    req.on('error', reject);
    req.write(ssml);
    req.end();
  });
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const zhVoice = 'zh-TW-HsiaoChenNeural';
  const enVoice = 'en-US-JennyNeural';

  for (let i = 0; i < pages.length; i++) {
    const pageNum = i + 1;
    const page = pages[i];

    // Chinese
    const zhFile = path.join(OUTPUT_DIR, `page-${pageNum}-zh.mp3`);
    const zhSSML = buildSSML(page.zh, zhVoice, 'zh');
    process.stdout.write(`Page ${pageNum} zh... `);
    try {
      const size = await synthesize(zhSSML, zhFile);
      console.log(`OK (${(size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.log(`FAILED: ${err.message}`);
    }

    // English
    const enFile = path.join(OUTPUT_DIR, `page-${pageNum}-en.mp3`);
    const enSSML = buildSSML(page.en, enVoice, 'en');
    process.stdout.write(`Page ${pageNum} en... `);
    try {
      const size = await synthesize(enSSML, enFile);
      console.log(`OK (${(size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.log(`FAILED: ${err.message}`);
    }

    // Small delay to avoid rate limiting
    if (i < pages.length - 1) {
      await new Promise(r => setTimeout(r, 300));
    }
  }

  console.log('\nDone! Audio files in:', OUTPUT_DIR);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
