import styles from './ServicesHero.module.css';

export default function ServicesHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOrbLeft}></div>
      <div className={styles.heroOrbRight}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Our Services</h1>
        <p className={styles.heroDesc}>
          Comprehensive digital solutions tailored to scale, secure, and accelerate your business.
        </p>
        <button className={styles.heroBtn}>Let's Talk</button>
      </div>
    </section>
  );
}
