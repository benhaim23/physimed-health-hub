import React, { createContext, useContext, useState } from 'react';

interface LanguageContextProps {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof Translations) => string;
}

type Language = 'en' | 'fr' | 'es';

interface Translations {
  home: string;
  services: string;
  pricing: string;
  contact: string;
  book_now: string;
  select_language: string;
  welcome_message: string;
  our_services: string;
  comprehensive_checkup: string;
  specialized_consultations: string;
  preventive_care: string;
  corporate_wellness: string;
  view_more: string;
  why_choose_us: string;
  expert_team: string;
  advanced_technology: string;
  personalized_care: string;
  convenient_location: string;
  testimonials: string;
  john_doe: string;
  jane_smith: string;
  footer_contact_info: string;
  footer_address: string;
  footer_phone: string;
  footer_email: string;
  back_to_home: string;
  page_not_found: string;
  return_home: string;
  
  // Booking page enhancements
  schedule_appointment: string;
  book_consultation: string;
  schedule_description: string;
  select_datetime: string;
  personal_details: string;
  select_date: string;
  select_date_description: string;
  pick_date: string;
  select_time: string;
  select_time_description: string;
  appointment_summary: string;
  review_selection: string;
  date: string;
  time: string;
  not_selected: string;
  continue_to_details: string;
  select_date_time_continue: string;
  no_cancelation_fee: string;
  personal_information: string;
  first_name: string;
  last_name: string;
  email_address: string;
  phone_number: string;
  appointment_details: string;
  appointment_type: string;
  additional_notes: string;
  notes_placeholder: string;
  confirm_details: string;
  type: string;
  back: string;
  confirm_booking: string;
  by_booking: string;
  terms: string;
  and: string;
  privacy: string;
}

const defaultLanguage = 'en';

