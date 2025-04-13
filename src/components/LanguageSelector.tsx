
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <div className="flex items-center space-x-1">
      <Globe size={16} className="text-gray-600 mr-1" />
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "px-2 py-1 h-auto text-xs font-medium rounded-l-md rounded-r-none", 
          language === "en" ? "bg-gray-200 text-gray-800" : "text-gray-600 hover:bg-gray-100"
        )}
        onClick={() => setLanguage("en")}
      >
        {t("en")}
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "px-2 py-1 h-auto text-xs font-medium rounded-l-none rounded-r-md", 
          language === "fr" ? "bg-gray-200 text-gray-800" : "text-gray-600 hover:bg-gray-100"
        )}
        onClick={() => setLanguage("fr")}
      >
        {t("fr")}
      </Button>
    </div>
  );
}
