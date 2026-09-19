import Link from 'next/link';
import { Menu } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navContainer} aria-label="Main navigation">
        <Link href="/" className={styles.logoWrapper} aria-label="Zevriqa Home">
          <span className={styles.logoText}>Zevriqa</span>
          <span className={styles.logoSubtitle}>- Digital Solutions -</span>
        </Link>
        
        <div className={styles.desktopNav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/works" className={styles.navLink}>Works</Link>
          <Link href="/services" className={styles.navLink}>Services</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
          <Link href="/contact" className={styles.cta}>Let's Talk</Link>
        </div>

        <button type="button" className={styles.mobileMenuBtn} aria-label="Open menu">
          <Menu size={20} />
        </button>
      </nav>
    </header>
  );
}
