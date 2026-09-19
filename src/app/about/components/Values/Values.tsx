import styles from './Values.module.css';
import { Lightbulb, Shield, Users, Gem, Handshake, TrendingUp } from 'lucide-react';

export default function Values() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      desc: 'We constantly explore new technologies and architectural patterns to deliver cutting-edge, future-proof solutions.',
    },
    {
      icon: Shield,
      title: 'Transparency',
      desc: 'Honest communication, clear expectations, and open collaboration in every client partnership we build.',
    },
    {
      icon: Users,
      title: 'Customer-First',
      desc: 'Your business goals dictate our engineering decisions. We succeed only when your business succeeds.',
    },
    {
      icon: Gem,
      title: 'Quality',
      desc: 'We never compromise on the security, performance, or scalability of the code we ship to production.',
    },
    {
      icon: Handshake,
      title: 'Collaboration',
      desc: 'We integrate seamlessly, working closely as an extension of your internal product and engineering teams.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      desc: 'Always learning, adapting, and refining our processes to stay ahead of an ever-evolving digital landscape.',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.kicker}>Our Values</p>
          <h2 className={styles.title}>What drives us forward.</h2>
        </div>

        <div className={styles.grid}>
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Icon size={24} className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>{v.title}</h3>
                <p className={styles.cardDesc}>{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
