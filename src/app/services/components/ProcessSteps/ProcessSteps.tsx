import styles from './ProcessSteps.module.css';

const STEPS = [
  { num: '01', title: 'Discovery', desc: 'We start by understanding your business, goals, and technical requirements.' },
  { num: '02', title: 'Strategy', desc: 'Developing a comprehensive roadmap and system architecture for the project.' },
  { num: '03', title: 'Wireframing', desc: 'Creating intuitive UI/UX designs and user flows for seamless interaction.' },
  { num: '04', title: 'Development', desc: 'Agile implementation using modern frameworks and best coding practices.' },
  { num: '05', title: 'Testing', desc: 'Rigorous QA, security auditing, and performance optimization before release.' },
  { num: '06', title: 'Launch', desc: 'Smooth deployment and ongoing support to ensure long-term success.' },
];

export default function ProcessSteps() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.kicker}>Our Process</p>
        <h2 className={styles.title}>From concept to launch.</h2>

        <div className={styles.grid}>
          {STEPS.map((step) => (
            <div key={step.num} className={styles.stepCard}>
              <span className={styles.stepNum}>{step.num}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
