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

const OVERVIEW_ITEMS = [
  { icon: Monitor, label: 'Web Development' },
  { icon: Smartphone, label: 'Mobile App Development' },
  { icon: LayoutDashboard, label: 'UI/UX Design' },
  { icon: Search, label: 'SEO Optimization' },
  { icon: Shield, label: 'Cybersecurity' },
  { icon: Zap, label: 'Performance Tuning' },
  { icon: Cloud, label: 'Cloud Architecture' },
  { icon: ShoppingCart, label: 'E-commerce Solutions' },
  { icon: Lock, label: 'Data Privacy' },
  { icon: Briefcase, label: 'IT Consulting' },
  { icon: Key, label: 'System Integration' },
  { icon: PenTool, label: 'Content Strategy' },
];

export default function ServicesOverview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.kicker}>Our Services</p>
        <h2 className={styles.title}>Services Overview</h2>
        
        <div className={styles.grid}>
          {OVERVIEW_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className={styles.card}>
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
