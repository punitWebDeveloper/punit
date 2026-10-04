import { SITE, projects, posts } from '../lib/data';
export default function sitemap() {
  const paths = ['', '/about', '/blog', '/contact', ...projects.map((p) => `/projects/${p.slug}`), ...posts.map((p) => `/blog/${p.slug}`)];
  return paths.map((p) => ({ url: SITE + p, lastModified: new Date() }));
}
