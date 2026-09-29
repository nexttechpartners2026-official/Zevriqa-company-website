import styles from './Sectors.module.css';
import WebsiteMockup from "@/assets/images/axomechoman-mockup.png";
import DigitalmarketingMockup from "@/assets/images/digital-marketing-image.webp";
import BrandingMockup from "@/assets/images/branding-image.webp";
import MobileAppDevelopment from "@/assets/images/mobile-app-development-image.webp";
import Image from 'next/image';


export default function Sectors() {
  const sectors = [
    {
      title: 'Website Development',
      image: WebsiteMockup,
    },
    {
      title: 'Digital Marketing',
      image: DigitalmarketingMockup,
    },
    {
      title: 'Branding',
      image: BrandingMockup,
    },
    {
      title: 'Mobile App Development',
      image: MobileAppDevelopment,
    },
  ];

  return (
    <section className={styles.sectorsSection}>
      <div className={styles.header}>
        <p className={styles.kicker}>Industries We Serve</p>
        <h2 className={styles.title}>Domain expertise across sectors.</h2>
      </div>

      <div className={styles.grid}>
        {sectors.map((sector, i) => (
          <div key={i} className={styles.card}>
            <Image src={sector.image} alt={sector.title} className={styles.image} fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw' />
            <div className={styles.overlay}></div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{sector.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
