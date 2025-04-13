
import { useState } from 'react';
import { Check, Calendar, AlertCircle, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from 'react-router-dom';

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-physimed font-medium">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
            Our Corporate Medical Plan Options
          </h2>
          <p className="text-gray-600">
            Choose the plan that's right for your team. All plans include comprehensive assessments and personalized care.
          </p>
          
          <div className="mt-8">
            <Tabs defaultValue="option1" className="w-full max-w-lg mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="option1">Annual Check-Up</TabsTrigger>
                <TabsTrigger value="option2">Care Packages</TabsTrigger>
              </TabsList>
              
              <TabsContent value="option1" className="space-y-4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-physimed-300 transition-all pricing-card">
                  <div className="bg-physimed-50 p-6">
                    <h3 className="text-2xl font-serif font-bold text-physimed-800">Annual Health Check-Up</h3>
                    <div className="mt-4 flex items-end">
                      <span className="text-4xl font-bold">$1,195</span>
                      <span className="text-gray-600 ml-2">/ year</span>
                    </div>
                    <p className="mt-2 text-gray-600">Ideal for individuals seeking a thorough, yearly evaluation.</p>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-semibold text-lg mb-4">What's Included:</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-gray-800 mb-2">Pre-Check-Up:</h5>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Digital medical file creation & updates</span>
                          </li>
                          <li className="flex items-start">
                            <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Health & lifestyle questionnaire</span>
                          </li>
                          <li className="flex items-start">
                            <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Vital signs & medication review</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-gray-800 mb-2">In-Clinic Consultations:</h5>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Nurse coordination visit</span>
                          </li>
                          <li className="flex items-start">
                            <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Bloodwork for key health markers</span>
                          </li>
                          <li className="flex items-start">
                            <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Kinesiologist Assessment with personalized fitness plan</span>
                          </li>
                          <li className="flex items-start">
                            <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Dietitian Assessment with personalized nutrition guidance</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-gray-800 mb-2">Additional Services:</h5>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Full physical exam & aesthetic evaluation</span>
                          </li>
                          <li className="flex items-start">
                            <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Medical history review & test results discussion</span>
                          </li>
                          <li className="flex items-start">
                            <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Cancer & STI screenings (as medically necessary)</span>
                          </li>
                          <li className="flex items-start">
                            <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Comprehensive blood work & urine analysis</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <Button asChild className="w-full bg-physimed hover:bg-physimed-700 text-white">
                        <Link to="/booking">
                          Book Health Check-Up
                          <ArrowRight size={16} className="ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="option2" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Package 1 */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-physimed-300 transition-all pricing-card">
                    <div className="bg-physimed-50 p-6">
                      <h3 className="text-2xl font-serif font-bold text-physimed-800">Package 1</h3>
                      <p className="text-sm text-gray-600 mt-1">For adults under 65 without chronic conditions</p>
                      <div className="mt-4 flex items-end">
                        <span className="text-4xl font-bold">$2,275</span>
                        <span className="text-gray-600 ml-2">/ year</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Annual check-up & follow-up</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>2 additional same-day doctor visits (total of 4 appointments)</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Full access to 7-day-a-week medical concierge service</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Tests/screenings based on medical need</span>
                        </li>
                      </ul>
                      
                      <div className="border-t border-gray-100 my-6 pt-6">
                        <div className="flex items-start mb-4">
                          <Calendar size={18} className="text-physimed mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            Same-day appointments with consistent doctor access
                          </span>
                        </div>
                        
                        <div className="flex items-start">
                          <AlertCircle size={18} className="text-physimed mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            Best for individuals with good health maintenance needs
                          </span>
                        </div>
                      </div>
                      
                      <Button asChild className="w-full bg-physimed hover:bg-physimed-700 text-white mt-4">
                        <Link to="/booking">Subscribe to Package 1</Link>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Package 2 */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-physimed-300 hover:border-physimed-500 transition-all pricing-card relative">
                    <div className="absolute top-0 right-0 bg-physimed text-white px-3 py-1 text-sm font-medium">
                      Most Popular
                    </div>
                    
                    <div className="bg-physimed-100 p-6">
                      <h3 className="text-2xl font-serif font-bold text-physimed-800">Package 2</h3>
                      <p className="text-sm text-gray-600 mt-1">For adults 65+ or with chronic conditions</p>
                      <div className="mt-4 flex items-end">
                        <span className="text-4xl font-bold">$3,295</span>
                        <span className="text-gray-600 ml-2">/ year</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Annual check-up & follow-up</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>5 additional same-day doctor visits (total of 7 appointments)</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Full access to 7-day-a-week medical concierge service</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Tests/screenings based on medical need</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Priority scheduling for specialist referrals</span>
                        </li>
                      </ul>
                      
                      <div className="border-t border-gray-100 my-6 pt-6">
                        <div className="flex items-start mb-4">
                          <Calendar size={18} className="text-physimed mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            Extended medical support with more frequent visits
                          </span>
                        </div>
                        
                        <div className="flex items-start">
                          <AlertCircle size={18} className="text-physimed mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            Ideal for ongoing chronic condition management
                          </span>
                        </div>
                      </div>
                      
                      <Button asChild className="w-full bg-physimed hover:bg-physimed-700 text-white mt-4">
                        <Link to="/booking">Subscribe to Package 2</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* Medical Concierge Service */}
        <div className="mt-16 bg-physimed-50 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-physimed-800 mb-4">
                Medical Concierge Service
              </h3>
              <p className="text-gray-600 mb-6">
                Available with all care packages, our medical concierge service ensures rapid, expert support from 6 AM to 9 PM, every day—even on holidays.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Check size={18} className="text-physimed mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Health-related phone consultations</span>
                </div>
                <div className="flex items-start">
                  <Check size={18} className="text-physimed mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Emergency appointments</span>
                </div>
                <div className="flex items-start">
                  <Check size={18} className="text-physimed mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Telemedicine (video visits)</span>
                </div>
                <div className="flex items-start">
                  <Check size={18} className="text-physimed mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Prescription renewals</span>
                </div>
                <div className="flex items-start">
                  <Check size={18} className="text-physimed mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Form completion assistance</span>
                </div>
                <div className="flex items-start">
                  <Check size={18} className="text-physimed mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Coordination of referrals</span>
                </div>
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-physimed hover:bg-physimed-700 text-white">
                  <Link to="/services#concierge">Learn More About Concierge Service</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-4 text-physimed-800">Did you know?</h4>
              <p className="text-gray-600 mb-4">
                Our concierge service helps corporate clients save an average of 20+ hours per year in healthcare administration and waiting time.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-physimed-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-physimed-800 font-bold">93%</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    of our corporate clients report increased employee satisfaction with healthcare benefits
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-physimed-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-physimed-800 font-bold">3.5x</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    faster access to medical care compared to traditional healthcare routes
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-physimed-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-physimed-800 font-bold">24/7</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    peace of mind for employees and their families with responsive healthcare access
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
