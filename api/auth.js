const crypto = require('crypto');

const LINE_CHANNEL_ID = process.env.LINE_CHANNEL_ID || '2009738746';
const LINE_CHANNEL_SECRET = process.env.LINE_CHANNEL_SECRET || '';
const COOKIE_SECRET = process.env.COOKIE_SECRET || 'storybook-demo-secret-key';

function signToken(payload) {
  const data = JSON.stringify(payload);
  const encoded = Buffer.from(data).toString('base64url');
  const sig = crypto.createHmac('sha256', COOKIE_SECRET).update(encoded).digest('base64url');
  return `${encoded}.${sig}`;
}

module.exports = async function handler(req, res) {
  const { code, state, error } = req.query;

  if (error) {
    return res.redirect(`/?error=${encodeURIComponent(error)}`);
  }

  if (!code) {
    return res.redirect('/?error=no_code');
  }

  if (!LINE_CHANNEL_SECRET) {
    // No secret configured — demo mode, just redirect
    return res.redirect('/book.html');
  }

  try {
    // Exchange code for token
    const origin = `https://${req.headers.host}`;
    const tokenRes = await fetch('https://api.line.me/oauth2/v2.1/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: `${origin}/api/auth`,
        client_id: LINE_CHANNEL_ID,
        client_secret: LINE_CHANNEL_SECRET
      })
    });

    if (!tokenRes.ok) {
      const err = await tokenRes.text();
      console.error('Token exchange failed:', err);
      return res.redirect('/?error=token_failed');
    }

    const tokenData = await tokenRes.json();

    // Verify token
    const verifyRes = await fetch(`https://api.line.me/oauth2/v2.1/verify?access_token=${tokenData.access_token}`);
    if (!verifyRes.ok) {
      return res.redirect('/?error=verify_failed');
    }

    const verifyData = await verifyRes.json();
    if (verifyData.client_id !== LINE_CHANNEL_ID) {
      return res.redirect('/?error=invalid_client');
    }

    // Get profile
    const profileRes = await fetch('https://api.line.me/v2/profile', {
      headers: { 'Authorization': `Bearer ${tokenData.access_token}` }
    });

    let profile = {};
    if (profileRes.ok) {
      profile = await profileRes.json();
    }

    // Create signed cookie
    const token = signToken({
      userId: profile.userId || 'unknown',
      displayName: profile.displayName || 'User',
      exp: Date.now() + 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.setHeader('Set-Cookie', `sb_auth=${token}; Path=/; HttpOnly; SameSite=Lax; Secure; Max-Age=${7 * 24 * 60 * 60}`);
    return res.redirect('/book.html');

  } catch (err) {
    console.error('Auth error:', err);
    return res.redirect('/?error=server_error');
  }
};
