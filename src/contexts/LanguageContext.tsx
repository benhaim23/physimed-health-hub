
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface Translations {
  [key: string]: {
    en: string;
    fr: string;
  };
}

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations: Translations = {
  home: {
    en: 'Home',
    fr: 'Accueil',
  },
  services: {
    en: 'Services',
    fr: 'Services',
  },
  pricing: {
    en: 'Pricing',
    fr: 'Tarifs',
  },
  about: {
    en: 'About',
    fr: 'À propos',
  },
  contact: {
    en: 'Contact',
    fr: 'Contact',
  },
  book_now: {
    en: 'Book Now',
    fr: 'Réserver',
  },
  premium_corp_healthcare: {
    en: 'Premium Corporate Healthcare',
    fr: 'Forfaits Médicaux Corporatifs',
  },
  hero_title: {
    en: 'Give Your Team the Gift of Premium Healthcare',
    fr: 'Bilan de Santé Complet et Service de Concierge Médical',
  },
  hero_subtitle: {
    en: 'At Physimed, we believe business leaders and their employees deserve fast, thorough, personalized healthcare—all under one roof. With same-day access, consistent follow-up, and premium services, we ensure your team stays healthy, proactive, and productive.',
    fr: 'Chez Physimed, nous croyons que les dirigeants d\'entreprise et leurs employés méritent des soins de santé rapides, complets et personnalisés—le tout sous un même toit. Grâce à un accès le jour même, à un suivi continu et à des services haut de gamme, nous veillons à ce que votre équipe reste en santé, proactive et productive.',
  },
  same_day_access: {
    en: 'Same-day Access',
    fr: 'Rendez-vous le jour même',
  },
  consistent_care: {
    en: 'Consistent Care',
    fr: 'Soins médicaux personnalisés',
  },
  premium_services: {
    en: 'Premium Services',
    fr: 'Approche proactive',
  },
  view_plans: {
    en: 'View Plans',
    fr: 'Voir les forfaits',
  },
  book_consultation: {
    en: 'Book Consultation',
    fr: 'Prendre rendez-vous',
  },
  download_brochure: {
    en: 'Download Corporate Brochure',
    fr: 'Télécharger la brochure corporative',
  },
  download_alert: {
    en: 'The corporate healthcare brochure will be available for download soon.',
    fr: 'La brochure de soins de santé corporative sera bientôt disponible au téléchargement.',
  },
  faq: {
    en: 'FAQ',
    fr: 'FAQ',
  },
  testimonials: {
    en: 'Testimonials',
    fr: 'Témoignages',
  },
  comprehensive_health_checkup: {
    en: 'Comprehensive Health Checkup',
    fr: 'Bilan de santé complet',
  },
  personalized_medical_concierge_service: {
    en: 'Personalized Medical Concierge Service',
    fr: 'Service personnalisé de conciergerie médicale',
  },
  executive_health_packages: {
    en: 'Executive Health Packages',
    fr: 'Forfaits de santé pour dirigeants',
  },
  advanced_diagnostic_testing: {
    en: 'Advanced Diagnostic Testing',
    fr: 'Tests diagnostiques avancés',
  },
  preventative_care_strategies: {
    en: 'Preventative Care Strategies',
    fr: 'Stratégies de soins préventifs',
  },
  wellness_and_lifestyle_coaching: {
    en: 'Wellness and Lifestyle Coaching',
    fr: 'Coaching bien-être et style de vie',
  },
  our_packages: {
    en: 'Our Packages',
    fr: 'Nos forfaits',
  },
  what_people_say: {
    en: 'What People Say',
    fr: 'Ce que les gens disent',
  },
  schedule_a_consultation: {
    en: 'Schedule a Consultation',
    fr: 'Planifier une consultation',
  },
  contact_us_today: {
    en: 'Contact us today to learn more about our corporate healthcare plans and personalized service.',
    fr: 'Contactez-nous dès aujourd\'hui pour en savoir plus sur nos forfaits de soins de santé corporatifs et nos services personnalisés.',
  },
  full_name: {
    en: 'Full Name',
    fr: 'Nom complet',
  },
  email: {
    en: 'Email',
    fr: 'Courriel',
  },
  phone_number: {
    en: 'Phone Number',
    fr: 'Numéro de téléphone',
  },
  message: {
    en: 'Message',
    fr: 'Message',
  },
  send_message: {
    en: 'Send Message',
    fr: 'Envoyer le message',
  },
  company_name: {
    en: 'Company Name',
    fr: 'Nom de l\'entreprise',
  },
  number_of_employees: {
    en: 'Number of Employees',
    fr: 'Nombre d\'employés',
  },
  thank_you: {
    en: 'Thank You!',
    fr: 'Merci!',
  },
  we_will_contact_you: {
    en: 'We will contact you shortly.',
    fr: 'Nous vous contacterons sous peu.',
  },
  submit: {
    en: 'Submit',
    fr: 'Soumettre',
  },
  corporate_healthcare_plans: {
    en: 'Corporate Healthcare Plans',
    fr: 'Plans de santé corporatifs',
  },
  personalized_service: {
    en: 'Personalized Service',
    fr: 'Service personnalisé',
  },
  // Fix for CTA section
  gift_premium: {
    en: 'Give Your Team the Gift of Premium Healthcare',
    fr: 'Offrez à votre équipe des soins de santé premium',
  },
  invest_team: {
    en: 'Investing in your team\'s health is investing in your company\'s future. Our tailored corporate plans provide comprehensive care that keeps your workforce healthy and productive.',
    fr: 'Investir dans la santé de votre équipe, c\'est investir dans l\'avenir de votre entreprise. Nos forfaits corporatifs sur mesure offrent des soins complets qui maintiennent votre personnel en bonne santé et productif.',
  },
  attract_talent: {
    en: 'Attract and retain top talent with premium health benefits',
    fr: 'Attirez et conservez les meilleurs talents avec des avantages santé premium',
  },
  reduce_absenteeism: {
    en: 'Reduce absenteeism with proactive healthcare',
    fr: 'Réduisez l\'absentéisme grâce à des soins de santé proactifs',
  },
  save_time: {
    en: 'Save time with on-site and virtual healthcare options',
    fr: 'Gagnez du temps avec des options de soins sur site et virtuels',
  },
  request_consultation: {
    en: 'Request a Consultation',
    fr: 'Demander une consultation',
  },
  view_plan_details: {
    en: 'View Plan Details',
    fr: 'Voir les détails du forfait',
  },
  book_corporate_demo: {
    en: 'Book a Corporate Demo',
    fr: 'Réserver une démonstration corporative',
  },
  your_company: {
    en: 'Your Company',
    fr: 'Votre entreprise',
  },
  your_name: {
    en: 'Your Name',
    fr: 'Votre nom',
  },
  email_address: {
    en: 'Email Address',
    fr: 'Adresse courriel',
  },
  email_placeholder: {
    en: 'you@company.com',
    fr: 'vous@entreprise.com',
  },
  select_option: {
    en: 'Select an option',
    fr: 'Sélectionnez une option',
  },
  employees_1_10: {
    en: '1-10 employees',
    fr: '1-10 employés',
  },
  employees_11_50: {
    en: '11-50 employees',
    fr: '11-50 employés',
  },
  employees_51_200: {
    en: '51-200 employees',
    fr: '51-200 employés',
  },
  employees_201: {
    en: '201+ employees',
    fr: '201+ employés',
  },
  schedule_demo: {
    en: 'Schedule Demo',
    fr: 'Planifier la démonstration',
  },
  back_to_home: {
    en: 'Back to Home',
    fr: 'Retour à l\'accueil',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found.`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
