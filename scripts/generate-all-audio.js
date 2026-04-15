const fs = require('fs');
const path = require('path');

const SPEECH_KEY = process.env.AZURE_SPEECH_KEY;
const SPEECH_REGION = process.env.AZURE_SPEECH_REGION || 'eastasia';

if (!SPEECH_KEY) { console.error('Set AZURE_SPEECH_KEY'); process.exit(1); }

const PUBLIC = path.join(__dirname, '..', 'public');

// Extract page text from a book's app.js
function extractPages(slug) {
  const appJs = path.join(PUBLIC, slug, 'js', 'app.js');
  if (!fs.existsSync(appJs)) return [];
  const code = fs.readFileSync(appJs, 'utf-8');

  const pages = [];
  // Match zh: '...' and en: '...' patterns
  const pageRegex = /\{\s*type:\s*'(cover|story|end)'[\s\S]*?zh:\s*'([^']*)'[\s\S]*?en:\s*'([^']*)'/g;
  let m;
  while ((m = pageRegex.exec(code)) !== null) {
    const zh = m[2].replace(/\\'/g, "'").replace(/\\n/g, ' ').trim();
    const en = m[3].replace(/\\'/g, "'").replace(/\\n/g, ' ').trim();
    if (zh || en) pages.push({ zh, en });
  }
  return pages;
}

// TTS rate by age group
function getTTSRate(slug, lang) {
  // Determine age group from slug
  const young = ['mei','lulu-garden','bear-kitchen','dino-school','ocean-friends','bunny-moon','rainbow-painting','magic-seeds','cloud-adventure','penguin-dance','kitten-market','firefly-night'];
  const mid = ['amy','robot-dream','time-travel','detective-cat','music-forest','flying-bicycle','dream-bakery','treasure-map','shadow-friend','paper-airplane','weather-wizard','star-musician'];
  // Everything else is 10-12

  if (young.includes(slug)) return lang === 'zh' ? '-20%' : '-25%';
  if (mid.includes(slug)) return lang === 'zh' ? '-10%' : '-15%';
  return lang === 'zh' ? '0%' : '-5%'; // 10-12
}

async function generateTTS(text, lang, outputFile, slug) {
  if (fs.existsSync(outputFile)) {
    return 'skip';
  }

  const voice = lang === 'zh' ? 'zh-TW-HsiaoChenNeural' : 'en-US-JennyNeural';
  const xmlLang = lang === 'zh' ? 'zh-TW' : 'en-US';
  const rate = getTTSRate(slug, lang);
  const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  const ssml = `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xmlns:mstts='http://www.w3.org/2001/mstts' xml:lang='${xmlLang}'>
    <voice name='${voice}'>
      <mstts:express-as style="friendly">
        <prosody rate="${rate}">${escaped}</prosody>
      </mstts:express-as>
    </voice>
  </speak>`;

  try {
    const r = await fetch(`https://${SPEECH_REGION}.tts.speech.microsoft.com/cognitiveservices/v1`, {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': SPEECH_KEY,
        'Content-Type': 'application/ssml+xml',
        'X-Microsoft-OutputFormat': 'audio-16khz-128kbitrate-mono-mp3',
      },
      body: ssml,
    });

    if (!r.ok) {
      console.error(`  ERROR ${r.status}: ${await r.text()}`);
      return 'error';
    }

    const buf = Buffer.from(await r.arrayBuffer());
    fs.writeFileSync(outputFile, buf);
    return 'ok';
  } catch (e) {
    console.error(`  ERROR: ${e.message}`);
    return 'error';
  }
}

async function processBook(slug) {
  const pages = extractPages(slug);
  if (!pages.length) {
    console.log(`[${slug}] No pages found, skipping`);
    return;
  }

  const audioDir = path.join(PUBLIC, slug, 'audio');
  if (!fs.existsSync(audioDir)) fs.mkdirSync(audioDir, { recursive: true });

  console.log(`[${slug}] ${pages.length} pages`);

  for (let i = 0; i < pages.length; i++) {
    const pageNum = i + 1;

    // Chinese
    if (pages[i].zh) {
      const zhFile = path.join(audioDir, `page-${pageNum}-zh.mp3`);
      const zhResult = await generateTTS(pages[i].zh, 'zh', zhFile, slug);
      process.stdout.write(`  p${pageNum}-zh:${zhResult} `);
      if (zhResult === 'ok') await delay(200); // Rate limit
    }

    // English
    if (pages[i].en) {
      const enFile = path.join(audioDir, `page-${pageNum}-en.mp3`);
      const enResult = await generateTTS(pages[i].en, 'en', enFile, slug);
      process.stdout.write(`p${pageNum}-en:${enResult} `);
      if (enResult === 'ok') await delay(200);
    }
  }
  console.log('');
}

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  // Get all book slugs
  const dirs = fs.readdirSync(PUBLIC, { withFileTypes: true })
    .filter(d => d.isDirectory() && fs.existsSync(path.join(PUBLIC, d.name, 'js', 'app.js')))
    .map(d => d.name)
    .sort();

  console.log(`Found ${dirs.length} books\n`);

  let totalFiles = 0;
  let generated = 0;
  let skipped = 0;
  let errors = 0;

  for (const slug of dirs) {
    await processBook(slug);

    // Count files
    const audioDir = path.join(PUBLIC, slug, 'audio');
    if (fs.existsSync(audioDir)) {
      const files = fs.readdirSync(audioDir).filter(f => f.endsWith('.mp3'));
      totalFiles += files.length;
    }
  }

  console.log(`\nDone! Total MP3 files: ${totalFiles}`);
}

main();
