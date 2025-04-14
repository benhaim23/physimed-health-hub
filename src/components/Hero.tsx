import { ArrowRight, Clock, UserCheck, Award, FileDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useLanguage } from "@/contexts/LanguageContext";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { Typewriter } from "@/components/ui/typewriter-text";

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
            <Typewriter 
              text={[
                "Welcome to Physimed Corporate Health",
                "Give Your Team the Gift of Premium Healthcare", 
                "Unlock our Medical Corporate Client Concierge Service"
              ]}
              speed={100}
              loop={true}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-physimed"
            />
            
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
            <div className="relative pamphlet-container mb-4 perspective-[1500px]">
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden w-full transform rotate-y-2 transition-transform duration-600 hover:rotate-y-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="absolute inset-0 bg-[url('data:image/png;base64,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') opacity-10 pointer-events-none mix-blend-overlay"></div>
                
                <img 
                  src="/lovable-uploads/0cc8fd6a-d0a5-40a5-bc8a-f3fb71ef1641.png" 
                  alt="Health Check-up Brochure" 
                  className="w-full h-auto object-contain relative z-10"
                />
                
                <div className="absolute bottom-0 right-0 w-[30px] h-[30px] bg-gradient-to-tl from-gray-300 to-transparent rounded-tl-lg pointer-events-none"></div>
                
                <div className="absolute h-full w-[1px] left-1/2 top-0 bg-gradient-to-b from-transparent via-gray-400/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
            
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
