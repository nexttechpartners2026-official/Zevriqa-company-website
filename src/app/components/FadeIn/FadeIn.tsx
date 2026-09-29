'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './FadeIn.module.css';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export default function FadeIn({ children, delay = 0, direction = 'up' }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  let transformClass = styles.none;
  if (direction === 'up') transformClass = styles.up;
  if (direction === 'down') transformClass = styles.down;
  if (direction === 'left') transformClass = styles.left;
  if (direction === 'right') transformClass = styles.right;

  return (
    <div
      ref={domRef}
      className={`${styles.fadeIn} ${transformClass} ${isVisible ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
