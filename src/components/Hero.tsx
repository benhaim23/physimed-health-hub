
import { ArrowRight, Clock, UserCheck, Award, FileDown } from 'lucide-react';
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
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16 overflow-hidden relative">
      {/* Background Paths */}
      <BackgroundPaths />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 max-w-xl animate-fade-in">
            <span className="inline-block px-4 py-1.5 bg-physimed-100 text-physimed-800 rounded-full text-sm font-medium shadow-sm">
              {t("premium_corp_healthcare")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              <span className="text-gradient">{t("hero_title")}</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              {t("hero_subtitle")}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
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
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
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
          
          <div className="flex flex-col items-center justify-center">
            <div className="relative bg-white rounded-lg shadow-xl overflow-hidden w-full mb-4">
              <img 
                src="/lovable-uploads/0cc8fd6a-d0a5-40a5-bc8a-f3fb71ef1641.png" 
                alt="Health Check-up Brochure" 
                className="w-full h-auto object-contain"
              />
            </div>
            
            {/* Download button aligned with other buttons */}
            <Button 
              onClick={handleDownloadPamphlet}
              className="bg-physimed hover:bg-physimed-700 text-white font-medium px-8 py-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <FileDown className="h-5 w-5" />
              {t("download_brochure")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
