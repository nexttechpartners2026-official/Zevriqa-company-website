import Image from 'next/image';
import styles from './Footer.module.css';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import logoImage from '@/assets/images/zevriqa-logo-no-bg.png';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <a href="#" className={styles.logoWrapper}>
              <Image src={logoImage} alt="Zevriqa Logo" className={styles.logoImage} />
            </a>
            <p className={styles.desc}>
              Delivering reliable, scalable digital solutions for businesses of all sizes to streamline operations and drive growth.
            </p>
          </div>

          <div className={styles.linksWrapper}>
            <div className={styles.linkGroup}>
              <p className={styles.linkTitle}>Explore</p>
              <div className={styles.links}>
                <Link href="/about">About Us</Link>
                <Link href="/works">Our Works</Link>
                <Link href="/services">Core Capabilities</Link>
                <Link href="/contact">Request a Consultation</Link>
              </div>
            </div>

            <div className={styles.linkGroup}>
              <p className={styles.linkTitle}>Contact</p>
              <div className={styles.contactDetails}>
                <p className={styles.contactItem}>6VVQ+X99, Perumanna,<br />Keralam 673019</p>
                <p className={styles.contactItem}>zevriqasolutions@gmail.com
                  {/* <br />support@zevriqa.com */}
                </p>
                <p className={styles.contactItem}>+91-7994398200<br />+91-7994532263</p>
              </div>

              <div className={styles.socials}>
                <a target='_blank' href="https://www.instagram.com/zevriqasolutions?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" aria-label="Instagram"><FaInstagram size={20} /></a>
                <a target='_blank' href="#" aria-label="Twitter"><FaTwitter size={20} /></a>
                <a target='_blank' href="https://www.facebook.com/profile.php?id=61594699738577&sk=directory_personal_details" aria-label="Facebook"><FaFacebook size={20} /></a>
                <a target='_blank' href="#" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
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
