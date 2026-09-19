import styles from './StatsBanner.module.css';
import { Shield, Rocket, Users, History } from 'lucide-react';

const FEATURES = [
  { 
    icon: Shield, 
    title: 'Security by Design', 
    desc: 'Rigorous compliance and protection built into every layer.' 
  },
  { 
    icon: Rocket, 
    title: 'Scalable Architecture', 
    desc: 'Systems engineered to handle massive growth without breaking.' 
  },
  { 
    icon: Users, 
    title: 'Dedicated Teams', 
    desc: 'Senior engineers acting as a true extension of your company.' 
  },
  { 
    icon: History, 
    title: 'Agile Delivery', 
    desc: 'Iterative sprints for fast, reliable, and transparent releases.' 
  }
];

export default function StatsBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.kicker}>Why Choose Our Services</p>
        <h2 className={styles.title}>Engineering excellence.</h2>

        <div className={styles.grid}>
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className={styles.card}>
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
