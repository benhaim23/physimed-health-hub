
import { ArrowRight, BadgeCheck, Calendar, Clock, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useLanguage } from "@/contexts/LanguageContext";

export default function CtaSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient rounded-2xl p-8 md:p-12 text-white shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('/src/assets/pattern-bg.svg')] opacity-10"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                {t("gift_premium")}
              </h2>
              <p className="text-white/90 text-lg">
                {t("invest_team")}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <BadgeCheck className="h-6 w-6 mr-3 text-white" />
                  <span>{t("attract_talent")}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 mr-3 text-white" />
                  <span>{t("reduce_absenteeism")}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 mr-3 text-white" />
                  <span>{t("save_time")}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <Button asChild className="bg-white text-physimed-800 hover:bg-gray-100 px-8 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                  <Link to="/contact">
                    {t("request_consultation")}
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white/70 text-white hover:bg-white/10 px-8 rounded-md shadow-sm hover:shadow-md transition-all duration-300">
                  <Link to="/pricing">{t("view_plan_details")}</Link>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-serif font-bold mb-6 text-center">
                  {t("book_corporate_demo")}
                </h3>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="company" className="block mb-2 text-sm font-medium">{t("company_name")}</label>
                    <input 
                      type="text" 
                      id="company" 
                      className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60 transition-all duration-300"
                      placeholder={t("your_company")}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">{t("your_name")}</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60 transition-all duration-300"
                      placeholder={t("full_name")}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">{t("email_address")}</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60 transition-all duration-300"
                      placeholder={t("email_placeholder")}
                    />
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="employees" className="block mb-2 text-sm font-medium">{t("number_of_employees")}</label>
                    <select 
                      id="employees" 
                      className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-white appearance-none transition-all duration-300"
                    >
                      <option value="" className="text-gray-800">{t("select_option")}</option>
                      <option value="1-10" className="text-gray-800">{t("employees_1_10")}</option>
                      <option value="11-50" className="text-gray-800">{t("employees_11_50")}</option>
                      <option value="51-200" className="text-gray-800">{t("employees_51_200")}</option>
                      <option value="201+" className="text-gray-800">{t("employees_201")}</option>
                    </select>
                    <div className="absolute right-3 top-[38px] pointer-events-none">
                      <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <Button 
                      type="submit"
                      className="w-full bg-white text-physimed-800 hover:bg-gray-100 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <Calendar size={16} className="mr-2" />
                      {t("schedule_demo")}
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
