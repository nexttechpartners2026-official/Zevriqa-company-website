import styles from './Sectors.module.css';
import WebsiteMockup from '@/assets/images/axomechoman-mockup.png';
import DigitalmarketingMockup from '@/assets/images/digital-marketing-image.webp';
import BrandingMockup from '@/assets/images/branding-image.webp';
import MobileAppDevelopment from '@/assets/images/mobile-app-development-image.webp';
import Image from 'next/image';
import { SectorsData } from '@/types/cms';
import { getMediaUrl } from '@/lib/cms';

interface SectorsProps {
  data?: SectorsData;
}

const defaultImages = [WebsiteMockup, DigitalmarketingMockup, BrandingMockup, MobileAppDevelopment];

export default function Sectors({ data }: SectorsProps) {
  const kicker = data?.kicker || 'Industries We Serve';
  const title = data?.title || 'Domain expertise across sectors.';

  const defaultSectors = [
    { title: 'Website Development', image: WebsiteMockup },
    { title: 'Digital Marketing', image: DigitalmarketingMockup },
    { title: 'Branding', image: BrandingMockup },
    { title: 'Mobile App Development', image: MobileAppDevelopment },
  ];

  const sectors = data?.items && data.items.length > 0 ? data.items : defaultSectors;

  return (
    <section className={styles.sectorsSection}>
      <div className={styles.header}>
        <p className={styles.kicker}>{kicker}</p>
        <h2 className={styles.title}>{title}</h2>
      </div>

      <div className={styles.grid}>
        {sectors.map((sector, i) => {
          const cmsImg =
            'image' in sector && sector.image && typeof sector.image === 'object' && 'url' in sector.image
              ? getMediaUrl(sector.image as any)
              : null;
          const fallbackImg = defaultImages[i % defaultImages.length];

          return (
            <div key={i} className={styles.card}>
              {cmsImg ? (
                <img src={cmsImg} alt={sector.title} className={styles.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <Image
                  src={('image' in sector && sector.image && typeof sector.image !== 'object' ? sector.image : fallbackImg) as any}
                  alt={sector.title}
                  className={styles.image}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              )}
              <div className={styles.overlay}></div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{sector.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
