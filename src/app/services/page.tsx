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
import { getServicesPageData } from '@/lib/cms';

export const metadata = {
  title: 'Our Services | Zevriqa',
  description: 'Explore the digital solutions Zevriqa offers, from custom software to cloud architecture.',
};

export default async function ServicesPage() {
  const cmsData = await getServicesPageData();

  return (
    <>
      <Navbar />
      <main>
        <FadeIn direction="up" delay={100}><ServicesHero data={cmsData?.hero} /></FadeIn>
        <FadeIn direction="up" delay={100}><ServicesOverview data={cmsData?.overview} /></FadeIn>
        <FadeIn direction="up" delay={100}><ServiceDetails data={cmsData?.details} /></FadeIn>
        <FadeIn direction="up" delay={100}><TechStack data={cmsData?.techStack} /></FadeIn>
        <FadeIn direction="up" delay={100}><ProcessSteps data={cmsData?.process} /></FadeIn>
        <FadeIn direction="up" delay={100}><DomainExpertise data={cmsData?.domainExpertise} /></FadeIn>
        <FadeIn direction="up" delay={100}><StatsBanner data={cmsData?.statsBanner} /></FadeIn>
        <FadeIn direction="up" delay={100}><CaseStudies data={cmsData?.caseStudies} /></FadeIn>
        <FadeIn direction="up" delay={100}><FaqAccordion data={cmsData?.faq} /></FadeIn>
      </main>
      <FadeIn direction="up" delay={100}><Cta data={cmsData?.cta} /></FadeIn>
      <Footer />
    </>
  );
}
