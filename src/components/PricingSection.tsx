
import { useState } from 'react';
import { Check, Calendar, AlertCircle, ArrowRight, MoveRight, PhoneCall, Clock, VideoIcon, Pill, ClipboardCheck, Network, Award, Users, Zap } from 'lucide-react';
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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
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
                  <Card className="overflow-hidden border-physimed-100 hover:shadow-lg transition-all duration-300 flex flex-col">
                    <CardHeader className="bg-physimed-50 p-6">
                      <CardTitle className="text-2xl font-serif font-bold text-physimed-800">
                        Essential Care Plan
                      </CardTitle>
                      <CardDescription className="text-sm mt-1">
                        For adults under 65 without chronic conditions
                      </CardDescription>
                      <div className="mt-4 flex items-end">
                        <span className="text-4xl font-bold">$2,275</span>
                        <span className="text-gray-600 ml-2">/ year</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-6 flex-grow">
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
                    
                    <CardFooter className="p-6 pt-0 mt-auto">
                      <Button asChild className="w-full gap-2 bg-physimed hover:bg-physimed-700 text-white">
                        <Link to="/booking">
                          Subscribe to Essential Care
                          <MoveRight size={16} />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  {/* Package 2 */}
                  <Card className="overflow-hidden border-physimed-300 hover:border-physimed-500 hover:shadow-lg relative transition-all duration-300 flex flex-col">
                    <div className="absolute top-0 right-0 bg-physimed text-white px-3 py-1 text-xs font-medium rounded-bl-md">
                      Most Popular
                    </div>
                    
                    <CardHeader className="bg-physimed-100 p-6">
                      <CardTitle className="text-2xl font-serif font-bold text-physimed-800">
                        Premium Care Plus
                      </CardTitle>
                      <CardDescription className="text-sm mt-1">
                        For adults 65+ or with chronic conditions
                      </CardDescription>
                      <div className="mt-4 flex items-end">
                        <span className="text-4xl font-bold">$3,295</span>
                        <span className="text-gray-600 ml-2">/ year</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-6 flex-grow">
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
                    
                    <CardFooter className="p-6 pt-0 mt-auto">
                      <Button asChild className="w-full gap-2 bg-physimed hover:bg-physimed-700 text-white">
                        <Link to="/booking">
                          Subscribe to Premium Care
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
        
        {/* Medical Concierge Service - Enhanced Section */}
        <div className="mt-16">
          <Card className="bg-white border-physimed-100 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side: Service Description and Features */}
                <div className="p-8 md:p-12 bg-gradient-to-br from-white to-physimed-50">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-physimed flex items-center justify-center mr-4">
                      <PhoneCall size={20} className="text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-physimed-800">
                      Medical Concierge Service
                    </h3>
                  </div>
                  
                  <div className="mb-8">
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                      Available with all care packages, our medical concierge service ensures rapid, expert support 
                      <span className="bg-physimed-100 text-physimed-800 px-2 py-0.5 mx-1 rounded-md font-medium">
                        from 6 AM to 9 PM
                      </span> 
                      every day—even on holidays.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <TooltipProvider>
                      {[
                        {
                          icon: <PhoneCall size={20} className="text-physimed" />,
                          text: "Health-related phone consultations",
                          tooltip: "Get quick medical advice without leaving home"
                        },
                        {
                          icon: <Calendar size={20} className="text-physimed" />,
                          text: "Emergency appointments",
                          tooltip: "Same-day appointments for urgent medical needs"
                        },
                        {
                          icon: <VideoIcon size={20} className="text-physimed" />,
                          text: "Telemedicine (video visits)",
                          tooltip: "Connect with your doctor virtually from anywhere"
                        },
                        {
                          icon: <Pill size={20} className="text-physimed" />,
                          text: "Prescription renewals",
                          tooltip: "Quick prescription management without unnecessary appointments"
                        },
                        {
                          icon: <ClipboardCheck size={20} className="text-physimed" />,
                          text: "Form completion assistance",
                          tooltip: "Streamlined processing of medical documentation"
                        },
                        {
                          icon: <Network size={20} className="text-physimed" />,
                          text: "Coordination of referrals",
                          tooltip: "Seamless connection to specialists when needed"
                        }
                      ].map((item, idx) => (
                        <Tooltip key={idx}>
                          <TooltipTrigger asChild>
                            <div className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-help">
                              <div className="w-9 h-9 rounded-full bg-physimed-50 flex items-center justify-center mr-3">
                                {item.icon}
                              </div>
                              <span className="text-gray-800">{item.text}</span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-physimed-800 text-white border-none">
                            <p>{item.tooltip}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </TooltipProvider>
                  </div>
                  
                  <div className="mt-8">
                    <Button asChild variant="outline" className="group text-physimed hover:text-physimed-700 border-physimed hover:border-physimed-700 hover:bg-physimed-50">
                      <Link to="/services#concierge" className="flex items-center">
                        Learn More About Concierge Service
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
                </div>
                
                {/* Right Side: Statistics and Visual Appeal */}
                <div className="bg-physimed-800 text-white p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[url('/src/assets/pattern-bg.svg')] pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-8">
                      <Award size={22} className="text-physimed-100 mr-3" />
                      <h4 className="text-xl font-semibold text-white">Did you know?</h4>
                    </div>
                    
                    <p className="text-physimed-100 mb-8 text-lg">
                      Our concierge service helps corporate clients save an average of 
                      <span className="text-white font-bold mx-1">20+ hours per year</span> 
                      in healthcare administration and waiting time.
                    </p>
                    
                    <div className="space-y-6">
                      {[
                        { 
                          icon: <Users size={20} className="text-physimed-800" />,
                          value: "93%", 
                          text: "of our corporate clients report increased employee satisfaction with healthcare benefits",
                          highlight: "Employee Satisfaction"
                        },
                        { 
                          icon: <Zap size={20} className="text-physimed-800" />,
                          value: "3.5x", 
                          text: "faster access to medical care compared to traditional healthcare routes",
                          highlight: "Rapid Access" 
                        },
                        { 
                          icon: <Clock size={20} className="text-physimed-800" />,
                          value: "24/7", 
                          text: "peace of mind for employees and their families with responsive healthcare access",
                          highlight: "Peace of Mind"
                        }
                      ].map((stat, idx) => (
                        <div key={idx} className="bg-physimed-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                          <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-physimed-100 rounded-full flex items-center justify-center mr-4">
                              {stat.icon}
                            </div>
                            <div>
                              <span className="text-sm text-physimed-100 font-medium uppercase tracking-wide">
                                {stat.highlight}
                              </span>
                              <div className="text-2xl font-bold text-white">
                                {stat.value}
                              </div>
                            </div>
                          </div>
                          <p className="text-physimed-100">
                            {stat.text}
                          </p>
                        </div>
                      ))}
                    </div>
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
