
import { ArrowRight, BadgeCheck, Calendar, Clock, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export default function CtaSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient rounded-2xl p-8 md:p-12 text-white shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('/src/assets/pattern-bg.svg')] opacity-10"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                Give Your Team the Gift of Premium Healthcare
              </h2>
              <p className="text-white/90 text-lg">
                Invest in your team's wellbeing with corporate plans that provide comprehensive care, reduced wait times, and personalized attention.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <BadgeCheck className="h-6 w-6 mr-3 text-white" />
                  <span>Attract and retain top talent with premium benefits</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 mr-3 text-white" />
                  <span>Reduce absenteeism and boost productivity</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 mr-3 text-white" />
                  <span>Save valuable time with same-day appointments</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-white text-physimed-800 hover:bg-gray-100 px-8 rounded-md shadow-lg hover:shadow-xl transition-all">
                  <Link to="/contact" className="flex items-center">
                    Request Corporate Consultation
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white border-2 text-white hover:bg-white/20 px-8 rounded-md shadow-md">
                  <Link to="/pricing" className="flex items-center">
                    View Plan Details
                    <ArrowRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl w-full max-w-md transition-transform hover:translate-y-[-5px] duration-300">
                <h3 className="text-2xl font-serif font-bold mb-6 text-center">Book a Corporate Demo</h3>
                
                <form className="space-y-5">
                  <div>
                    <label htmlFor="company" className="block mb-2 text-sm font-medium">Company Name</label>
                    <input 
                      type="text" 
                      id="company" 
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60 transition-all"
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60 transition-all"
                      placeholder="Full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="employees" className="block mb-2 text-sm font-medium">Number of Employees</label>
                    <select 
                      id="employees" 
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-white appearance-none cursor-pointer"
                      style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg fill=\"white\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>')", backgroundRepeat: "no-repeat", backgroundPosition: "right 10px center" }}
                    >
                      <option value="" className="text-gray-800 bg-white">Select option</option>
                      <option value="1-10" className="text-gray-800 bg-white">1-10 employees</option>
                      <option value="11-50" className="text-gray-800 bg-white">11-50 employees</option>
                      <option value="51-200" className="text-gray-800 bg-white">51-200 employees</option>
                      <option value="201+" className="text-gray-800 bg-white">201+ employees</option>
                    </select>
                  </div>
                  
                  <div className="pt-3">
                    <Button 
                      type="submit"
                      className="w-full bg-white text-physimed-800 hover:bg-gray-100 flex items-center justify-center py-3 font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Calendar size={18} className="mr-2" />
                      Schedule Demo
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
