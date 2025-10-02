import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Programs from '@/components/Programs';
import Cases from '@/components/Cases';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Benefits />
      <About />
      <Programs />
      <Cases />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
