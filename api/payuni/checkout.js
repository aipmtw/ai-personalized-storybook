const { getConfig, encryptInfo, hashInfo } = require('../../lib/payuni');

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  const cfg = getConfig();
  if (!cfg.merID || !cfg.hashKey || !cfg.hashIV) {
    return res.status(500).json({
      error: 'payuni_not_configured',
      message: 'Set PAYUNI_MER_ID / PAYUNI_HASH_KEY / PAYUNI_HASH_IV (and PAYUNI_MODE=test|prod) in Vercel env.',
      hint: 'See biz-model/payuni-integration-notes.md',
    });
  }

  const input = req.method === 'POST' ? (req.body || {}) : (req.query || {});
  const amount = Math.max(1, parseInt(input.amount || '1', 10));
  const itemName = (input.itemName || 'Storybook Test — 測試商品').toString().slice(0, 100);
  const userMail = (input.email || '').toString().slice(0, 80);
  const tradeNo = `TEST${Date.now()}${Math.floor(Math.random() * 1000)}`;

  const origin = `https://${req.headers.host}`;
  const encryptParams = {
    MerID: cfg.merID,
    MerTradeNo: tradeNo,
    TradeAmt: amount,
    Timestamp: Math.floor(Date.now() / 1000),
    ProdDesc: itemName,
    ReturnURL: `${origin}/api/payuni/return`,
    NotifyURL: `${origin}/api/payuni/notify`,
    Lang: 'zh-tw',
    // Payment channel toggles — "1" enables. Comment out to hide the option.
    Credit: 1,
    ATM: 1,
    CVS: 1,
    ApplePay: 1,
    GooglePay: 1,
    LinePay: 1,
  };
  if (userMail) encryptParams.UsrMail = userMail;

  const encrypted = encryptInfo(encryptParams, cfg.hashKey, cfg.hashIV);
  const hash = hashInfo(encrypted, cfg.hashKey, cfg.hashIV);
  const actionUrl = `${cfg.baseUrl}/upp`;

  const html = `<!doctype html>
<html lang="zh-TW"><head>
<meta charset="utf-8">
<title>PayUni — 跳轉中…</title>
<style>body{font-family:system-ui,-apple-system,"PingFang TC",sans-serif;max-width:560px;margin:40px auto;padding:20px;color:#333}
.box{background:#f5f5f5;padding:16px;border-radius:8px;margin:16px 0;font-family:monospace;font-size:13px;word-break:break-all}
button{background:#0066cc;color:#fff;border:0;padding:12px 24px;border-radius:6px;font-size:16px;cursor:pointer}</style>
</head><body>
<h2>PayUni 跳轉中…</h2>
<p>Mode: <b>${escapeHtml(cfg.mode)}</b> · TradeNo: <code>${escapeHtml(tradeNo)}</code> · Amount: NT$${amount}</p>
<div class="box">Action: ${escapeHtml(actionUrl)}</div>
<form id="f" method="POST" action="${escapeHtml(actionUrl)}">
  <input type="hidden" name="MerID" value="${escapeHtml(cfg.merID)}">
  <input type="hidden" name="Version" value="1.0">
  <input type="hidden" name="EncryptInfo" value="${escapeHtml(encrypted)}">
  <input type="hidden" name="HashInfo" value="${escapeHtml(hash)}">
  <noscript><button type="submit">前往付款</button></noscript>
</form>
<script>setTimeout(function(){document.getElementById('f').submit();},500);</script>
</body></html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).send(html);
};
