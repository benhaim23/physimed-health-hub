
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-physimed font-medium">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
            What Our Corporate Clients Say
          </h2>
          <p className="text-gray-600">
            Hear from business leaders who've partnered with Physimed for their corporate healthcare needs.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="absolute -top-5 left-0 right-0 flex justify-center">
              <div className="bg-physimed-50 px-6 py-2 rounded-full flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
            
            <div className="pt-8">
              <blockquote className="text-xl md:text-2xl text-gray-700 font-serif italic text-center mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="text-center">
                <p className="font-semibold text-gray-800">{testimonials[currentIndex].author}</p>
                <p className="text-physimed">{testimonials[currentIndex].position}</p>
                <p className="text-gray-500 text-sm">{testimonials[currentIndex].company}</p>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-physimed' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="h-10 w-10 rounded-full border-gray-200 bg-white/90 backdrop-blur-sm hover:bg-physimed-50"
                onClick={handlePrev}
              >
                <ArrowLeft size={18} className="text-gray-600" />
              </Button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="h-10 w-10 rounded-full border-gray-200 bg-white/90 backdrop-blur-sm hover:bg-physimed-50"
                onClick={handleNext}
              >
                <ArrowRight size={18} className="text-gray-600" />
              </Button>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-3xl font-bold text-physimed">93%</h3>
              <p className="text-gray-600 text-sm mt-2">Employee Satisfaction</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-3xl font-bold text-physimed">24/7</h3>
              <p className="text-gray-600 text-sm mt-2">Medical Support</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-3xl font-bold text-physimed">15%</h3>
              <p className="text-gray-600 text-sm mt-2">Reduced Absenteeism</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-3xl font-bold text-physimed">100+</h3>
              <p className="text-gray-600 text-sm mt-2">Corporate Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
