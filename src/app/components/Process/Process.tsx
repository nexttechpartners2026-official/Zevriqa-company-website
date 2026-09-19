import styles from './Process.module.css';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Architecture',
      desc: 'We analyze your requirements and design a scalable system architecture before writing a single line of code.',
    },
    {
      num: '02',
      title: 'Agile Development',
      desc: 'Iterative sprints ensure transparency, allowing for feedback and adjustments as the software takes shape.',
    },
    {
      num: '03',
      title: 'Rigorous Testing',
      desc: 'Automated QA, security audits, and load testing guarantee the system behaves flawlessly under stress.',
    },
    {
      num: '04',
      title: 'Deployment & Support',
      desc: 'Smooth CI/CD rollouts followed by 24/7 monitoring and dedicated maintenance teams.',
    },
  ];

  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.kicker}>Our Development Process</p>
          <h2 className={styles.title}>How we deliver success.</h2>
        </div>
        
        <div className={styles.grid}>
          {steps.map((step, i) => (
            <div key={i} className={styles.card}>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
