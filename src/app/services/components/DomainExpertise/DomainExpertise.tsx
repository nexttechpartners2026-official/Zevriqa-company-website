import styles from './DomainExpertise.module.css';
import { DomainExpertiseData, DomainItem } from '@/types/cms';
import { getMediaUrl } from '@/lib/cms';

const DEFAULT_DOMAINS: DomainItem[] = [
  { title: 'Finance & Fintech', imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop' },
  { title: 'Healthcare & Medtech', imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop' },
  { title: 'Retail & E-commerce', imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop' },
  { title: 'Logistics & Supply', imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop' }
];

interface DomainExpertiseProps {
  data?: DomainExpertiseData;
}

export default function DomainExpertise({ data }: DomainExpertiseProps) {
  const kicker = data?.kicker || 'Industries';
  const title = data?.title || 'Domain expertise.';
  const items = data?.items && data.items.length > 0 ? data.items : DEFAULT_DOMAINS;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.kicker}>{kicker}</p>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.grid}>
          {items.map((domain, index) => {
            const imgSrc = getMediaUrl(domain.image) || domain.imageUrl || (typeof domain.image === 'string' ? domain.image : '');
            return (
              <div key={domain.id || index} className={styles.card}>
                {imgSrc && (
                  <img src={imgSrc} alt={domain.title} className={styles.cardImage} />
                )}
                <div className={styles.cardOverlay}>
                  <h3 className={styles.cardTitle}>{domain.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
