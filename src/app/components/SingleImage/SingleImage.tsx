import React from 'react';
import styles from './SingleImage.module.css';
import { MediaItem } from '@/types/cms';
import { getMediaUrl } from '@/lib/cms';

interface SingleImageProps {
  data?: {
    image?: MediaItem | null;
    imageUrl?: string;
    title?: string;
    subtitle?: string;
  };
}

const SingleImage = ({ data }: SingleImageProps) => {
  const cmsImg = getMediaUrl(data?.image);
  const bgImg =
    cmsImg ||
    data?.imageUrl ||
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1744&auto=format&fit=crop';
  const title = data?.title || 'Welcome to Zevriqa';
  const subtitle = data?.subtitle || 'A single vision for a better future.';

  return (
    <div className={styles.singleImageContainer}>
      <div className={styles.image} style={{ backgroundImage: `url('${bgImg}')` }} />
      <div className={styles.overlay}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default SingleImage;
