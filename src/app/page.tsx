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

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Show only one of the below three components based on preference */}
      <VideoBanner />
      {/* <ImageCarousel /> */}
      {/* <SingleImage /> */}
      <FadeIn direction="up" delay={100}><Hero /></FadeIn>
      <FadeIn direction="up" delay={100}><TrustedBy /></FadeIn>
      <FadeIn direction="up" delay={100}><About /></FadeIn>
      <FadeIn direction="up" delay={100}><Features /></FadeIn>
      <FadeIn direction="up" delay={100}><Solutions /></FadeIn>
      <FadeIn direction="up" delay={100}><Sectors /></FadeIn>
      <FadeIn direction="up" delay={100}><Tools /></FadeIn>
      <FadeIn direction="up" delay={100}><Process /></FadeIn>
      <FadeIn direction="up" delay={100}><Flawless /></FadeIn>
      <FadeIn direction="up" delay={100}><Stats /></FadeIn>
      <FadeIn direction="up" delay={100}><Testimonials /></FadeIn>
      <FadeIn direction="up" delay={100}><Blog /></FadeIn>
      <FadeIn direction="up" delay={100}><FAQ /></FadeIn>
      <FadeIn direction="up" delay={100}><Cta /></FadeIn>
      <Footer />
    </>
  );
}
