import styles from './WorkCard.module.css';

export interface WorkCardProps {
  id: number;
  title: string;
  desc: string;
  tags: string[];
  image: string;
}

export default function WorkCard({ item }: { item: WorkCardProps }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <img src={item.image} alt={item.title} className={styles.cardImage} />
      </div>
      <div className={styles.cardTags}>
        {item.tags.map(tag => (
          <span key={tag} className={styles.cardTag}>{tag}</span>
        ))}
      </div>
      <h3 className={styles.cardTitle}>{item.title}</h3>
      <p className={styles.cardDesc}>{item.desc}</p>
    </div>
  );
}
