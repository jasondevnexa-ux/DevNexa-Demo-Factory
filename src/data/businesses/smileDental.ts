import type { Business } from '../types';

// Sample/demo data only — fictional business for development and testing.
export const smileDental: Business = {
  slug: 'smile-dental',
  name: 'Smile Care Dental',
  category: 'Dental Care',

  branding: {
    primaryColor: '#2563eb',
    secondaryColor: '#dbeafe',
  },

  hero: {
    headline: 'Bright Smiles Start Here',
    description:
      'Smile Care Dental provides family-friendly dental services with a focus on comfort and affordability. Our team is dedicated to making every visit a positive experience.',
  },

  services: [
    {
      name: 'Family Dentistry',
      description: 'Dental care for patients of all ages, from children to seniors.',
    },
    {
      name: 'Emergency Dental Care',
      description: 'Same-day appointments for urgent dental issues and pain relief.',
    },
    {
      name: 'Root Canal Therapy',
      description: 'Gentle treatment to save infected teeth and restore oral health.',
    },
    {
      name: 'Pediatric Dentistry',
      description: 'Specialized care designed to keep young smiles healthy and happy.',
    },
  ],

  about: {
    title: 'About Smile Care Dental',
    description:
      'This is a fictional sample practice used to demonstrate the Demo Factory template system. Smile Care Dental represents a community-focused family dental office.',
  },

  contact: {
    phone: '+1 (555) 300-4000',
    email: 'contact@smilecare-demo.example',
    address: '250 Smile Boulevard, Sample Town, ST 20002',
    openingHours: 'Mon–Thu: 8:00 AM – 5:00 PM | Fri: 8:00 AM – 12:00 PM',
  },

  social: {
    facebook: 'https://facebook.com/smilecare-dental-demo',
  },
};
