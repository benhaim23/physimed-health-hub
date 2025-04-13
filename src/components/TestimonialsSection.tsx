
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Star, Quote } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Physimed's corporate plan has been invaluable for our executive team. The same-day appointments and comprehensive check-ups mean less time away from work and more focus on prevention.",
    author: "Sarah Johnson",
    position: "HR Director",
    company: "Tech Innovations Inc."
  },
  {
    quote: "The medical concierge service alone has been worth the investment. Being able to call and speak with a doctor within minutes has helped our employees address health concerns before they become serious issues.",
    author: "Michael Chen",
    position: "CEO",
    company: "Global Finance Partners"
  },
  {
    quote: "We've seen lower absenteeism and higher employee satisfaction since partnering with Physimed. Their focus on preventative care aligns perfectly with our corporate wellness initiatives.",
    author: "Priya Sharma",
    position: "Chief Operating Officer",
    company: "NexGen Solutions"
  },
  {
    quote: "The quality of care is exceptional. Having our employees see the same doctor each visit has built trust and better health outcomes. It's healthcare as it should be.",
    author: "Robert Anderson",
    position: "VP of Human Resources",
    company: "Meridian Construction"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block px-4 py-1 bg-physimed-50 rounded-full mb-3">
            <span className="text-physimed font-medium">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-2 mb-6 text-gradient">
            What Our Corporate Clients Say
          </h2>
          <p className="text-gray-600 text-lg">
            Hear from business leaders who've partnered with Physimed for their corporate healthcare needs.
          </p>
        </div>
        
        {isMobile ? (
          // Mobile version with Carousel
          <div className="max-w-md mx-auto px-4">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 enhanced-card h-full">
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400 mx-0.5" />
                        ))}
                      </div>
                      
                      <blockquote className="text-lg text-gray-700 font-serif italic text-center mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="text-center mt-auto">
                        <p className="font-semibold text-gray-800">{testimonial.author}</p>
                        <p className="text-physimed text-sm">{testimonial.position}</p>
                        <p className="text-gray-500 text-xs">{testimonial.company}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4 space-x-1">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-physimed w-4' : 'bg-gray-300 w-2'
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
            <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12 enhanced-card mx-6">
              <div className="absolute -top-6 left-0 right-0 flex justify-center">
                <div className="bg-physimed-50 px-6 py-2 rounded-full flex shadow-md">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
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
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-physimed w-6' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 -left-5 md:-left-6">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-10 w-10 rounded-full border-gray-200 bg-white shadow-md hover:bg-physimed-50 transition-all duration-300"
                  onClick={handlePrev}
                >
                  <ArrowLeft size={18} className="text-gray-600" />
                </Button>
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 -right-5 md:-right-6">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-10 w-10 rounded-full border-gray-200 bg-white shadow-md hover:bg-physimed-50 transition-all duration-300"
                  onClick={handleNext}
                >
                  <ArrowRight size={18} className="text-gray-600" />
                </Button>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-3xl font-bold text-physimed">93%</h3>
            <p className="text-gray-600 text-sm mt-2">Employee Satisfaction</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-3xl font-bold text-physimed">24/7</h3>
            <p className="text-gray-600 text-sm mt-2">Medical Support</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-3xl font-bold text-physimed">15%</h3>
            <p className="text-gray-600 text-sm mt-2">Reduced Absenteeism</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-3xl font-bold text-physimed">100+</h3>
            <p className="text-gray-600 text-sm mt-2">Corporate Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
}
