import Link from 'next/link';
import styles from './Cta.module.css';
import { CtaData } from '@/types/cms';

interface CtaProps {
  data?: CtaData;
}

export default function Cta({ data }: CtaProps) {
  const title = data?.title || 'Ready to build the future?';
  const desc =
    data?.desc ||
    "Let's discuss how Zevriqa can engineer the right software solution to accelerate your business goals.";
  const buttonText = data?.buttonText || 'Start a Project';
  const buttonLink = data?.buttonLink || '/contact';

  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.gradientOverlay}></div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.buttonWrapper}>
          <Link href={buttonLink} className={styles.button}>
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
