import React from 'react';
import styles from './SingleImage.module.css';

const SingleImage = () => {
  return (
    <div className={styles.singleImageContainer}>
      <div 
        className={styles.image}
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1744&auto=format&fit=crop')` }}
      />
      <div className={styles.overlay}>
        <h1 className={styles.title}>Welcome to Zevriqa</h1>
        <p className={styles.subtitle}>A single vision for a better future.</p>
      </div>
    </div>
  );
};

export default SingleImage;
