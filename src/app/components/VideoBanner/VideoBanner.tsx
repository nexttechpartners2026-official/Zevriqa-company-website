import styles from './VideoBanner.module.css';

const VideoBanner = () => {
  return (
    <div className={styles.videoBanner}>
      <video className={styles.video} autoPlay loop muted playsInline>
        <source src="/Banner-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>  
  );
};

export default VideoBanner;
