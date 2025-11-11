import Link from 'next/link';
import Image from 'next/image';
import { colors } from '@/styles/colors';

const Header = () => {
  return (
    <header style={{
      backgroundColor: colors.cream,
      padding: '1rem 0',
      borderBottom: `1px solid ${colors.bronzeGold}`,
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
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
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              {/* FIX: Removed legacy 'objectFit' prop. Switched to 'width' and 'height' for logo. */}
              <Image
                src="/glam-by-neha-logo.png"
                alt="Glam By Neha Logo"
                width={80}
                height={80}
                style={{ marginRight: '10px' }}
              />
              {/* <span style={{
                fontFamily: '"Dancing Script", cursive',
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: colors.coffee,
                lineHeight: '1',
              }}>
                glam
              </span>
              <span style={{
                fontFamily: 'Yellowtail',
                fontSize: '1.2rem', 
                color: colors.black,
                marginLeft: '0.75rem', 
                alignSelf: 'flex-end',
                paddingBottom: '0.2em'
              }}>
                BY NEHA
              </span> */}
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
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
    </header>
  );
};

export default Header;