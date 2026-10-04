import { notFound } from 'next/navigation';
import Link from 'next/link';
import Reveal from '../../../components/Reveal';
import { T } from '../../../components/Lang';
import { posts } from '../../../lib/data';

export function generateStaticParams() { return posts.map((p) => ({ slug: p.slug })); }
export function generateMetadata({ params }) {
  const p = posts.find((x) => x.slug === params.slug);
  return p ? { title: p.title, description: p.excerpt, alternates: { canonical: `/blog/${p.slug}` } } : {};
}

export default function Post({ params }) {
  const p = posts.find((x) => x.slug === params.slug);
  if (!p) notFound();
  return (
    <main className="section page article">
      <Link href="/blog" className="back"><T en="← All articles" hi="← सभी लेख" /></Link>
      <Reveal as="h1"><T en={p.title} hi={p.title_hi} /></Reveal>
      <time>{p.date} · <T en="by Punit Yadav" hi="लेखक: पुनीत यादव" /></time>
      {p.body.map((para, i) => <Reveal key={i} as="p" delay={i * 0.05}><T en={para} hi={p.body_hi[i]} /></Reveal>)}
    </main>
  );
}