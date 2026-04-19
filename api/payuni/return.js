const { getConfig, decryptInfo, verifyHash } = require('../../lib/payuni');

function escapeHtml(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

module.exports = async function handler(req, res) {
  const cfg = getConfig();
  const src = req.method === 'POST' ? (req.body || {}) : (req.query || {});
  const { Status, Message, EncryptInfo, HashInfo } = src;

  let hashValid = null;
  let decrypted = null;
  let decryptErr = null;

  try {
    if (EncryptInfo && HashInfo && cfg.hashKey && cfg.hashIV) {
      hashValid = verifyHash(EncryptInfo, HashInfo, cfg.hashKey, cfg.hashIV);
      if (hashValid) decrypted = decryptInfo(EncryptInfo, cfg.hashKey, cfg.hashIV);
    }
  } catch (err) {
    decryptErr = err.message;
  }

  const ok = Status === 'SUCCESS' && hashValid;
  const title = ok ? '付款成功 ✓' : `付款結果：${Status || 'unknown'}`;

  const html = `<!doctype html>
<html lang="zh-TW"><head>
<meta charset="utf-8">
<title>${escapeHtml(title)} — PayUni Test</title>
<style>body{font-family:system-ui,-apple-system,"PingFang TC",sans-serif;max-width:720px;margin:40px auto;padding:20px;color:#333}
h1{color:${ok ? '#0a7f2e' : '#c43'}}
.box{background:#f5f5f5;padding:16px;border-radius:8px;margin:16px 0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-all}
.row{display:flex;gap:12px;margin:8px 0}
.row b{min-width:120px}
a{color:#0066cc}</style>
</head><body>
<h1>${escapeHtml(title)}</h1>
<div class="row"><b>Mode</b><span>${escapeHtml(cfg.mode)}</span></div>
<div class="row"><b>Status</b><span>${escapeHtml(Status)}</span></div>
<div class="row"><b>Message</b><span>${escapeHtml(Message)}</span></div>
<div class="row"><b>Hash valid</b><span>${hashValid === null ? '—' : (hashValid ? '✓' : '✗')}</span></div>
${decryptErr ? `<div class="row"><b>Decrypt error</b><span>${escapeHtml(decryptErr)}</span></div>` : ''}
${decrypted ? `<h3>Decrypted payload</h3><div class="box">${escapeHtml(JSON.stringify(decrypted, null, 2))}</div>` : ''}
<h3>Raw request</h3>
<div class="box">method: ${escapeHtml(req.method)}\nquery: ${escapeHtml(JSON.stringify(req.query || {}, null, 2))}\nbody: ${escapeHtml(JSON.stringify(req.body || {}, null, 2))}</div>
<p><a href="/payuni-test.html">← 回測試頁</a></p>
</body></html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).send(html);
};