const translations: Record<Language, Translations> = {
  en: {
    home: "Home",
    services: "Services",
    pricing: "Pricing",
    contact: "Contact",
    book_now: "Book Now",
    select_language: "Select Language",
    welcome_message: "Your Health, Our Priority",
    our_services: "Our Services",
    comprehensive_checkup: "Comprehensive Health Check-up",
    specialized_consultations: "Specialized Consultations",
    preventive_care: "Preventive Care and Vaccinations",
    corporate_wellness: "Corporate Wellness Programs",
    view_more: "View More",
    why_choose_us: "Why Choose Us?",
    expert_team: "Expert Medical Team",
    advanced_technology: "Advanced Technology",
    personalized_care: "Personalized Care",
    convenient_location: "Convenient Location",
    testimonials: "Testimonials",
    john_doe: "John Doe",
    jane_smith: "Jane Smith",
    footer_contact_info: "Contact Information",
    footer_address: "123 Main Street, Anytown, USA",
    footer_phone: "+1 555-123-4567",
    footer_email: "info@example.com",
    back_to_home: "Back to Home",
    page_not_found: "Page Not Found",
    return_home: "Return to Home",
    
    // Booking page enhancements
    schedule_appointment: "Schedule an Appointment",
    book_consultation: "Book Your Consultation",
    schedule_description: "Schedule your health check-up or corporate consultation using our easy online booking system.",
    select_datetime: "Select Date & Time",
    personal_details: "Personal Details",
    select_date: "Select Date",
    select_date_description: "Choose your preferred appointment date.",
    pick_date: "Pick a date",
    select_time: "Select Time",
    select_time_description: "Choose a convenient time slot for your appointment.",
    appointment_summary: "Appointment Summary",
    review_selection: "Review your selected date and time",
    date: "Date",
    time: "Time",
    not_selected: "Not selected",
    continue_to_details: "Continue to Details",
    select_date_time_continue: "Select date and time to continue",
    no_cancelation_fee: "No cancellation fee if cancelled 24 hours before the appointment",
    personal_information: "Personal Information",
    first_name: "First Name",
    last_name: "Last Name",
    email_address: "Email Address",
    phone_number: "Phone Number",
    appointment_details: "Appointment Details",
    appointment_type: "Type of Appointment",
    additional_notes: "Additional Notes",
    notes_placeholder: "Any specific concerns or requirements for your appointment?",
    confirm_details: "Confirm your appointment details",
    type: "Type",
    back: "Back",
    confirm_booking: "Confirm Booking",
    by_booking: "By booking an appointment, you agree to our",
    terms: "terms and conditions",
    and: "and",
    privacy: "privacy policy",
  },
  fr: {
    home: "Accueil",
    services: "Services",
    pricing: "Tarifs",
    contact: "Contact",
    book_now: "Réserver",
    select_language: "Choisir la Langue",
    welcome_message: "Votre Santé, Notre Priorité",
    our_services: "Nos Services",
    comprehensive_checkup: "Bilan de Santé Complet",
    specialized_consultations: "Consultations Spécialisées",
    preventive_care: "Soins Préventifs et Vaccinations",
    corporate_wellness: "Programmes de Bien-être en Entreprise",
    view_more: "Voir Plus",
    why_choose_us: "Pourquoi Nous Choisir?",
    expert_team: "Équipe Médicale Experte",
    advanced_technology: "Technologie Avancée",
    personalized_care: "Soins Personnalisés",
    convenient_location: "Emplacement Pratique",
    testimonials: "Témoignages",
    john_doe: "John Doe",
    jane_smith: "Jane Smith",
    footer_contact_info: "Informations de Contact",
    footer_address: "123 Rue Principale, Anytown, USA",
    footer_phone: "+1 555-123-4567",
    footer_email: "info@example.com",
    back_to_home: "Retour à l'Accueil",
    page_not_found: "Page Non Trouvée",
    return_home: "Retourner à l'Accueil",
    
    // Booking page enhancements
    schedule_appointment: "Prendre un Rendez-vous",
    book_consultation: "Réservez Votre Consultation",
    schedule_description: "Planifiez votre bilan de santé ou consultation d'entreprise en utilisant notre système de réservation en ligne.",
    select_datetime: "Sélectionner Date et Heure",
    personal_details: "Informations Personnelles",
    select_date: "Sélectionner une Date",
    select_date_description: "Choisissez votre date de rendez-vous préférée.",
    pick_date: "Choisir une date",
    select_time: "Sélectionner une Heure",
    select_time_description: "Choisissez un créneau horaire qui vous convient.",
    appointment_summary: "Résumé du Rendez-vous",
    review_selection: "Vérifiez la date et l'heure sélectionnées",
    date: "Date",
    time: "Heure",
    not_selected: "Non sélectionné",
    continue_to_details: "Continuer aux Détails",
    select_date_time_continue: "Sélectionnez la date et l'heure pour continuer",
    no_cancelation_fee: "Pas de frais d'annulation si annulé 24 heures avant le rendez-vous",
    personal_information: "Informations Personnelles",
    first_name: "Prénom",
    last_name: "Nom",
    email_address: "Adresse Email",
    phone_number: "Numéro de Téléphone",
    appointment_details: "Détails du Rendez-vous",
    appointment_type: "Type de Rendez-vous",
    additional_notes: "Notes Supplémentaires",
    notes_placeholder: "Des préoccupations ou des exigences spécifiques pour votre rendez-vous?",
    confirm_details: "Confirmez les détails de votre rendez-vous",
    type: "Type",
    back: "Retour",
    confirm_booking: "Confirmer la Réservation",
    by_booking: "En réservant un rendez-vous, vous acceptez nos",
    terms: "conditions générales",
    and: "et",
    privacy: "politique de confidentialité",
  },
  es: {
    home: "Inicio",
    services: "Servicios",
    pricing: "Precios",
    contact: "Contacto",
    book_now: "Reservar",
    select_language: "Seleccionar Idioma",
    welcome_message: "Su Salud, Nuestra Prioridad",
    our_services: "Nuestros Servicios",
    comprehensive_checkup: "Chequeo de Salud Integral",
    specialized_consultations: "Consultas Especializadas",
    preventive_care: "Cuidado Preventivo y Vacunaciones",
    corporate_wellness: "Programas de Bienestar Corporativo",
    view_more: "Ver Más",
    why_choose_us: "¿Por Qué Elegirnos?",
    expert_team: "Equipo Médico Experto",
    advanced_technology: "Tecnología Avanzada",
    personalized_care: "Atención Personalizada",
    convenient_location: "Ubicación Conveniente",
    testimonials: "Testimonios",
    john_doe: "John Doe",
    jane_smith: "Jane Smith",
    footer_contact_info: "Información de Contacto",
    footer_address: "123 Calle Principal, Anytown, USA",
    footer_phone: "+1 555-123-4567",
    footer_email: "info@example.com",
    back_to_home: "Volver al Inicio",
    page_not_found: "Página No Encontrada",
    return_home: "Regresar al Inicio",
    
    // Booking page enhancements
    schedule_appointment: "Programar una Cita",
    book_consultation: "Reserve su Consulta",
    schedule_description: "Programe su chequeo de salud o consulta corporativa utilizando nuestro sencillo sistema de reservas en línea.",
    select_datetime: "Seleccionar Fecha y Hora",
    personal_details: "Datos Personales",
    select_date: "Seleccionar Fecha",
    select_date_description: "Elija su fecha de cita preferida.",
    pick_date: "Elegir una fecha",
    select_time: "Seleccionar Hora",
    select_time_description: "Elija un horario conveniente para su cita.",
    appointment_summary: "Resumen de la Cita",
    review_selection: "Revise la fecha y hora seleccionadas",
    date: "Fecha",
    time: "Hora",
    not_selected: "No seleccionado",
    continue_to_details: "Continuar a Detalles",
    select_date_time_continue: "Seleccione fecha y hora para continuar",
    no_cancelation_fee: "Sin cargo por cancelación si se cancela 24 horas antes de la cita",
    personal_information: "Información Personal",
    first_name: "Nombre",
    last_name: "Apellido",
    email_address: "Correo Electrónico",
    phone_number: "Número de Teléfono",
    appointment_details: "Detalles de la Cita",
    appointment_type: "Tipo de Cita",
    additional_notes: "Notas Adicionales",
    notes_placeholder: "¿Alguna inquietud o requisito específico para su cita?",
    confirm_details: "Confirme los detalles de su cita",
    type: "Tipo",
    back: "Atrás",
    confirm_booking: "Confirmar Reserva",
    by_booking: "Al reservar una cita, acepta nuestros",
    terms: "términos y condiciones",
    and: "y",
    privacy: "política de privacidad",
  },
};

const LanguageContext = createContext<LanguageContextProps>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key: keyof Translations) => translations[defaultLanguage][key] || ''
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  const t = (key: keyof Translations): string => {
    return translations[language][key] || translations[defaultLanguage][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  return useContext(LanguageContext);
};
