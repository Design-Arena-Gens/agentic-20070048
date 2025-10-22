import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChoose from '@/components/WhyChoose';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Partners from '@/components/Partners';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Partners />
      <Portfolio />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
