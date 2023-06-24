import Footer from './Footer';
import HowItWorks from './HowItWorks';
import FAQPage from './FaqPage';
import ContactUs from './ContactUs';
import Hero from './Hero';
import Products from './Products';
import WhoWeAre from './WhoWeAre';
import BoxContainer from './Boxes';
export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <BoxContainer />
      <Products />
      <HowItWorks />
      <FAQPage />
      <ContactUs />
      <Footer />
    </main>
  );
}
