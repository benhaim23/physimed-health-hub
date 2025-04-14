
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Upload } from 'lucide-react';
import { Textarea } from "@/components/ui/textarea";
import { toast } from 'sonner';
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [files, setFiles] = useState<FileList | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    console.log('Files:', files);
    
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
    setFiles(null);
    
    // Reset file input by clearing the value
    const fileInput = document.getElementById('file-upload') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-physimed font-medium">{t("get_in_touch")}</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
            {t("contact_us")}
          </h2>
          <p className="text-gray-600">
            {t("contact_subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-serif font-semibold mb-6">{t("send_us_message")}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                    {t("your_name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-physimed focus:border-transparent"
                    placeholder={t("john_doe")}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    {t("email_address")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-physimed focus:border-transparent"
                    placeholder={t("email_placeholder")}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                    {t("phone_number")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-physimed focus:border-transparent"
                    placeholder={t("phone_placeholder")}
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                    {t("subject")}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-physimed focus:border-transparent"
                    required
                  >
                    <option value="">{t("select_subject")}</option>
                    <option value="Corporate Plans">{t("corporate_plans_option")}</option>
                    <option value="Health Check-Up">{t("health_checkup_option")}</option>
                    <option value="Concierge Service">{t("concierge_service_option")}</option>
                    <option value="Booking">{t("booking_inquiry")}</option>
                    <option value="Other">{t("other_option")}</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                  {t("your_message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-physimed focus:border-transparent"
                  placeholder={t("message_placeholder")}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="file-upload" className="block mb-2 text-sm font-medium text-gray-700">
                  {t("attachments_optional")}
                </label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="file-upload"
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="relative w-full">
                    <label 
                      htmlFor="file-upload" 
                      className="flex items-center justify-center w-full px-4 py-2 text-sm border border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <Upload size={18} className="mr-2 text-gray-500" />
                      <span className="text-gray-500">
                        {files && files.length > 0 
                          ? `${files.length} ${t("files_selected")}` 
                          : t("upload_files")}
                      </span>
                    </label>
                  </div>
                </div>
                {files && files.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {Array.from(files).map((file, index) => (
                      <div key={index} className="text-sm text-gray-600 flex items-center">
                        <span className="truncate max-w-xs">{file.name}</span>
                        <span className="ml-2 text-xs text-gray-500">({(file.size / 1024).toFixed(1)} KB)</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacy"
                  className="h-4 w-4 text-physimed rounded border-gray-300 focus:ring-physimed"
                  required
                />
                <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                  {t("privacy_consent")}
                </label>
              </div>
              
              <Button 
                type="submit" 
                className="bg-physimed hover:bg-physimed-700 text-white flex items-center"
              >
                {t("send_message")}
                <Send size={16} className="ml-2" />
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-physimed-800 text-white rounded-xl shadow-sm p-8 mb-8">
              <h3 className="text-2xl font-serif font-semibold mb-6">{t("contact_information")}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-physimed-100 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">{t("phone_label")}</p>
                    <p className="text-white/80">514-747-8192</p>
                    <p className="text-white/80">{t("toll_free")}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-physimed-100 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">{t("email_label")}</p>
                    <p className="text-white/80">corporate@physimed.com</p>
                    <p className="text-white/80">info@physimed.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-physimed-100 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">{t("address_label")}</p>
                    <p className="text-white/80">
                      6363 Trans-Canada Highway,<br />
                      Suite 400, St-Laurent,<br />
                      QC H4T 1Z9
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-3">{t("hours_operation")}</h4>
                <ul className="space-y-1 text-white/80">
                  <li className="flex justify-between">
                    <span>{t("monday_friday")}</span>
                    <span>7:00 AM - 9:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t("saturday")}</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t("sunday")}</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-xl font-serif font-semibold mb-4">{t("corporate_inquiries")}</h3>
              <p className="text-gray-600 mb-4">
                {t("corp_inquiries_text")}
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
