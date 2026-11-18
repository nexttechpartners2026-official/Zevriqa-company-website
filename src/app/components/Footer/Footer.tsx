import Image from 'next/image';
import styles from './Footer.module.css';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logoImage from '@/assets/images/zevriqa-logo-no-bg.png';
import Link from 'next/link';
import { SiteSettingsData } from '@/types/cms';
import { getSiteSettings } from '@/lib/cms';

interface FooterProps {
  data?: SiteSettingsData | null;
}

export default async function Footer({ data }: FooterProps = {}) {
  const settings = data !== undefined ? data : await getSiteSettings();

  const brandDesc =
    settings?.brandDescription ||
    'Delivering reliable, scalable digital solutions for businesses of all sizes to streamline operations and drive growth.';
  const email = settings?.email || 'zevriqasolutions@gmail.com';
  const address = settings?.address || '6VVQ+X99, Perumanna,\nKeralam 673019';
  const copyright = settings?.copyright || '© 2026 Zevriqa. All rights reserved.';
  const tagline = settings?.tagline || 'Engineered for clarity, performance, and scale.';

  const phoneNumbers =
    settings?.phoneNumbers && settings.phoneNumbers.length > 0
      ? settings.phoneNumbers.map((p) => (typeof p === 'string' ? p : p.number))
      : ['+91-7994398200', '+91-7994532263'];

  const addressLines = address.split('\n');

  const instagramUrl =
    settings?.instagram ||
    'https://www.instagram.com/zevriqasolutions?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==';
  const twitterUrl = settings?.twitter || '#';
  const facebookUrl =
    settings?.facebook ||
    'https://www.facebook.com/profile.php?id=61594699738577&sk=directory_personal_details';
  const linkedinUrl = settings?.linkedin || '#';

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logoWrapper}>
              <Image src={logoImage} alt="Zevriqa Logo" className={styles.logoImage} />
            </Link>
            <p className={styles.desc}>{brandDesc}</p>
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
                <p className={styles.contactItem}>
                  {addressLines.map((line, idx) => (
                    <span key={idx}>
                      {idx > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </p>
                <p className={styles.contactItem}>
                  <a href={`mailto:${email}`}>{email}</a>
                </p>
                <p className={styles.contactItem}>
                  {phoneNumbers.map((num, idx) => (
                    <span key={idx}>
                      {idx > 0 && <br />}
                      <a href={`tel:${num.replace(/[^+\d]/g, '')}`}>{num}</a>
                    </span>
                  ))}
                </p>
              </div>

              <div className={styles.socials}>
                {instagramUrl && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={instagramUrl}
                    aria-label="Instagram"
                  >
                    <FaInstagram size={20} />
                  </a>
                )}
                {twitterUrl && (
                  <a
                    target={twitterUrl.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    href={twitterUrl}
                    aria-label="X"
                  >
                    <FaXTwitter size={20} />
                  </a>
                )}
                {facebookUrl && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={facebookUrl}
                    aria-label="Facebook"
                  >
                    <FaFacebook size={20} />
                  </a>
                )}
                {linkedinUrl && (
                  <a
                    target={linkedinUrl.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    href={linkedinUrl}
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <p className={styles.copy}>{copyright}</p>
        <p className={styles.tagline}>{tagline}</p>
      </div>
    </footer>
  );
}
