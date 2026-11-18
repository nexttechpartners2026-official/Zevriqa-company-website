import styles from './StatsBanner.module.css';
import { Shield, Rocket, Users, History, Zap, CheckCircle } from 'lucide-react';
import { StatsBannerData, StatsBannerFeature } from '@/types/cms';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Shield,
  Rocket,
  Users,
  History,
  Zap,
  CheckCircle,
};

const DEFAULT_FEATURES: StatsBannerFeature[] = [
  { 
    icon: 'Shield', 
    title: 'Security by Design', 
    desc: 'Rigorous compliance and protection built into every layer.' 
  },
  { 
    icon: 'Rocket', 
    title: 'Scalable Architecture', 
    desc: 'Systems engineered to handle massive growth without breaking.' 
  },
  { 
    icon: 'Users', 
    title: 'Dedicated Teams', 
    desc: 'Senior engineers acting as a true extension of your company.' 
  },
  { 
    icon: 'History', 
    title: 'Agile Delivery', 
    desc: 'Iterative sprints for fast, reliable, and transparent releases.' 
  }
];

interface StatsBannerProps {
  data?: StatsBannerData;
}

export default function StatsBanner({ data }: StatsBannerProps) {
  const kicker = data?.kicker || 'Why Choose Our Services';
  const title = data?.title || 'Engineering excellence.';
  const features = data?.features && data.features.length > 0 ? data.features : DEFAULT_FEATURES;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.kicker}>{kicker}</p>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.grid}>
          {features.map((feature, index) => {
            const Icon = (feature.icon && ICON_MAP[feature.icon]) ? ICON_MAP[feature.icon] : Shield;
            return (
              <div key={feature.id || index} className={styles.card}>
                <Icon className={styles.icon} size={28} />
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
