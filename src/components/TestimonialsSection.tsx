
import { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Star, Quote } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const AUTO_ROTATION_INTERVAL = 5000; // 5 seconds

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();
  
  const testimonials = [
    {
      quote: t("testimonial_johnson"),
      author: "Sarah Johnson",
      position: t("hr_director"),
      company: "Tech Innovations Inc.",
      rating: 5
    },
    {
      quote: t("testimonial_chen"),
      author: "Michael Chen",
      position: t("ceo"),
      company: "Global Finance Partners",
      rating: 5
    },
    {
      quote: t("testimonial_sharma"),
      author: "Priya Sharma",
      position: t("coo"),
      company: "NexGen Solutions",
      rating: 5
    },
    {
      quote: t("testimonial_anderson"),
      author: "Robert Anderson",
      position: t("vp_hr"),
      company: "Meridian Construction",
      rating: 5
    }
  ];
  
  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, [testimonials.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, AUTO_ROTATION_INTERVAL);
    
    return () => clearInterval(interval);
  }, [handleNext]);

  const renderStars = (rating: number) => {
    return (
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={20} 
            className={`mx-0.5 ${i < rating 
              ? "text-yellow-400 fill-yellow-400" 
              : "text-gray-300"}`} 
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-visible">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block px-4 py-1 bg-physimed-50 rounded-full mb-3">
            <span className="text-physimed font-medium">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-2 mb-6 text-gradient">
            {t("testimonials_title")}
          </h2>
          <p className="text-gray-600 text-lg">
            {t("testimonials_subtitle")}
          </p>
        </div>
        
        {isMobile ? (
          // Mobile version with Carousel
          <div className="max-w-md mx-auto px-4">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card className="bg-white rounded-2xl shadow-lg p-6 md:p-8 h-full border-0">
                      <CardContent className="p-0 space-y-4">
                        {renderStars(testimonial.rating)}
                        
                        <blockquote className="text-lg text-gray-700 font-serif italic text-center">
                          "{testimonial.quote}"
                        </blockquote>
                        
                        <div className="text-center mt-6">
                          <p className="font-semibold text-gray-800">{testimonial.author}</p>
                          <p className="text-physimed text-sm">{testimonial.position}</p>
                          <p className="text-gray-500 text-xs">{testimonial.company}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-physimed w-8' : 'bg-gray-300 w-2'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </Carousel>
          </div>
        ) : (
          // Desktop version
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mx-16 transition-all duration-500 transform">
                <div className="absolute -top-6 left-0 right-0 flex justify-center">
                  <div className="bg-physimed-50 px-6 py-2 rounded-full flex shadow-md">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                </div>
                
                <div className="absolute -left-4 top-12 opacity-10">
                  <Quote size={80} className="text-physimed fill-physimed" />
                </div>
                
                <div className="pt-8 relative z-10">
                  <blockquote className="text-xl md:text-2xl text-gray-700 font-serif italic text-center mb-8 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  
                  <div className="text-center">
                    <p className="font-semibold text-gray-800 text-lg">{testimonials[currentIndex].author}</p>
                    <p className="text-physimed">{testimonials[currentIndex].position}</p>
                    <p className="text-gray-500 text-sm">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
                
                <div className="flex justify-center mt-10 space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex ? 'bg-physimed w-8' : 'bg-gray-300 w-3'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              <Button 
                variant="outline" 
                size="icon" 
                className="absolute top-1/2 -translate-y-1/2 -left-5 md:-left-6 h-12 w-12 rounded-full border-gray-200 bg-white shadow-lg hover:bg-physimed-50 hover:text-physimed transition-all duration-300 z-10"
                onClick={handlePrev}
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={20} />
              </Button>
              
              <Button 
                variant="outline" 
                size="icon" 
                className="absolute top-1/2 -translate-y-1/2 -right-5 md:-right-6 h-12 w-12 rounded-full border-gray-200 bg-white shadow-lg hover:bg-physimed-50 hover:text-physimed transition-all duration-300 z-10"
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                <ArrowRight size={20} />
              </Button>
            </div>
          </div>
        )}
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-3xl font-bold text-physimed">93%</h3>
            <p className="text-gray-600 text-sm mt-2">{t("employee_satisfaction_stat")}</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-3xl font-bold text-physimed">24/7</h3>
            <p className="text-gray-600 text-sm mt-2">{t("medical_support_stat")}</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-3xl font-bold text-physimed">15%</h3>
            <p className="text-gray-600 text-sm mt-2">{t("reduced_absenteeism_stat")}</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-3xl font-bold text-physimed">100+</h3>
            <p className="text-gray-600 text-sm mt-2">{t("corporate_partners_stat")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
