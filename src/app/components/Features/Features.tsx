import styles from './Features.module.css';
import { Code, Cloud, Plug, Cpu, Database, Shield, Smartphone, Globe } from 'lucide-react';
import { FeaturesData } from '@/types/cms';

interface FeaturesProps {
  data?: FeaturesData;
}

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code size={28} />,
  Cloud: <Cloud size={28} />,
  Plug: <Plug size={28} />,
  Cpu: <Cpu size={28} />,
  Database: <Database size={28} />,
  Shield: <Shield size={28} />,
  Smartphone: <Smartphone size={28} />,
  Globe: <Globe size={28} />,
};

export default function Features({ data }: FeaturesProps) {
  const kicker = data?.kicker || 'Core Services';
  const title = data?.title || 'Comprehensive Engineering';

  const defaultServices = [
    {
      icon: 'Code',
      title: 'Custom Software',
      desc: 'Tailored applications designed from the ground up to meet your exact business workflows and requirements.',
    },
    {
      icon: 'Cloud',
      title: 'Cloud Architecture',
      desc: 'Scalable, resilient cloud infrastructure deployment and migration on AWS, Azure, and GCP.',
    },
    {
      icon: 'Plug',
      title: 'Systems Integration',
      desc: 'Connecting disparate systems and APIs to create unified, efficient operational ecosystems.',
    },
  ];

  const services = data?.services && data.services.length > 0 ? data.services : defaultServices;

  return (
    <section className={styles.servicesSection}>
      <div className={styles.header}>
        <p className={styles.kicker}>{kicker}</p>
        <h2 className={styles.title}>{title}</h2>
      </div>

      <div className={styles.grid}>
        {services.map((service, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.iconWrapper}>
              {(service.icon && iconMap[service.icon]) || <Code size={28} />}
            </div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
