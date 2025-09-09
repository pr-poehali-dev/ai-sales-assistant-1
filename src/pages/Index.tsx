import { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/sections/HeroSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import TrustSection from '@/components/sections/TrustSection';
import DemoSection from '@/components/sections/DemoSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

const Index = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Intersection Observer для анимаций при скролле
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.dataset.section as string]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setSectionRef = (index: number) => (el: HTMLElement | null) => {
    sectionRefs.current[index] = el;
  };

  return (
    <>
      <Helmet>
        <title>ИИ Помощник по Продажам — Автоматизация Бизнеса 24/7</title>
        <meta name="description" content="Умный ИИ-помощник автоматизирует ваши продажи, обрабатывает заявки клиентов и увеличивает прибыль. Работает круглосуточно без выходных." />
        <meta name="keywords" content="ИИ помощник, автоматизация продаж, чат-бот для бизнеса, искусственный интеллект, продажи 24/7, автоматизация заявок, увеличение конверсии" />
        <meta name="google-site-verification" content="5eObebGJ9Cukhw3_Gcm0xPet-eK4OWpxS7yVW8QFG5Q" />
        <link rel="canonical" href="https://bot24.pro" />
      </Helmet>
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" role="main">
        <HeroSection 
          isVisible={isVisible.hero || false}
          sectionRef={setSectionRef(0)}
        />
        
        <BenefitsSection 
          isVisible={isVisible.benefits || false}
          sectionRef={setSectionRef(1)}
        />
        
        <TrustSection 
          isVisible={isVisible.trust || false}
          sectionRef={setSectionRef(2)}
        />
        
        <DemoSection 
          isVisible={isVisible.demo || false}
          sectionRef={setSectionRef(3)}
        />
        
        <ContactSection 
          isVisible={isVisible.contact || false}
          sectionRef={setSectionRef(4)}
        />
      </main>
      <Footer />
    </>
  );
};

export default Index;