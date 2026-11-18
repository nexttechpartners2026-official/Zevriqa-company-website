import styles from './Different.module.css';
import {
  Code,
  Settings,
  User,
  Lock,
  Shield,
  Zap,
  CheckCircle,
  LucideIcon,
} from 'lucide-react';
import { DifferentData } from '@/types/cms';

interface DifferentProps {
  data?: DifferentData;
}

const iconMap: Record<string, LucideIcon> = {
  Code,
  Settings,
  User,
  Lock,
  Shield,
  Zap,
  CheckCircle,
};

const defaultPoints = [
  {
    icon: 'Code',
    title: 'Business-Focused',
    desc: "We don't just write code; we align every architectural decision with your bottom line and operational goals.",
  },
  {
    icon: 'Settings',
    title: 'Holistic Approach',
    desc: 'From initial discovery and UX to deployment and 24/7 maintenance, we handle the entire software lifecycle.',
  },
  {
    icon: 'User',
    title: 'Senior Talent',
    desc: 'Your mission-critical projects are built by seasoned engineers and architects with deep industry expertise.',
  },
  {
    icon: 'Lock',
    title: 'Security First',
    desc: "Security isn't an afterthought. It's built into our CI/CD pipelines and architectural foundations from day one.",
  },
];

export default function Different({ data }: DifferentProps) {
  const kicker = data?.kicker || 'Why Choose Us';
  const title = data?.title || 'What Makes Us Different';
  const desc =
    data?.desc ||
    'We combine deep technical expertise with a sharp focus on business outcomes, ensuring every line of code adds tangible value.';

  const points = data?.items && data.items.length > 0 ? data.items : defaultPoints;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.kicker}>{kicker}</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.desc}>{desc}</p>
        </div>

        <div className={styles.grid}>
          {points.map((p, i) => {
            const Icon = (p.icon && iconMap[p.icon]) || Code;
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
