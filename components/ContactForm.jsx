'use client';
import { useState } from 'react';
import { EMAIL } from '../lib/data';
import { useLang, T } from './Lang';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const { lang } = useLang();
  const hi = lang === 'hi';

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      const json = await res.json();
      if (json.ok) { setStatus('done'); form.reset(); } else setStatus('error');
    } catch { setStatus('error'); }
  }

  return (
    <div className="form">
      <input name="name" placeholder={hi ? 'आपका नाम' : 'Your name'} required form="cf" />
      <input name="email" type="email" placeholder={hi ? 'आपका ईमेल' : 'Your email'} required form="cf" />
      <textarea name="message" rows={6} placeholder={hi ? 'अपने प्रोजेक्ट के बारे में बताइए' : 'Tell me about your project'} required form="cf" />
      <form id="cf" onSubmit={onSubmit}>
        <button className="btn" disabled={status === 'sending'} type="submit">
          {status === 'sending' ? (hi ? 'भेजा जा रहा है…' : 'Sending…') : (hi ? 'संदेश भेजें' : 'Send message')}
        </button>
      </form>
      {status === 'done' && <p className="ok"><T en="Thanks! Your message was sent. I'll reply soon." hi="धन्यवाद! आपका संदेश भेज दिया गया है। मैं जल्द जवाब दूँगा।" /></p>}
      {status === 'error' && <p className="err"><T en="Message could not be sent. Please email me at" hi="संदेश नहीं भेजा जा सका। कृपया मुझे यहाँ ईमेल करें:" /> {EMAIL}</p>}
    </div>
  );
}