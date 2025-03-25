
import React from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'de', name: 'Deutsch' },
  ];

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-foreground/70" />
      <Select
        value={language}
        onValueChange={(value) => setLanguage(value as Language)}
      >
        <SelectTrigger className="w-[110px] h-8 border-none bg-transparent hover:bg-white/10 text-sm">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
