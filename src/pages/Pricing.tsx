
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Chatbot from "@/components/Chatbot";
import { useLanguage } from "@/contexts/LanguageContext";

const Pricing = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center text-physimed hover:text-physimed-700 mb-6">
            <ArrowLeft size={16} className="mr-2" />
            {t("back_to_home")}
          </Link>
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-physimed-100 text-physimed-800 rounded-full text-sm font-medium">
              {t("corporate_healthcare")}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              {t("invest_team_health")}
            </h1>
            <p className="text-gray-600 text-lg">
              {t("corp_health_desc")}
            </p>
          </div>
          
          <PricingSection />
        </div>
        
        <CtaSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default Pricing;
