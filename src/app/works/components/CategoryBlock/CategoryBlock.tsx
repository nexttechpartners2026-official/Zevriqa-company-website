"use client";

import { useState } from 'react';
import styles from './CategoryBlock.module.css';
import WorkCard, { WorkCardProps } from '../WorkCard/WorkCard';

interface CategoryBlockProps {
  title: string;
  items: WorkCardProps[];
}

export default function CategoryBlock({ title, items }: CategoryBlockProps) {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <div className={styles.categoryBlock}>
      <h2 className={styles.categoryTitle}>{title}</h2>
      <div className={styles.grid}>
        {items.slice(0, visibleCount).map((item) => (
          <WorkCard key={item.id} item={item} />
        ))}
      </div>
      {visibleCount < items.length && (
        <div className={styles.buttonWrapper}>
          <button className={styles.showMoreBtn} onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
}
