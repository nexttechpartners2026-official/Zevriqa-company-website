"use client";

import { useState } from 'react';
import styles from './FaqAccordion.module.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQS = [
  {
    question: "Do you provide post-launch support and maintenance?",
    answer: "Yes, we offer comprehensive post-launch support packages, including regular updates, security patching, and performance monitoring to ensure your application runs smoothly long-term."
  },
  {
    question: "How do you ensure the security of our data?",
    answer: "We employ industry-standard encryption, zero-trust architectures, and regular penetration testing. Compliance with GDPR, HIPAA, and other regulatory frameworks is built into our development lifecycle."
  },
  {
    question: "How long does a typical project take to complete?",
    answer: "Project timelines vary widely based on scope and complexity. A standard web application might take 3-4 months, while enterprise system integrations can take 6-12 months. We provide detailed estimates during the Discovery phase."
  },
  {
    question: "What is your pricing model for development services?",
    answer: "We offer both fixed-price contracts for well-defined scopes and time-and-materials (T&M) models for agile projects with evolving requirements. We tailor the approach to fit your budget and project style."
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Common Service Questions.</h2>

        <div className={styles.accordion}>
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
              >
                <button 
                  className={styles.faqButton} 
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.faqQuestion}>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className={styles.faqIcon} size={20} />
                  ) : (
                    <ChevronDown className={styles.faqIcon} size={20} />
                  )}
                </button>
                <div 
                  className={styles.faqAnswerContainer}
                  style={{ maxHeight: isOpen ? '500px' : '0' }}
                >
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
