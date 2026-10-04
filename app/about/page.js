import Link from 'next/link';
import Reveal from '../../components/Reveal';
import { T } from '../../components/Lang';
import { education } from '../../lib/data';

export const metadata = { title: 'About', description: 'About Punit Yadav — web developer from Kanpur with 2 years of experience in Next.js, React, PHP and Laravel.' };

export default function About() {
  return (
    <main className="section page">
      <div className="about-wrap">
        <Reveal><img className="portrait" src="/images/profile.svg" alt="Punit Yadav" /></Reveal>
        <div>
          <Reveal as="h1"><T en="About Punit" hi="पुनीत के बारे में" /></Reveal>
          <Reveal delay={0.1} as="p" className="lead">
            <T en="I live in Kanpur, and my roots are in Makhanpur village, Auraiya. I work as a web developer at VFX ERA, where I have worked on 20+ projects using HTML, CSS, JavaScript, PHP, Laravel, React and Next.js."
               hi="मैं कानपुर में रहता हूँ और मेरा गाँव मखनपुर, औरैया है। मैं VFX ERA में वेब डेवलपर के रूप में काम करता हूँ, जहाँ मैंने HTML, CSS, JavaScript, PHP, Laravel, React और Next.js से 20 से ज़्यादा प्रोजेक्ट्स पर काम किया है।" />
          </Reveal>
          <Reveal delay={0.2}>
            <div className="stats">
              <div><b>2+</b><span><T en="years experience" hi="साल का अनुभव" /></span></div>
              <div><b>20+</b><span><T en="projects built" hi="प्रोजेक्ट बनाए" /></span></div>
            </div>
          </Reveal>
          <Reveal delay={0.3} className="btns">
            <a className="btn" href="/resume.pdf" download><T en="Download resume" hi="रेज़्यूमे डाउनलोड करें" /></a>
            <Link className="btn ghost" href="/contact"><T en="Hire me" hi="मुझे काम दें" /></Link>
          </Reveal>
        </div>
      </div>
      <Reveal as="h2" className="edu-h"><T en="Education" hi="शिक्षा" /></Reveal>
      {education.map((e) => (
        <Reveal key={e.t} className="edu"><b><T en={e.t} hi={e.t_hi} /></b><span><T en={e.s} hi={e.s_hi} /></span><em>{e.y}</em></Reveal>
      ))}
    </main>
  );
}