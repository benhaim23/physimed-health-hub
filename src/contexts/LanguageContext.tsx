
import React, { createContext, useContext, useState, ReactNode } from "react";

type LanguageType = "en" | "fr";

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Our translations dictionary
const translations: Record<string, Record<string, string>> = {
  // Navbar
  "home": {
    en: "Home",
    fr: "Accueil"
  },
  "services": {
    en: "Services",
    fr: "Services"
  },
  "pricing": {
    en: "Pricing",
    fr: "Tarifs"
  },
  "about": {
    en: "About",
    fr: "À propos"
  },
  "contact": {
    en: "Contact",
    fr: "Contact"
  },
  "book_now": {
    en: "Book Now",
    fr: "Réserver"
  },
  "back_to_home": {
    en: "Back to Home",
    fr: "Retour à l'accueil"
  },
  
  // Hero section
  "hero_title": {
    en: "One-Stop Health Check-Ups and Concierge Care",
    fr: "Bilans de santé et service de conciergerie en un seul endroit"
  },
  "hero_subtitle": {
    en: "Fast, comprehensive, and personalized healthcare—all under one roof",
    fr: "Des soins de santé rapides, complets et personnalisés—sous un même toit"
  },
  
  // Features section
  "why_partner": {
    en: "Why Corporations Partner With Physimed",
    fr: "Pourquoi les entreprises choisissent Physimed"
  },
  "same_day": {
    en: "Same-Day Appointments",
    fr: "Rendez-vous le jour même"
  },
  "no_wait": {
    en: "No long waits",
    fr: "Sans longue attente"
  },
  "personalized": {
    en: "Personalized Medical Care",
    fr: "Soins médicaux personnalisés"
  },
  "tailored": {
    en: "Tailored to each patient's age, history, and risk factors",
    fr: "Adaptés à l'âge, à l'historique et aux facteurs de risque de chaque patient"
  },
  "consistent": {
    en: "Consistent Follow-Up",
    fr: "Suivi constant"
  },
  "same_doctor": {
    en: "Always see the same doctor",
    fr: "Toujours le même médecin"
  },
  "all_in_one": {
    en: "All-In-One Facility",
    fr: "Établissement tout-en-un"
  },
  "coordinated": {
    en: "Consultations, lab tests, diagnostics, specialists—all coordinated for you",
    fr: "Consultations, tests de laboratoire, diagnostics, spécialistes—tout est coordonné pour vous"
  },
  
  // Pricing section
  "pricing_title": {
    en: "Our Corporate Medical Plan Options",
    fr: "Nos options de plans médicaux d'entreprise"
  },
  "annual_checkup": {
    en: "Annual Health Check-Up",
    fr: "Bilan de santé annuel"
  },
  "yearly": {
    en: "per year",
    fr: "par an"
  },
  "package_1": {
    en: "Package 1 – For adults under 65 without chronic conditions",
    fr: "Forfait 1 – Pour adultes de moins de 65 ans sans maladie chronique"
  },
  "package_2": {
    en: "Package 2 – For adults 65+ or with chronic conditions",
    fr: "Forfait 2 – Pour adultes de 65 ans et plus ou avec maladies chroniques"
  },
  
  // Contact section
  "get_in_touch": {
    en: "Get In Touch",
    fr: "Contactez-nous"
  },
  "contact_physimed": {
    en: "Contact Physimed",
    fr: "Contactez Physimed"
  },
  "contact_desc": {
    en: "We're here to answer any questions you may have about our corporate health plans. Reach out to our team for personalized assistance.",
    fr: "Nous sommes là pour répondre à toutes vos questions concernant nos plans de santé d'entreprise. Contactez notre équipe pour une assistance personnalisée."
  },
  
  // Footer
  "all_rights": {
    en: "All Rights Reserved",
    fr: "Tous droits réservés"
  },
  "privacy": {
    en: "Privacy Policy",
    fr: "Politique de confidentialité"
  },
  "terms": {
    en: "Terms & Conditions",
    fr: "Termes et conditions"
  },
  
  // Language selector
  "en": {
    en: "EN",
    fr: "EN"
  },
  "fr": {
    en: "FR",
    fr: "FR"
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageType>("en");

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
