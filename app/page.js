import Link from 'next/link';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import { T } from '../components/Lang';
import { projects, skills, experience as x } from '../lib/data';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="marquee" aria-hidden>
        <div className="track">{[...skills, ...skills, ...skills].map((s, i) => <span key={i}>{s}</span>)}</div>
      </div>

      <section className="section">
        <Reveal as="h2"><T en="Experience" hi="अनुभव" /></Reveal>
        <Reveal className="quote">
          <h3 className="xp-title"><T en={x.role} hi={x.role_hi} /> · {x.company}</h3>
          <span><T en={x.place} hi={x.place_hi} /> · <T en={x.since} hi={x.since_hi} /></span>
          <ul className="xp-list">{x.points.map((p, i) => <li key={i}><T en={p} hi={x.points_hi[i]} /></li>)}</ul>
        </Reveal>
      </section>

      <section id="work" className="section">
        <Reveal as="h2"><T en="Selected work" hi="चुनिंदा काम" /></Reveal>
        <div className="grid">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link className="card" href={`/projects/${p.slug}`}>
                <div className="card-img"><img src={`/images/${p.img}.svg`} alt={`${p.name} project screenshot`} loading="lazy" /></div>
                <h3>{p.name}</h3>
                <p><T en={p.tag} hi={p.tag_hi} /></p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section contact">
        <Reveal as="h2"><T en="Have a project in mind?" hi="कोई प्रोजेक्ट बनवाना है?" /></Reveal>
        <Reveal delay={0.1}><Link className="btn big" href="/contact"><T en="Let's talk" hi="बात करते हैं" /></Link></Reveal>
      </section>
    </main>
  );
}