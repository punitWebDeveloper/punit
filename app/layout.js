import NextTopLoader from 'nextjs-toploader';
import { Analytics } from '@vercel/analytics/react';
import { Bricolage_Grotesque, DM_Sans, Noto_Sans_Devanagari } from 'next/font/google';
import { LangProvider } from '../components/Lang';
import Welcome from '../components/Welcome';
import Cursor from '../components/Cursor';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { SITE, EMAIL, socials } from '../lib/data';
import './globals.css';

const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--display' });
const body = DM_Sans({ subsets: ['latin'], variable: '--body' });
const hindi = Noto_Sans_Devanagari({ subsets: ['devanagari'], weight: ['400', '600', '800'], variable: '--hindi' });

export const metadata = {
  metadataBase: new URL(SITE),
  title: { default: 'Punit Yadav — Full-Stack Web Developer', template: '%s | Punit Yadav' },
  description: 'Punit Yadav is a web developer from Kanpur with 2 years of experience in Next.js, React, PHP and Laravel. Available for freelance and full-time work.',
  keywords: ['Punit Yadav', 'web developer Kanpur', 'Next.js developer Kanpur', 'PHP Laravel developer', 'web developer', 'Next.js developer', 'React developer', 'portfolio', 'freelance developer India'],
  alternates: { canonical: '/' },
  openGraph: { title: 'Punit Yadav — Full-Stack Web Developer', description: '2 years of experience in Next.js and React.', url: SITE, siteName: 'Punit Yadav', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Punit Yadav — Web Developer' },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Person', name: 'Punit Yadav', jobTitle: 'Full-Stack Web Developer',
  email: EMAIL, url: SITE, sameAs: [socials.github, socials.linkedin], knowsAbout: ['Next.js', 'React', 'PHP', 'Laravel', 'Node.js', 'JavaScript'], address: { '@type': 'PostalAddress', addressLocality: 'Kanpur', addressRegion: 'Uttar Pradesh', addressCountry: 'IN' }, worksFor: { '@type': 'Organization', name: 'VFX ERA' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${hindi.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <LangProvider>
        <NextTopLoader color="#A78BFA" height={4} showSpinner={false} shadow="0 0 12px #F472B6" />
        <Welcome />
        <Cursor />
        <Nav />
        {children}
        <Footer />
        <Analytics />
        </LangProvider>
      </body>
    </html>
  );
}