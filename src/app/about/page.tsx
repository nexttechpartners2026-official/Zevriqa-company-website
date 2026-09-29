import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';
import Cta from '@/app/components/Cta/Cta';
import AboutHero from '@/app/about/components/AboutHero/AboutHero';
import Empowering from '@/app/about/components/Empowering/Empowering';
import Journey from '@/app/about/components/Journey/Journey';
import Mission from '@/app/about/components/Mission/Mission';
import Values from '@/app/about/components/Values/Values';
import Different from '@/app/about/components/Different/Different';
import FadeIn from '@/app/components/FadeIn/FadeIn';

export const metadata = {
  title: 'About Us | Zevriqa',
  description: 'Learn more about Zevriqa and our mission to engineer clarity, performance, and scale.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <FadeIn direction="up" delay={100}><AboutHero /></FadeIn>
        <FadeIn direction="up" delay={100}><Empowering /></FadeIn>
        <FadeIn direction="up" delay={100}><Journey /></FadeIn>
        <FadeIn direction="up" delay={100}><Mission /></FadeIn>
        <FadeIn direction="up" delay={100}><Values /></FadeIn>
        <FadeIn direction="up" delay={100}><Different /></FadeIn>
      </main>
      <FadeIn direction="up" delay={100}><Cta /></FadeIn>
      <Footer />
    </>
  );
}
