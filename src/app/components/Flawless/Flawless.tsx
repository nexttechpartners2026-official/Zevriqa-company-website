import Image from 'next/image';
import styles from './Flawless.module.css';
import WhyZevriza from "@/assets/images/why-zevriqa-image.webp"

export default function Flawless() {
  const features = [
    {
      title: "End-to-End Delivery",
      desc: "From initial architecture planning and UI/UX to final deployment and ongoing maintenance."
    },
    {
      title: "Scalable Architecture",
      desc: "Built to grow seamlessly as your user base, traffic, and data expand over time."
    },
    {
      title: "Security First",
      desc: "Implementing industry best practices to protect your data and ensure strict compliance."
    },
    {
      title: "Ongoing Support",
      desc: "Dedicated engineering teams ensuring your mission-critical systems run flawlessly 24/7."
    }
  ];

  return (
    <section className={styles.flawlessSection}>
      <div className={styles.content}>
        <div className={styles.subtitle}>
          <span className={styles.line}></span>
          WHY ZEVRIQA
        </div>
        <h2 className={styles.title}>Every system is designed to help you operate flawlessly.</h2>

        <div className={styles.grid2x2}>
          {features.map((feature, i) => (
            <div key={i} className={styles.card}>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src={WhyZevriza}
          alt="Analytics team"
          className={styles.archImage}
        />
      </div>
    </section>
  );
}
