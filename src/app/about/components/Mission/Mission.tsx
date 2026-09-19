import styles from './Mission.module.css';
import { Target, Eye } from 'lucide-react';

export default function Mission() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.kicker}>Purpose</p>
          <h2 className={styles.title}>Mission & Vision.</h2>
          
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>
              <Target className={styles.icon} />
              Our Mission
            </h3>
            <p className={styles.desc}>
              To empower businesses through robust, scalable, and secure technology solutions that drive operational efficiency and measurable growth.
            </p>
          </div>

          <div className={styles.block}>
            <h3 className={styles.blockTitle}>
              <Eye className={styles.icon} />
              Our Vision
            </h3>
            <p className={styles.desc}>
              To be the global leader in digital engineering, setting the standard for how enterprises leverage technology to solve their most complex challenges.
            </p>
          </div>
        </div>
        
        <div className={styles.imageWrapper}>
          <div className={styles.imageArch}>
            <img 
              src="https://files.cdn-files-a.com/uploads/12396961/800_gi-6aae1e7804da6.jpg?format=avif" 
              srcSet="https://files.cdn-files-a.com/uploads/12396961/100_gi-6aae1e7804da6.jpg?format=avif 100w, https://files.cdn-files-a.com/uploads/12396961/400_gi-6aae1e7804da6.jpg?format=avif 400w, https://files.cdn-files-a.com/uploads/12396961/800_gi-6aae1e7804da6.jpg?format=avif 800w, https://files.cdn-files-a.com/uploads/12396961/1200_gi-6aae1e7804da6.jpg?format=avif 1200w, https://files.cdn-files-a.com/uploads/12396961/1600_gi-6aae1e7804da6.jpg?format=avif 1600w, https://files.cdn-files-a.com/uploads/12396961/2000_gi-6aae1e7804da6.jpg?format=avif 2000w"
              sizes="448px"
              alt="Team strategy and planning" 
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
