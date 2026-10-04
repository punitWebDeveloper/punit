import { EMAIL, socials } from '../lib/data';
import { T } from './Lang';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} <T en="Punit Yadav" hi="पुनीत यादव" /></p>
      <div>
        <a href={socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={socials.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a href={`mailto:${EMAIL}`}><T en="Email" hi="ईमेल" /></a>
      </div>
    </footer>
  );
}