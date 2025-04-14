
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react";
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { useLanguage } from "@/contexts/LanguageContext";

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM'
];

const appointmentTypes = [
  { id: 'health-checkup', nameKey: 'annual_health_checkup' },
  { id: 'follow-up', nameKey: 'followup_appointment' },
  { id: 'consultation', nameKey: 'corporate_consultation' },
  { id: 'second-opinion', nameKey: 'second_opinion' }
];

export default function BookingSection() {
  const { t, language } = useLanguage();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    appointmentType: '',
    timeSlot: '',
    notes: ''
  });
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleTimeSlotSelect = (time: string) => {
    setSelectedTimeSlot(time);
    setFormData(prev => ({ ...prev, timeSlot: time }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date) {
      toast.error(language === 'en' ? 'Please select a date for your appointment' : 'Veuillez sélectionner une date pour votre rendez-vous');
      return;
    }
    
    if (!selectedTimeSlot) {
      toast.error(language === 'en' ? 'Please select a time slot for your appointment' : 'Veuillez sélectionner une plage horaire pour votre rendez-vous');
      return;
    }
    
    // Here you would typically send the booking data to your backend
    const bookingData = {
      ...formData,
      date: date ? format(date, 'yyyy-MM-dd') : '',
    };
    
    console.log('Booking submitted:', bookingData);
    
    // Show success message
    toast.success(
      language === 'en' ? 'Appointment booked successfully!' : 'Rendez-vous réservé avec succès!', 
      {
        description: language === 'en' 
          ? `Your appointment is scheduled for ${format(date, 'MMMM d, yyyy')} at ${selectedTimeSlot}.`
          : `Votre rendez-vous est prévu pour le ${format(date, 'MMMM d, yyyy')} à ${selectedTimeSlot}.`,
      }
    );
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      appointmentType: '',
      timeSlot: '',
      notes: ''
    });
    setDate(undefined);
    setSelectedTimeSlot(null);
  };
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-physimed font-medium">{t('schedule_appointment')}</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
            {t('book_consultation')}
          </h2>
          <p className="text-gray-600">
            {t('schedule_description')}
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-semibold mb-4">{t('personal_information')}</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">{t('first_name')}</Label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-physimed focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">{t('last_name')}</Label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-physimed focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">{t('email_address')}</Label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-physimed focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">{t('phone_number')}</Label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-physimed focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="appointmentType">{t('appointment_type')}</Label>
                  <RadioGroup 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, appointmentType: value }))}
                    className="mt-2 space-y-2"
                  >
                    {appointmentTypes.map((type) => (
                      <div key={type.id} className="flex items-center space-x-2">
                        <RadioGroupItem 
                          value={type.id} 
                          id={type.id} 
                          className="text-physimed"
                        />
                        <Label htmlFor={type.id} className="font-normal cursor-pointer">
                          {t(type.nameKey)}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <div>
                  <Label htmlFor="notes">{t('additional_notes')}</Label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-physimed focus:border-transparent"
                    rows={3}
                    placeholder={t('notes_placeholder')}
                  ></textarea>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-semibold mb-4">{t('appointment_details')}</h3>
                
                <div className="mb-6">
                  <Label className="mb-2 block">{t('select_date')}</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>{t('pick_date')}</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => {
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          return date < today || date.getDay() === 0; // Disable past dates and Sundays
                        }}
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div>
                  <Label className="mb-2 block">{t('select_time')}</Label>
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant={selectedTimeSlot === time ? "default" : "outline"}
                        className={cn(
                          "h-10 text-sm",
                          selectedTimeSlot === time && "bg-physimed hover:bg-physimed-600"
                        )}
                        onClick={() => handleTimeSlotSelect(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 pt-4">
                  <div className="bg-physimed-50 rounded-lg p-4 mb-6">
                    <h4 className="font-medium text-physimed-800 mb-2">{t('appointment_summary')}</h4>
                    <div className="space-y-2 text-sm">
                      {date && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">{t('date')}</span>
                          <span className="font-medium">{format(date, "MMMM d, yyyy")}</span>
                        </div>
                      )}
                      {selectedTimeSlot && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">{t('time')}</span>
                          <span className="font-medium">{selectedTimeSlot}</span>
                        </div>
                      )}
                      {formData.appointmentType && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">{t('type')}</span>
                          <span className="font-medium">
                            {t(appointmentTypes.find(t => t.id === formData.appointmentType)?.nameKey || '')}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-physimed hover:bg-physimed-700 text-white"
                  >
                    {t('confirm_booking')}
                  </Button>
                  
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    {t('booking_terms')}{" "}
                    <a href="/terms" className="text-physimed hover:underline">
                      {t('terms_conditions')}
                    </a>{" "}
                    {t('and')}{" "}
                    <a href="/privacy" className="text-physimed hover:underline">
                      {t('privacy_policy')}
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
