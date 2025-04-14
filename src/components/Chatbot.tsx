
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Initialize welcome message with correct language
  useEffect(() => {
    setMessages([{
      id: 1,
      text: t('chatbot_welcome'),
      sender: 'bot',
      timestamp: new Date()
    }]);
  }, [language, t]);
  
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    
    // Focus input when opening
    if (!isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
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
    setIsTyping(true);
    
    // Simulate bot response (would be replaced with actual AI integration)
    setTimeout(() => {
      const lowercaseInput = inputText.toLowerCase();
      let responseKey = 'chatbot_default_response';
      
      // Simple keyword-based responses with appropriate translation keys
      if (lowercaseInput.includes('pricing') || lowercaseInput.includes('cost') || lowercaseInput.includes('price') ||
          lowercaseInput.includes('tarif') || lowercaseInput.includes('coût') || lowercaseInput.includes('prix')) {
        responseKey = 'chatbot_pricing_response';
      } else if (lowercaseInput.includes('book') || lowercaseInput.includes('appointment') || lowercaseInput.includes('schedule') ||
                lowercaseInput.includes('rendez-vous') || lowercaseInput.includes('réserver')) {
        responseKey = 'chatbot_booking_response';
      } else if (lowercaseInput.includes('contact') || lowercaseInput.includes('phone') || lowercaseInput.includes('email') ||
                lowercaseInput.includes('téléphone') || lowercaseInput.includes('courriel')) {
        responseKey = 'chatbot_contact_response';
      } else if (lowercaseInput.includes('hours') || lowercaseInput.includes('open') ||
                lowercaseInput.includes('heures') || lowercaseInput.includes('ouvert')) {
        responseKey = 'chatbot_hours_response';
      } else if (lowercaseInput.includes('concierge') || lowercaseInput.includes('service') ||
                lowercaseInput.includes('conciergerie')) {
        responseKey = 'chatbot_concierge_response';
      }
      
      const botMessage: Message = {
        id: Date.now(),
        text: t(responseKey),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setIsTyping(false);
      setMessages(prev => [...prev, botMessage]);
    }, 1500);
  };
  
  // Auto scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // ESC to close chat
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className="chatbot-container">
      {/* Chat button */}
      <button 
        className="chatbot-button group"
        onClick={toggleChatbot}
        aria-label="Chat with us"
      >
        {isOpen ? 
          <X size={24} className="text-white" /> : 
          <MessageSquare size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
        }
      </button>
      
      {/* Chat panel */}
      <div className={cn(
        "chatbot-panel",
        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      )}>
        <div className="chatbot-header">
          <div className="flex items-center gap-2">
            <Bot size={20} className="text-white" />
            <h3 className="font-medium">{t('chatbot_title')}</h3>
          </div>
          <button onClick={toggleChatbot} className="text-white/80 hover:text-white rounded-full p-1 hover:bg-white/10 transition-colors">
            <X size={18} />
          </button>
        </div>
        
        <div className="chatbot-messages">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={cn(
                message.sender === 'user' ? 'chatbot-message-user' : 'chatbot-message-bot',
                "animate-fade-in"
              )}
            >
              {message.text}
              <span className="text-xs opacity-60 mt-1 block">
                {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </span>
            </div>
          ))}
          {isTyping && (
            <div className="chatbot-message-bot animate-pulse self-start max-w-[80%] animate-fade-in">
              <span className="flex gap-1">
                <span className="animate-bounce">.</span>
                <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>.</span>
                <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>.</span>
              </span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <form onSubmit={handleSubmit} className="chatbot-input">
          <input
            ref={inputRef}
            type="text"
            placeholder={t('chatbot_placeholder')}
            value={inputText}
            onChange={handleInputChange}
            className="flex-1 bg-transparent focus:outline-none"
          />
          <Button 
            type="submit" 
            size="sm"
            disabled={!inputText.trim() || isTyping}
            className={cn(
              "bg-physimed hover:bg-physimed-700 text-white h-8 w-8 p-0 rounded-full transition-all",
              !inputText.trim() && "opacity-50 cursor-not-allowed"
            )}
          >
            <Send size={16} />
          </Button>
        </form>
      </div>
    </div>
  );
}
