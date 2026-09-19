import styles from './Hero.module.css';
import BannerImage from "../../../assets/images/banner-image.avif"
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.orb} ${styles.orbSage}`}></div>
      <div className={`${styles.orb} ${styles.orbTerracotta}`}></div>

      <div className={styles.heroGrid}>
        <div className={styles.content}>
          <p className={styles.kicker}>Software & Cloud Engineering</p>
          <h1 className={styles.title}>Scalable Solutions For Modern Business.</h1>
          <p className={styles.description}>
            Zevriqa engineers reliable custom software and cloud applications that streamline operations, improve performance, and support long-term growth.
          </p>
          <div className={styles.actions}>
            <button className={styles.primaryBtn}>Explore Capabilities</button>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src={BannerImage}
              alt="Software engineering team collaborating in a modern office"
              className={styles.archImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
