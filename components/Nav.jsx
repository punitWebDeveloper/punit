'use client';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import { useLang, T } from './Lang';

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const { lang, toggle } = useLang();
  return (
    <>
      <motion.div className="progress" style={{ scaleX: scrollYProgress }} />
      <motion.nav className="nav" initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 3, duration: 0.7 }}>
        <Link href="/" className="logo"><T en="Punit" hi="पुनीत" /></Link>
        <div>
          <Link href="/#work"><T en="Work" hi="काम" /></Link>
          <Link href="/blog"><T en="Blog" hi="ब्लॉग" /></Link>
          <Link href="/about"><T en="About" hi="परिचय" /></Link>
          <button className="lang-btn" onClick={toggle} aria-label="Change language">{lang === 'en' ? 'हिंदी' : 'English'}</button>
          <Link href="/contact" className="pill"><T en="Contact" hi="संपर्क" /></Link>
        </div>
      </motion.nav>
    </>
  );
}