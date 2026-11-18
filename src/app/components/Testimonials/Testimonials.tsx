import styles from './Testimonials.module.css';
import { Quote } from 'lucide-react';
import { TestimonialsData } from '@/types/cms';
import { getMediaUrl } from '@/lib/cms';

interface TestimonialsProps {
  data?: TestimonialsData;
}

export default function Testimonials({ data }: TestimonialsProps) {
  const subtitle = data?.subtitle || 'TESTIMONIALS';
  const title = data?.title || 'What our partners say.';

  const defaultTestimonials = [
    {
      quote:
        'The robust architecture they delivered was crucial for our hyper-growth phase. Our systems are now faster and infinitely scalable.',
      name: 'Jane Doe',
      title: 'CTO, TechFlow',
      avatarUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
    },
    {
      quote:
        "Their team's deep understanding of cloud infrastructure helped us reduce our monthly AWS bills by 40% while improving latency.",
      name: 'John Smith',
      title: 'VP Engineering, HealthSync',
      avatarUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
    },
    {
      quote:
        "Zevriqa's commitment to quality and security is unmatched. They feel like a true extension of our in-house engineering team.",
      name: 'Sarah Jenkins',
      title: 'Founder, FinTrust',
      avatarUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
    },
  ];

  const testimonials = data?.items && data.items.length > 0 ? data.items : defaultTestimonials;

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.header}>
        <div className={styles.subtitle}>{subtitle}</div>
        <h2 className={styles.title}>{title}</h2>
      </div>

      <div className={styles.grid3}>
        {testimonials.map((t, i) => {
          const cmsAvatar = 'image' in t && t.image ? getMediaUrl(t.image) : null;
          const avatarSrc =
            cmsAvatar ||
            ('avatarUrl' in t && t.avatarUrl ? t.avatarUrl : null) ||
            ('image' in t && typeof t.image === 'string' ? t.image : null) ||
            defaultTestimonials[i % defaultTestimonials.length].avatarUrl;

          return (
            <div key={i} className={styles.card}>
              <div className={styles.quoteIcon}>
                <Quote size={32} fill="currentColor" />
              </div>
              <p className={styles.quote}>"{t.quote}"</p>
              <div className={styles.author}>
                <img src={avatarSrc} alt={t.name} className={styles.avatar} />
                <div className={styles.authorInfo}>
                  <h4>{t.name}</h4>
                  <p>{t.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
