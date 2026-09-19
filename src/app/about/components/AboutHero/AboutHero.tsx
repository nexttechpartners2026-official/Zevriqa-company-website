import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.orb} ${styles.orbSage}`}></div>
      <div className={`${styles.orb} ${styles.orbTerracotta}`}></div>
      <div className={styles.container}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.subtitle}>Discover our vision and the dedicated team behind Zevriqa.</p>
      </div>
    </section>
  );
}
