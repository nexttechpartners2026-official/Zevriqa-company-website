import styles from './Empowering.module.css';
import { EmpoweringData } from '@/types/cms';
import { getMediaUrl } from '@/lib/cms';

interface EmpoweringProps {
  data?: EmpoweringData;
}

const defaultImageUrl =
  'https://files.cdn-files-a.com/uploads/12396961/800_gi-6aae189d07e7a.jpg?format=avif';

export default function Empowering({ data }: EmpoweringProps) {
  const kicker = data?.kicker || 'About Zevriqa';
  const title = data?.title || 'Empowering businesses through technology.';
  const desc1 =
    data?.desc1 ||
    'Founded with a vision to bridge the gap between complex engineering and business efficiency, Zevriqa is a team of dedicated technologists, strategists, and innovators. We believe that the right software can transform how a company operates, scales, and delivers value to its customers.';
  const desc2 =
    data?.desc2 ||
    'Our collective expertise spans across multiple industries, allowing us to bring fresh perspectives and robust architectures to every digital challenge we solve.';
  const buttonText = data?.buttonText || 'Work With Us';
  const buttonLink = data?.buttonLink || '/contact';
  const imageAlt = data?.imageAlt || 'Zevriqa team collaborating';

  const cmsImg = 'image' in (data || {}) && data?.image ? getMediaUrl(data.image) : null;
  const imgSrc = cmsImg || data?.imageUrl || defaultImageUrl;

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.kicker}>{kicker}</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.desc}>{desc1}</p>
          <p className={styles.desc}>{desc2}</p>
          <div className={styles.buttonWrapper}>
            <a href={buttonLink} className={styles.button}>
              {buttonText}
            </a>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.imageArch}>
            <img src={imgSrc} alt={imageAlt} className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
}
