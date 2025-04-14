
import { ArrowRight, BadgeCheck, Calendar, Clock, Users, Award, Building, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CtaSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient rounded-2xl p-8 md:p-12 text-white shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('/src/assets/pattern-bg.svg')] opacity-10"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <span className="bg-white/20 text-white text-sm font-medium px-3 py-1 rounded-full">
                  {t("corporate_wellness")}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3">
                  {t("gift_premium")}
                </h2>
                <p className="text-white/90 text-lg mt-4 leading-relaxed">
                  {t("invest_team")}
                </p>
              </div>
              
              <div className="space-y-5">
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-colors duration-300">
                  <CardContent className="flex items-start p-4">
                    <div className="p-2 bg-white/20 rounded-lg mr-4 flex-shrink-0">
                      <Star className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">{t("attract_talent")}</h3>
                      <p className="text-white/80 text-sm mt-1">{t("retain_top_talent")}</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-colors duration-300">
                  <CardContent className="flex items-start p-4">
                    <div className="p-2 bg-white/20 rounded-lg mr-4 flex-shrink-0">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">{t("reduce_absenteeism")}</h3>
                      <p className="text-white/80 text-sm mt-1">{t("proactive_healthcare")}</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-colors duration-300">
                  <CardContent className="flex items-start p-4">
                    <div className="p-2 bg-white/20 rounded-lg mr-4 flex-shrink-0">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">{t("save_time")}</h3>
                      <p className="text-white/80 text-sm mt-1">{t("onsite_virtual")}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <Button asChild className="bg-white text-physimed hover:bg-gray-100 px-8 rounded-md shadow-md hover:shadow-lg transition-all duration-300 sm:flex-1">
                  <Link to="/contact" className="text-physimed">
                    {t("request_consultation")}
                    <ArrowRight size={16} className="ml-2 animate-pulse" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-physimed bg-white hover:bg-gray-100 px-8 rounded-md shadow-sm hover:shadow-md transition-all duration-300 sm:flex-1">
                  <Link to="/pricing" className="text-physimed">
                    {t("view_plan_details")}
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-md">
                <div className="flex items-center gap-2 mb-6">
                  <Building className="h-5 w-5 text-white" />
                  <h3 className="text-2xl font-serif font-bold text-white">
                    {t("book_corporate_demo")}
                  </h3>
                </div>
                
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="company" className="text-white mb-1.5">{t("company_name")}</Label>
                    <Input 
                      type="text" 
                      id="company" 
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60 transition-all duration-300"
                      placeholder={t("your_company")}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="name" className="text-white mb-1.5">{t("your_name")}</Label>
                    <Input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60 transition-all duration-300"
                      placeholder={t("full_name")}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-white mb-1.5">{t("email_address")}</Label>
                    <Input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60 transition-all duration-300"
                      placeholder={t("email_placeholder")}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="employees" className="text-white mb-1.5">{t("number_of_employees")}</Label>
                    <Select>
                      <SelectTrigger 
                        id="employees"
                        className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-white transition-all duration-300 h-auto"
                      >
                        <SelectValue placeholder={t("select_option")} />
                      </SelectTrigger>
                      <SelectContent className="bg-white text-physimed-800">
                        <SelectItem value="1-10">{t("employees_1_10")}</SelectItem>
                        <SelectItem value="11-50">{t("employees_11_50")}</SelectItem>
                        <SelectItem value="51-200">{t("employees_51_200")}</SelectItem>
                        <SelectItem value="201+">{t("employees_201")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      type="submit"
                      className="w-full bg-white text-physimed-800 hover:bg-gray-100 flex items-center justify-center py-6 shadow-md hover:shadow-lg transition-all duration-300 rounded-md"
                    >
                      <Calendar size={16} className="mr-2" />
                      {t("schedule_demo")}
                    </Button>
                    <p className="text-white/70 text-xs text-center mt-3">
                      {t("no_obligation")}
                    </p>
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
