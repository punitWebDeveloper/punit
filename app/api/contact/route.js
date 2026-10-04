export async function POST(req) {
  const { name, email, message } = await req.json();
  if (!name || !email || !message) return Response.json({ ok: false }, { status: 400 });
  const key = process.env.WEB3FORMS_KEY;
  if (!key) return Response.json({ ok: false, error: 'WEB3FORMS_KEY missing' }, { status: 500 });
  try {
    const r = await fetch('https://api.web3forms.com/submit', {
      method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ access_key: key, name, email, message, subject: `Portfolio message from ${name}` }),
    });
    const d = await r.json();
    return Response.json({ ok: !!d.success });
  } catch { return Response.json({ ok: false }, { status: 500 }); }
}
