import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Textarea } from "@/components/ui/textarea";
import { toast } from 'sonner';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    toast.success('Your message has been sent!', {
      description: 'We will get back to you as soon as possible.',
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-physimed font-medium">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600">
            Have questions about our corporate medical plans? Reach out to our team for personalized assistance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-serif font-semibold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-physimed focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-physimed focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-physimed focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-physimed focus:border-transparent"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="Corporate Plans">Corporate Plans</option>
                    <option value="Health Check-Up">Health Check-Up</option>
                    <option value="Concierge Service">Concierge Service</option>
                    <option value="Booking">Booking Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-physimed focus:border-transparent"
                  placeholder="How can we help you?"
                  required
                />
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacy"
                  className="h-4 w-4 text-physimed rounded border-gray-300 focus:ring-physimed"
                  required
                />
                <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                  I agree to the <a href="/privacy-policy" className="text-physimed hover:underline">privacy policy</a> and consent to being contacted.
                </label>
              </div>
              
              <Button 
                type="submit" 
                className="bg-physimed hover:bg-physimed-700 text-white flex items-center"
              >
                Send Message
                <Send size={16} className="ml-2" />
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-physimed-800 text-white rounded-xl shadow-sm p-8 mb-8">
              <h3 className="text-2xl font-serif font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-physimed-100 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-white/80">514-747-8192</p>
                    <p className="text-white/80">1-800-363-6737 (Toll-Free)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-physimed-100 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-white/80">corporate@physimed.com</p>
                    <p className="text-white/80">info@physimed.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-physimed-100 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-white/80">
                      6363 Trans-Canada Highway,<br />
                      Suite 400, St-Laurent,<br />
                      QC H4T 1Z9
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-3">Hours of Operation</h4>
                <ul className="space-y-1 text-white/80">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>7:00 AM - 9:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-xl font-serif font-semibold mb-4">Corporate Inquiries</h3>
              <p className="text-gray-600 mb-4">
                For corporate plan inquiries, please contact our corporate services team:
              </p>
              
              <div className="flex items-center space-x-4">
                <Button variant="outline" className="border-physimed text-physimed">
                  <Phone size={16} className="mr-2" />
                  514-747-8192 ext. 212
                </Button>
                <Button className="bg-physimed hover:bg-physimed-700 text-white">
                  <Mail size={16} className="mr-2" />
                  corporate@physimed.com
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
