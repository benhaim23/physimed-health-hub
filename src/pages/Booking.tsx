
import Navbar from "@/components/Navbar";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Chatbot from "@/components/Chatbot";

const Booking = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center text-physimed hover:text-physimed-700 mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
          
          <BookingSection />
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Booking;
