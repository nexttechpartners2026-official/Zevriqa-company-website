import Image from 'next/image';
import styles from './About.module.css';
import { ArrowRight } from 'lucide-react';
import iconLogo from '@/assets/images/zevriqa-icon-logo-Photoroom.png';
import WhoWeAreImage from '@/assets/images/who-we-are-image.webp';
import Link from 'next/link';
import { AboutData } from '@/types/cms';
import { getMediaUrl } from '@/lib/cms';

interface AboutProps {
  data?: AboutData;
}

export default function About({ data }: AboutProps) {
  const kicker = data?.kicker || 'Who We Are';
  const title = data?.title || 'Transforming vision into robust digital realities.';
  const description =
    data?.description ||
    "At Zevriqa, we don't just write code; we engineer solutions that drive business transformation. With a team of seasoned architects and developers, we partner with enterprises to modernize legacy systems, build scalable cloud infrastructure, and deliver custom software that directly impacts the bottom line.";
  const linkText = data?.linkText || 'Discover Our Story';
  const linkUrl = data?.linkUrl || '/about';
  const imageAlt = data?.imageAlt || 'Software development team';
  const cmsImageUrl = getMediaUrl(data?.image);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.bgLogoWrapper}>
        <Image src={iconLogo} alt="" className={styles.bgLogo} />
      </div>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          {cmsImageUrl ? (
            <img
              src={cmsImageUrl}
              alt={imageAlt}
              className={styles.archImage}
            />
          ) : (
            <Image
              src={WhoWeAreImage}
              alt={imageAlt}
              className={styles.archImage}
            />
          )}
        </div>

        <div className={styles.content}>
          <p className={styles.kicker}>{kicker}</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <Link href={linkUrl} className={styles.link}>
            {linkText} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
