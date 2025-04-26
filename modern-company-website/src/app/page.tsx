import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Solutions from '@/components/Collections';
import About from '@/components/About';
import Cases from '@/components/Lookbook';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Solutions />
      <About />
      <Cases />
      <Contact />
      <Footer />
    </main>
  );
}
