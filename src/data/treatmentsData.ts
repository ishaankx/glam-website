// src/data/treatmentsData.ts

export interface Treatment {
  id: string;
  title: string;
  description: string;
  formField: string; // The unique ID/value to send to the backend/Google Sheet
}

export const treatmentData: Treatment[] = [
  {
    id: 'pmu',
    title: 'Permanent Makeup',
    description: 'Define your beauty effortlessly with microblading, lip blush, and eyeliner.',
    formField: 'Permanent Makeup',
  },
  {
    id: 'skin-glow',
    title: 'Skin Glow Treatments',
    description: 'Achieve a radiant, healthy complexion with our advanced skin treatments.',
    formField: 'Skin Glow Treatments',
  },
  {
    id: 'brows-lips',
    title: 'Brow & Lip Enhancements',
    description: 'Perfectly sculpted brows and luscious lips to frame your face.',
    formField: 'Brow & Lip Enhancements',
  },
  {
    id: 'nail-art',
    title: 'Exquisite Nail Art & Care',
    description: 'Express your style with stunning nail designs and manicures.',
    formField: 'Exquisite Nail Art & Care',
  },
];