
import { ArrowRight, Stethoscope, Clock, ClipboardCheck, Users, Building, Calendar, HeartPulse, FilePlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <Clock className="h-8 w-8 mb-4 text-physimed" />,
    title: "Same-Day Appointments",
    description: "No long waits for essential care. Get seen when you need it most with our priority scheduling system."
  },
  {
    icon: <Stethoscope className="h-8 w-8 mb-4 text-physimed" />,
    title: "Personalized Medical Care",
    description: "Tailored care plans based on each patient's age, history, and risk factors for truly individualized medicine."
  },
  {
    icon: <Users className="h-8 w-8 mb-4 text-physimed" />,
    title: "Consistent Follow-Up",
    description: "Build a relationship with your doctor. Always see the same physician who knows your history and needs."
  },
  {
    icon: <Building className="h-8 w-8 mb-4 text-physimed" />,
    title: "All-In-One Facility",
    description: "Consultations, lab tests, diagnostics, and specialists—all coordinated for you in one convenient location."
  },
  {
    icon: <HeartPulse className="h-8 w-8 mb-4 text-physimed" />,
    title: "Proactive & Preventative",
    description: "We focus on long-term health maintenance and disease prevention, not just treating symptoms."
  },
  {
    icon: <Calendar className="h-8 w-8 mb-4 text-physimed" />,
    title: "7-Day Availability",
    description: "Medical support when you need it with extended hours and weekend availability for busy professionals."
  },
  {
    icon: <ClipboardCheck className="h-8 w-8 mb-4 text-physimed" />,
    title: "Comprehensive Assessments",
    description: "Thorough check-ups include physical, laboratory, and specialized tests for a complete health picture."
  },
  {
    icon: <FilePlus className="h-8 w-8 mb-4 text-physimed" />,
    title: "Digital Medical Records",
    description: "Secure electronic health records ensure your medical information is always accessible to your care team."
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Enhanced section header with visual elements */}
          <div className="inline-block px-4 py-1.5 bg-physimed-100 rounded-full text-physimed-800 text-sm font-medium mb-3">
            Your Health, Streamlined
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-5 relative inline-block">
            Why Corporations Partner With Physimed
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-physimed rounded-full"></span>
          </h2>
          <p className="text-gray-600 text-lg mt-8 leading-relaxed">
            We deliver premium healthcare that meets the demands of today's corporate environments. Our comprehensive approach ensures your team stays healthy, proactive, and productive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
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
