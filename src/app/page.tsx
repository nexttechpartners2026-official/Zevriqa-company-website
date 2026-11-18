import Navbar from '@/app/components/Navbar/Navbar';
import VideoBanner from '@/app/components/VideoBanner/VideoBanner';
import ImageCarousel from '@/app/components/ImageCarousel/ImageCarousel';
import SingleImage from '@/app/components/SingleImage/SingleImage';
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
import FadeIn from '@/app/components/FadeIn/FadeIn';

import { getHomePageData } from '@/lib/cms';

export default async function Home() {
  const cmsData = await getHomePageData();
  const bannerType = cmsData?.banner?.type || 'video';

  return (
    <>
      <Navbar />

      {/* Top Banner configured via CMS */}
      {bannerType === 'video' && <VideoBanner videoUrl={cmsData?.banner?.videoUrl} />}
      {bannerType === 'carousel' && <ImageCarousel slides={cmsData?.banner?.carouselSlides} />}
      {bannerType === 'singleImage' && <SingleImage data={cmsData?.banner?.singleImage} />}

      <FadeIn direction="up" delay={100}><Hero data={cmsData?.hero} /></FadeIn>
      <FadeIn direction="up" delay={100}><TrustedBy data={cmsData?.trustedBy} /></FadeIn>
      <FadeIn direction="up" delay={100}><About data={cmsData?.about} /></FadeIn>
      <FadeIn direction="up" delay={100}><Features data={cmsData?.features} /></FadeIn>
      <FadeIn direction="up" delay={100}><Solutions data={cmsData?.solutions} /></FadeIn>
      <FadeIn direction="up" delay={100}><Sectors data={cmsData?.sectors} /></FadeIn>
      <FadeIn direction="up" delay={100}><Tools data={cmsData?.tools} /></FadeIn>
      <FadeIn direction="up" delay={100}><Process data={cmsData?.process} /></FadeIn>
      <FadeIn direction="up" delay={100}><Flawless data={cmsData?.flawless} /></FadeIn>
      <FadeIn direction="up" delay={100}><Stats data={cmsData?.stats} /></FadeIn>
      <FadeIn direction="up" delay={100}><Testimonials data={cmsData?.testimonials} /></FadeIn>
      <FadeIn direction="up" delay={100}><Blog data={cmsData?.blog} /></FadeIn>
      <FadeIn direction="up" delay={100}><FAQ data={cmsData?.faq} /></FadeIn>
      <FadeIn direction="up" delay={100}><Cta data={cmsData?.cta} /></FadeIn>
      <Footer />
    </>
  );
}
