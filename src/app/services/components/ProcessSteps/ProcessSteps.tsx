import styles from './ProcessSteps.module.css';
import { ProcessStepsData, ProcessStepItem } from '@/types/cms';

const DEFAULT_STEPS: ProcessStepItem[] = [
  { num: '01', title: 'Discovery', desc: 'We start by understanding your business, goals, and technical requirements.' },
  { num: '02', title: 'Strategy', desc: 'Developing a comprehensive roadmap and system architecture for the project.' },
  { num: '03', title: 'Wireframing', desc: 'Creating intuitive UI/UX designs and user flows for seamless interaction.' },
  { num: '04', title: 'Development', desc: 'Agile implementation using modern frameworks and best coding practices.' },
  { num: '05', title: 'Testing', desc: 'Rigorous QA, security auditing, and performance optimization before release.' },
  { num: '06', title: 'Launch', desc: 'Smooth deployment and ongoing support to ensure long-term success.' },
];

interface ProcessStepsProps {
  data?: ProcessStepsData;
}

export default function ProcessSteps({ data }: ProcessStepsProps) {
  const kicker = data?.kicker || 'Our Process';
  const title = data?.title || 'From concept to launch.';
  const steps = data?.steps && data.steps.length > 0 ? data.steps : DEFAULT_STEPS;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.kicker}>{kicker}</p>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={step.id || step.num || index} className={styles.stepCard}>
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
