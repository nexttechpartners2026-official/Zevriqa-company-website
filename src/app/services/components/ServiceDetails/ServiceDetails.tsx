import styles from './ServiceDetails.module.css';
import { CheckCircle2 } from 'lucide-react';

const DETAILS = [
  {
    id: 1,
    title: 'Custom Software Development',
    kicker: 'ENGINEERING',
    desc: 'From initial concept to final deployment, we build robust, scalable custom software solutions tailored to your unique business requirements.',
    features: [
      'Enterprise Applications',
      'SaaS Platform Development',
      'Legacy Modernization'
    ],
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop',
    imagePosition: 'right'
  },
  {
    id: 2,
    title: 'Mobile App Development',
    kicker: 'MOBILE FIRST',
    desc: 'Deliver seamless user experiences across iOS and Android with our high-performance native and cross-platform mobile development services.',
    features: [
      'iOS & Android Native Apps',
      'React Native & Flutter',
      'Mobile UX/UI Design'
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
    imagePosition: 'left'
  },
  {
    id: 3,
    title: 'Data & Analytics',
    kicker: 'DATA INTELLIGENCE',
    desc: 'Unlock the power of your data. We design data pipelines, analytics dashboards, and implement machine learning models to drive decision-making.',
    features: [
      'Data Warehousing',
      'Predictive Analytics',
      'Business Intelligence'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    imagePosition: 'right'
  },
  {
    id: 4,
    title: 'Cloud & DevOps',
    kicker: 'INFRASTRUCTURE',
    desc: 'Accelerate your time-to-market with automated CI/CD pipelines, containerization, and scalable cloud infrastructure on AWS, Azure, or GCP.',
    features: [
      'Cloud Migration',
      'CI/CD Pipelines',
      'Infrastructure as Code'
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    imagePosition: 'left'
  }
];

export default function ServiceDetails() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {DETAILS.map((detail) => (
          <div 
            key={detail.id} 
            className={`${styles.row} ${detail.imagePosition === 'left' ? styles.rowReverse : ''}`}
          >
            <div className={styles.textContent}>
              <p className={styles.kicker}>{detail.kicker}</p>
              <h3 className={styles.title}>{detail.title}</h3>
              <p className={styles.desc}>{detail.desc}</p>
              <ul className={styles.featuresList}>
                {detail.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <CheckCircle2 className={styles.checkIcon} size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.imageContent}>
              <div className={styles.imageWrapper}>
                <img src={detail.image} alt={detail.title} className={styles.image} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
