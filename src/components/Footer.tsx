
import React from 'react';
import { Github, Linkedin, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/translations';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  
  const socialLinks = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, url: 'https://github.com/oteran92' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/osmel-teran-884480111/' },
    { name: 'X', icon: <X className="w-5 h-5" />, url: 'https://x.com/OsmelTeran' },
  ];
  
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="font-mono text-xl font-semibold tracking-tight">
              <span className="text-primary">O</span>PT
            </a>
            <p className="mt-2 text-sm text-foreground/70">
              {getTranslation('aiEngineeringConsultant', language)}
            </p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/70">
            &copy; {currentYear} Osmel P. Teran. {getTranslation('allRightsReserved', language)}
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              {getTranslation('privacyPolicy', language)}
            </a>
            <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              {getTranslation('termsOfService', language)}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
