import styles from './About.module.css';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img 
            src="https://files.cdn-files-a.com/uploads/12396961/800_gi-6aae1bbe4b414.jpg?format=avif" 
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
          <a href="#about" className={styles.link}>
            Discover Our Story <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
