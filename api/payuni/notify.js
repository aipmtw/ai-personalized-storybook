const { getConfig, decryptInfo, verifyHash } = require('../../lib/payuni');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('method_not_allowed');
  }

  const cfg = getConfig();
  if (!cfg.hashKey || !cfg.hashIV) {
    console.error('[payuni:notify] not configured');
    return res.status(500).send('not_configured');
  }

  const body = req.body || {};
  const { MerID, Status, Message, EncryptInfo, HashInfo } = body;

  const result = {
    receivedAt: new Date().toISOString(),
    merID: MerID,
    status: Status,
    message: Message,
    hashValid: null,
    decrypted: null,
    error: null,
  };

  try {
    if (EncryptInfo && HashInfo) {
      result.hashValid = verifyHash(EncryptInfo, HashInfo, cfg.hashKey, cfg.hashIV);
      if (result.hashValid) {
        result.decrypted = decryptInfo(EncryptInfo, cfg.hashKey, cfg.hashIV);
      }
    }
  } catch (err) {
    result.error = err.message;
  }

  console.log('[payuni:notify]', JSON.stringify(result));

  // PayUni expects plain "success" text acknowledgement. Anything else triggers retries.
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  return res.status(200).send('success');
};
