import styles from './DomainExpertise.module.css';

const DOMAINS = [
  { title: 'Finance & Fintech', image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop' },
  { title: 'Healthcare & Medtech', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop' },
  { title: 'Retail & E-commerce', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop' },
  { title: 'Logistics & Supply', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop' }
];

export default function DomainExpertise() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.kicker}>Industries</p>
        <h2 className={styles.title}>Domain expertise.</h2>

        <div className={styles.grid}>
          {DOMAINS.map((domain, index) => (
            <div key={index} className={styles.card}>
              <img src={domain.image} alt={domain.title} className={styles.cardImage} />
              <div className={styles.cardOverlay}>
                <h3 className={styles.cardTitle}>{domain.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
