
import { cn } from "@/lib/utils";
import { 
  Stethoscope, 
  Clock, 
  ClipboardCheck, 
  Users, 
  Building, 
  HeartPulse, 
  Calendar, 
  FilePlus,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from "@/contexts/LanguageContext";

export default function Features() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-physimed" />,
      title: t("same_day_appointments_title"),
      description: t("same_day_appointments_desc")
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-physimed" />,
      title: t("personalized_medical_care_title"),
      description: t("personalized_medical_care_desc")
    },
    {
      icon: <Users className="h-8 w-8 text-physimed" />,
      title: t("consistent_follow_up_title"),
      description: t("consistent_follow_up_desc")
    },
    {
      icon: <Building className="h-8 w-8 text-physimed" />,
      title: t("all_in_one_facility_title"),
      description: t("all_in_one_facility_desc")
    },
    {
      icon: <HeartPulse className="h-8 w-8 text-physimed" />,
      title: t("proactive_preventative_title"),
      description: t("proactive_preventative_desc")
    },
    {
      icon: <Calendar className="h-8 w-8 text-physimed" />,
      title: t("seven_day_availability_title"),
      description: t("seven_day_availability_desc")
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-physimed" />,
      title: t("comprehensive_assessments_title"),
      description: t("comprehensive_assessments_desc")
    },
    {
      icon: <FilePlus className="h-8 w-8 text-physimed" />,
      title: t("digital_medical_records_title"),
      description: t("digital_medical_records_desc")
    }
  ];

  const Feature = ({
    title,
    description,
    icon,
    index,
  }: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
  }) => {
    return (
      <div
        className={cn(
          "flex flex-col lg:border-r py-10 relative group/feature",
          (index === 0 || index === 4) && "lg:border-l border-gray-200 dark:border-gray-800",
          index < 4 && "lg:border-b border-gray-200 dark:border-gray-800"
        )}
      >
        {index < 4 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-physimed-50 to-transparent pointer-events-none" />
        )}
        {index >= 4 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-physimed-50 to-transparent pointer-events-none" />
        )}
        <div className="mb-4 relative z-10 px-10 text-physimed">
          {icon}
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-300 dark:bg-gray-700 group-hover/feature:bg-physimed transition-all duration-200 origin-center" />
          <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-800 dark:text-gray-100">
            {title}
          </span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xs relative z-10 px-10">
          {description}
        </p>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-physimed font-medium">{t("your_health_streamlined")}</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
            {t("why_corporations_partner")}
          </h2>
          <p className="text-gray-600">
            {t("we_deliver_premium")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-flex items-center text-physimed hover:text-physimed-700 font-medium"
          >
            {t("explore_all_services")}
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
