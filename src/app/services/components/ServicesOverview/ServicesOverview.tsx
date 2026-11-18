import styles from './ServicesOverview.module.css';
import { 
  Monitor, 
  Smartphone, 
  LayoutDashboard, 
  Search, 
  Shield, 
  Zap, 
  Cloud, 
  ShoppingCart, 
  Lock, 
  Briefcase, 
  Key, 
  PenTool 
} from 'lucide-react';
import { ServicesOverviewData, ServicesOverviewItem } from '@/types/cms';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Monitor,
  Smartphone,
  LayoutDashboard,
  Search,
  Shield,
  Zap,
  Cloud,
  ShoppingCart,
  Lock,
  Briefcase,
  Key,
  PenTool,
};

const DEFAULT_ITEMS: ServicesOverviewItem[] = [
  { icon: 'Monitor', label: 'Web Development' },
  { icon: 'Smartphone', label: 'Mobile App Development' },
  { icon: 'LayoutDashboard', label: 'UI/UX Design' },
  { icon: 'Search', label: 'SEO Optimization' },
  { icon: 'Shield', label: 'Cybersecurity' },
  { icon: 'Zap', label: 'Performance Tuning' },
  { icon: 'Cloud', label: 'Cloud Architecture' },
  { icon: 'ShoppingCart', label: 'E-commerce Solutions' },
  { icon: 'Lock', label: 'Data Privacy' },
  { icon: 'Briefcase', label: 'IT Consulting' },
  { icon: 'Key', label: 'System Integration' },
  { icon: 'PenTool', label: 'Content Strategy' },
];

interface ServicesOverviewProps {
  data?: ServicesOverviewData;
}

export default function ServicesOverview({ data }: ServicesOverviewProps) {
  const kicker = data?.kicker || 'Our Services';
  const title = data?.title || 'Services Overview';
  const items = data?.items && data.items.length > 0 ? data.items : DEFAULT_ITEMS;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.kicker}>{kicker}</p>
        <h2 className={styles.title}>{title}</h2>
        
        <div className={styles.grid}>
          {items.map((item, index) => {
            const Icon = (item.icon && ICON_MAP[item.icon]) ? ICON_MAP[item.icon] : Monitor;
            return (
              <div key={item.id || index} className={styles.card}>
                <Icon className={styles.icon} size={24} />
                <span className={styles.label}>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
