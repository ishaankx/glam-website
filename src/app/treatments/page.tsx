'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { colors } from '@/styles/colors';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
// FIX: Import Treatment interface alongside treatmentData
import { treatmentData, Treatment } from '@/data/treatmentsData'; 

// Define a new local interface that extends the base Treatment interface
interface FullTreatmentData extends Treatment {
    image: string;
    details: string[];
}

const TreatmentsPage = () => {
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
    
    // FIX: Explicitly type the result of the map function as FullTreatmentData[]
    const fullTreatmentData: FullTreatmentData[] = treatmentData.map(t => {
        // Re-add UI-specific data like image and details
        if (t.id === 'pmu') {
            return { ...t, image: '/treatments/PermanentMakeup.jpg', details: ['Microblading & Microshading', 'Lip Blush & Lip Liner', 'Permanent Eyeliner', 'Scalp Micropigmentation'] };
        }
        if (t.id === 'skin-glow') {
            return { ...t, image: '/treatments/Hydrafacial.jpg', details: ['Customized Facials', 'Chemical Peels', 'Microdermabrasion', 'HydraFacial', 'LED Light Therapy'] };
        }
        if (t.id === 'brows-lips') {
            return { ...t, image: '/treatments/Lips.jpg', details: ['Brow Lamination & Tinting', 'Waxing & Threading', 'Lash Lifts & Tints', 'Advanced Lip Hydration'] };
        }
        if (t.id === 'nail-art') {
            return { ...t, image: '/treatments/nails.jpg', details: ['Gel Manicures & Pedicures', 'Acrylic & Gel Extensions', 'Custom Nail Art & Designs', 'Spa Manicures & Pedicures'] };
        }
        // This default path should technically not be hit if all IDs are covered, 
        // but we need to ensure the structure matches FullTreatmentData. 
        // We'll use a safe fallback image and empty details array.
        return { ...t, image: '', details: [] }; 
    });


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
                        Our Exquisite Treatments
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
                        Discover a world of beauty and transformation. Each treatment is meticulously crafted
                        to bring out your best.
                    </motion.p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '3rem',
                }}>
                    {fullTreatmentData.map((treatment) => (
                        <motion.div
                            key={treatment.id}
                            variants={fadeIn}
                            className="service-card-hover"
                            style={{
                                backgroundColor: colors.cream,
                                borderRadius: '10px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            }}
                        >
                            <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                                {/* FIX: Ensure objectFit is used via style */}
                                <Image
                                    src={treatment.image}
                                    alt={treatment.title}
                                    fill 
                                    style={{ objectFit: 'cover' }}
                                    quality={75}
                                />
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <h2 style={{
                                    color: colors.coffee,
                                    fontSize: '2.2rem',
                                    marginBottom: '1rem',
                                    fontFamily: 'Playfair Display, serif',
                                }}>
                                    {treatment.title}
                                </h2>
                                <p style={{
                                    color: colors.black,
                                    fontSize: '1.1rem',
                                    lineHeight: '1.7',
                                    marginBottom: '1.5rem',
                                }}>
                                    {treatment.description}
                                </p>
                                <h3 style={{
                                    color: colors.bronzeGold,
                                    fontSize: '1.3rem',
                                    marginBottom: '1rem',
                                }}>
                                    Services Include:
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    marginBottom: '2rem',
                                }}>
                                    {/* FIX: Implicit any type removed by strong typing the loop via the FullTreatmentData interface */}
                                    {treatment.details.map((detail: string, index: number) => (
                                        <li key={index} style={{
                                            color: colors.black,
                                            fontSize: '1rem',
                                            marginBottom: '0.5rem',
                                            position: 'relative',
                                            paddingLeft: '1.5rem',
                                        }}>
                                            <span style={{
                                                position: 'absolute',
                                                left: 0,
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                color: colors.bronzeGold,
                                                fontSize: '1.2rem',
                                            }}>
                                                •
                                            </span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                                <Link href={`/book?treatmentId=${treatment.id}`} passHref>
                                    <button className="secondary-button" style={{
                                        backgroundColor: colors.bronzeGold,
                                        color: colors.offWhite,
                                        padding: '0.8rem 2rem',
                                        border: 'none',
                                        borderRadius: '5px',
                                        fontSize: '1rem',
                                        fontWeight: '500',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s ease, transform 0.2s ease',
                                    }}>
                                        Book {treatment.title}
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TreatmentsPage;