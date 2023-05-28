import Footer from './Footer';
import HowItWorks from './HowItWorks';
import FAQPage from './FaqPage';
import ContactUs from './ContactUs';
import Hero from './Hero';
import Products from './Products';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Products />
      <HowItWorks />
      <FAQPage />
      <ContactUs />
      <Footer />
    </main>
  );
}
