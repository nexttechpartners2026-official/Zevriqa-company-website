import styles from './page.module.css';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';
import FadeIn from '@/app/components/FadeIn/FadeIn';
import { getContactPageData, getSiteSettings } from '@/lib/cms';

export const metadata = {
  title: 'Contact Us | Zevriqa',
  description: 'Reach out to our team today to start your next project.',
};

export default async function ContactPage() {
  const [contactData, siteSettings] = await Promise.all([
    getContactPageData(),
    getSiteSettings(),
  ]);

  // Hero section copy
  const heroTitle = contactData?.hero?.title || "Let's Build Something Great Together";
  const heroDesc =
    contactData?.hero?.desc ||
    "Reach out to our team today. We're ready to answer your questions and kickstart your next project.";

  // Intro section copy
  const kicker = contactData?.intro?.kicker || 'GET IN TOUCH';
  const introTitle = contactData?.intro?.title || "We'd love to hear from you.";
  const introDesc =
    contactData?.intro?.desc ||
    'Whether you have a question about our services, need a technical assessment, or are ready to start a project, our team is ready to help.';

  // Form copy
  const nameLabel = contactData?.form?.nameLabel || 'NAME';
  const namePlaceholder = contactData?.form?.namePlaceholder || 'Your name';
  const emailLabel = contactData?.form?.emailLabel || 'EMAIL';
  const emailPlaceholder = contactData?.form?.emailPlaceholder || 'you@company.com';
  const detailsLabel = contactData?.form?.detailsLabel || 'PROJECT DETAILS';
  const detailsPlaceholder =
    contactData?.form?.detailsPlaceholder ||
    'Tell us about your digital challenges or software goals...';
  const buttonText = contactData?.form?.buttonText || 'Send Message';

  // Shared Company Info from SiteSettings (or fallbacks)
  const email = siteSettings?.email || 'zevriqasolutions@gmail.com';
  const phoneNumbers =
    siteSettings?.phoneNumbers && siteSettings.phoneNumbers.length > 0
      ? siteSettings.phoneNumbers.map((p) => (typeof p === 'string' ? p : p.number))
      : ['+91-7994398200', '+91-7994532263'];
  const whatsappNumber = siteSettings?.whatsappNumber || '+917994532263';
  const whatsappMessage =
    siteSettings?.whatsappMessage || 'Hello Zevriqa, I would like to discuss a project.';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^+\d]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
  const address = siteSettings?.address || '6VVQ+X99, Perumanna,\nKeralam 673019';
  const addressLines = address.split('\n');
  const googleMapsUrl =
    siteSettings?.googleMapsUrl ||
    'https://www.google.com/maps/place/6VVQ%2BX99,+Perumanna,+Keralam+673019/@11.2449266,75.8882922,54m/data=!3m1!1e3!4m6!3m5!1s0x3ba65b309c30ccaf:0x616b27d6f0668e35!8m2!3d11.2449327!4d75.8884664!16s%2Fg%2F11f50wt4_k?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D';

  return (
    <>
      <Navbar />
      <main>
        <FadeIn direction="up" delay={100}>
          <section className={styles.hero}>
            <div className={styles.heroOrbLeft}></div>
            <div className={styles.heroOrbRight}></div>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>{heroTitle}</h1>
              <p className={styles.heroDesc}>{heroDesc}</p>
            </div>
          </section>
        </FadeIn>

        <FadeIn direction="up" delay={100}>
          <section className={styles.contactSection}>
            <div className={styles.container}>
              <div className={styles.contactGrid}>
                <div className={styles.contactInfo}>
                  <p className={styles.kicker}>{kicker}</p>
                  <h2 className={styles.title}>{introTitle}</h2>
                  <p className={styles.desc}>{introDesc}</p>

                  <div className={styles.infoGrid}>
                    <div className={styles.infoItem}>
                      <div className={styles.iconWrapper}>
                        <Mail size={20} className={styles.icon} />
                      </div>
                      <div>
                        <h3 className={styles.infoTitle}>Email</h3>
                        <a href={`mailto:${email}`} className={styles.infoLink}>
                          {email}
                        </a>
                      </div>
                    </div>

                    <div className={styles.infoItem}>
                      <div className={styles.iconWrapper}>
                        <Phone size={20} className={styles.icon} />
                      </div>
                      <div>
                        <h3 className={styles.infoTitle}>Phone</h3>
                        {phoneNumbers.map((num, idx) => (
                          <a
                            key={idx}
                            href={`tel:${num.replace(/[^+\d]/g, '')}`}
                            className={styles.infoLink}
                          >
                            {num}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className={styles.infoItem}>
                      <div className={styles.iconWrapper}>
                        <MessageCircle size={20} className={styles.icon} />
                      </div>
                      <div>
                        <h3 className={styles.infoTitle}>WhatsApp</h3>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.infoLink}
                        >
                          {whatsappNumber}
                        </a>
                      </div>
                    </div>

                    <div className={styles.infoItem}>
                      <div className={styles.iconWrapper}>
                        <MapPin size={20} className={styles.icon} />
                      </div>
                      <div>
                        <h3 className={styles.infoTitle}>Office</h3>
                        <a
                          href={googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.infoLink}
                        >
                          {addressLines.map((line, idx) => (
                            <span key={idx}>
                              {idx > 0 && <br />}
                              {line}
                            </span>
                          ))}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.formContainer}>
                  <form className={styles.contactForm}>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>
                          {nameLabel}
                        </label>
                        <input
                          type="text"
                          id="name"
                          className={styles.input}
                          placeholder={namePlaceholder}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>
                          {emailLabel}
                        </label>
                        <input
                          type="email"
                          id="email"
                          className={styles.input}
                          placeholder={emailPlaceholder}
                        />
                      </div>
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="details" className={styles.label}>
                        {detailsLabel}
                      </label>
                      <textarea
                        id="details"
                        rows={5}
                        className={styles.textarea}
                        placeholder={detailsPlaceholder}
                      ></textarea>
                    </div>
                    <button type="submit" className={styles.submitBtn}>
                      {buttonText}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
      </main>
      <Footer data={siteSettings} />
    </>
  );
}
