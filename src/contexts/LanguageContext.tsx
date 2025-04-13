
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
  "premium_corp_healthcare": {
    en: "Premium Corporate Healthcare",
    fr: "Soins de santé corporatifs premium"
  },
  "view_plans": {
    en: "View Plans",
    fr: "Voir les forfaits"
  },
  "book_consultation": {
    en: "Book Consultation",
    fr: "Réserver une consultation"
  },
  "same_day_access": {
    en: "Same-Day Access",
    fr: "Accès le jour même"
  },
  "consistent_care": {
    en: "Consistent Care",
    fr: "Soins cohérents"
  },
  "premium_services": {
    en: "Premium Services",
    fr: "Services premium"
  },
  
  // Features section
  "your_health_streamlined": {
    en: "Your Health, Streamlined",
    fr: "Votre santé, simplifiée"
  },
  "why_partner": {
    en: "Why Corporations Partner With Physimed",
    fr: "Pourquoi les entreprises choisissent Physimed"
  },
  "corporate_environments": {
    en: "We deliver premium healthcare that meets the demands of today's corporate environments. Our comprehensive approach ensures your team stays healthy, proactive, and productive.",
    fr: "Nous offrons des soins de santé premium qui répondent aux exigences des environnements d'entreprise d'aujourd'hui. Notre approche globale garantit que votre équipe reste en bonne santé, proactive et productive."
  },
  "explore_services": {
    en: "Explore All Our Services",
    fr: "Découvrir tous nos services"
  },
  "same_day": {
    en: "Same-Day Appointments",
    fr: "Rendez-vous le jour même"
  },
  "no_wait": {
    en: "No long waits for essential care. Get seen when you need it most with our priority scheduling system.",
    fr: "Pas de longues attentes pour les soins essentiels. Soyez vu quand vous en avez le plus besoin grâce à notre système de planification prioritaire."
  },
  "personalized": {
    en: "Personalized Medical Care",
    fr: "Soins médicaux personnalisés"
  },
  "tailored": {
    en: "Tailored care plans based on each patient's age, history, and risk factors for truly individualized medicine.",
    fr: "Plans de soins adaptés à l'âge, à l'historique et aux facteurs de risque de chaque patient pour une médecine véritablement individualisée."
  },
  "consistent": {
    en: "Consistent Follow-Up",
    fr: "Suivi constant"
  },
  "same_doctor": {
    en: "Build a relationship with your doctor. Always see the same physician who knows your history and needs.",
    fr: "Établissez une relation avec votre médecin. Consultez toujours le même médecin qui connaît votre historique et vos besoins."
  },
  "all_in_one": {
    en: "All-In-One Facility",
    fr: "Établissement tout-en-un"
  },
  "coordinated": {
    en: "Consultations, lab tests, diagnostics, specialists—all coordinated for you in one convenient location.",
    fr: "Consultations, tests de laboratoire, diagnostics, spécialistes—tout est coordonné pour vous en un seul endroit pratique."
  },
  "proactive": {
    en: "Proactive & Preventative",
    fr: "Proactif et préventif"
  },
  "focus_prevention": {
    en: "We focus on long-term health maintenance and disease prevention, not just treating symptoms.",
    fr: "Nous nous concentrons sur le maintien de la santé à long terme et la prévention des maladies, pas seulement sur le traitement des symptômes."
  },
  "seven_day": {
    en: "7-Day Availability",
    fr: "Disponibilité 7 jours"
  },
  "medical_support": {
    en: "Medical support when you need it with extended hours and weekend availability for busy professionals.",
    fr: "Soutien médical quand vous en avez besoin avec des heures prolongées et une disponibilité le week-end pour les professionnels occupés."
  },
  "comprehensive_assessments": {
    en: "Comprehensive Assessments",
    fr: "Évaluations complètes"
  },
  "thorough_checkups": {
    en: "Thorough check-ups include physical, laboratory, and specialized tests for a complete health picture.",
    fr: "Des bilans complets incluant des examens physiques, des tests de laboratoire et des tests spécialisés pour une image complète de la santé."
  },
  "digital_records": {
    en: "Digital Medical Records",
    fr: "Dossiers médicaux numériques"
  },
  "secure_records": {
    en: "Secure electronic health records ensure your medical information is always accessible to your care team.",
    fr: "Les dossiers de santé électroniques sécurisés garantissent que vos informations médicales sont toujours accessibles à votre équipe de soins."
  },
  
  // Pricing section
  "pricing_title": {
    en: "Our Corporate Medical Plan Options",
    fr: "Nos options de plans médicaux d'entreprise"
  },
  "pricing_desc": {
    en: "Choose the plan that's right for your team. All plans include comprehensive assessments and personalized care.",
    fr: "Choisissez le forfait qui convient à votre équipe. Tous les forfaits comprennent des évaluations complètes et des soins personnalisés."
  },
  "annual_checkup": {
    en: "Annual Health Check-Up",
    fr: "Bilan de santé annuel"
  },
  "care_packages": {
    en: "Care Packages",
    fr: "Forfaits de soins"
  },
  "yearly": {
    en: "per year",
    fr: "par an"
  },
  "ideal_individuals": {
    en: "Ideal for individuals seeking a thorough, yearly evaluation.",
    fr: "Idéal pour les personnes recherchant une évaluation annuelle approfondie."
  },
  "whats_included": {
    en: "What's Included:",
    fr: "Ce qui est inclus:"
  },
  "pre_checkup": {
    en: "Pre-Check-Up:",
    fr: "Pré-bilan:"
  },
  "digital_file": {
    en: "Digital medical file creation & updates",
    fr: "Création et mises à jour du dossier médical numérique"
  },
  "health_questionnaire": {
    en: "Health & lifestyle questionnaire",
    fr: "Questionnaire sur la santé et le mode de vie"
  },
  "vital_signs": {
    en: "Vital signs & medication review",
    fr: "Signes vitaux et revue des médicaments"
  },
  "in_clinic": {
    en: "In-Clinic Consultations:",
    fr: "Consultations en clinique:"
  },
  "nurse_visit": {
    en: "Nurse coordination visit",
    fr: "Visite de coordination avec l'infirmière"
  },
  "bloodwork": {
    en: "Bloodwork for key health markers",
    fr: "Analyses sanguines pour les marqueurs de santé clés"
  },
  "kinesiologist": {
    en: "Kinesiologist Assessment with personalized fitness plan",
    fr: "Évaluation par un kinésiologue avec plan de conditionnement physique personnalisé"
  },
  "dietitian": {
    en: "Dietitian Assessment with personalized nutrition guidance",
    fr: "Évaluation par un diététicien avec conseils nutritionnels personnalisés"
  },
  "additional_services": {
    en: "Additional Services:",
    fr: "Services supplémentaires:"
  },
  "physical_exam": {
    en: "Full physical exam & aesthetic evaluation",
    fr: "Examen physique complet et évaluation esthétique"
  },
  "medical_history": {
    en: "Medical history review & test results discussion",
    fr: "Revue des antécédents médicaux et discussion des résultats des tests"
  },
  "cancer_screening": {
    en: "Cancer & STI screenings (as medically necessary)",
    fr: "Dépistages du cancer et des IST (selon nécessité médicale)"
  },
  "comprehensive_blood": {
    en: "Comprehensive blood work & urine analysis",
    fr: "Analyses sanguines complètes et analyse d'urine"
  },
  "book_health_checkup": {
    en: "Book Health Check-Up",
    fr: "Réserver un bilan de santé"
  },
  "package_1": {
    en: "Package 1",
    fr: "Forfait 1"
  },
  "package_2": {
    en: "Package 2",
    fr: "Forfait 2"
  },
  "adults_under_65": {
    en: "For adults under 65 without chronic conditions",
    fr: "Pour adultes de moins de 65 ans sans maladie chronique"
  },
  "adults_over_65": {
    en: "For adults 65+ or with chronic conditions",
    fr: "Pour adultes de 65 ans et plus ou avec maladies chroniques"
  },
  "annual_checkup_followup": {
    en: "Annual check-up & follow-up",
    fr: "Bilan de santé annuel et suivi"
  },
  "additional_visits_2": {
    en: "2 additional same-day doctor visits (total of 4 appointments)",
    fr: "2 visites supplémentaires chez le médecin le jour même (total de 4 rendez-vous)"
  },
  "concierge_access": {
    en: "Full access to 7-day-a-week medical concierge service",
    fr: "Accès complet au service de conciergerie médicale 7 jours sur 7"
  },
  "tests_screenings": {
    en: "Tests/screenings based on medical need",
    fr: "Tests/dépistages selon les besoins médicaux"
  },
  "additional_visits_5": {
    en: "5 additional same-day doctor visits (total of 7 appointments)",
    fr: "5 visites supplémentaires chez le médecin le jour même (total de 7 rendez-vous)"
  },
  "priority_scheduling": {
    en: "Priority scheduling for specialist referrals",
    fr: "Planification prioritaire pour les références aux spécialistes"
  },
  "same_day_appointments": {
    en: "Same-day appointments with consistent doctor access",
    fr: "Rendez-vous le jour même avec un accès constant au même médecin"
  },
  "good_health": {
    en: "Best for individuals with good health maintenance needs",
    fr: "Idéal pour les personnes ayant de bons besoins de maintien de la santé"
  },
  "extended_support": {
    en: "Extended medical support with more frequent visits",
    fr: "Soutien médical étendu avec des visites plus fréquentes"
  },
  "chronic_condition": {
    en: "Ideal for ongoing chronic condition management",
    fr: "Idéal pour la gestion continue des maladies chroniques"
  },
  "subscribe_package_1": {
    en: "Subscribe to Package 1",
    fr: "S'abonner au Forfait 1"
  },
  "subscribe_package_2": {
    en: "Subscribe to Package 2",
    fr: "S'abonner au Forfait 2"
  },
  "most_popular": {
    en: "Most Popular",
    fr: "Le plus populaire"
  },
  "medical_concierge": {
    en: "Medical Concierge Service",
    fr: "Service de conciergerie médicale"
  },
  "concierge_desc": {
    en: "Available with all care packages, our medical concierge service ensures rapid, expert support from 6 AM to 9 PM, every day—even on holidays.",
    fr: "Disponible avec tous les forfaits de soins, notre service de conciergerie médicale assure un soutien rapide et expert de 6h à 21h, tous les jours, même les jours fériés."
  },
  "phone_consultations": {
    en: "Health-related phone consultations",
    fr: "Consultations téléphoniques liées à la santé"
  },
  "emergency_appointments": {
    en: "Emergency appointments",
    fr: "Rendez-vous d'urgence"
  },
  "telemedicine": {
    en: "Telemedicine (video visits)",
    fr: "Télémédecine (visites vidéo)"
  },
  "prescription_renewals": {
    en: "Prescription renewals",
    fr: "Renouvellements d'ordonnances"
  },
  "form_completion": {
    en: "Form completion assistance",
    fr: "Assistance pour remplir des formulaires"
  },
  "referral_coordination": {
    en: "Coordination of referrals",
    fr: "Coordination des références"
  },
  "learn_more_concierge": {
    en: "Learn More About Concierge Service",
    fr: "En savoir plus sur le service de conciergerie"
  },
  "did_you_know": {
    en: "Did you know?",
    fr: "Le saviez-vous?"
  },
  "concierge_save_time": {
    en: "Our concierge service helps corporate clients save an average of 20+ hours per year in healthcare administration and waiting time.",
    fr: "Notre service de conciergerie aide les clients corporatifs à économiser en moyenne plus de 20 heures par an en administration de soins de santé et en temps d'attente."
  },
  "employee_satisfaction": {
    en: "of our corporate clients report increased employee satisfaction with healthcare benefits",
    fr: "de nos clients corporatifs rapportent une satisfaction accrue des employés concernant les avantages de soins de santé"
  },
  "faster_access": {
    en: "faster access to medical care compared to traditional healthcare routes",
    fr: "accès plus rapide aux soins médicaux par rapport aux voies de soins de santé traditionnelles"
  },
  "peace_of_mind": {
    en: "peace of mind for employees and their families with responsive healthcare access",
    fr: "tranquillité d'esprit pour les employés et leurs familles avec un accès réactif aux soins de santé"
  },
  
  // Testimonials section
  "testimonials": {
    en: "Testimonials",
    fr: "Témoignages"
  },
  "what_clients_say": {
    en: "What Our Corporate Clients Say",
    fr: "Ce que nos clients corporatifs disent"
  },
  "hear_from_business": {
    en: "Hear from business leaders who've partnered with Physimed for their corporate healthcare needs.",
    fr: "Écoutez les leaders d'entreprise qui se sont associés à Physimed pour leurs besoins en soins de santé d'entreprise."
  },
  "employee_sat": {
    en: "Employee Satisfaction",
    fr: "Satisfaction des employés"
  },
  "medical_support_24_7": {
    en: "Medical Support",
    fr: "Soutien médical"
  },
  "reduced_absenteeism": {
    en: "Reduced Absenteeism",
    fr: "Absentéisme réduit"
  },
  "corporate_partners": {
    en: "Corporate Partners",
    fr: "Partenaires corporatifs"
  },
  
  // CTA section
  "gift_premium": {
    en: "Give Your Team the Gift of Premium Healthcare",
    fr: "Offrez à votre équipe le cadeau des soins de santé premium"
  },
  "invest_team": {
    en: "Invest in your team's wellbeing with corporate plans that provide comprehensive care, reduced wait times, and personalized attention.",
    fr: "Investissez dans le bien-être de votre équipe avec des plans d'entreprise qui offrent des soins complets, des temps d'attente réduits et une attention personnalisée."
  },
  "attract_talent": {
    en: "Attract and retain top talent with premium benefits",
    fr: "Attirez et retenez les meilleurs talents avec des avantages premium"
  },
  "reduce_absenteeism": {
    en: "Reduce absenteeism and boost productivity",
    fr: "Réduisez l'absentéisme et augmentez la productivité"
  },
  "save_time": {
    en: "Save valuable time with same-day appointments",
    fr: "Économisez un temps précieux avec des rendez-vous le jour même"
  },
  "request_consultation": {
    en: "Request Corporate Consultation",
    fr: "Demander une consultation d'entreprise"
  },
  "view_plan_details": {
    en: "View Plan Details",
    fr: "Voir les détails du plan"
  },
  "book_corporate_demo": {
    en: "Book a Corporate Demo",
    fr: "Réserver une démo d'entreprise"
  },
  "company_name": {
    en: "Company Name",
    fr: "Nom de l'entreprise"
  },
  "your_company": {
    en: "Your company",
    fr: "Votre entreprise"
  },
  "your_name": {
    en: "Your Name",
    fr: "Votre nom"
  },
  "full_name": {
    en: "Full name",
    fr: "Nom complet"
  },
  "email_address": {
    en: "Email Address",
    fr: "Adresse e-mail"
  },
  "email_placeholder": {
    en: "your@email.com",
    fr: "votre@email.com"
  },
  "number_employees": {
    en: "Number of Employees",
    fr: "Nombre d'employés"
  },
  "select_option": {
    en: "Select option",
    fr: "Sélectionner une option"
  },
  "employees_1_10": {
    en: "1-10 employees",
    fr: "1-10 employés"
  },
  "employees_11_50": {
    en: "11-50 employees",
    fr: "11-50 employés"
  },
  "employees_51_200": {
    en: "51-200 employees",
    fr: "51-200 employés"
  },
  "employees_201": {
    en: "201+ employees",
    fr: "201+ employés"
  },
  "schedule_demo": {
    en: "Schedule Demo",
    fr: "Planifier une démo"
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
  "quick_links": {
    en: "Quick Links",
    fr: "Liens rapides"
  },
  "our_services": {
    en: "Our Services",
    fr: "Nos services"
  },
  "pricing_plans": {
    en: "Pricing Plans",
    fr: "Plans tarifaires"
  },
  "book_appointment": {
    en: "Book Appointment",
    fr: "Prendre rendez-vous"
  },
  "contact_us": {
    en: "Contact Us",
    fr: "Contactez-nous"
  },
  "about_us": {
    en: "About Us",
    fr: "À propos de nous"
  },
  "newsletter": {
    en: "Subscribe to Our Newsletter",
    fr: "Abonnez-vous à notre newsletter"
  },
  "newsletter_desc": {
    en: "Stay updated with our latest health services and corporate plans.",
    fr: "Restez informé de nos derniers services de santé et plans d'entreprise."
  },
  "email_placeholder_newsletter": {
    en: "Your email address",
    fr: "Votre adresse e-mail"
  },
  "subscribe": {
    en: "Subscribe",
    fr: "S'abonner"
  },
  "all_rights": {
    en: "All rights reserved",
    fr: "Tous droits réservés"
  },
  "privacy_policy": {
    en: "Privacy Policy",
    fr: "Politique de confidentialité"
  },
  "terms_service": {
    en: "Terms of Service",
    fr: "Conditions d'utilisation"
  },
  "faq": {
    en: "FAQ",
    fr: "FAQ"
  },
  
  // Misc/Common
  "monday_friday": {
    en: "Monday-Friday: 7am-9pm",
    fr: "Lundi-Vendredi: 7h-21h"
  },
  "saturday_sunday": {
    en: "Saturday-Sunday: 8am-5pm",
    fr: "Samedi-Dimanche: 8h-17h"
  },
  "premium_corporate": {
    en: "Premium corporate medical plans and comprehensive healthcare services, personalized for professionals.",
    fr: "Plans médicaux d'entreprise premium et services de soins de santé complets, personnalisés pour les professionnels."
  },
  "corporate_healthcare": {
    en: "Corporate Healthcare Plans",
    fr: "Plans de santé d'entreprise"
  },
  "invest_team_health": {
    en: "Invest in Your Team's Health",
    fr: "Investissez dans la santé de votre équipe"
  },
  "corp_health_desc": {
    en: "Our corporate health plans are designed to keep your team healthy, productive, and engaged. Choose the plan that best fits your organization's needs.",
    fr: "Nos plans de santé d'entreprise sont conçus pour maintenir votre équipe en bonne santé, productive et engagée. Choisissez le plan qui convient le mieux aux besoins de votre organisation."
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
