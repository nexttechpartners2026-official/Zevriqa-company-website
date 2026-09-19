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

export const metadata = {
  title: 'Our Services | Zevriqa',
  description: 'Explore the digital solutions Zevriqa offers, from custom software to cloud architecture.',
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesOverview />
        <ServiceDetails />
        <TechStack />
        <ProcessSteps />
        <DomainExpertise />
        <StatsBanner />
        <CaseStudies />
        <FaqAccordion />
      </main>
      <Cta />
      <Footer />
    </>
  );
}
