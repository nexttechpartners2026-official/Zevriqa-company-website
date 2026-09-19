import styles from './Different.module.css';
import { Code, Settings, User, Lock } from 'lucide-react';

export default function Different() {
  const points = [
    {
      icon: Code,
      title: 'Business-Focused',
      desc: "We don't just write code; we align every architectural decision with your bottom line and operational goals.",
    },
    {
      icon: Settings,
      title: 'Holistic Approach',
      desc: 'From initial discovery and UX to deployment and 24/7 maintenance, we handle the entire software lifecycle.',
    },
    {
      icon: User,
      title: 'Senior Talent',
      desc: 'Your mission-critical projects are built by seasoned engineers and architects with deep industry expertise.',
    },
    {
      icon: Lock,
      title: 'Security First',
      desc: "Security isn't an afterthought. It's built into our CI/CD pipelines and architectural foundations from day one.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.kicker}>Why Choose Us</p>
          <h2 className={styles.title}>What Makes Us Different</h2>
          <p className={styles.desc}>
            We combine deep technical expertise with a sharp focus on business outcomes, ensuring every line of code adds tangible value.
          </p>
        </div>

        <div className={styles.grid}>
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className={styles.card}>
                <h3 className={styles.cardTitle}>
                  <Icon size={20} className={styles.cardIcon} />
                  {p.title}
                </h3>
                <p className={styles.cardDesc}>{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
