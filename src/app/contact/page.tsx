'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { colors } from '@/styles/colors';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    // In a real application, you would send this data to a backend API.
    console.log('Form data submitted:', formData);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmissionStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Contact Glam By Neha
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
            We&apos;d love to hear from you! Reach out for inquiries, appointments, or any questions.
          </motion.p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'flex-start',
        }}>
          {/* Contact Information */}
          <motion.div
            variants={fadeIn}
            style={{
              backgroundColor: colors.cream,
              padding: '2.5rem',
              borderRadius: '10px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
            }}
          >
            <h2 style={{
              color: colors.coffee,
              fontSize: '2rem',
              marginBottom: '1.5rem',
            }}>
              Get In Touch
            </h2>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ color: colors.bronzeGold, fontSize: '1.2rem', marginBottom: '0.5rem' }}>Address:</h3>
              <p style={{ color: colors.black, fontSize: '1.1rem' }}>123 Beauty Lane, Glam City, GC 90210</p>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ color: colors.bronzeGold, fontSize: '1.2rem', marginBottom: '0.5rem' }}>Phone:</h3>
              <p style={{ color: colors.black, fontSize: '1.1rem' }}>+1 (123) 456-7890</p>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ color: colors.bronzeGold, fontSize: '1.2rem', marginBottom: '0.5rem' }}>Email:</h3>
              <p style={{ color: colors.black, fontSize: '1.1rem' }}>info@glambyneha.com</p>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ color: colors.bronzeGold, fontSize: '1.2rem', marginBottom: '0.5rem' }}>Business Hours:</h3>
              <p style={{ color: colors.black, fontSize: '1.1rem' }}>Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p style={{ color: colors.black, fontSize: '1.1rem' }}>Saturday: 10:00 AM - 4:00 PM</p>
              <p style={{ color: colors.black, fontSize: '1.1rem' }}>Sunday: Closed</p>
            </div >
            <motion.div variants={fadeIn}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_LATITUDE!2dYOUR_LONGITUDE!3dYOUR_ZOOM!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ5JzQ0LjMiTiA3N8KwNTUnMjUuMiJF!5e0!3m2!1sen!2sus!4v1678901234567"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '8px', marginTop: '1.5rem' }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeIn}
            style={{
              backgroundColor: colors.offWhite,
              padding: '2.5rem',
              borderRadius: '10px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
            }}
          >
            <h2 style={{
              color: colors.coffee,
              fontSize: '2rem',
              marginBottom: '1.5rem',
            }}>
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', color: colors.coffee, marginBottom: '0.5rem', fontWeight: '500' }}>Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '5px',
                    border: `1px solid ${colors.bronzeGold}`,
                    backgroundColor: colors.cream,
                    color: colors.black,
                    fontSize: '1rem',
                  }}
                />
              </div>
              <div>
                <label htmlFor="email" style={{ display: 'block', color: colors.coffee, marginBottom: '0.5rem', fontWeight: '500' }}>Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '5px',
                    border: `1px solid ${colors.bronzeGold}`,
                    backgroundColor: colors.cream,
                    color: colors.black,
                    fontSize: '1rem',
                  }}
                />
              </div>
              <div>
                <label htmlFor="subject" style={{ display: 'block', color: colors.coffee, marginBottom: '0.5rem', fontWeight: '500' }}>Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '5px',
                    border: `1px solid ${colors.bronzeGold}`,
                    backgroundColor: colors.cream,
                    color: colors.black,
                    fontSize: '1rem',
                  }}
                />
              </div>
              <div>
                <label htmlFor="message" style={{ display: 'block', color: colors.coffee, marginBottom: '0.5rem', fontWeight: '500' }}>Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '5px',
                    border: `1px solid ${colors.bronzeGold}`,
                    backgroundColor: colors.cream,
                    color: colors.black,
                    fontSize: '1rem',
                    resize: 'vertical',
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="secondary-button"
                style={{
                  backgroundColor: colors.bronzeGold,
                  color: colors.offWhite,
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  transition: 'background-color 0.3s ease, transform 0.2s ease',
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submissionStatus === 'success' && (
                <p style={{ color: 'green', textAlign: 'center', marginTop: '1rem' }}>Your message has been sent successfully!</p>
              )}
              {submissionStatus === 'error' && (
                <p style={{ color: 'red', textAlign: 'center', marginTop: '1rem' }}>Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;