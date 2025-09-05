import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  isVisible: boolean;
  sectionRef: (el: HTMLElement | null) => void;
}

const HeroSection = ({ isVisible, sectionRef }: HeroSectionProps) => {
  return (
    <section 
      ref={sectionRef}
      data-section="hero"
      className={`relative overflow-hidden py-20 px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Bot" size={16} />
            ИИ-технологии для бизнеса
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ИИ-продавец 24/7 — заявки на автопилоте
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto">
            Продаёт, отвечает и консультирует вместо менеджеров
          </h2>
          
          <h3 className="text-lg md:text-xl text-blue-300 mb-12 max-w-3xl mx-auto font-medium flex items-center justify-center gap-2">
            <span>👉</span> Настроим за 3 дня. Без кода, без головной боли.
          </h3>
          
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Он не спит, не болеет и всегда на связи. Отвечает на заявки, консультирует клиентов и продаёт — пока вы занимаетесь делом.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg hover-scale"
              onClick={() => window.open('https://t.me/cocozzAAA', '_blank')}
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Заказать ИИ-ассистента
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg hover-scale"
              onClick={() => {
                const demoSection = document.querySelector('[data-section="demo"]');
                if (demoSection) {
                  demoSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Icon name="PlayCircle" size={20} className="mr-2" />
              Посмотреть демо
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;