import styles from './Footer.module.css';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <a href="#" className={styles.logoWrapper}>
              <span className={styles.logo}>Zevriqa</span>
              <span className={styles.logoSubtitle}>- Digital Solutions -</span>
            </a>
            <p className={styles.desc}>
              Delivering reliable, scalable digital solutions for businesses of all sizes to streamline operations and drive growth.
            </p>
          </div>

          <div className={styles.linksWrapper}>
            <div className={styles.linkGroup}>
              <p className={styles.linkTitle}>Explore</p>
              <div className={styles.links}>
                <a href="#">About Us</a>
                <a href="#">Our Works</a>
                <a href="#">Core Capabilities</a>
                <a href="#">Request a Consultation</a>
              </div>
            </div>
            
            <div className={styles.linkGroup}>
              <p className={styles.linkTitle}>Contact</p>
              <div className={styles.contactDetails}>
                <p className={styles.contactItem}>100 Innovation Drive<br/>Tech District, NY 10001</p>
                <p className={styles.contactItem}>hello@zevriqa.com<br/>support@zevriqa.com</p>
                <p className={styles.contactItem}>+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
              </div>
              
              <div className={styles.socials}>
                <a href="#" aria-label="Instagram"><FaInstagram size={20} /></a>
                <a href="#" aria-label="Twitter"><FaTwitter size={20} /></a>
                <a href="#" aria-label="Facebook"><FaFacebook size={20} /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <p className={styles.copy}>© 2026 Zevriqa. All rights reserved.</p>
        <p className={styles.tagline}>Engineered for clarity, performance, and scale.</p>
      </div>
    </footer>
  );
}
