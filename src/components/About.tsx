import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Code, Cpu, Bot, Brain } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
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
  
  const skills = [
    { name: t.skills.softwareEngineering, icon: <Code className="w-6 h-6" /> },
    { name: t.skills.aiDevelopment, icon: <Brain className="w-6 h-6" /> },
    { name: t.skills.machineLearning, icon: <Cpu className="w-6 h-6" /> },
    { name: t.skills.conversationalAI, icon: <Bot className="w-6 h-6" /> },
  ];
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-secondary/30"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-primary uppercase rounded-full reveal">
            {t.about.title}
          </span>
          
          <h2 className="text-4xl font-bold mb-12 reveal">
            {t.about.heading.split(' for ')[0]} <span className="text-primary">for {t.about.heading.split(' for ')[1]}</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <p className="text-lg leading-relaxed mb-6">
                {t.about.paragraph1}
              </p>
              <p className="text-lg leading-relaxed">
                {t.about.paragraph2}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={cn(
                    "p-6 rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition-all",
                    "reveal"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-md bg-primary/10 text-primary">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
