import styles from './Hero.module.css';
import BannerImage from '@/assets/images/banner-image.webp';
import Image from 'next/image';
import Link from 'next/link';
import { HeroData } from '@/types/cms';
import { getMediaUrl } from '@/lib/cms';

interface HeroProps {
  data?: HeroData;
}

export default function Hero({ data }: HeroProps) {
  const kicker = data?.kicker || 'Software & Cloud Engineering';
  const title = data?.title || 'Scalable Solutions For Modern Business.';
  const description =
    data?.description ||
    'Zevriqa engineers reliable custom software and cloud applications that streamline operations, improve performance, and support long-term growth.';
  const buttonText = data?.buttonText || 'Explore Capabilities';
  const buttonLink = data?.buttonLink || '/services';
  const imageAlt = data?.imageAlt || 'Software engineering team collaborating in a modern office';
  const cmsImageUrl = getMediaUrl(data?.image);

  return (
    <section className={styles.heroSection}>
      <div className={`${styles.orb} ${styles.orbSage}`}></div>
      <div className={`${styles.orb} ${styles.orbTerracotta}`}></div>

      <div className={styles.heroGrid}>
        <div className={styles.content}>
          <p className={styles.kicker}>{kicker}</p>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          <div className={styles.actions}>
            <Link href={buttonLink}>
              <p className={styles.primaryBtn}>{buttonText}</p>
            </Link>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            {cmsImageUrl ? (
              <img
                src={cmsImageUrl}
                alt={imageAlt}
                className={styles.archImage}
              />
            ) : (
              <Image
                src={BannerImage}
                alt={imageAlt}
                className={styles.archImage}
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
