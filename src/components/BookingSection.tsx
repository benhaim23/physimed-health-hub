
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
      toast.error('Please select a date for your appointment');
      return;
    }
    
    if (!selectedTimeSlot) {
      toast.error('Please select a time slot for your appointment');
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
  };
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-physimed font-medium">Schedule an Appointment</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
            Book Your Consultation
          </h2>
          <p className="text-gray-600">
            Schedule your health check-up or corporate consultation using our easy online booking system.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-semibold mb-4">Personal Information</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
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
                    <Label htmlFor="lastName">Last Name</Label>
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
                  <Label htmlFor="email">Email Address</Label>
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
                  <Label htmlFor="phone">Phone Number</Label>
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
                  <Label htmlFor="appointmentType">Type of Appointment</Label>
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
                          {type.name}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-physimed focus:border-transparent"
                    rows={3}
                    placeholder="Any specific concerns or requirements for your appointment?"
                  ></textarea>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-semibold mb-4">Appointment Details</h3>
                
                <div className="mb-6">
                  <Label className="mb-2 block">Select Date</Label>
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
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
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
                  <Label className="mb-2 block">Select Time</Label>
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
                    <h4 className="font-medium text-physimed-800 mb-2">Appointment Summary</h4>
                    <div className="space-y-2 text-sm">
                      {date && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Date:</span>
                          <span className="font-medium">{format(date, "MMMM d, yyyy")}</span>
                        </div>
                      )}
                      {selectedTimeSlot && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Time:</span>
                          <span className="font-medium">{selectedTimeSlot}</span>
                        </div>
                      )}
                      {formData.appointmentType && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Type:</span>
                          <span className="font-medium">
                            {appointmentTypes.find(t => t.id === formData.appointmentType)?.name}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-physimed hover:bg-physimed-700 text-white"
                  >
                    Confirm Booking
                  </Button>
                  
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    By booking an appointment, you agree to our{" "}
                    <a href="/terms" className="text-physimed hover:underline">
                      terms and conditions
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-physimed hover:underline">
                      privacy policy
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
