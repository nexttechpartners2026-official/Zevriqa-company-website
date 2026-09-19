import styles from './Empowering.module.css';

export default function Empowering() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.kicker}>About Zevriqa</p>
          <h2 className={styles.title}>Empowering businesses through technology.</h2>
          <p className={styles.desc}>
            Founded with a vision to bridge the gap between complex engineering and business efficiency, Zevriqa is a team of dedicated technologists, strategists, and innovators. We believe that the right software can transform how a company operates, scales, and delivers value to its customers.
          </p>
          <p className={styles.desc}>
            Our collective expertise spans across multiple industries, allowing us to bring fresh perspectives and robust architectures to every digital challenge we solve.
          </p>
          <div className={styles.buttonWrapper}>
            <a href="/contact" className={styles.button}>Work With Us</a>
          </div>
        </div>
        
        <div className={styles.imageWrapper}>
          <div className={styles.imageArch}>
            <img 
              src="https://files.cdn-files-a.com/uploads/12396961/800_gi-6aae189d07e7a.jpg?format=avif" 
              srcSet="https://files.cdn-files-a.com/uploads/12396961/100_gi-6aae189d07e7a.jpg?format=avif 100w, https://files.cdn-files-a.com/uploads/12396961/400_gi-6aae189d07e7a.jpg?format=avif 400w, https://files.cdn-files-a.com/uploads/12396961/800_gi-6aae189d07e7a.jpg?format=avif 800w, https://files.cdn-files-a.com/uploads/12396961/1200_gi-6aae189d07e7a.jpg?format=avif 1200w, https://files.cdn-files-a.com/uploads/12396961/1600_gi-6aae189d07e7a.jpg?format=avif 1600w, https://files.cdn-files-a.com/uploads/12396961/2000_gi-6aae189d07e7a.jpg?format=avif 2000w"
              sizes="448px"
              alt="Zevriqa team collaborating" 
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
