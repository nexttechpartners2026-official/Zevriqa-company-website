import styles from './WorkCard.module.css';
import { MediaItem, WorkTag } from '@/types/cms';
import { getMediaUrl } from '@/lib/cms';

export interface WorkCardProps {
  id?: number | string;
  title: string;
  desc: string;
  tags?: string[] | WorkTag[];
  image?: MediaItem | string | null;
  imageUrl?: string;
}

export default function WorkCard({ item }: { item: WorkCardProps }) {
  const cmsImg = 'image' in item && item.image && typeof item.image === 'object' ? getMediaUrl(item.image) : null;
  const imageSrc =
    cmsImg ||
    item.imageUrl ||
    (typeof item.image === 'string' ? item.image : '') ||
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop';

  const rawTags = item.tags || [];
  const tagList = rawTags.map((tag) => (typeof tag === 'string' ? tag : tag.name));

  return (
    <div className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <img src={imageSrc} alt={item.title} className={styles.cardImage} />
      </div>
      <div className={styles.cardTags}>
        {tagList.map((tag, idx) => (
          <span key={idx} className={styles.cardTag}>
            {tag}
          </span>
        ))}
      </div>
      <h3 className={styles.cardTitle}>{item.title}</h3>
      <p className={styles.cardDesc}>{item.desc}</p>
    </div>
  );
}
