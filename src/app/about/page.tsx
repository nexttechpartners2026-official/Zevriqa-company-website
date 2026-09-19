import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';
import Cta from '@/app/components/Cta/Cta';
import AboutHero from '@/app/about/components/AboutHero/AboutHero';
import Empowering from '@/app/about/components/Empowering/Empowering';
import Journey from '@/app/about/components/Journey/Journey';
import Mission from '@/app/about/components/Mission/Mission';
import Values from '@/app/about/components/Values/Values';
import Different from '@/app/about/components/Different/Different';

export const metadata = {
  title: 'About Us | Zevriqa',
  description: 'Learn more about Zevriqa and our mission to engineer clarity, performance, and scale.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <Empowering />
        <Journey />
        <Mission />
        <Values />
        <Different />
      </main>
      <Cta />
      <Footer />
    </>
  );
}
