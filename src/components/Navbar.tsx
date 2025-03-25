
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'about', label: t.navbar.about },
    { key: 'services', label: t.navbar.services },
    { key: 'contact', label: t.navbar.contact },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm" : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a 
          href="#" 
          className="font-mono text-xl font-semibold tracking-tight"
          aria-label="Osmel P. Teran"
        >
          <span className="text-primary">O</span>PT
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={`#${item.key}`}
              className="relative text-sm font-medium text-foreground/90 hover:text-foreground transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <LanguageSwitcher />
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col space-y-1.5 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={cn(
            "w-6 h-0.5 bg-foreground transition-transform duration-300",
            isMobileMenuOpen && "translate-y-2 rotate-45"
          )}></span>
          <span className={cn(
            "w-6 h-0.5 bg-foreground transition-opacity duration-300",
            isMobileMenuOpen && "opacity-0"
          )}></span>
          <span className={cn(
            "w-6 h-0.5 bg-foreground transition-transform duration-300",
            isMobileMenuOpen && "-translate-y-2 -rotate-45"
          )}></span>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg transition-all duration-300 overflow-hidden",
        isMobileMenuOpen ? "max-h-56 py-4" : "max-h-0"
      )}>
        <nav className="container flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={`#${item.key}`}
              className="text-foreground/90 hover:text-foreground py-2 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="py-2">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
