import Navbar from '@/app/components/Navbar/Navbar';
import Hero from '@/app/components/Hero/Hero';
import TrustedBy from '@/app/components/TrustedBy/TrustedBy';
import About from '@/app/components/About/About';
import Features from '@/app/components/Features/Features';
import Solutions from '@/app/components/Solutions/Solutions';
import Sectors from '@/app/components/Sectors/Sectors';
import Tools from '@/app/components/Tools/Tools';
import Process from '@/app/components/Process/Process';
import Flawless from '@/app/components/Flawless/Flawless';
import Stats from '@/app/components/Stats/Stats';
import Testimonials from '@/app/components/Testimonials/Testimonials';
import Blog from '@/app/components/Blog/Blog';
import FAQ from '@/app/components/FAQ/FAQ';
import Cta from '@/app/components/Cta/Cta';
import Footer from '@/app/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <About />
      <Features />
      <Solutions />
      <Sectors />
      <Tools />
      <Process />
      <Flawless />
      <Stats />
      <Testimonials />
      <Blog />
      <FAQ />
      <Cta />
      <Footer />
    </>
  );
}
