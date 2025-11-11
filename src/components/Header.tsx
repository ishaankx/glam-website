'use client';

import Link from 'next/link';
import Image from 'next/image';
import { colors } from '@/styles/colors';
import { useState } from 'react'; // Import useState

const Header = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header style={{
      backgroundColor: colors.cream,
      padding: '1rem 0',
      borderBottom: `1px solid ${colors.bronzeGold}`,
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
      position: 'relative', // Added for z-index context
      zIndex: 10, // Ensure header is above other content
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {/* Logo Section */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/" passHref>
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={closeMobileMenu}>
              <Image
                src="/glam-by-neha-logo.png"
                alt="Glam By Neha Logo"
                width={80}
                height={80}
                style={{ marginRight: '10px' }}
              />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
          <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
          <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
        </button>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            alignItems: 'center', // Align items center
            gap: '2.5rem',
          }}>
            <li>
              <Link href="/about" passHref>
                <span className="nav-link" style={{
                  color: colors.coffee,
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  paddingBottom: '5px',
                  borderBottom: `2px solid transparent`,
                  transition: 'border-bottom 0.3s ease-in-out',
                }}>
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link href="/treatments" passHref>
                <span className="nav-link" style={{
                  color: colors.coffee,
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  paddingBottom: '5px',
                  borderBottom: `2px solid transparent`,
                  transition: 'border-bottom 0.3s ease-in-out',
                }}>
                  Treatments
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <span className="nav-link" style={{
                  color: colors.coffee,
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  paddingBottom: '5px',
                  borderBottom: `2px solid transparent`,
                  transition: 'border-bottom 0.3s ease-in-out',
                }}>
                  Contact Us
                </span>
              </Link>
            </li>
            <li>
              <Link href="/book" passHref>
                <span className="nav-button" style={{
                  backgroundColor: colors.bronzeGold,
                  color: colors.offWhite,
                  padding: '0.75rem 1.5rem',
                  borderRadius: '5px',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  transition: 'background-color 0.3s ease-in-out, transform 0.2s ease-in-out',
                  cursor: 'pointer',
                }}>
                  Book Appointment
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav>
          <ul className="mobile-menu-links">
            <li>
              <Link href="/about" passHref>
                <span className="nav-link" onClick={closeMobileMenu}>About</span>
              </Link>
            </li>
            <li>
              <Link href="/treatments" passHref>
                <span className="nav-link" onClick={closeMobileMenu}>Treatments</span>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <span className="nav-link" onClick={closeMobileMenu}>Contact Us</span>
              </Link>
            </li>
            <li>
              <Link href="/book" passHref>
                <span className="nav-button" onClick={closeMobileMenu} style={{
                  backgroundColor: colors.bronzeGold,
                  color: colors.offWhite,
                  padding: '0.75rem 1.5rem',
                  borderRadius: '5px',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  display: 'inline-block', // Ensure button styles apply
                  width: '100%',
                  textAlign: 'center',
                }}>
                  Book Appointment
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;