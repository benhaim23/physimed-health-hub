
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! 👋 I'm the Physimed Health Assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputText.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setInputText('');
    
    // Simulate bot response (would be replaced with actual AI integration)
    setTimeout(() => {
      let botResponse = "";
      
      // Simple keyword-based responses
      const lowercaseInput = inputText.toLowerCase();
      
      if (lowercaseInput.includes('pricing') || lowercaseInput.includes('cost') || lowercaseInput.includes('price')) {
        botResponse = "Our corporate plans start at $1,195 for annual health check-ups. We also offer comprehensive care packages starting from $2,275. You can view detailed pricing on our pricing page.";
      } else if (lowercaseInput.includes('book') || lowercaseInput.includes('appointment') || lowercaseInput.includes('schedule')) {
        botResponse = "You can book an appointment using our online booking system on the website. For urgent appointments, please call us at 514-747-8192.";
      } else if (lowercaseInput.includes('contact') || lowercaseInput.includes('phone') || lowercaseInput.includes('email')) {
        botResponse = "You can reach us at 514-747-8192 or email us at info@physimed.com. Our clinic is located at 6363 Trans-Canada Highway, Suite 400, St-Laurent, QC H4T 1Z9.";
      } else if (lowercaseInput.includes('hours') || lowercaseInput.includes('open')) {
        botResponse = "We're open Monday to Friday from 7:00 AM to 9:00 PM, and weekends from 8:00 AM to 5:00 PM.";
      } else if (lowercaseInput.includes('concierge') || lowercaseInput.includes('service')) {
        botResponse = "Our medical concierge service provides 7-day access to healthcare professionals, same-day appointments, and coordinated care. It's included with our care packages.";
      } else {
        botResponse = "Thank you for your message. For specific information about our corporate health plans, please call us at 514-747-8192 or visit our pricing page.";
      }
      
      const botMessage: Message = {
        id: Date.now(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };
  
  // Auto scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chatbot-container">
      {/* Chat button */}
      <button 
        className="chatbot-button"
        onClick={toggleChatbot}
        aria-label="Chat with us"
      >
        {isOpen ? <X size={24} className="text-white" /> : <MessageSquare size={24} className="text-white" />}
      </button>
      
      {/* Chat panel */}
      <div className={cn(
        "chatbot-panel",
        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      )}>
        <div className="chatbot-header">
          <h3 className="font-medium">Physimed Health Assistant</h3>
          <button onClick={toggleChatbot} className="text-white/80 hover:text-white">
            <X size={18} />
          </button>
        </div>
        
        <div className="chatbot-messages">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={cn(
                message.sender === 'user' ? 'chatbot-message-user' : 'chatbot-message-bot'
              )}
            >
              {message.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <form onSubmit={handleSubmit} className="chatbot-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputText}
            onChange={handleInputChange}
            className="flex-1 bg-transparent focus:outline-none"
          />
          <Button 
            type="submit" 
            size="sm"
            className="bg-physimed hover:bg-physimed-700 text-white h-8 w-8 p-0 rounded-full"
          >
            <Send size={16} />
          </Button>
        </form>
      </div>
    </div>
  );
}
