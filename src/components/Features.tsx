
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

const features = [
  {
    icon: <Clock className="h-8 w-8 text-physimed" />,
    title: "Same-Day Appointments",
    description: "No long waits for essential care. Get seen when you need it most with our priority scheduling system."
  },
  {
    icon: <Stethoscope className="h-8 w-8 text-physimed" />,
    title: "Personalized Medical Care",
    description: "Tailored care plans based on each patient's age, history, and risk factors for truly individualized medicine."
  },
  {
    icon: <Users className="h-8 w-8 text-physimed" />,
    title: "Consistent Follow-Up",
    description: "Build a relationship with your doctor. Always see the same physician who knows your history and needs."
  },
  {
    icon: <Building className="h-8 w-8 text-physimed" />,
    title: "All-In-One Facility",
    description: "Consultations, lab tests, diagnostics, and specialists—all coordinated for you in one convenient location."
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-physimed" />,
    title: "Proactive & Preventative",
    description: "We focus on long-term health maintenance and disease prevention, not just treating symptoms."
  },
  {
    icon: <Calendar className="h-8 w-8 text-physimed" />,
    title: "7-Day Availability",
    description: "Medical support when you need it with extended hours and weekend availability for busy professionals."
  },
  {
    icon: <ClipboardCheck className="h-8 w-8 text-physimed" />,
    title: "Comprehensive Assessments",
    description: "Thorough check-ups include physical, laboratory, and specialized tests for a complete health picture."
  },
  {
    icon: <FilePlus className="h-8 w-8 text-physimed" />,
    title: "Digital Medical Records",
    description: "Secure electronic health records ensure your medical information is always accessible to your care team."
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

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-physimed font-medium">Your Health, Streamlined</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
            Why Corporations Partner With Physimed
          </h2>
          <p className="text-gray-600">
            We deliver premium healthcare that meets the demands of today's corporate environments. Our comprehensive approach ensures your team stays healthy, proactive, and productive.
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
            Explore All Our Services
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
