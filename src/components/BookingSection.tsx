
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { 
  CalendarIcon, 
  Check, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  FileText, 
  Calendar as CalendarIcon2 
} from "lucide-react";
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM'
];

const appointmentTypes = [
  { id: 'health-checkup', name: 'Annual Health Check-Up' },
  { id: 'follow-up', name: 'Follow-Up Appointment' },
  { id: 'consultation', name: 'Corporate Consultation' },
  { id: 'second-opinion', name: 'Second Opinion' }
];

export default function BookingSection() {
  const { t } = useLanguage();
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
  const [step, setStep] = useState(1);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleTimeSlotSelect = (time: string) => {
    setSelectedTimeSlot(time);
    setFormData(prev => ({ ...prev, timeSlot: time }));
  };

  const handleNextStep = () => {
    if (step === 1 && !date) {
      toast.error('Please select a date for your appointment');
      return;
    }
    
    if (step === 1 && !selectedTimeSlot) {
      toast.error('Please select a time slot for your appointment');
      return;
    }

    if (step === 1) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    if (step === 2) {
      setStep(1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    if (!date) {
      toast.error('Please select a date for your appointment');
      return;
    }
    
    if (!selectedTimeSlot) {
      toast.error('Please select a time slot for your appointment');
      return;
    }
    
    if (!formData.appointmentType) {
      toast.error('Please select an appointment type');
      return;
    }
    
    // Here you would typically send the booking data to your backend
    const bookingData = {
      ...formData,
      date: date ? format(date, 'yyyy-MM-dd') : '',
    };
    
    console.log('Booking submitted:', bookingData);
    
    // Show success message
    toast.success('Appointment booked successfully!', {
      description: `Your appointment is scheduled for ${format(date, 'MMMM d, yyyy')} at ${selectedTimeSlot}.`,
    });
    
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
    setStep(1);
  };
  
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="bg-physimed-50 text-physimed-800 mb-4 hover:bg-physimed-100">{t("schedule_appointment")}</Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
            {t("book_consultation")}
          </h2>
          <p className="text-gray-600">
            {t("schedule_description")}
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-5xl mx-auto border border-gray-100">
          {step === 1 ? (
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-physimed text-white flex items-center justify-center">1</div>
                  <div className="ml-2 font-medium text-physimed">{t("select_datetime")}</div>
                </div>
                <div className="h-0.5 w-12 bg-gray-200"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center">2</div>
                  <div className="ml-2 text-gray-500">{t("personal_details")}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-physimed-50 rounded-lg p-4 mb-4">
                    <h3 className="flex items-center text-lg font-semibold text-physimed-800 mb-2">
                      <CalendarIcon2 className="mr-2 h-5 w-5" />
                      {t("select_date")}
                    </h3>
                    <p className="text-sm text-physimed-600 mb-4">{t("select_date_description")}</p>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-physimed-100">
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
                            {date ? format(date, "PPP") : <span>{t("pick_date")}</span>}
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
                  </div>
                  
                  <div className="bg-physimed-50 rounded-lg p-4">
                    <h3 className="flex items-center text-lg font-semibold text-physimed-800 mb-2">
                      <Clock className="mr-2 h-5 w-5" />
                      {t("select_time")}
                    </h3>
                    <p className="text-sm text-physimed-600 mb-4">{t("select_time_description")}</p>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-physimed-100">
                      <div className="grid grid-cols-3 gap-2">
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
                  </div>
                </div>
                
                <div>
                  <Card className="border-physimed-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-physimed to-physimed-700 p-4 text-white">
                      <h3 className="font-semibold text-xl mb-1">{t("appointment_summary")}</h3>
                      <p className="text-sm opacity-90">{t("review_selection")}</p>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="space-y-4">
                        {date ? (
                          <div className="flex items-center justify-between py-2 border-b border-gray-100">
                            <span className="flex items-center text-gray-600">
                              <CalendarIcon className="mr-2 h-4 w-4 text-physimed" />
                              {t("date")}:
                            </span>
                            <span className="font-medium">{format(date, "MMMM d, yyyy")}</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between py-2 border-b border-gray-100">
                            <span className="flex items-center text-gray-600">
                              <CalendarIcon className="mr-2 h-4 w-4 text-physimed" />
                              {t("date")}:
                            </span>
                            <span className="text-gray-400 italic">{t("not_selected")}</span>
                          </div>
                        )}
                        
                        {selectedTimeSlot ? (
                          <div className="flex items-center justify-between py-2 border-b border-gray-100">
                            <span className="flex items-center text-gray-600">
                              <Clock className="mr-2 h-4 w-4 text-physimed" />
                              {t("time")}:
                            </span>
                            <span className="font-medium">{selectedTimeSlot}</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between py-2 border-b border-gray-100">
                            <span className="flex items-center text-gray-600">
                              <Clock className="mr-2 h-4 w-4 text-physimed" />
                              {t("time")}:
                            </span>
                            <span className="text-gray-400 italic">{t("not_selected")}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-6">
                        {date && selectedTimeSlot ? (
                          <Button 
                            onClick={handleNextStep}
                            className="w-full bg-physimed hover:bg-physimed-700 text-white"
                          >
                            {t("continue_to_details")}
                          </Button>
                        ) : (
                          <Button 
                            disabled
                            className="w-full"
                          >
                            {t("select_date_time_continue")}
                          </Button>
                        )}
                      </div>
                      
                      <div className="text-xs text-gray-500 mt-4 text-center">
                        {t("no_cancelation_fee")}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in">
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-physimed-200 text-physimed flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </div>
                  <div className="ml-2 text-physimed-600">{t("select_datetime")}</div>
                </div>
                <div className="h-0.5 w-12 bg-physimed-200"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-physimed text-white flex items-center justify-center">2</div>
                  <div className="ml-2 font-medium text-physimed">{t("personal_details")}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-physimed-50 rounded-lg p-6">
                    <h3 className="flex items-center text-lg font-semibold text-physimed-800 mb-4">
                      <User className="mr-2 h-5 w-5" />
                      {t("personal_information")}
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-sm font-medium">
                            {t("first_name")} <span className="text-red-500">*</span>
                          </Label>
                          <div className="relative">
                            <Input
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className="pl-10 border-gray-300 focus:border-physimed focus:ring-physimed"
                              required
                            />
                            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-sm font-medium">
                            {t("last_name")} <span className="text-red-500">*</span>
                          </Label>
                          <div className="relative">
                            <Input
                              type="text"
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              className="pl-10 border-gray-300 focus:border-physimed focus:ring-physimed"
                              required
                            />
                            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          {t("email_address")} <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="pl-10 border-gray-300 focus:border-physimed focus:ring-physimed"
                            required
                          />
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium">
                          {t("phone_number")} <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <Input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="pl-10 border-gray-300 focus:border-physimed focus:ring-physimed"
                            required
                          />
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-physimed-50 rounded-lg p-6">
                    <h3 className="flex items-center text-lg font-semibold text-physimed-800 mb-4">
                      <FileText className="mr-2 h-5 w-5" />
                      {t("appointment_details")}
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm font-medium mb-3 block">
                          {t("appointment_type")} <span className="text-red-500">*</span>
                        </Label>
                        <RadioGroup 
                          onValueChange={(value) => setFormData(prev => ({ ...prev, appointmentType: value }))}
                          className="space-y-3"
                          value={formData.appointmentType}
                        >
                          {appointmentTypes.map((type) => (
                            <div key={type.id} className="flex items-center space-x-2 bg-white p-3 rounded-md border border-gray-200 hover:border-physimed transition-colors">
                              <RadioGroupItem 
                                value={type.id} 
                                id={type.id} 
                                className="text-physimed"
                              />
                              <Label htmlFor={type.id} className="font-normal cursor-pointer flex-1">
                                {type.name}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="notes" className="text-sm font-medium">
                          {t("additional_notes")}
                        </Label>
                        <div className="relative">
                          <Textarea
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleInputChange}
                            className="border-gray-300 focus:border-physimed focus:ring-physimed"
                            rows={3}
                            placeholder={t("notes_placeholder")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Card className="border-physimed-100 overflow-hidden sticky top-4">
                    <div className="bg-gradient-to-r from-physimed to-physimed-700 p-4 text-white">
                      <h3 className="font-semibold text-xl mb-1">{t("appointment_summary")}</h3>
                      <p className="text-sm opacity-90">{t("confirm_details")}</p>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <span className="flex items-center text-gray-600">
                            <CalendarIcon className="mr-2 h-4 w-4 text-physimed" />
                            {t("date")}:
                          </span>
                          <span className="font-medium">{date ? format(date, "MMMM d, yyyy") : '-'}</span>
                        </div>
                        
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <span className="flex items-center text-gray-600">
                            <Clock className="mr-2 h-4 w-4 text-physimed" />
                            {t("time")}:
                          </span>
                          <span className="font-medium">{selectedTimeSlot || '-'}</span>
                        </div>
                        
                        {formData.appointmentType && (
                          <div className="flex items-center justify-between py-2 border-b border-gray-100">
                            <span className="flex items-center text-gray-600">
                              <FileText className="mr-2 h-4 w-4 text-physimed" />
                              {t("type")}:
                            </span>
                            <span className="font-medium">
                              {appointmentTypes.find(t => t.id === formData.appointmentType)?.name || '-'}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex space-x-4 mt-6">
                        <Button 
                          type="button"
                          onClick={handlePrevStep}
                          variant="outline"
                          className="flex-1"
                        >
                          {t("back")}
                        </Button>
                        
                        <Button 
                          type="submit" 
                          className="flex-1 bg-physimed hover:bg-physimed-700 text-white"
                        >
                          {t("confirm_booking")}
                        </Button>
                      </div>
                      
                      <p className="text-xs text-gray-500 mt-4 text-center">
                        {t("by_booking")} <a href="/terms" className="text-physimed hover:underline">{t("terms")}</a> {t("and")} <a href="/privacy" className="text-physimed hover:underline">{t("privacy")}</a>.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
