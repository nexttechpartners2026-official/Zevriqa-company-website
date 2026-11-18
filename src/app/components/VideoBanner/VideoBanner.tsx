import styles from './VideoBanner.module.css';

interface VideoBannerProps {
  videoUrl?: string;
}

const VideoBanner = ({ videoUrl }: VideoBannerProps) => {
  const src = videoUrl || '/Banner-video.mp4';

  return (
    <div className={styles.videoBanner}>
      <video key={src} className={styles.video} autoPlay loop muted playsInline>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBanner;
