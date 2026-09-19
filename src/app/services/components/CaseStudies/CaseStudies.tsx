import styles from './CaseStudies.module.css';

const CASE_STUDIES = [
  {
    kicker: 'CLOUD MIGRATION',
    title: 'Global Logistics Network Modernization',
    desc: 'How we transitioned a legacy on-premise system to a highly available, multi-region AWS cloud architecture, reducing downtime by 99.9%.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop'
  },
  {
    kicker: 'AI INTEGRATION',
    title: 'Predictive Analytics for Healthcare',
    desc: 'Implementing machine learning models into an existing EHR system to predict patient readmissions with 85% accuracy.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop'
  }
];

export default function CaseStudies() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.kicker}>Case Studies</p>
        <h2 className={styles.title}>Real results.</h2>

        <div className={styles.grid}>
          {CASE_STUDIES.map((study, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={study.image} alt={study.title} className={styles.image} />
              </div>
              <p className={styles.cardKicker}>{study.kicker}</p>
              <h3 className={styles.cardTitle}>{study.title}</h3>
              <p className={styles.cardDesc}>{study.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
