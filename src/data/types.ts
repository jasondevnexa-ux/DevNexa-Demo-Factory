export interface Business {
  slug: string;
  name: string;
  category: string;

  branding: {
    logo?: string;
    primaryColor?: string;
    secondaryColor?: string;
  };

  hero: {
    headline?: string;
    description?: string;
    image?: string;
  };

  services: {
    name: string;
    description?: string;
  }[];

  about?: {
    title?: string;
    description?: string;
    image?: string;
  };

  doctors?: {
    name: string;
    specialization?: string;
    image?: string;
  }[];

  contact: {
    phone?: string;
    whatsapp?: string;
    email?: string;
    address?: string;
    mapsUrl?: string;
    openingHours?: string;
  };

  social?: {
    instagram?: string;
    facebook?: string;
  };
}
