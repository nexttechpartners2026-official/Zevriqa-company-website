import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';
import Cta from '@/app/components/Cta/Cta';
import ServicesHero from './components/ServicesHero/ServicesHero';
import ServicesOverview from './components/ServicesOverview/ServicesOverview';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import TechStack from './components/TechStack/TechStack';
import ProcessSteps from './components/ProcessSteps/ProcessSteps';
import DomainExpertise from './components/DomainExpertise/DomainExpertise';
import StatsBanner from './components/StatsBanner/StatsBanner';
import CaseStudies from './components/CaseStudies/CaseStudies';
import FaqAccordion from './components/FaqAccordion/FaqAccordion';
import FadeIn from '@/app/components/FadeIn/FadeIn';

export const metadata = {
  title: 'Our Services | Zevriqa',
  description: 'Explore the digital solutions Zevriqa offers, from custom software to cloud architecture.',
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <FadeIn direction="up" delay={100}><ServicesHero /></FadeIn>
        <FadeIn direction="up" delay={100}><ServicesOverview /></FadeIn>
        <FadeIn direction="up" delay={100}><ServiceDetails /></FadeIn>
        <FadeIn direction="up" delay={100}><TechStack /></FadeIn>
        <FadeIn direction="up" delay={100}><ProcessSteps /></FadeIn>
        <FadeIn direction="up" delay={100}><DomainExpertise /></FadeIn>
        <FadeIn direction="up" delay={100}><StatsBanner /></FadeIn>
        <FadeIn direction="up" delay={100}><CaseStudies /></FadeIn>
        <FadeIn direction="up" delay={100}><FaqAccordion /></FadeIn>
      </main>
      <FadeIn direction="up" delay={100}><Cta /></FadeIn>
      <Footer />
    </>
  );
}
