'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { colors } from '@/styles/colors';
import { motion } from 'framer-motion';
import Image from 'next/image';
// FIX: Removed unused import Link
// FIX: Unescaped apostrophe fixed in content

const AboutPage = () => {
  // FIX: Removed explicit 'ease' property from transition
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
      <main className="container" style={{ padding: '4rem 0' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <motion.h1
            variants={fadeIn}
            style={{
              fontSize: '3.5rem',
              color: colors.coffee,
              marginBottom: '1rem',
              fontFamily: 'Playfair Display, serif',
            }}
          >
            About Glam By Neha
          </motion.h1>
          <motion.p
            variants={fadeIn}
            style={{
              fontSize: '1.2rem',
              color: colors.black,
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            Your journey to radiant beauty begins here.
          </motion.p>
        </motion.div>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
          }}
        >
          <motion.div
            variants={fadeIn}
            className="about-section-content"
            style={{
              alignItems: 'center',
              backgroundColor: colors.cream,
              padding: '2.5rem',
              borderRadius: '10px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
              
            }}
          >
            <div style={{ flex: 1, textAlign: 'center', }}>
              <Image
                src="/neha.jpg"
                alt="Neha, Founder of Glam By Neha"
                width={250}
                height={310}
                objectFit="cover"
                style={{ borderRadius: '5%', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
              />
            </div>
            <div style={{ flex: 2 }}>
              <h2 style={{
                color: colors.coffee,
                fontSize: '2.5rem',
                marginBottom: '1.5rem',
              }}>
                Our Vision & Neha&apos;s Passion
              </h2>
              <p style={{
                color: colors.black,
                fontSize: '1.1rem',
                lineHeight: '1.8',
                marginBottom: '1rem',
              }}>
                Founded by Neha, a visionary in the beauty industry, Glam By Neha was born
                out of a deep passion for empowering individuals through personalized beauty treatments.
                With years of expertise and a commitment to continuous learning, Neha ensures
                every client receives exceptional service and results that truly glow.
              </p>
              <p style={{
                color: colors.black,
                fontSize: '1.1rem',
                lineHeight: '1.8',
              }}>
                We specialize in enhancing your natural features, from the subtle artistry
                of permanent makeup to advanced skin rejuvenation techniques. Our goal is to
                make you feel confident and beautiful, inside and out.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            style={{
              backgroundColor: colors.offWhite,
              padding: '2.5rem',
              borderRadius: '10px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
              textAlign: 'center',
            }}
          >
            <h2 style={{
              color: colors.coffee,
              fontSize: '2.5rem',
              marginBottom: '1.5rem',
            }}>
              Our Philosophy
            </h2>
            <p style={{
              color: colors.black,
              fontSize: '1.1rem',
              lineHeight: '1.8',
              maxWidth: '900px',
              margin: '0 auto',
            }}>
              We believe in using only the highest quality products and the latest techniques
              to deliver safe, effective, and lasting results. Our salon is a sanctuary where
              you can relax, be pampered, and emerge feeling refreshed and beautiful.
              Every treatment is carefully designed to meet your unique needs and desires.
            </p>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;