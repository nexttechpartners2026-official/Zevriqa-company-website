import styles from './CaseStudies.module.css';
import { CaseStudiesData, CaseStudyItem } from '@/types/cms';
import { getMediaUrl } from '@/lib/cms';

const DEFAULT_CASE_STUDIES: CaseStudyItem[] = [
  {
    kicker: 'CLOUD MIGRATION',
    title: 'Global Logistics Network Modernization',
    desc: 'How we transitioned a legacy on-premise system to a highly available, multi-region AWS cloud architecture, reducing downtime by 99.9%.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop'
  },
  {
    kicker: 'AI INTEGRATION',
    title: 'Predictive Analytics for Healthcare',
    desc: 'Implementing machine learning models into an existing EHR system to predict patient readmissions with 85% accuracy.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop'
  }
];

interface CaseStudiesProps {
  data?: CaseStudiesData;
}

export default function CaseStudies({ data }: CaseStudiesProps) {
  const kicker = data?.kicker || 'Case Studies';
  const title = data?.title || 'Real results.';
  const items = data?.items && data.items.length > 0 ? data.items : DEFAULT_CASE_STUDIES;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.kicker}>{kicker}</p>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.grid}>
          {items.map((study, index) => {
            const imgSrc = getMediaUrl(study.image) || study.imageUrl || (typeof study.image === 'string' ? study.image : '');
            return (
              <div key={study.id || index} className={styles.card}>
                <div className={styles.imageWrapper}>
                  {imgSrc && (
                    <img src={imgSrc} alt={study.title} className={styles.image} />
                  )}
                </div>
                <p className={styles.cardKicker}>{study.kicker}</p>
                <h3 className={styles.cardTitle}>{study.title}</h3>
                <p className={styles.cardDesc}>{study.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
