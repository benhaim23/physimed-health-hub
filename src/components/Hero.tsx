
import { ArrowRight, Award, Clock, UserCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useLanguage } from "@/contexts/LanguageContext";
import { BackgroundPaths } from "@/components/ui/background-paths";

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-28 overflow-hidden relative">
      {/* Background Paths */}
      <BackgroundPaths />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl animate-fade-in">
            <span className="inline-block px-4 py-1.5 bg-physimed-100 text-physimed-800 rounded-full text-sm font-medium shadow-sm">
              {t("premium_corp_healthcare")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              <span className="text-gradient">{t("hero_title")}</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              {t("hero_subtitle")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center group">
                <Clock className="h-5 w-5 text-physimed mr-2 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-gray-700 font-medium">{t("same_day_access")}</span>
              </div>
              <div className="flex items-center group">
                <UserCheck className="h-5 w-5 text-physimed mr-2 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-gray-700 font-medium">{t("consistent_care")}</span>
              </div>
              <div className="flex items-center group">
                <Award className="h-5 w-5 text-physimed mr-2 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-gray-700 font-medium">{t("premium_services")}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-6">
              <Button asChild className="bg-physimed hover:bg-physimed-700 text-white px-8 py-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                <Link to="/pricing" className="flex items-center">
                  {t("view_plans")}
                  <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-physimed text-physimed hover:bg-physimed-50 px-8 py-6 rounded-md transition-all duration-300">
                <Link to="/booking">{t("book_consultation")}</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative lg:h-[520px] flex items-center justify-center">
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-physimed-100 rounded-full opacity-50 blur-3xl pulse-subtle"></div>
            <img 
              src="/lovable-uploads/3c658043-92b2-4e75-9b03-570c23c97b29.png" 
              alt="Physimed Doctors" 
              className="rounded-2xl shadow-2xl max-w-full max-h-[520px] object-cover float-animation"
            />
            <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-physimed-50 blur-xl opacity-60 float-animation"></div>
            <div className="absolute -top-10 -left-10 h-24 w-24 rounded-full bg-blue-50 blur-xl opacity-40 float-animation"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
