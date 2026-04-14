/**
 * Generate TTS audio files for all story pages using Azure Speech Services.
 *
 * Usage:
 *   AZURE_SPEECH_KEY=... AZURE_SPEECH_REGION=... node scripts/generate-audio.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const SPEECH_KEY = process.env.AZURE_SPEECH_KEY;
const SPEECH_REGION = process.env.AZURE_SPEECH_REGION;

if (!SPEECH_KEY || !SPEECH_REGION) {
  console.error('ERROR: Set AZURE_SPEECH_KEY and AZURE_SPEECH_REGION env vars.');
  process.exit(1);
}

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'audio');

// Story text for each page (1-10)
const pages = [
  { zh: '小美的恐龍冒險', en: "Mei's Dinosaur Adventure" },
  { zh: '小美住在一棟有大花園的房子裡。她最喜歡在花園裡玩耍。', en: 'Mei lives in a house with a big garden. She loves playing in the garden.' },
  { zh: '有一天早上，小美在花園裡發現了一顆好大好大的蛋。「這是什麼呢？」她好奇地問。', en: 'One morning, Mei found a very big egg in the garden. "What is this?" she asked curiously.' },
  { zh: '忽然，蛋裂開了！一隻綠色的小恐龍從裡面跳出來。「嗨！我是小綠！」恐龍開心地說。', en: 'Suddenly, the egg cracked open! A little green dinosaur jumped out. "Hi! I\'m Xiao Lü!" said the dinosaur happily.' },
  { zh: '小美和小綠很快就成為了好朋友。她們一起在花園裡跑來跑去。', en: 'Mei and Xiao Lü quickly became best friends. They ran around the garden together.' },
  { zh: '「我們去冒險吧！」小綠說。小美爬上小綠的背，她們飛上了天空！', en: '"Let\'s go on an adventure!" said Xiao Lü. Mei climbed on Xiao Lü\'s back and they flew into the sky!' },
  { zh: '她們飛過高高的山，看到了美麗的彩虹。小美開心地大喊：「好漂亮啊！」', en: 'They flew over tall mountains and saw a beautiful rainbow. Mei shouted happily: "So beautiful!"' },
  { zh: '她們還飛到了大海邊，看到海豚在水裡跳舞。小美從來沒有看過這麼多海豚！', en: 'They also flew to the ocean and saw dolphins dancing in the water. Mei had never seen so many dolphins!' },
  { zh: '天黑了，小綠帶小美飛回家。「謝謝你，小綠！今天是最棒的一天！」小美抱著小綠說。', en: 'It got dark and Xiao Lü flew Mei back home. "Thank you, Xiao Lü! Today was the best day ever!" said Mei, hugging Xiao Lü.' },
  { zh: '小美帶著微笑入睡了，夢裡她和小綠又出發去新的冒險了…', en: 'Mei fell asleep with a smile. In her dreams, she and Xiao Lü set off on a new adventure...' }
];

function buildSSML(text, voice, lang) {
  const langTag = lang === 'zh' ? 'zh-TW' : 'en-US';
  return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="${langTag}">
  <voice name="${voice}">
    <prosody rate="-15%">
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
