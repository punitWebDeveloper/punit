'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const Ctx = createContext({ lang: 'en', toggle: () => {} });
export const useLang = () => useContext(Ctx);

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    try { if (localStorage.getItem('lang') === 'hi') setLang('hi'); } catch {}
  }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const toggle = () => setLang((l) => {
    const n = l === 'en' ? 'hi' : 'en';
    try { localStorage.setItem('lang', n); } catch {}
    return n;
  });
  return <Ctx.Provider value={{ lang, toggle }}>{children}</Ctx.Provider>;
}

export function T({ en, hi }) {
  const { lang } = useLang();
  return lang === 'hi' && hi ? hi : en;
}