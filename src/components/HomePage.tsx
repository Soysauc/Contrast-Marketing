import Header from './Header';
import Footer from './Footer';
import HowItWorks from './HowItWorks';
import FAQPage from './FaqPage';
import ContactUs from './ContactUs';

export default function HomePage() {
  return (
    <main>
      <Header />
      <HowItWorks />
      <FAQPage />
      <ContactUs />
      <Footer />
    </main>
  );
}
