import Image from 'next/image';
import styles from './About.module.css';
import { ArrowRight } from 'lucide-react';
import iconLogo from '@/assets/images/zevriqa-icon-logo-Photoroom.png';
import WhoWeAreImage from "@/assets/images/who-we-are-image.webp"
import Link from 'next/link';

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.bgLogoWrapper}>
        <Image src={iconLogo} alt="" className={styles.bgLogo} />
      </div>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src={WhoWeAreImage}
            alt="Software development team"
            className={styles.archImage}
          />
        </div>

        <div className={styles.content}>
          <p className={styles.kicker}>Who We Are</p>
          <h2 className={styles.title}>Transforming vision into robust digital realities.</h2>
          <p className={styles.description}>
            At Zevriqa, we don't just write code; we engineer solutions that drive business transformation. With a team of seasoned architects and developers, we partner with enterprises to modernize legacy systems, build scalable cloud infrastructure, and deliver custom software that directly impacts the bottom line.
          </p>
          <Link href="/about" className={styles.link}>
            Discover Our Story <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
