const crypto = require('crypto');

const BASE_URL = {
  test: 'https://sandbox-api.payuni.com.tw/api',
  prod: 'https://api.payuni.com.tw/api',
};

function encryptInfo(params, hashKey, hashIV) {
  const form = new URLSearchParams(params).toString();
  const cipher = crypto.createCipheriv('aes-256-gcm', hashKey, hashIV);
  let encrypted = cipher.update(form, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  const tag = cipher.getAuthTag().toString('base64');
  const combined = `${encrypted}:::${tag}`;
  return Buffer.from(combined, 'utf8').toString('hex');
}

function hashInfo(encryptStr, hashKey, hashIV) {
  return crypto
    .createHash('sha256')
    .update(hashKey + encryptStr + hashIV)
    .digest('hex')
    .toUpperCase();
}

function decryptInfo(hexInfo, hashKey, hashIV) {
  const combined = Buffer.from(hexInfo, 'hex').toString('utf8');
  const sepIdx = combined.lastIndexOf(':::');
  if (sepIdx === -1) throw new Error('invalid_encrypt_info');
  const encrypted = combined.slice(0, sepIdx);
  const tagB64 = combined.slice(sepIdx + 3);
  const decipher = crypto.createDecipheriv('aes-256-gcm', hashKey, hashIV);
  decipher.setAuthTag(Buffer.from(tagB64, 'base64'));
  let decrypted = decipher.update(encrypted, 'base64', 'utf8');
  decrypted += decipher.final('utf8');
  return Object.fromEntries(new URLSearchParams(decrypted));
}

function verifyHash(encryptStr, receivedHash, hashKey, hashIV) {
  const expected = hashInfo(encryptStr, hashKey, hashIV);
  return expected === (receivedHash || '').toUpperCase();
}

function getConfig() {
  const mode = (process.env.PAYUNI_MODE || 'test').toLowerCase();
  return {
    mode,
    baseUrl: BASE_URL[mode] || BASE_URL.test,
    merID: process.env.PAYUNI_MER_ID || '',
    hashKey: process.env.PAYUNI_HASH_KEY || '',
    hashIV: process.env.PAYUNI_HASH_IV || '',
  };
}

module.exports = { BASE_URL, encryptInfo, hashInfo, decryptInfo, verifyHash, getConfig };
