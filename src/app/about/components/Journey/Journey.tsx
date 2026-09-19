import styles from './Journey.module.css';

export default function Journey() {
  const milestones = [
    {
      year: '2016',
      title: 'The Beginning',
      desc: 'Started as a boutique consulting firm focused on modernizing legacy systems for financial institutions.',
    },
    {
      year: '2020',
      title: 'Cloud Expansion',
      desc: 'Expanded our core services to include enterprise cloud architectures, rapidly scaling our engineering team.',
    },
    {
      year: '2026',
      title: 'Global Reach',
      desc: 'Now serving Fortune 500 companies worldwide, delivering end-to-end digital transformation at scale.',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.kicker}>Our Story</p>
          <h2 className={styles.title}>A journey of innovation.</h2>
          <p className={styles.desc}>
            From a small consulting firm to a global digital engineering partner, our journey has been defined by a commitment to solving complex business challenges.
          </p>
        </div>

        <div className={styles.grid}>
          {milestones.map((m, i) => (
            <div key={i} className={styles.card}>
              <h3 className={styles.year}>{m.year}</h3>
              <p className={styles.cardTitle}>{m.title}</p>
              <p className={styles.cardDesc}>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
