import { useEffect, useState, useRef } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import DemoSection from '@/components/sections/DemoSection';
import ContactSection from '@/components/sections/ContactSection';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <HeroSection 
        isVisible={isVisible.hero || false}
        sectionRef={setSectionRef(0)}
      />
      
      <BenefitsSection 
        isVisible={isVisible.benefits || false}
        sectionRef={setSectionRef(1)}
      />
      
      <DemoSection 
        isVisible={isVisible.demo || false}
        sectionRef={setSectionRef(4)}
      />
      
      <ContactSection 
        isVisible={isVisible.contact || false}
        sectionRef={setSectionRef(5)}
      />
    </div>
  );
};

export default Index;