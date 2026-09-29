import styles from './Stats.module.css';

export default function Stats() {
  const stats = [
    {
      number: '2+',
      label: 'Projects Delivered',
    },
    {
      number: '99.9%',
      label: 'Uptime SLA',
    },
    {
      number: '5+',
      label: 'Senior Engineers',
    },
    {
      number: '1',
      label: 'Years Experience',
    },
  ];

  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        {stats.map((stat, i) => (
          <div key={i} className={styles.stat}>
            <div className={styles.number}>{stat.number}</div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
