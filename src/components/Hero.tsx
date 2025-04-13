
import { ArrowRight, Award, Clock, UserCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl animate-fade-in">
            <span className="inline-block px-3 py-1 bg-physimed-100 text-physimed-800 rounded-full text-sm font-medium">
              Premium Corporate Healthcare
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              <span className="text-gradient">One-Stop Health Check-Ups</span> and Concierge Care
            </h1>
            <p className="text-gray-600 text-lg">
              At Physimed, we believe corporate leaders and employees deserve fast, comprehensive, and personalized healthcare—all under one roof.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-physimed mr-2" />
                <span className="text-gray-700">Same-Day Access</span>
              </div>
              <div className="flex items-center">
                <UserCheck className="h-5 w-5 text-physimed mr-2" />
                <span className="text-gray-700">Consistent Care</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-physimed mr-2" />
                <span className="text-gray-700">Premium Services</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <Button asChild className="bg-physimed hover:bg-physimed-700 text-white px-8 py-6 rounded-md btn-hover-effect">
                <Link to="/pricing">
                  View Plans
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-physimed text-physimed hover:bg-physimed-50 px-8 py-6 rounded-md">
                <Link to="/booking">Book Consultation</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative lg:h-[500px] flex items-center justify-center animate-fade-in">
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-physimed-100 rounded-full opacity-50 blur-3xl"></div>
            <img 
              src="/lovable-uploads/f62a3cfd-49ea-4c22-a8af-64453099b378.png" 
              alt="Physimed Health Checkup" 
              className="rounded-lg shadow-2xl max-w-full max-h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
