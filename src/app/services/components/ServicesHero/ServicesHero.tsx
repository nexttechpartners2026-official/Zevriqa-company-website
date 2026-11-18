import Link from 'next/link';
import styles from './ServicesHero.module.css';
import { ServicesHeroData } from '@/types/cms';

interface ServicesHeroProps {
  data?: ServicesHeroData;
}

export default function ServicesHero({ data }: ServicesHeroProps) {
  const title = data?.title || 'Our Services';
  const desc = data?.desc || 'Comprehensive digital solutions tailored to scale, secure, and accelerate your business.';
  const buttonText = data?.buttonText || "Let's Talk";
  const buttonLink = data?.buttonLink || '/contact';

  return (
    <section className={styles.hero}>
      <div className={styles.heroOrbLeft}></div>
      <div className={styles.heroOrbRight}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroDesc}>{desc}</p>
        <Link href={buttonLink} className={styles.heroBtn}>{buttonText}</Link>
      </div>
    </section>
  );
}
