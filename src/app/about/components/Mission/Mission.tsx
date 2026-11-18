import styles from './Mission.module.css';
import { Target, Eye } from 'lucide-react';
import { MissionData } from '@/types/cms';
import { getMediaUrl } from '@/lib/cms';

interface MissionProps {
  data?: MissionData;
}

const defaultImageUrl =
  'https://files.cdn-files-a.com/uploads/12396961/800_gi-6aae1e7804da6.jpg?format=avif';

export default function Mission({ data }: MissionProps) {
  const kicker = data?.kicker || 'Purpose';
  const title = data?.title || 'Mission & Vision.';
  const missionTitle = data?.missionTitle || 'Our Mission';
  const missionDesc =
    data?.missionDesc ||
    'To empower businesses through robust, scalable, and secure technology solutions that drive operational efficiency and measurable growth.';
  const visionTitle = data?.visionTitle || 'Our Vision';
  const visionDesc =
    data?.visionDesc ||
    'To be the global leader in digital engineering, setting the standard for how enterprises leverage technology to solve their most complex challenges.';
  const imageAlt = data?.imageAlt || 'Team strategy and planning';

  const cmsImg = 'image' in (data || {}) && data?.image ? getMediaUrl(data.image) : null;
  const imgSrc = cmsImg || data?.imageUrl || defaultImageUrl;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.kicker}>{kicker}</p>
          <h2 className={styles.title}>{title}</h2>

          <div className={styles.block}>
            <h3 className={styles.blockTitle}>
              <Target className={styles.icon} />
              {missionTitle}
            </h3>
            <p className={styles.desc}>{missionDesc}</p>
          </div>

          <div className={styles.block}>
            <h3 className={styles.blockTitle}>
              <Eye className={styles.icon} />
              {visionTitle}
            </h3>
            <p className={styles.desc}>{visionDesc}</p>
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
