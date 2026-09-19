import styles from './Testimonials.module.css';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The robust architecture they delivered was crucial for our hyper-growth phase. Our systems are now faster and infinitely scalable.",
      name: "Jane Doe",
      title: "CTO, TechFlow",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
    },
    {
      quote: "Their team's deep understanding of cloud infrastructure helped us reduce our monthly AWS bills by 40% while improving latency.",
      name: "John Smith",
      title: "VP Engineering, HealthSync",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
    },
    {
      quote: "Zevriqa's commitment to quality and security is unmatched. They feel like a true extension of our in-house engineering team.",
      name: "Sarah Jenkins",
      title: "Founder, FinTrust",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
    }
  ];

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.header}>
        <div className={styles.subtitle}>TESTIMONIALS</div>
        <h2 className={styles.title}>What our partners say.</h2>
      </div>

      <div className={styles.grid3}>
        {testimonials.map((t, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.quoteIcon}>
              <Quote size={32} fill="currentColor" />
            </div>
            <p className={styles.quote}>"{t.quote}"</p>
            <div className={styles.author}>
              <img src={t.image} alt={t.name} className={styles.avatar} />
              <div className={styles.authorInfo}>
                <h4>{t.name}</h4>
                <p>{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
