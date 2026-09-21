"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navContainer} aria-label="Main navigation">
        <Link href="/" className={styles.logoWrapper} aria-label="Zevriqa Home" onClick={closeMenu}>
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

        <button type="button" className={styles.mobileMenuBtn} aria-label="Toggle menu" onClick={toggleMenu}>
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileNavLinks}>
            <Link href="/" className={styles.mobileNavLink} onClick={closeMenu}>Home</Link>
            <Link href="/about" className={styles.mobileNavLink} onClick={closeMenu}>About</Link>
            <Link href="/works" className={styles.mobileNavLink} onClick={closeMenu}>Works</Link>
            <Link href="/services" className={styles.mobileNavLink} onClick={closeMenu}>Services</Link>
            <Link href="/contact" className={styles.mobileNavLink} onClick={closeMenu}>Contact</Link>
            <Link href="/contact" className={styles.mobileCta} onClick={closeMenu}>Let's Talk</Link>
          </div>
        </div>
      )}
    </header>
  );
}
