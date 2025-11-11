'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { colors } from '@/styles/colors';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HomePage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '70vh',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: colors.offWhite,
        overflow: 'hidden',
      }}>
        {/* FIX: Changed legacy 'layout="fill"' to modern 'fill' prop. Added objectFit via style. */}
        <Image
          src="/hero2.png"
          alt="Elegant Salon Interior"
          fill // Modern Next.js Image fill prop
           // Using default quality to avoid warnings
           style={{ objectFit: 'cover', filter: 'blur(4px)' }}
          priority
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 0,
        }}></div>

        <motion.div
          className="container"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <motion.h1
            variants={fadeIn}
            style={{
              fontSize: '4.5rem',
              color: colors.bronzeGold,
              marginBottom: '1rem',
              fontFamily: 'Playfair Display, serif',
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
            }}
          >
            Unleash Your Inner Radiance
          </motion.h1>
          <motion.p
            variants={fadeIn}
            style={{
              fontSize: '1.8rem',
              color: colors.offWhite,
              marginBottom: '2.5rem',
              maxWidth: '700px',
              margin: '0 auto 2.5rem auto',
              textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
            }}
          >
            Exquisite Permanent Makeup, Skin Treatments & Nail Art for a Flawless You.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Link href="/book" passHref>
              <button className="secondary-button" style={{
                backgroundColor: colors.coffee,
                color: colors.offWhite,
                padding: '1.2rem 3rem',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.4rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                transition: 'background-color 0.3s ease, transform 0.2s ease',
              }}>
                Book Your Transformation
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section style={{
        padding: '5rem 0',
        backgroundColor: colors.offWhite,
        textAlign: 'center',
      }}>
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeIn}
            style={{
              fontSize: '3rem',
              color: colors.coffee,
              marginBottom: '1.5rem',
            }}
          >
            Welcome to Glam By Neha
          </motion.h2>
          <motion.p
            variants={fadeIn}
            style={{
              fontSize: '1.3rem',
              color: colors.black,
              maxWidth: '800px',
              margin: '0 auto 3rem auto',
            }}
          >
            At Glam By Neha, we believe that beauty is a reflection of your inner glow.
            Our dedicated team, led by Neha, offers a personalized approach to enhance
            your natural beauty with precision and artistry. From meticulous permanent makeup
            to revitalizing skin treatments and stunning nail art, we are here to craft your perfect look.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Link href="/about" passHref>
              <button className="secondary-button" style={{
                backgroundColor: colors.coffee,
                color: colors.offWhite,
                padding: '1rem 2.5rem',
                border: 'none',
                borderRadius: '5px',
                fontSize: '1.1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease, transform 0.2s ease',
              }}>
                Learn More About Us
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Overview Section */}
      <section style={{
        padding: '5rem 0',
        backgroundColor: colors.cream,
      }}>
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeIn}
            style={{
              textAlign: 'center',
              fontSize: '3rem',
              color: colors.coffee,
              marginBottom: '3rem',
            }}
          >
            Our Signature Treatments
          </motion.h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}>
            {/* These Image components are fine as they use width/height */}
            <ServiceCard
              title="Permanent Makeup"
              description="Define your beauty effortlessly with microblading, lip blush, and eyeliner."
              icon="/icons/pmu.png"
            />
            <ServiceCard
              title="Skin Glow Treatments"
              description="Rejuvenate and brighten your complexion with our tailored facials."
              icon="/icons/skin-glow.png"
            />
            <ServiceCard
              title="Brow & Lip Enhancements"
              description="Perfectly sculpted brows and luscious lips to frame your face."
              icon="/icons/brows-lips.png"
            />
            <ServiceCard
              title="Exquisite Nail Art"
              description="Express your style with stunning nail designs and manicures."
              icon="/icons/nail-art.png"
            />
          </div>
          <motion.div variants={fadeIn} style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/treatments" passHref>
              <button className="secondary-button" style={{
                backgroundColor: colors.bronzeGold,
                color: colors.offWhite,
                padding: '1rem 2.5rem',
                border: 'none',
                borderRadius: '5px',
                fontSize: '1.1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease, transform 0.2s ease',
              }}>
                View All Treatments
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="service-card-hover"
      style={{
        backgroundColor: colors.offWhite,
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      {/* Service Card Image is fixed via explicit width/height props */}
      <Image src={icon} alt={title} width={60} height={60} style={{ marginBottom: '1rem' }} />
      <h3 style={{
        color: colors.coffee,
        fontSize: '1.8rem',
        marginBottom: '0.8rem',
      }}>
        {title}
      </h3>
      <p style={{
        color: colors.black,
        fontSize: '1.1rem',
        lineHeight: '1.5',
      }}>
        {description}
      </p>
    </motion.div>
  );
};

export default HomePage;