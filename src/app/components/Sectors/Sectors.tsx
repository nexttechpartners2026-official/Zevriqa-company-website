import styles from './Sectors.module.css';

export default function Sectors() {
  const sectors = [
    {
      title: 'FinTech & Banking',
      image: 'https://files.cdn-files-a.com/uploads/12396961/800_gi-6aae1bbe4b421.jpg?format=avif',
    },
    {
      title: 'Healthcare & HealthTech',
      image: 'https://files.cdn-files-a.com/uploads/12396961/800_gi-6aae1bbe4b427.jpg?format=avif',
    },
    {
      title: 'Retail & E-Commerce',
      image: 'https://files.cdn-files-a.com/uploads/12396961/800_gi-6aae1bbe4b42c.jpg?format=avif',
    },
    {
      title: 'Logistics & Supply Chain',
      image: 'https://files.cdn-files-a.com/uploads/12396961/800_gi-6aae1bbe4b431.jpg?format=avif',
    },
  ];

  return (
    <section className={styles.sectorsSection}>
      <div className={styles.header}>
        <p className={styles.kicker}>Industries We Serve</p>
        <h2 className={styles.title}>Domain expertise across sectors.</h2>
      </div>

      <div className={styles.grid}>
        {sectors.map((sector, i) => (
          <div key={i} className={styles.card}>
            <img src={sector.image} alt={sector.title} className={styles.image} />
            <div className={styles.overlay}></div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{sector.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
