import styles from './page.module.css';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Zevriqa',
  description: 'Reach out to our team today to start your next project.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroOrbLeft}></div>
          <div className={styles.heroOrbRight}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Let's Build Something Great Together</h1>
            <p className={styles.heroDesc}>
              Reach out to our team today. We're ready to answer your questions and kickstart your next project.
            </p>
          </div>
        </section>

        <section className={styles.contactSection}>
          <div className={styles.container}>
            <div className={styles.contactGrid}>
              <div className={styles.contactInfo}>
                <p className={styles.kicker}>GET IN TOUCH</p>
                <h2 className={styles.title}>We'd love to hear from you.</h2>
                <p className={styles.desc}>
                  Whether you have a question about our services, need a technical assessment, or are ready to start a project, our team is ready to help.
                </p>

                <div className={styles.infoGrid}>
                  <div className={styles.infoItem}>
                    <div className={styles.iconWrapper}>
                      <Mail size={20} className={styles.icon} />
                    </div>
                    <div>
                      <h3 className={styles.infoTitle}>Email</h3>
                      <a href="mailto:hello@zevriqa.com" className={styles.infoLink}>hello@zevriqa.com</a>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={styles.iconWrapper}>
                      <Phone size={20} className={styles.icon} />
                    </div>
                    <div>
                      <h3 className={styles.infoTitle}>Phone</h3>
                      <a href="tel:+15551234567" className={styles.infoLink}>+1 (555) 123-4567</a>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={styles.iconWrapper}>
                      <MessageCircle size={20} className={styles.icon} />
                    </div>
                    <div>
                      <h3 className={styles.infoTitle}>WhatsApp</h3>
                      <a href="https://wa.me/15559876543?text=Hello%20Zevriqa,%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className={styles.infoLink}>+1 (555) 987-6543</a>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={styles.iconWrapper}>
                      <MapPin size={20} className={styles.icon} />
                    </div>
                    <div>
                      <h3 className={styles.infoTitle}>Office</h3>
                      <a href="https://maps.google.com/?q=100+Innovation+Drive,+Tech+District,+NY+10001" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>100 Innovation Drive<br />Tech District, NY 10001</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.formContainer}>
                <form className={styles.contactForm}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.label}>NAME</label>
                      <input type="text" id="name" className={styles.input} placeholder="Your name" />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.label}>EMAIL</label>
                      <input type="email" id="email" className={styles.input} placeholder="you@company.com" />
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="details" className={styles.label}>PROJECT DETAILS</label>
                    <textarea 
                      id="details" 
                      rows={5} 
                      className={styles.textarea} 
                      placeholder="Tell us about your digital challenges or software goals..."
                    ></textarea>
                  </div>
                  <button type="submit" className={styles.submitBtn}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
