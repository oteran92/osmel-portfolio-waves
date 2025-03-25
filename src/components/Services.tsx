import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Lightbulb, Command, BarChart4, Wand2, CircuitBoard, Database } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
    
    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      title: t.services.aiStrategy.title,
      description: t.services.aiStrategy.description,
      icon: <Lightbulb className="h-8 w-8" />,
    },
    {
      title: t.services.customAI.title,
      description: t.services.customAI.description,
      icon: <Wand2 className="h-8 w-8" />,
    },
    {
      title: t.services.predictiveAnalytics.title,
      description: t.services.predictiveAnalytics.description,
      icon: <BarChart4 className="h-8 w-8" />,
    },
    {
      title: t.services.nlp.title,
      description: t.services.nlp.description,
      icon: <Command className="h-8 w-8" />,
    },
    {
      title: t.services.aiIntegration.title,
      description: t.services.aiIntegration.description,
      icon: <CircuitBoard className="h-8 w-8" />,
    },
    {
      title: t.services.dataEngineering.title,
      description: t.services.dataEngineering.description,
      icon: <Database className="h-8 w-8" />,
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-primary uppercase rounded-full reveal">
            {t.services.title}
          </span>
          
          <h2 className="text-4xl font-bold mb-6 reveal">
            {t.services.heading}
          </h2>
          
          <p className="text-lg text-foreground/80 reveal">
            {t.services.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={cn(
                "p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300",
                "reveal"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mb-6 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              
              <p className="text-foreground/80">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
