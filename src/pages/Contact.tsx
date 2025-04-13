
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Chatbot from "@/components/Chatbot";

const Contact = () => {
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
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              Contact Physimed
            </h1>
            <p className="text-gray-600 text-lg">
              We're here to answer any questions you may have about our corporate health plans. Reach out to our team for personalized assistance.
            </p>
          </div>
          
          <ContactSection />
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Contact;
