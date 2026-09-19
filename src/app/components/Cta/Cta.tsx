import styles from './Cta.module.css';

export default function Cta() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.gradientOverlay}></div>
        <h2 className={styles.title}>Ready to build the future?</h2>
        <p className={styles.desc}>
          Let's discuss how Zevriqa can engineer the right software solution to accelerate your business goals.
        </p>
        <div className={styles.buttonWrapper}>
          <a href="#" className={styles.button}>
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
