'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence, animate } from 'framer-motion';

export default function Welcome() {
  const [show, setShow] = useState(true);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem('welcomed')) return setShow(false);
    document.body.style.overflow = 'hidden';
    const c = animate(0, 100, {
      duration: 2.4, ease: 'easeInOut', onUpdate: (v) => setN(Math.round(v)),
      onComplete: () => setTimeout(() => {
        sessionStorage.setItem('welcomed', '1');
        document.body.style.overflow = '';
        setShow(false);
      }, 300),
    });
    return () => c.stop();
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div className="welcome" exit={{ y: '-100%' }} transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}>
          <div className="welcome-word">
            {'Welcome'.split('').map((ch, i) => (
              <span key={i} className="mask">
                <motion.span initial={{ y: '110%' }} animate={{ y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>{ch}</motion.span>
              </span>
            ))}
          </div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
            I'm glad you stopped by.
          </motion.p>
          <div className="welcome-count">{n}</div>
          <div className="welcome-bar" style={{ transform: `scaleX(${n / 100})` }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
