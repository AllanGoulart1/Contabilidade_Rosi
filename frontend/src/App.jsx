import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/ui/SEO';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import WhatsAppFloat from './components/ui/WhatsAppFloat';

export default function App() {
  return (
    <HelmetProvider>
      <SEO />
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Differentials />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppFloat />
    </HelmetProvider>
  );
}
