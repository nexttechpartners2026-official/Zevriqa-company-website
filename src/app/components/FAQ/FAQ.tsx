'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What services do you offer?",
      a: "We offer end-to-end software engineering, from custom backend APIs to cloud infrastructure optimization and secure enterprise architecture design."
    },
    {
      q: "How long does a typical project take?",
      a: "Project timelines vary based on complexity, but most initial MVP implementations take between 8-12 weeks."
    },
    {
      q: "Do you provide ongoing support?",
      a: "Yes, we offer comprehensive maintenance and SLA-backed support packages for all systems we deploy."
    },
    {
      q: "What technologies do you specialize in?",
      a: "Our core stack includes React, Next.js, Node.js, Python, AWS, and modern DevOps tools like Docker and Kubernetes."
    }
  ];

  return (
    <section className={styles.faqSection} id="insights">
      <div className={styles.header}>
        <div className={styles.subtitle}>FAQ</div>
        <h2 className={styles.title}>Frequent Questions.</h2>
      </div>

      <div className={styles.accordion}>
        {faqs.map((faq, i) => (
          <div key={i} className={styles.item}>
            <button 
              className={styles.question}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {faq.q}
              {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            {openIndex === i && (
              <div className={styles.answer}>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
