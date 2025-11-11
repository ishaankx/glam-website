import { colors } from '@/styles/colors';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{
      backgroundColor: colors.coffee,
      color: colors.offWhite,
      padding: '3rem 0',
      marginTop: '4rem',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '2rem',
      }}>
        {/* Contact Info */}
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{
            color: colors.bronzeGold,
            marginBottom: '1rem',
            fontSize: '1.5rem',
          }}>
            Glam By Neha
          </h3>
          <p style={{ margin: '0.5rem 0' }}>
            <strong style={{ color: colors.cream }}>Email:</strong> info@glambyneha.com
          </p>
          <p style={{ margin: '0.5rem 0' }}>
            <strong style={{ color: colors.cream }}>Phone:</strong> +1 (123) 456-7890
          </p>
          <p style={{ margin: '0.5rem 0' }}>
            <strong style={{ color: colors.cream }}>Address:</strong> 123 Beauty Lane, Glam City, GC 90210
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ flex: '1 1 200px' }}>
          <h4 style={{
            color: colors.cream,
            marginBottom: '1rem',
            fontSize: '1.2rem',
          }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.7rem' }}>
              <a href="/about" className="footer-link-hover" style={{ color: colors.offWhite }}>About Us</a>
            </li>
            <li style={{ marginBottom: '0.7rem' }}>
              <a href="/treatments" className="footer-link-hover" style={{ color: colors.offWhite }}>Our Services</a>
            </li>
            <li style={{ marginBottom: '0.7rem' }}>
              <a href="/contact" className="footer-link-hover" style={{ color: colors.offWhite }}>Contact</a>
            </li>
            <li style={{ marginBottom: '0.7rem' }}>
              <a href="/book" className="footer-link-hover" style={{ color: colors.offWhite }}>Book Now</a>
            </li>
          </ul>
        </div>

        {/* Social Media (Placeholder) */}
        <div style={{ flex: '1 1 200px' }}>
          <h4 style={{
            color: colors.cream,
            marginBottom: '1rem',
            fontSize: '1.2rem',
          }}>
            Follow Us
          </h4>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link-hover" style={{ color: colors.offWhite }}>
              Facebook
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link-hover" style={{ color: colors.offWhite }}>
              Instagram
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link-hover" style={{ color: colors.offWhite }}>
              TikTok
            </a>
          </div>
        </div>
      </div>
      <div style={{
        textAlign: 'center',
        marginTop: '2rem',
        paddingTop: '1.5rem',
        borderTop: `1px solid ${colors.bronzeGold}`,
        fontSize: '0.9rem',
        color: colors.cream,
      }}>
        &copy; {currentYear} Glam By Neha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;