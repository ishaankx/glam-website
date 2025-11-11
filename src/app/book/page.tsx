'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { colors } from '@/styles/colors';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { treatmentData } from '@/data/treatmentsData';

// !!! IMPORTANT: GOOGLE FORM SUBMISSION URL !!!
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd6Ucy5mPf3RFX3zngLlspT-HYrR-E9DiGMM6BtKunWOo2hPA/formResponse';

// --- UPDATED FIELD IDs based on your HTML snippet ---
// NOTE: These IDs MUST correspond to your Google Form fields exactly.
const FORM_FIELD_IDS = {
  // CONFIRMED IDs:
  name: 'entry.2005620554',
  phone: 'entry.1166974658', // Placeholder from snippet
  email: 'entry.1045781291', // Placeholder from snippet
  
  // DATE FIELD (Confirmed structure from snippet):
  dateYear: 'entry.1065046570_year',
  dateMonth: 'entry.1065046570_month',
  dateDay: 'entry.1065046570_day',

  // REMAINING PLACEHOLDERS (MUST BE VERIFIED by you):
  timeSlot: 'entry.839337160', // Placeholder from snippet
  treatments: 'entry.1000005', // Assume this is a Paragraph/Long Text field for the treatment list
};

const BookAppointmentPage = () => {
  const searchParams = useSearchParams();
  const initialTreatmentId = searchParams.get('treatmentId');

  const [selectedTreatments, setSelectedTreatments] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '', 
    timeSlot: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  // 1. Initialize treatments based on URL query
  useEffect(() => {
    if (initialTreatmentId) {
      const treatment = treatmentData.find(t => t.id === initialTreatmentId);
      if (treatment && !selectedTreatments.includes(treatment.formField)) {
        setSelectedTreatments([treatment.formField]);
      }
    }
  }, [initialTreatmentId]);

  // 2. Handlers
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleTreatment = (treatmentFormField: string) => {
    setSelectedTreatments(prev =>
      prev.includes(treatmentFormField)
        ? prev.filter(t => t !== treatmentFormField)
        : [...prev, treatmentFormField]
    );
  };
  
  const handleRemoveTreatment = (treatmentFormField: string) => {
    setSelectedTreatments(prev => prev.filter(t => t !== treatmentFormField));
  };
  
  // 3. Submission Logic
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedTreatments.length === 0) {
      alert("Please select at least one treatment.");
      return;
    }
    
    setIsSubmitting(true);

    // --- Date Parsing for Google Form: Splits YYYY-MM-DD into three fields ---
    const dateParts = formData.date ? formData.date.split('-').map(p => parseInt(p, 10)) : [0, 0, 0];
    const [year, month, day] = dateParts;
    // --- End Date Parsing ---

    // Create the data payload for the Google Form
    const data = new FormData();
    data.append(FORM_FIELD_IDS.name, formData.name);
    data.append(FORM_FIELD_IDS.phone, formData.phone);
    data.append(FORM_FIELD_IDS.email, formData.email);
    
    // Send Date as three separate fields
    if (year && month && day) {
        data.append(FORM_FIELD_IDS.dateYear, year.toString());
        data.append(FORM_FIELD_IDS.dateMonth, month.toString());
        data.append(FORM_FIELD_IDS.dateDay, day.toString());
    }

    data.append(FORM_FIELD_IDS.timeSlot, formData.timeSlot);
    // Combine selected treatments into a single string
    data.append(FORM_FIELD_IDS.treatments, selectedTreatments.join('; '));

    try {
      // NOTE: Using 'no-cors' mode is required for cross-origin submission to Google Forms.
      const response = await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        body: data,
        mode: 'no-cors',
      });
      
      // Assume success if fetch completes without a network error.
      setShowSuccessModal(true);
      
      // Reset form
      setFormData({ name: '', phone: '', email: '', date: '', timeSlot: '' });
      setSelectedTreatments(initialTreatmentId ? [treatmentData.find(t => t.id === initialTreatmentId)?.formField || ''] : []);
      
    } catch (error) {
      console.error('Submission Error:', error);
      alert("An error occurred while sending your request. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // 4. Animation Variants (No changes here)
  const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const staggerContainer = { hidden: { opacity: 1 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };


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
            Book Your Appointment
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
            Schedule your personalized beauty experience with Neha today.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          style={{
            backgroundColor: colors.cream,
            padding: '2rem 3rem',
            borderRadius: '10px',
            boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          <h2 style={{
            color: colors.coffee,
            fontSize: '2.5rem',
            marginBottom: '2rem',
            textAlign: 'center',
          }}>
            Appointment Request Form
          </h2>
          
          <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
            
            {/* 1. Personal Details - This grid is already responsive */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <FormInput label="Full Name" name="name" type="text" value={formData.name} onChange={handleFormChange} required />
              <FormInput label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleFormChange} required />
              <FormInput label="Email Address" name="email" type="email" value={formData.email} onChange={handleFormChange} required />
            </div>

            {/* 2. Date and Time Slot - CHANGED to use CSS class */}
            <div className="form-grid-2-col">
              <FormInput label="Preferred Date" name="date" type="date" value={formData.date} onChange={handleFormChange} required />
              <FormInput label="Preferred Time Slot (e.g., 10:00 AM - 12:00 PM)" name="timeSlot" type="text" value={formData.timeSlot} onChange={handleFormChange} required />
            </div>

            {/* 3. Treatments Selection */}
            <div>
              <h3 style={{ color: colors.coffee, fontSize: '1.5rem', marginBottom: '1rem' }}>
                Select Treatments (Required)
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {treatmentData.map((treatment) => (
                  <TreatmentPill
                    key={treatment.id}
                    treatment={treatment}
                    isSelected={selectedTreatments.includes(treatment.formField)}
                    onToggle={() => toggleTreatment(treatment.formField)}
                  />
                ))}
              </div>
            </div>

            {/* 4. Selected Treatments Summary */}
            <div>
              <h3 style={{ color: colors.coffee, fontSize: '1.5rem', marginBottom: '1rem', borderBottom: `1px solid ${colors.bronzeGold}`, paddingBottom: '0.5rem' }}>
                Your Current Selection
              </h3>
              {selectedTreatments.length === 0 ? (
                <p style={{ color: colors.black, opacity: 0.7 }}>No treatments selected. Please choose from above.</p>
              ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {selectedTreatments.map((field, index) => (
                    <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0', borderBottom: index < selectedTreatments.length - 1 ? `1px dotted ${colors.bronzeGold}30` : 'none' }}>
                      <span style={{ color: colors.coffee, fontWeight: '500' }}>{field}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveTreatment(field)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'red',
                          fontSize: '0.9rem',
                          cursor: 'pointer',
                          padding: '0.2rem 0.5rem',
                          borderRadius: '3px',
                          transition: 'opacity 0.3s',
                        }}
                        className="inline-link-hover"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* 5. Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || selectedTreatments.length === 0}
              className="hero-button"
              style={{
                backgroundColor: colors.bronzeGold,
                color: colors.offWhite,
                padding: '1rem 2rem',
                border: 'none',
                borderRadius: '5px',
                fontSize: '1.2rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease, transform 0.2s ease',
              }}
            >
              {isSubmitting ? 'Sending Request...' : 'Send Appointment Request'}
            </button>
          </form>

        </motion.div>
      </main>
      
      <Footer />
      
      {/* Success Modal */}
      {showSuccessModal && (
        <SubmissionSuccessModal onClose={() => setShowSuccessModal(false)} />
      )}
    </div>
  );
};

export default BookAppointmentPage;

// --- Helper Components ---

interface InputProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
}

const FormInput: React.FC<InputProps> = ({ label, name, type, value, onChange, required }) => (
  <div>
    <label htmlFor={name} style={{ display: 'block', color: colors.coffee, marginBottom: '0.5rem', fontWeight: '500' }}>
      {label}:
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      style={{
        width: '100%',
        padding: '0.8rem',
        borderRadius: '5px',
        border: `1px solid ${colors.bronzeGold}`,
        backgroundColor: colors.offWhite,
        color: colors.black,
        fontSize: '1rem',
      }}
    />
  </div>
);

interface PillProps {
  treatment: typeof treatmentData[0];
  isSelected: boolean;
  onToggle: () => void;
}

const TreatmentPill: React.FC<PillProps> = ({ treatment, isSelected, onToggle }) => (
  <button
    type="button"
    onClick={onToggle}
    style={{
      padding: '0.6rem 1.2rem',
      border: `2px solid ${isSelected ? colors.bronzeGold : colors.coffee}`,
      borderRadius: '20px',
      backgroundColor: isSelected ? colors.bronzeGold : colors.cream,
      color: isSelected ? colors.offWhite : colors.coffee,
      fontSize: '0.9rem',
      fontWeight: isSelected ? '700' : '500',
      cursor: 'pointer',
      transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',
    }}
    className={!isSelected ? 'secondary-button' : ''}
  >
    {treatment.title} {isSelected && '✓'}
  </button>
);

const SubmissionSuccessModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  }}>
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      style={{
        backgroundColor: colors.offWhite,
        padding: '3rem',
        borderRadius: '10px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
        textAlign: 'center',
        maxWidth: '400px',
        position: 'relative',
      }}
    >
      <h2 style={{ color: colors.bronzeGold, fontFamily: 'Playfair Display, serif', fontSize: '2rem' }}>
        Appointment Request Sent!
      </h2>
      <p style={{ color: colors.coffee, fontSize: '1.1rem', marginBottom: '1.5rem' }}>
        **Thank you for contacting, Our associate will contact you regarding the schedule and details.**
      </p>
      <button
        onClick={onClose}
        className="hero-button"
        style={{
          backgroundColor: colors.coffee,
          color: colors.offWhite,
          padding: '0.75rem 2rem',
          border: 'none',
          borderRadius: '5px',
          fontSize: '1rem',
          fontWeight: '500',
          cursor: 'pointer',
        }}
      >
        Close
      </button>
    </motion.div>
  </div>
);