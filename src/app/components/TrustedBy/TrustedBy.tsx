import styles from './TrustedBy.module.css';

export default function TrustedBy() {
  return (
    <section className={styles.trustedBySection}>
      <div className={styles.container}>
        <p className={styles.label}>Trusted by innovative companies worldwide</p>
        <div className={styles.logos}>
          <div className={styles.logo}>Acme Corp</div>
          <div className={styles.logo}>GlobalTech</div>
          <div className={styles.logo}>InnovateIO</div>
          <div className={styles.logo}>NexusSystems</div>
          <div className={styles.logo}>CloudScale</div>
        </div>
      </div>
    </section>
  );
}
