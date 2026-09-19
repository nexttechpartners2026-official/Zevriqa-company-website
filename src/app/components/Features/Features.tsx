import styles from './Features.module.css';
import { Code, Cloud, Plug } from 'lucide-react';

export default function Features() {
  const services = [
    {
      icon: <Code size={28} />,
      title: 'Custom Software',
      desc: 'Tailored applications designed from the ground up to meet your exact business workflows and requirements.',
    },
    {
      icon: <Cloud size={28} />,
      title: 'Cloud Architecture',
      desc: 'Scalable, resilient cloud infrastructure deployment and migration on AWS, Azure, and GCP.',
    },
    {
      icon: <Plug size={28} />,
      title: 'Systems Integration',
      desc: 'Connecting disparate systems and APIs to create unified, efficient operational ecosystems.',
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.header}>
        <p className={styles.kicker}>Core Services</p>
        <h2 className={styles.title}>Comprehensive Engineering</h2>
      </div>
      
      <div className={styles.grid}>
        {services.map((service, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.iconWrapper}>
              {service.icon}
            </div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
