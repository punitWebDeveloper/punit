import { notFound } from 'next/navigation';
import Link from 'next/link';
import Reveal from '../../../components/Reveal';
import { T } from '../../../components/Lang';
import { projects } from '../../../lib/data';

export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }
export function generateMetadata({ params }) {
  const p = projects.find((x) => x.slug === params.slug);
  return p ? { title: p.name, description: p.desc, alternates: { canonical: `/projects/${p.slug}` } } : {};
}

export default function Project({ params }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) notFound();
  return (
    <main className="section page">
      <Link href="/#work" className="back"><T en="← All projects" hi="← सभी प्रोजेक्ट" /></Link>
      <Reveal as="h1">{p.name}</Reveal>
      <Reveal delay={0.1}><img className="cover" src={`/images/${p.img}.svg`} alt={`${p.name} screenshot`} /></Reveal>
      <Reveal delay={0.15} className="meta">
        <div><b><T en="Role" hi="भूमिका" /></b><span><T en={p.role} hi={p.role_hi} /></span></div>
        <div><b><T en="Year" hi="वर्ष" /></b><span>{p.year}</span></div>
        <div><b><T en="Stack" hi="टेक्नोलॉजी" /></b><span>{p.stack.join(', ')}</span></div>
      </Reveal>
      <Reveal delay={0.2} as="p" className="lead"><T en={p.desc} hi={p.desc_hi} /></Reveal>
      <Reveal delay={0.25} className="btns">
        {p.live && <a className="btn" href={p.live} target="_blank" rel="noopener noreferrer"><T en="Live site" hi="लाइव साइट" /></a>}
        {p.github && <a className="btn ghost" href={p.github} target="_blank" rel="noopener noreferrer"><T en="Source code" hi="सोर्स कोड" /></a>}
      </Reveal>
    </main>
  );
}