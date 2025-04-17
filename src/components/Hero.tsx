
import React from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import ThreeScene from './ThreeScene';

const Hero = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ThreeScene theme={theme} />
      
      <div className="container relative z-10 px-4 py-32 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-primary border border-primary rounded-full uppercase animate-fade-in-fast">
          {t.hero.subtitle}
        </span>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight animate-fade-in">
          Osmel P. <span className="text-primary">Teran</span>
        </h1>
        
        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-foreground/80 animate-fade-in-slow">
          {t.hero.description}
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-in-slow">
          <a 
            href="#services" 
            className={cn(
              "px-8 py-3 rounded-md font-medium transition-all",
              "bg-primary text-white shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
            )}
          >
            {t.hero.exploreServices}
          </a>
          <a 
            href="#contact" 
            className={cn(
              "px-8 py-3 rounded-md font-medium transition-all",
              "bg-secondary text-foreground hover:bg-secondary/80 hover:-translate-y-1"
            )}
          >
            {t.hero.getInTouch}
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          aria-label="Scroll down"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-5 h-5"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
