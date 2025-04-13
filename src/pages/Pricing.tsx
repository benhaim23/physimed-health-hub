
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Chatbot from "@/components/Chatbot";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center text-physimed hover:text-physimed-700 mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-physimed-100 text-physimed-800 rounded-full text-sm font-medium">
              Corporate Healthcare Plans
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              Invest in Your Team's Health
            </h1>
            <p className="text-gray-600 text-lg">
              Our corporate health plans are designed to keep your team healthy, productive, and engaged. Choose the plan that best fits your organization's needs.
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
};

export default Pricing;
