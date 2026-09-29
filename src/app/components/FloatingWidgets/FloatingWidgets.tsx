'use client';

import React, { useState, useEffect } from 'react';
import styles from './FloatingWidgets.module.css';
import { MessageCircle, Mail, ArrowUp } from 'lucide-react';

export default function FloatingWidgets() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.widgetsContainer}>
      <a
        href="mailto:zevriqasolutions@gmail.com"
        className={`${styles.widgetBtn} ${styles.mailBtn}`}
        aria-label="Send Email"
      >
        <Mail size={24} />
      </a>
      <a
        href="https://wa.me/+917994532263?text=Hello%20Zevriqa,%20I%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.widgetBtn} ${styles.whatsappBtn}`}
        aria-label="WhatsApp Us"
      >
        <MessageCircle size={24} />
      </a>
      <button
        onClick={scrollToTop}
        className={`${styles.widgetBtn} ${styles.topBtn} ${showTopBtn ? styles.show : ''}`}
        aria-label="Go to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}
