import Footer from './Footer';
import HowItWorks from './HowItWorks';
import FAQPage from './FaqPage';
import ContactUs from './ContactUs';
import Hero from './Hero';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <FAQPage />
      <ContactUs />
      <Footer />
    </main>
  );
}
