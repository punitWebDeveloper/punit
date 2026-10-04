import Link from 'next/link';
import Reveal from '../../components/Reveal';
import { T } from '../../components/Lang';
import { posts } from '../../lib/data';

export const metadata = { title: 'Blog', description: 'Articles on Next.js, React, web speed and SEO by Punit Yadav.' };

export default function Blog() {
  return (
    <main className="section page">
      <Reveal as="h1"><T en="Blog" hi="ब्लॉग" /></Reveal>
      {posts.map((p, i) => (
        <Reveal key={p.slug} delay={i * 0.08}>
          <Link className="post" href={`/blog/${p.slug}`}>
            <time>{p.date}</time>
            <h3><T en={p.title} hi={p.title_hi} /></h3>
            <p><T en={p.excerpt} hi={p.excerpt_hi} /></p>
          </Link>
        </Reveal>
      ))}
    </main>
  );
}