import styles from './AboutHero.module.css';
import { AboutHeroData } from '@/types/cms';

interface AboutHeroProps {
  data?: AboutHeroData;
}

export default function AboutHero({ data }: AboutHeroProps) {
  const title = data?.title || 'About Us';
  const subtitle = data?.subtitle || 'Discover our vision and the dedicated team behind Zevriqa.';

  return (
    <section className={styles.heroSection}>
      <div className={`${styles.orb} ${styles.orbSage}`}></div>
      <div className={`${styles.orb} ${styles.orbTerracotta}`}></div>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </section>
  );
}
