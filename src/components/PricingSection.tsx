
import { useState } from 'react';
import { Check, Calendar, AlertCircle, ArrowRight, MoveRight, PhoneCall } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { StarBorder } from "@/components/ui/star-border";
import { cn } from "@/lib/utils";

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="bg-physimed-50 text-physimed-800 border-physimed-200 mb-4">
            Corporate Healthcare
          </Badge>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2 mb-4 tracking-tight">
            Our Corporate Medical Plan Options
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the plan that's right for your team. All plans include comprehensive assessments and personalized care.
          </p>
          
          <div className="mt-12">
            <Tabs defaultValue="option1" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-physimed-50 p-1">
                <TabsTrigger value="option1" className="data-[state=active]:bg-white">Annual Check-Up</TabsTrigger>
                <TabsTrigger value="option2" className="data-[state=active]:bg-white">Care Packages</TabsTrigger>
              </TabsList>
              
              <TabsContent value="option1" className="space-y-4">
                <Card className="w-full overflow-hidden border-physimed-100 hover:shadow-lg transition-all duration-300">
                  <div className="bg-physimed-50 p-6">
                    <CardTitle className="text-2xl font-serif font-bold text-physimed-800">
                      Annual Health Check-Up
                    </CardTitle>
                    <div className="mt-4 flex items-end">
                      <span className="text-4xl font-bold">$1,195</span>
                      <span className="text-gray-600 ml-2">/ year</span>
                    </div>
                    <CardDescription className="mt-2">
                      Ideal for individuals seeking a thorough, yearly evaluation.
                    </CardDescription>
                  </div>
                  
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-4">What's Included:</h4>
                    
                    <div className="space-y-6">
                      <div>
                        <h5 className="font-medium text-gray-800 mb-3 flex items-center">
                          <span className="w-1.5 h-5 bg-physimed rounded-r mr-2"></span>
                          Pre-Check-Up:
                        </h5>
                        <div className="space-y-3">
                          {[
                            "Digital medical file creation & updates",
                            "Health & lifestyle questionnaire",
                            "Vital signs & medication review"
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-start">
                              <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-gray-800 mb-3 flex items-center">
                          <span className="w-1.5 h-5 bg-physimed rounded-r mr-2"></span>
                          In-Clinic Consultations:
                        </h5>
                        <div className="space-y-3">
                          {[
                            "Nurse coordination visit",
                            "Bloodwork for key health markers",
                            "Kinesiologist Assessment with personalized fitness plan",
                            "Dietitian Assessment with personalized nutrition guidance"
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-start">
                              <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-gray-800 mb-3 flex items-center">
                          <span className="w-1.5 h-5 bg-physimed rounded-r mr-2"></span>
                          Additional Services:
                        </h5>
                        <div className="space-y-3">
                          {[
                            "Full physical exam & aesthetic evaluation",
                            "Medical history review & test results discussion",
                            "Cancer & STI screenings (as medically necessary)",
                            "Comprehensive blood work & urine analysis"
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-start">
                              <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-6 pt-0">
                    <Button asChild className="w-full gap-2 bg-physimed hover:bg-physimed-700 text-white">
                      <Link to="/booking">
                        Book Health Check-Up
                        <MoveRight size={16} />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="option2" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Package 1 */}
                  <Card className="overflow-hidden border-physimed-100 hover:shadow-lg transition-all duration-300">
                    <CardHeader className="bg-physimed-50 p-6">
                      <CardTitle className="text-2xl font-serif font-bold text-physimed-800">
                        Package 1
                      </CardTitle>
                      <CardDescription className="text-sm mt-1">
                        For adults under 65 without chronic conditions
                      </CardDescription>
                      <div className="mt-4 flex items-end">
                        <span className="text-4xl font-bold">$2,275</span>
                        <span className="text-gray-600 ml-2">/ year</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        {[
                          "Annual check-up & follow-up",
                          "2 additional same-day doctor visits (total of 4 appointments)",
                          "Full access to 7-day-a-week medical concierge service",
                          "Tests/screenings based on medical need"
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start">
                            <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                      
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
                    </CardContent>
                    
                    <CardFooter className="p-6 pt-0">
                      <Button asChild className="w-full gap-2 bg-physimed hover:bg-physimed-700 text-white">
                        <Link to="/booking">
                          Subscribe to Package 1
                          <MoveRight size={16} />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  {/* Package 2 */}
                  <Card className="overflow-hidden border-physimed-300 hover:border-physimed-500 hover:shadow-lg relative transition-all duration-300">
                    <div className="absolute top-0 right-0 bg-physimed text-white px-3 py-1 text-xs font-medium rounded-bl-md">
                      Most Popular
                    </div>
                    
                    <CardHeader className="bg-physimed-100 p-6">
                      <CardTitle className="text-2xl font-serif font-bold text-physimed-800">
                        Package 2
                      </CardTitle>
                      <CardDescription className="text-sm mt-1">
                        For adults 65+ or with chronic conditions
                      </CardDescription>
                      <div className="mt-4 flex items-end">
                        <span className="text-4xl font-bold">$3,295</span>
                        <span className="text-gray-600 ml-2">/ year</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        {[
                          "Annual check-up & follow-up",
                          "5 additional same-day doctor visits (total of 7 appointments)",
                          "Full access to 7-day-a-week medical concierge service",
                          "Tests/screenings based on medical need",
                          "Priority scheduling for specialist referrals"
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start">
                            <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                      
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
                    </CardContent>
                    
                    <CardFooter className="p-6 pt-0">
                      <Button asChild className="w-full gap-2 bg-physimed hover:bg-physimed-700 text-white">
                        <Link to="/booking">
                          Subscribe to Package 2
                          <MoveRight size={16} />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* Medical Concierge Service */}
        <div className="mt-16">
          <Card className="bg-white border-physimed-100">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-physimed-800 mb-4">
                    Medical Concierge Service
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Available with all care packages, our medical concierge service ensures rapid, expert support from 6 AM to 9 PM, every day—even on holidays.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Health-related phone consultations",
                      "Emergency appointments",
                      "Telemedicine (video visits)",
                      "Prescription renewals",
                      "Form completion assistance",
                      "Coordination of referrals"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check size={18} className="text-physimed mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <StarBorder as={Link} to="/services#concierge" className="text-physimed hover:text-physimed-700">
                      Learn More About Concierge Service
                    </StarBorder>
                  </div>
                </div>
                
                <div className="bg-physimed-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-4 text-physimed-800">Did you know?</h4>
                  <p className="text-gray-600 mb-4">
                    Our concierge service helps corporate clients save an average of 20+ hours per year in healthcare administration and waiting time.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { value: "93%", text: "of our corporate clients report increased employee satisfaction with healthcare benefits" },
                      { value: "3.5x", text: "faster access to medical care compared to traditional healthcare routes" },
                      { value: "24/7", text: "peace of mind for employees and their families with responsive healthcare access" }
                    ].map((stat, idx) => (
                      <div key={idx} className="flex items-center bg-white p-3 rounded-md shadow-sm">
                        <div className="w-12 h-12 bg-physimed-100 rounded-full flex items-center justify-center mr-4 text-physimed-800 font-bold">
                          {stat.value}
                        </div>
                        <p className="text-sm text-gray-600">
                          {stat.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
