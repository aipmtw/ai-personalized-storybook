/* ============================================
   Book Reader — app.js
   歷史偵探社 / History Detective Club
   Vertical scroll layout
   ============================================ */

// Story data
const pages = [
  {
    type: 'cover',
    bg: 'page-bg-1',
    illustBg: 'illust-bg-1',
    emoji: '\u{1F3DB}\uFE0F',
    zh: '',
    en: '',
    coverTitle: '\u6B77\u53F2\u5075\u63A2\u793E',
    coverSubtitle: 'History Detective Club',
    coverCredits: '\u5BE9\u95B1\uFF1AMark \uFF5C \u5171\u540C\u7DE8\u8F2F\uFF1ALuce (AI)',
    version: 'ver 1'
  },
  {
    type: 'story',
    bg: 'page-bg-2',
    illustBg: 'illust-bg-2',
    emoji: '\u{1F46B}\u{1F50D}\u{1F3DB}\uFE0F',
    zh: '\u5C0F\u96E8\u3001\u963F\u5049\u548C\u5C0F\u7F8E\u662F\u540C\u73ED\u540C\u5B78\uFF0C\u4E09\u500B\u4EBA\u90FD\u5C0D\u6B77\u53F2\u5145\u6EFF\u597D\u5947\u5FC3\u3002\u6709\u4E00\u5929\uFF0C\u4ED6\u5011\u6C7A\u5B9A\u6210\u7ACB\u300C\u6B77\u53F2\u5075\u63A2\u793E\u300D\uFF0C\u5C08\u9580\u63A2\u7D22\u85CF\u5728\u65E5\u5E38\u751F\u6D3B\u4E2D\u7684\u6B77\u53F2\u79D8\u5BC6\u3002',
    en: 'Xiaoyu, Awei, and Xiaomei are classmates who share a deep curiosity about history. One day, they decided to form the "History Detective Club" to uncover historical secrets hidden in everyday life.'
  },
  {
    type: 'story',
    bg: 'page-bg-3',
    illustBg: 'illust-bg-3',
    emoji: '\u{1F4F7}\u{1F3EB}\u{1F570}\uFE0F',
    zh: '\u5728\u5B78\u6821\u5716\u66F8\u9928\u7684\u820A\u6A94\u6848\u5BA4\u88E1\uFF0C\u4ED6\u5011\u767C\u73FE\u4E86\u4E00\u5F35\u6CDB\u9EC3\u7684\u8001\u7167\u7247\u2014\u2014\u90A3\u662F 1930 \u5E74\u4ED6\u5011\u5B78\u6821\u525B\u5EFA\u597D\u6642\u7684\u6A23\u5B50\u3002\u7167\u7247\u88E1\uFF0C\u4E00\u500B\u7A7F\u8457\u767D\u8272\u6D0B\u88DD\u7684\u5973\u5B69\u7AD9\u5728\u6821\u9580\u524D\u5FAE\u7B11\u3002',
    en: 'In the school library\'s old archive room, they discovered a yellowed photograph \u2014 it was their school when it was first built in 1930. In the photo, a girl in a white dress stood smiling in front of the school gate.'
  },
  {
    type: 'story',
    bg: 'page-bg-4',
    illustBg: 'illust-bg-4',
    emoji: '\u2753\u{1F9D0}\u{1F4DD}',
    zh: '\u300C\u9019\u500B\u5973\u5B69\u662F\u8AB0\uFF1F\u300D\u5C0F\u96E8\u597D\u5947\u5730\u554F\u3002\u963F\u5049\u7FFB\u904E\u7167\u7247\u80CC\u9762\uFF0C\u767C\u73FE\u4E86\u4E00\u884C\u6A21\u7CCA\u7684\u6587\u5B57\uFF1A\u300C\u6797\u79C0\u82F1\uFF0C\u5165\u5B78\u7D00\u5FF5\u3002\u300D\u4E09\u500B\u5C0F\u5075\u63A2\u6C7A\u5B9A\u8981\u627E\u51FA\u5979\u7684\u6545\u4E8B\u3002',
    en: '"Who is this girl?" Xiaoyu asked curiously. Awei flipped the photo over and found a faded line of text: "Lin Xiuying, enrollment memento." The three young detectives decided to uncover her story.'
  },
  {
    type: 'story',
    bg: 'page-bg-5',
    illustBg: 'illust-bg-5',
    emoji: '\u{1F3DB}\uFE0F\u{1F5C3}\uFE0F\u{1F4DC}',
    zh: '\u4ED6\u5011\u4F86\u5230\u7576\u5730\u535A\u7269\u9928\uFF0C\u8ACB\u6559\u9928\u9577\u3002\u9928\u9577\u5E36\u4ED6\u5011\u770B\u4E86\u820A\u5831\u7D19\u5408\u8A02\u672C\u3002\u5728\u4E00\u4EFD 1930 \u5E74\u7684\u5831\u7D19\u4E0A\uFF0C\u4ED6\u5011\u627E\u5230\u4E86\u4E00\u5247\u65B0\u805E\uFF1A\u300C\u672C\u6821\u7B2C\u4E00\u4F4D\u5973\u5B78\u751F\u2014\u2014\u6797\u79C0\u82F1\u3002\u300D',
    en: 'They visited the local museum and asked the curator for help. The curator showed them bound volumes of old newspapers. In a 1930 newspaper, they found an article: "The school\'s first female student \u2014 Lin Xiuying."'
  },
  {
    type: 'story',
    bg: 'page-bg-6',
    illustBg: 'illust-bg-6',
    emoji: '\u{1F469}\u200D\u2695\uFE0F\u{1F3C6}\u2728',
    zh: '\u5831\u7D19\u8A18\u8F09\uFF0C\u6797\u79C0\u82F1\u514B\u670D\u4E86\u5F88\u591A\u56F0\u96E3\uFF0C\u52AA\u529B\u8B80\u66F8\uFF0C\u5F8C\u4F86\u6210\u70BA\u9322\u93AE\u7B2C\u4E00\u4F4D\u5973\u91AB\u751F\u3002\u5979\u4E00\u751F\u6551\u6CBB\u4E86\u7121\u6578\u75C5\u4EBA\uFF0C\u88AB\u5927\u5BB6\u5C0A\u7A31\u70BA\u300C\u6797\u91AB\u5E2B\u300D\u3002',
    en: 'The newspaper reported that Lin Xiuying overcame many hardships, studied diligently, and eventually became the town\'s first female doctor. She treated countless patients throughout her life and was respectfully known as "Dr. Lin."'
  },
  {
    type: 'story',
    bg: 'page-bg-7',
    illustBg: 'illust-bg-7',
    emoji: '\u{1F6B6}\u{1F3E5}\u{1F333}',
    zh: '\u4E09\u500B\u5C0F\u5075\u63A2\u6C7A\u5B9A\u8FFD\u968F\u6797\u79C0\u82F1\u7684\u8DB3\u8DE1\u3002\u4ED6\u5011\u8D70\u8A2A\u4E86\u5979\u66FE\u7D93\u958B\u8A2D\u8A3A\u6240\u7684\u8001\u8857\uFF0C\u53C3\u89C0\u4E86\u5979\u5275\u8FA6\u7684\u514D\u8CBB\u91AB\u7642\u7AD9\u820A\u5740\uFF0C\u4E5F\u627E\u5230\u4E86\u5979\u7A2E\u4E0B\u7684\u4E00\u68F5\u767E\u5E74\u8001\u6A39\u3002',
    en: 'The three young detectives decided to follow Lin Xiuying\'s footsteps. They visited the old street where she once ran her clinic, toured the site of the free medical station she founded, and found a century-old tree she had planted.'
  },
  {
    type: 'story',
    bg: 'page-bg-8',
    illustBg: 'illust-bg-8',
    emoji: '\u{1F475}\u{1F4D6}\u{1F4F8}',
    zh: '\u6700\u8B93\u4ED6\u5011\u9A5A\u559C\u7684\u662F\uFF0C\u4ED6\u5011\u627E\u5230\u4E86\u6797\u79C0\u82F1\u7684\u5B6B\u5973\u2014\u2014\u6797\u5955\u5A9B\u5973\u58EB\u3002\u5979\u62FF\u51FA\u4E86\u5BB6\u65CF\u76F8\u7C3F\u548C\u65E5\u8A18\uFF0C\u548C\u4ED6\u5011\u5206\u4EAB\u4E86\u5976\u5976\u7684\u6545\u4E8B\uFF0C\u4EE5\u53CA\u90A3\u500B\u5E74\u4EE3\u7684\u751F\u6D3B\u9EDE\u6EF4\u3002',
    en: 'The most exciting surprise was finding Lin Xiuying\'s granddaughter \u2014 Ms. Lin Yiwan. She brought out family photo albums and diaries, sharing stories about her grandmother and details of life in that era.'
  },
  {
    type: 'story',
    bg: 'page-bg-9',
    illustBg: 'illust-bg-9',
    emoji: '\u{1F4CA}\u{1F3A4}\u{1F44F}',
    zh: '\u56DE\u5230\u5B78\u6821\uFF0C\u4E09\u500B\u5C0F\u5075\u63A2\u628A\u4ED6\u5011\u7684\u767C\u73FE\u88FD\u4F5C\u6210\u7C21\u5831\uFF0C\u5728\u5168\u6821\u671D\u6703\u4E0A\u767C\u8868\u3002\u540C\u5B78\u5011\u90FD\u88AB\u9019\u500B\u771F\u5BE6\u7684\u6545\u4E8B\u611F\u52D5\u4E86\uFF0C\u6389\u4E0B\u4E86\u7460\u7405\u7684\u638C\u8072\u3002',
    en: 'Back at school, the three detectives compiled their findings into a presentation and shared it at the school assembly. Their classmates were deeply moved by this true story and gave them a resounding round of applause.'
  },
  {
    type: 'end',
    bg: 'page-bg-10',
    illustBg: 'illust-bg-10',
    emoji: '\u{1F4D6}\u2764\uFE0F\u{1F30D}',
    zh: '\u5C0F\u96E8\u5728\u65E5\u8A18\u88E1\u5BEB\u9053\uFF1A\u300C\u6B77\u53F2\u4E0D\u53EA\u662F\u8AB2\u672C\u4E0A\u7684\u5E74\u4EFD\u548C\u4E8B\u4EF6\uFF0C\u800C\u662F\u4E00\u500B\u500B\u771F\u5BE6\u7684\u4EBA\u7684\u6545\u4E8B\u3002\u6BCF\u500B\u4EBA\u90FD\u662F\u6B77\u53F2\u7684\u4E00\u90E8\u5206\uFF0C\u5305\u62EC\u6211\u5011\u81EA\u5DF1\u3002\u300D',
    en: 'Xiaoyu wrote in her diary: "History isn\'t just dates and events in textbooks \u2014 it\'s the stories of real people. Everyone is a part of history, including ourselves."'
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
          <div class="end-divider">\u2014 \u6545\u4E8B\u7D50\u675F \u2014</div>
          <div class="end-actions">
            <a href="https://app.markluce.ai/" class="end-cta">
              <span class="end-cta-icon">\u{1F4DA}</span>
              <span class="end-cta-text">\u56DE\u5230\u66F8\u67B6<small>\u63A2\u7D22\u66F4\u591A\u7E6A\u672C</small></span>
            </a>
          </div>
          <div class="end-credits">
            \u6545\u4E8B\u7531 Luce (AI) \u5171\u540C\u7DE8\u8F2F \u00B7 \u5BE9\u95B1\uFF1AMark<br>
            <span class="end-brand">\u7531 <a href="https://markluce.ai/" style="color:inherit;text-decoration:underline">MarkLuce.ai</a> \u51FA\u54C1</span>
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
    <div style="font-size:2.5rem;margin-bottom:.8rem">\u{1F512}</div>
    <h2 style="font-size:1.3rem;font-weight:800;margin-bottom:.5rem;color:#212529">\u8A66\u95B1\u7D50\u675F</h2>
    <p style="font-size:1rem;color:#6c757d;line-height:1.7;margin-bottom:1.5rem">\u514D\u8CBB\u8A66\u95B1\u524D 3 \u9801\u5DF2\u7D50\u675F\u3002<br>\u7528 LINE \u767B\u5165\u5373\u53EF\u95B1\u8B80\u5B8C\u6574\u7E6A\u672C\uFF01</p>
    <a href="#" onclick="lineLoginFromGate()" style="display:inline-block;background:#06C755;color:#fff;padding:.7rem 2rem;border-radius:12px;font-size:1rem;font-weight:700;text-decoration:none;margin-bottom:.8rem">\u7528 LINE \u767B\u5165\u7E7C\u7E8C\u95B1\u8B80</a>
    <br><a href="#" onclick="document.getElementById('demoGate').style.display='none';goToPage(0);return false" style="font-size:.85rem;color:#adb5bd;text-decoration:underline">\u8FD4\u56DE\u7B2C\u4E00\u9801</a>
  </div>`;
  document.body.appendChild(gate);
}

function lineLoginFromGate() {
  const channelId = '2009822261';
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
    setTimeout(() => { scrollingTo = false; }, 800);
  }
}

function updateDots() {
  const dots = dotsContainer.querySelectorAll('.progress-dot');
  dots.forEach((d, i) => {
    d.classList.toggle('active', i === currentPage);
  });
  const activeDot = dotsContainer.querySelector('.progress-dot.active');
  if (activeDot) {
    activeDot.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
}

function updateThemeColor() {
  const colors = ['#3e2723','#1a120a','#3e2723','#263238','#4e342e','#33291a','#2c1e12','#3e2723','#4e342e','#1a120a'];
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = colors[currentPage] || '#795548';
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
        if (langMode === 'both' || langMode === 'zh') files.push(`/history-detective/audio/page-${pageNum}-zh.mp3`);
        if (langMode === 'both' || langMode === 'en') files.push(`/history-detective/audio/page-${pageNum}-en.mp3`);
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
    setTimeout(() => {
      goToPage(currentPage + 1);
      setTimeout(() => {
        if (autoplayOn) playCurrentPage();
      }, 900);
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
  if (langMode === 'both' || langMode === 'zh') files.push(`/history-detective/audio/page-${pageNum}-zh.mp3`);
  if (langMode === 'both' || langMode === 'en') files.push(`/history-detective/audio/page-${pageNum}-en.mp3`);
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
  navigator.serviceWorker.register('/history-detective/sw.js', { updateViaCache: 'none' });
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
