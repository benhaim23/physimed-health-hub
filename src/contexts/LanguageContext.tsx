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
  chatbot_title: {
    en: 'Physimed Health Assistant',
    fr: 'Assistant Santé Physimed',
  },
  chatbot_welcome: {
    en: "Hi there! 👋 I'm the Physimed Health Assistant. How can I help you today?",
    fr: "Bonjour! 👋 Je suis l'Assistant Santé Physimed. Comment puis-je vous aider aujourd'hui?",
  },
  chatbot_placeholder: {
    en: "Type your message...",
    fr: "Tapez votre message...",
  },
  chatbot_pricing_response: {
    en: "Our corporate plans start at $1,195 for annual health check-ups. We also offer comprehensive care packages starting from $2,275. You can view detailed pricing on our pricing page.",
    fr: "Nos forfaits corporatifs commencent à 1 195 $ pour les bilans de santé annuels. Nous proposons également des forfaits de soins complets à partir de 2 275 $. Vous pouvez consulter les tarifs détaillés sur notre page de tarification.",
  },
  chatbot_booking_response: {
    en: "You can book an appointment using our online booking system on the website. For urgent appointments, please call us at 514-747-8192.",
    fr: "Vous pouvez prendre rendez-vous en utilisant notre système de réservation en ligne sur le site. Pour les rendez-vous urgents, veuillez nous appeler au 514-747-8192.",
  },
  chatbot_contact_response: {
    en: "You can reach us at 514-747-8192 or email us at info@physimed.com. Our clinic is located at 6363 Trans-Canada Highway, Suite 400, St-Laurent, QC H4T 1Z9.",
    fr: "Vous pouvez nous joindre au 514-747-8192 ou nous envoyer un courriel à info@physimed.com. Notre clinique est située au 6363 autoroute Transcanadienne, bureau 400, St-Laurent, QC H4T 1Z9.",
  },
  chatbot_hours_response: {
    en: "We're open Monday to Friday from 7:00 AM to 9:00 PM, and weekends from 8:00 AM to 5:00 PM.",
    fr: "Nous sommes ouverts du lundi au vendredi de 7h00 à 21h00, et les fins de semaine de 8h00 à 17h00.",
  },
  chatbot_concierge_response: {
    en: "Our medical concierge service provides 7-day access to healthcare professionals, same-day appointments, and coordinated care. It's included with our care packages.",
    fr: "Notre service de conciergerie médicale offre un accès 7 jours sur 7 aux professionnels de la santé, des rendez-vous le jour même et des soins coordonnés. Il est inclus dans nos forfaits de soins.",
  },
  chatbot_default_response: {
    en: "Thank you for your message. For specific information about our corporate health plans, please call us at 514-747-8192 or visit our pricing page.",
    fr: "Merci pour votre message. Pour des informations spécifiques sur nos forfaits de santé corporatifs, veuillez nous appeler au 514-747-8192 ou visiter notre page de tarification.",
  },
  en: {
    en: 'EN',
    fr: 'EN',
  },
  fr: {
    en: 'FR',
    fr: 'FR',
  },
  welcome_physimed: {
    en: "Welcome to Physimed Corporate Health",
    fr: "Bienvenue à Physimed Santé Corporative",
  },
  gift_premium_healthcare: {
    en: "Give Your Team the Gift of Premium Healthcare",
    fr: "Offrez à votre équipe des soins de santé de qualité",
  },
  unlock_concierge: {
    en: "Unlock our Medical Corporate Client Concierge Service",
    fr: "Débloquez notre service de conciergerie client médical corporatif",
  },
  your_health_streamlined: {
    en: 'Your Health, Streamlined',
    fr: 'Votre santé, simplifiée',
  },
  why_corporations_partner: {
    en: 'Why Corporations Partner With Physimed',
    fr: 'Pourquoi les entreprises s\'associent à Physimed',
  },
  we_deliver_premium: {
    en: 'We deliver premium healthcare that meets the demands of today\'s corporate environments. Our comprehensive approach ensures your team stays healthy, proactive, and productive.',
    fr: 'Nous offrons des soins de santé de qualité qui répondent aux exigences des environnements corporatifs d\'aujourd\'hui. Notre approche globale garantit que votre équipe reste en bonne santé, proactive et productive.',
  },
  same_day_appointments_title: {
    en: 'Same-Day Appointments',
    fr: 'Rendez-vous le jour même',
  },
  same_day_appointments_desc: {
    en: 'No long waits for essential care. Get seen when you need it most with our priority scheduling system.',
    fr: 'Pas d\'attente prolongée pour des soins essentiels. Soyez vu quand vous en avez le plus besoin grâce à notre système de planification prioritaire.',
  },
  personalized_medical_care_title: {
    en: 'Personalized Medical Care',
    fr: 'Soins médicaux personnalisés',
  },
  personalized_medical_care_desc: {
    en: 'Tailored care plans based on each patient\'s age, history, and risk factors for truly individualized medicine.',
    fr: 'Plans de soins adaptés à l\'âge, aux antécédents et aux facteurs de risque de chaque patient pour une médecine véritablement individualisée.',
  },
  consistent_follow_up_title: {
    en: 'Consistent Follow-Up',
    fr: 'Suivi constant',
  },
  consistent_follow_up_desc: {
    en: 'Build a relationship with your doctor. Always see the same physician who knows your history and needs.',
    fr: 'Établissez une relation avec votre médecin. Consultez toujours le même médecin qui connaît vos antécédents et vos besoins.',
  },
  all_in_one_facility_title: {
    en: 'All-In-One Facility',
    fr: 'Installation tout-en-un',
  },
  all_in_one_facility_desc: {
    en: 'Consultations, lab tests, diagnostics, and specialists—all coordinated for you in one convenient location.',
    fr: 'Consultations, tests de laboratoire, diagnostics et spécialistes—tous coordonnés pour vous en un seul endroit pratique.',
  },
  proactive_preventative_title: {
    en: 'Proactive & Preventative',
    fr: 'Proactif et préventif',
  },
  proactive_preventative_desc: {
    en: 'We focus on long-term health maintenance and disease prevention, not just treating symptoms.',
    fr: 'Nous nous concentrons sur le maintien de la santé à long terme et la prévention des maladies, pas seulement sur le traitement des symptômes.',
  },
  seven_day_availability_title: {
    en: '7-Day Availability',
    fr: 'Disponibilité 7 jours',
  },
  seven_day_availability_desc: {
    en: 'Medical support when you need it with extended hours and weekend availability for busy professionals.',
    fr: 'Soutien médical quand vous en avez besoin avec des heures prolongées et disponibilité le weekend pour les professionnels occupés.',
  },
  comprehensive_assessments_title: {
    en: 'Comprehensive Assessments',
    fr: 'Évaluations complètes',
  },
  comprehensive_assessments_desc: {
    en: 'Thorough check-ups include physical, laboratory, and specialized tests for a complete health picture.',
    fr: 'Les bilans complets comprennent des examens physiques, des tests de laboratoire et des tests spécialisés pour un portrait complet de la santé.',
  },
  digital_medical_records_title: {
    en: 'Digital Medical Records',
    fr: 'Dossiers médicaux numériques',
  },
  digital_medical_records_desc: {
    en: 'Secure electronic health records ensure your medical information is always accessible to your care team.',
    fr: 'Les dossiers de santé électroniques sécurisés garantissent que vos informations médicales sont toujours accessibles à votre équipe de soins.',
  },
  explore_all_services: {
    en: 'Explore All Our Services',
    fr: 'Explorez tous nos services',
  },
  corporate_healthcare: {
    en: 'Corporate Healthcare',
    fr: 'Soins de santé corporatifs',
  },
  corp_health_desc: {
    en: 'Investing in your team\'s health is investing in your company\'s future. Our tailored corporate plans provide comprehensive care that keeps your workforce healthy and productive.',
    fr: 'Investir dans la santé de votre équipe, c\'est investir dans l\'avenir de votre entreprise. Nos forfaits corporatifs sur mesure offrent des soins complets qui maintiennent votre personnel en bonne santé et productif.',
  },
  our_corporate_medical_plans: {
    en: 'Our Corporate Medical Plan Options',
    fr: 'Nos options de forfaits médicaux corporatifs',
  },
  choose_right_plan: {
    en: 'Choose the plan that\'s right for your team. All plans include comprehensive assessments and personalized care.',
    fr: 'Choisissez le forfait qui convient à votre équipe. Tous les forfaits comprennent des évaluations complètes et des soins personnalisés.',
  },
  annual_checkup: {
    en: 'Annual Check-Up',
    fr: 'Bilan de santé annuel',
  },
  care_packages: {
    en: 'Care Packages',
    fr: 'Forfaits de soins',
  },
  annual_health_checkup: {
    en: 'Annual Health Check-Up',
    fr: 'Bilan de santé annuel',
  },
  per_year: {
    en: '/ year',
    fr: '/ année',
  },
  ideal_for_yearly: {
    en: 'Ideal for individuals seeking a thorough, yearly evaluation.',
    fr: 'Idéal pour les individus recherchant une évaluation annuelle approfondie.',
  },
  whats_included: {
    en: 'What\'s Included:',
    fr: 'Ce qui est inclus:',
  },
  pre_checkup: {
    en: 'Pre-Check-Up:',
    fr: 'Pré-bilan:',
  },
  digital_medical_file: {
    en: 'Digital medical file creation & updates',
    fr: 'Création et mises à jour du dossier médical numérique',
  },
  health_lifestyle_questionnaire: {
    en: 'Health & lifestyle questionnaire',
    fr: 'Questionnaire de santé et de style de vie',
  },
  vital_signs_medication: {
    en: 'Vital signs & medication review',
    fr: 'Examen des signes vitaux et des médicaments',
  },
  in_clinic_consultations: {
    en: 'In-Clinic Consultations:',
    fr: 'Consultations en clinique:',
  },
  nurse_coordination: {
    en: 'Nurse coordination visit',
    fr: 'Visite de coordination avec infirmière',
  },
  bloodwork_markers: {
    en: 'Bloodwork for key health markers',
    fr: 'Analyses sanguines pour les marqueurs de santé clés',
  },
  kinesiologist_assessment: {
    en: 'Kinesiologist Assessment with personalized fitness plan',
    fr: 'Évaluation du kinésiologue avec plan de conditionnement physique personnalisé',
  },
  dietitian_assessment: {
    en: 'Dietitian Assessment with personalized nutrition guidance',
    fr: 'Évaluation du diététicien avec conseils nutritionnels personnalisés',
  },
  additional_services: {
    en: 'Additional Services:',
    fr: 'Services additionnels:',
  },
  physical_exam: {
    en: 'Full physical exam & aesthetic evaluation',
    fr: 'Examen physique complet et évaluation esthétique',
  },
  medical_history_review: {
    en: 'Medical history review & test results discussion',
    fr: 'Examen des antécédents médicaux et discussion des résultats des tests',
  },
  cancer_sti_screenings: {
    en: 'Cancer & STI screenings (as medically necessary)',
    fr: 'Dépistages du cancer et des ITS (selon les besoins médicaux)',
  },
  comprehensive_bloodwork: {
    en: 'Comprehensive blood work & urine analysis',
    fr: 'Analyses de sang et d\'urine complètes',
  },
  book_health_checkup: {
    en: 'Book Health Check-Up',
    fr: 'Réserver un bilan de santé',
  },
  essential_care_plan: {
    en: 'Essential Care Plan',
    fr: 'Forfait de soins essentiels',
  },
  adults_under_65: {
    en: 'For adults under 65 without chronic conditions',
    fr: 'Pour les adultes de moins de 65 ans sans conditions chroniques',
  },
  annual_checkup_followup: {
    en: 'Annual check-up & follow-up',
    fr: 'Bilan de santé annuel et suivi',
  },
  additional_doctor_visits_4: {
    en: '2 additional same-day doctor visits (total of 4 appointments)',
    fr: '2 visites supplémentaires chez le médecin le jour même (total de 4 rendez-vous)',
  },
  access_concierge_service: {
    en: 'Full access to 7-day-a-week medical concierge service',
    fr: 'Accès complet au service de conciergerie médicale 7 jours sur 7',
  },
  tests_medical_need: {
    en: 'Tests/screenings based on medical need',
    fr: 'Tests/dépistages selon les besoins médicaux',
  },
  same_day_appointments: {
    en: 'Same-day appointments with consistent doctor access',
    fr: 'Rendez-vous le jour même avec un accès constant au médecin',
  },
  best_health_maintenance: {
    en: 'Best for individuals with good health maintenance needs',
    fr: 'Idéal pour les personnes ayant de bons besoins de maintien de la santé',
  },
  subscribe_essential_care: {
    en: 'Subscribe to Essential Care',
    fr: 'Souscrire au forfait de soins essentiels',
  },
  most_popular: {
    en: 'Most Popular',
    fr: 'Le plus populaire',
  },
  premium_care_plus: {
    en: 'Premium Care Plus',
    fr: 'Forfait de soins premium plus',
  },
  adults_65_chronic: {
    en: 'For adults 65+ or with chronic conditions',
    fr: 'Pour les adultes de 65 ans et plus ou avec des conditions chroniques',
  },
  additional_doctor_visits_7: {
    en: '5 additional same-day doctor visits (total of 7 appointments)',
    fr: '5 visites supplémentaires chez le médecin le jour même (total de 7 rendez-vous)',
  },
  priority_scheduling: {
    en: 'Priority scheduling for specialist referrals',
    fr: 'Planification prioritaire pour les références aux spécialistes',
  },
  extended_medical_support: {
    en: 'Extended medical support with more frequent visits',
    fr: 'Soutien médical étendu avec des visites plus fréquentes',
  },
  ideal_chronic_management: {
    en: 'Ideal for ongoing chronic condition management',
    fr: 'Idéal pour la gestion continue des maladies chroniques',
  },
  subscribe_premium_care: {
    en: 'Subscribe to Premium Care',
    fr: 'Souscrire au forfait de soins premium',
  },
  medical_concierge_service: {
    en: 'Medical Concierge Service',
    fr: 'Service de conciergerie médicale',
  },
  concierge_description: {
    en: 'Available with all care packages, our medical concierge service ensures rapid, expert support from 6 AM to 9 PM every day—even on holidays.',
    fr: 'Disponible avec tous les forfaits de soins, notre service de conciergerie médicale assure un soutien rapide et expert de 6h à 21h tous les jours, même les jours fériés.',
  },
  phone_consultations: {
    en: 'Health-related phone consultations',
    fr: 'Consultations téléphoniques liées à la santé',
  },
  emergency_appointments: {
    en: 'Emergency appointments',
    fr: 'Rendez-vous d\'urgence',
  },
  telemedicine_visits: {
    en: 'Telemedicine (video visits)',
    fr: 'Télémédecine (visites vidéo)',
  },
  prescription_renewals: {
    en: 'Prescription renewals',
    fr: 'Renouvellements d\'ordonnances',
  },
  form_completion: {
    en: 'Form completion assistance',
    fr: 'Assistance pour remplir des formulaires',
  },
  coordination_referrals: {
    en: 'Coordination of referrals',
    fr: 'Coordination des références',
  },
  learn_more_concierge: {
    en: 'Learn More About Concierge Service',
    fr: 'En savoir plus sur le service de conciergerie',
  },
  did_you_know: {
    en: 'Did you know?',
    fr: 'Le saviez-vous?',
  },
  concierge_saves_time: {
    en: 'Our concierge service helps corporate clients save an average of 20+ hours per year in healthcare administration and waiting time.',
    fr: 'Notre service de conciergerie aide les clients corporatifs à économiser en moyenne plus de 20 heures par an en administration des soins de santé et en temps d\'attente.',
  },
  employee_satisfaction: {
    en: 'Employee Satisfaction',
    fr: 'Satisfaction des employés',
  },
  satisfaction_stat: {
    en: 'of our corporate clients report increased employee satisfaction with healthcare benefits',
    fr: 'de nos clients corporatifs rapportent une satisfaction accrue des employés avec les avantages de soins de santé',
  },
  rapid_access: {
    en: 'Rapid Access',
    fr: 'Accès rapide',
  },
  access_stat: {
    en: 'faster access to medical care compared to traditional healthcare routes',
    fr: 'accès plus rapide aux soins médicaux par rapport aux voies de soins de santé traditionnelles',
  },
  peace_of_mind: {
    en: 'Peace of Mind',
    fr: 'Tranquillité d\'esprit',
  },
  peace_stat: {
    en: 'peace of mind for employees and their families with responsive healthcare access',
    fr: 'tranquillité d\'esprit pour les employés et leurs familles avec un accès aux soins de santé réactif',
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
