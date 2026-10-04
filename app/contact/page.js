import Reveal from '../../components/Reveal';
import ContactForm from '../../components/ContactForm';
import { T } from '../../components/Lang';
import { EMAIL, socials } from '../../lib/data';

export const metadata = { title: 'Contact', description: 'Hire Punit Yadav for your next website or web app. Send a message.' };

export default function Contact() {
  return (
    <main className="section page">
      <Reveal as="h1"><T en="Let's work together" hi="आइए साथ काम करें" /></Reveal>
      <div className="contact-wrap">
        <Reveal delay={0.1}><ContactForm /></Reveal>
        <Reveal delay={0.2} className="info">
          <p><T en="Prefer direct contact?" hi="सीधे संपर्क करना चाहते हैं?" /></p>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href={socials.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </Reveal>
      </div>
    </main>
  );
}