
import { ArrowRight, Award, Clock, Download, FileDown, UserCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useLanguage } from "@/contexts/LanguageContext";
import { BackgroundPaths } from "@/components/ui/background-paths";

export default function Hero() {
  const { t } = useLanguage();
  
  const handleDownloadPamphlet = () => {
    // In a real implementation, this would download a PDF
    alert(t("download_alert"));
  };
  
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
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center group bg-white/80 px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all duration-300">
                <Clock className="h-5 w-5 text-physimed mr-2 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-gray-700 font-medium">{t("same_day_access")}</span>
              </div>
              <div className="flex items-center group bg-white/80 px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all duration-300">
                <UserCheck className="h-5 w-5 text-physimed mr-2 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-gray-700 font-medium">{t("consistent_care")}</span>
              </div>
              <div className="flex items-center group bg-white/80 px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all duration-300">
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
          
          <div className="relative lg:h-[600px] flex flex-col items-center justify-center">
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-physimed-100 rounded-full opacity-50 blur-3xl pulse-subtle"></div>
            
            {/* Pamphlet image with styling */}
            <div className="relative bg-white rounded-lg shadow-xl overflow-hidden max-w-[90%] pamphlet-container transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src="/lovable-uploads/cccb7e3f-92ec-4b8c-ad70-74247d7dddf8.png" 
                alt="Physimed Health Checkup Pamphlet" 
                className="w-full h-auto object-contain"
              />
              
              {/* Page curl effect */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gray-100 shadow-inner transform rotate-45 translate-x-8 -translate-y-8"></div>
              
              {/* Bottom branding bar */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-physimed flex items-center justify-center">
                <span className="text-white font-medium tracking-wider text-sm">WWW.PHYSIMED.COM</span>
              </div>
            </div>
            
            {/* Download button with improved styling */}
            <Button 
              onClick={handleDownloadPamphlet}
              className="mt-6 bg-physimed hover:bg-physimed-800 text-white font-medium px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 hover:translate-y-[-2px]"
            >
              <FileDown className="h-5 w-5" />
              {t("download_brochure")}
            </Button>
            
            <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-physimed-50 blur-xl opacity-60 float-animation"></div>
            <div className="absolute -top-10 -left-10 h-24 w-24 rounded-full bg-blue-50 blur-xl opacity-40 float-animation"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
