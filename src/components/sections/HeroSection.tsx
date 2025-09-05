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
          <Button 
            size="lg" 
            className="text-white px-8 py-4 text-lg hover-scale relative group mb-6"
            style={{
              background: 'linear-gradient(90deg, #10b981, #14b8a6)',
              padding: '16px 32px', 
              fontSize: '18px',
              boxShadow: '0 10px 25px rgba(16, 185, 129, 0.2)',
              border: 'none'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(90deg, #065f46, #047857)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(90deg, #10b981, #14b8a6)'}
          >
            <span className="flex items-center">
              <Icon name="Bot" size={18} className="mr-2" />
              ИИ-технологии для бизнеса
            </span>
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              Канал с полезными материалами
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </Button>
          
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
            Он не уходит на больничный и не теряет клиентов. Отвечает на заявки, консультирует клиентов и продаёт — пока вы занимаетесь делом.
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
              size="lg" 
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 text-lg hover-scale relative group shadow-lg shadow-emerald-500/20"
              onClick={() => {
                const demoSection = document.querySelector('[data-section="demo"]');
                if (demoSection) {
                  demoSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="flex items-center">
                <span className="mr-2">🔍</span>
                Посмотреть демо-бота
              </span>
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                Открыть демо
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;