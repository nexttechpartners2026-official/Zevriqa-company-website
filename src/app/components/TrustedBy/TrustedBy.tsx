import styles from './TrustedBy.module.css';
import { TrustedByData } from '@/types/cms';
import { getMediaUrl } from '@/lib/cms';

interface TrustedByProps {
  data?: TrustedByData;
}

export default function TrustedBy({ data }: TrustedByProps) {
  const label = data?.label || 'Trusted by innovative companies worldwide';
  const defaultCompanies = [
    { name: 'Acme Corp' },
    { name: 'GlobalTech' },
    { name: 'InnovateIO' },
    { name: 'NexusSystems' },
    { name: 'CloudScale' },
  ];
  const companies = data?.companies && data.companies.length > 0 ? data.companies : defaultCompanies;

  return (
    <section className={styles.trustedBySection}>
      <div className={styles.container}>
        <p className={styles.label}>{label}</p>
        <div className={styles.logos}>
          {companies.map((company, i) => {
            const logoUrl = 'logo' in company && company.logo ? getMediaUrl(company.logo as any) : null;
            return (
              <div key={i} className={styles.logo}>
                {logoUrl ? (
                  <img src={logoUrl} alt={company.name} style={{ maxHeight: '32px', objectFit: 'contain' }} />
                ) : (
                  company.name
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
