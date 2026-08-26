import type { Business } from '../types';

// Sample/demo data only — fictional business for development and testing.
export const pearlDental: Business = {
  slug: 'pearl-dental',
  name: 'Pearl Dental Clinic',
  category: 'Dental Care',

  branding: {
    primaryColor: '#0d9488',
    secondaryColor: '#ccfbf1',
  },

  hero: {
    headline: 'Your Smile, Our Priority',
    description:
      'Pearl Dental Clinic offers gentle, modern dental care in a welcoming environment. From routine checkups to cosmetic treatments, we help you achieve a healthy, confident smile.',
  },

  services: [
    {
      name: 'General Dentistry',
      description: 'Comprehensive exams, cleanings, and preventive care for the whole family.',
    },
    {
      name: 'Teeth Whitening',
      description: 'Professional whitening treatments for a brighter, more radiant smile.',
    },
    {
      name: 'Dental Implants',
      description: 'Durable, natural-looking replacements for missing teeth.',
    },
    {
      name: 'Orthodontics',
      description: 'Clear aligners and braces to straighten teeth and improve bite alignment.',
    },
  ],

  about: {
    title: 'About Pearl Dental',
    description:
      'Founded as a sample clinic for demo purposes, Pearl Dental represents a boutique dental practice focused on patient comfort and long-term oral health.',
  },

  doctors: [
    {
      name: 'Dr. Sarah Whitmore',
      specialization: 'General & Cosmetic Dentistry',
    },
    {
      name: 'Dr. James Lin',
      specialization: 'Orthodontics',
    },
  ],

  contact: {
    phone: '+1 (555) 100-2000',
    whatsapp: '+15551002000',
    email: 'hello@pearl-dental-demo.example',
    address: '100 Pearl Avenue, Demo City, DC 10001',
    openingHours: 'Mon–Fri: 9:00 AM – 6:00 PM | Sat: 10:00 AM – 2:00 PM',
  },

  social: {
    instagram: 'https://instagram.com/pearl-dental-demo',
    facebook: 'https://facebook.com/pearl-dental-demo',
  },
};
