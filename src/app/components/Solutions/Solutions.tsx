import styles from './Solutions.module.css';
import { CheckCircle2 } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      title: 'Enterprise ERP Systems',
      desc: 'Centralized resource planning platforms that streamline operations, HR, finance, and supply chain logistics.',
    },
    {
      title: 'SaaS Platforms',
      desc: 'Multi-tenant software-as-a-service architectures built for scale, security, and recurring revenue models.',
    },
    {
      title: 'Data & Analytics Dashboards',
      desc: 'Real-time business intelligence tools that turn complex data streams into actionable insights.',
    },
    {
      title: 'Legacy Modernization',
      desc: 'Upgrading outdated systems to modern frameworks without disrupting your daily operations.',
    },
  ];

  return (
    <section className={styles.solutionsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <p className={styles.kicker}>Solutions We Build</p>
            <h2 className={styles.title}>Engineered for specific business needs.</h2>
          </div>
        </div>
        
        <div className={styles.grid}>
          {solutions.map((solution, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconWrapper}>
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className={styles.cardTitle}>{solution.title}</h3>
                <p className={styles.cardDesc}>{solution.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
