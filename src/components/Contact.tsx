
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Send } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // First, store the message in Supabase
      const { error: dbError } = await supabase
        .from('contact_messages')
        .insert([formData]);

      if (dbError) {
        console.error('Error storing contact message:', dbError);
        throw new Error(dbError.message);
      }

      // Also call the edge function to handle email notification
      const { error: funcError } = await supabase.functions.invoke('send-contact-notification', {
        body: formData,
      });

      if (funcError) {
        console.error('Error calling notification function:', funcError);
        throw new Error(funcError.message);
      }
      
      console.log('Message sent successfully');
      
      toast({
        title: t.contact.successTitle,
        description: t.contact.successDescription,
      });
      
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message:', error);
      
      toast({
        title: t.contact.errorTitle,
        description: t.contact.errorDescription,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-primary uppercase rounded-full">
                {t.contact.title}
              </span>
              
              <h2 className="text-4xl font-bold mb-6">
                {t.contact.heading.split(' ')[0]} <span className="text-primary">{t.contact.heading.split(' ').slice(1).join(' ')}</span>
              </h2>
              
              <p className="text-lg text-foreground/80 mb-8">
                {t.contact.description}
              </p>
              
            </div>
            
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-lg blur-lg opacity-75"></div>
              <div className="relative bg-card rounded-lg shadow-lg p-8 reveal">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {t.contact.name}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder={t.contact.namePlaceholder}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t.contact.email}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder={t.contact.emailPlaceholder}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {t.contact.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder={t.contact.messagePlaceholder}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full px-6 py-3 rounded-md font-medium flex items-center justify-center transition-all",
                      "bg-primary text-white",
                      isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:shadow-lg hover:shadow-primary/20"
                    )}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t.contact.sending}
                      </span>
                    ) : (
                      <span className="flex items-center">
                        {t.contact.send}
                        <Send className="ml-2 w-4 h-4" />
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
