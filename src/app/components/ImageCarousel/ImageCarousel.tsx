'use client';

import React, { useState, useEffect } from 'react';
import styles from './ImageCarousel.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MediaItem } from '@/types/cms';
import { getMediaUrl } from '@/lib/cms';

interface SlideItem {
  id?: string | number;
  image?: MediaItem | null;
  imageUrl?: string;
  title?: string;
  subtitle?: string;
}

interface ImageCarouselProps {
  slides?: SlideItem[];
}

const defaultSlides = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1740&auto=format&fit=crop',
    title: 'Design Innovation',
    subtitle: 'Creating experiences that matter.',
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1744&auto=format&fit=crop',
    title: 'Technology Forward',
    subtitle: 'Building for the future today.',
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop',
    title: 'Strategic Solutions',
    subtitle: 'Empowering your business.',
  },
];

const ImageCarousel = ({ slides: propSlides }: ImageCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const rawSlides = propSlides && propSlides.length > 0 ? propSlides : defaultSlides;
  const slides = rawSlides.map((slide, idx) => {
    const cmsImg = 'image' in slide && slide.image ? getMediaUrl(slide.image) : null;
    const imgUrl = cmsImg || slide.imageUrl || defaultSlides[idx % defaultSlides.length].imageUrl;
    return {
      id: slide.id || idx,
      image: imgUrl,
      title: slide.title || '',
      subtitle: slide.subtitle || '',
    };
  });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.slidesWrapper} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className={styles.slide}>
            <div
              className={styles.imageBackground}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className={styles.overlay}>
              <h2 className={styles.title}>{slide.title}</h2>
              <p className={styles.subtitle}>{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevSlide} aria-label="Previous slide">
            <ChevronLeft size={24} />
          </button>
          <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextSlide} aria-label="Next slide">
            <ChevronRight size={24} />
          </button>

          <div className={styles.indicators}>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${currentSlide === index ? styles.active : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
