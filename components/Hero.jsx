'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLang, T } from './Lang';

const L = { en: ['I build fast,', 'playful things', 'for the web.'], hi: ['मैं तेज़,', 'मज़ेदार चीज़ें', 'वेब के लिए बनाता हूँ।'] };

export default function Hero() {
  const [d, setD] = useState(3);
  const { lang } = useLang();
  useEffect(() => { if (sessionStorage.getItem('welcomed')) setD(0.1); }, []);
  return (
    <section className="hero">
      <h1>
        {L[lang].map((l, i) => (
          <span key={i} className="mask">
            <motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ delay: d + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>{l}</motion.span>
          </span>
        ))}
      </h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: d + 0.6 }}>
        <T en="Hi, I'm Punit from Kanpur — a web developer with 2 years of experience in Next.js, React, PHP and Laravel, building fast, good-looking websites."
           hi="नमस्ते, मैं कानपुर से पुनीत हूँ — एक वेब डेवलपर, जिसे Next.js, React, PHP और Laravel में 2 साल का अनुभव है। मैं तेज़ और सुंदर वेबसाइट बनाता हूँ।" />
      </motion.p>
      <motion.div className="btns" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: d + 0.8 }}>
        <Link className="btn" href="/#work"><T en="View my work" hi="मेरा काम देखें" /></Link>
        <a className="btn ghost" href="/resume.pdf" download><T en="Download resume" hi="रेज़्यूमे डाउनलोड करें" /></a>
      </motion.div>
      <motion.div className="blob" animate={{ rotate: 360, scale: [1, 1.15, 1] }}
        transition={{ rotate: { repeat: Infinity, duration: 18, ease: 'linear' }, scale: { repeat: Infinity, duration: 6 } }} />
    </section>
  );
}