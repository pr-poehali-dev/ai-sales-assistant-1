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
      className={`w-screen min-h-screen py-4 px-2 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ maxWidth: '100vw', overflowX: 'hidden' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
      
      <div className="relative z-10 w-full max-w-xs mx-auto" style={{ maxWidth: '90vw' }}>
        
        {/* Бейдж */}
        <div className="text-center mb-4">
          <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-1 rounded-lg text-xs shadow-lg">
            <Icon name="Bot" size={12} className="mr-1 inline" />
            ИИ для бизнеса
          </div>
        </div>

        {/* Заголовок */}
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold text-white mb-2 leading-tight">
            <div className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ИИ-продавец 24/7
            </div>
            <div className="text-lg mt-1">
              Заявки на автопилоте
            </div>
          </h1>
          
          <p className="text-sm text-gray-300 mb-2">
            Продаёт и консультирует
          </p>
          
          <p className="text-xs text-blue-300">
            👉 Настроим за 3 дня
          </p>
        </div>

        {/* Кнопки */}
        <div className="space-y-3 mb-6">
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-sm shadow-lg"
            onClick={() => window.open('https://t.me/pluchki_bot', '_blank')}
          >
            <Icon name="MessageCircle" size={16} className="mr-2" />
            🔥 Протестировать бота
          </Button>
          
          <Button 
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-sm shadow-lg"
            onClick={() => {
              const demoSection = document.querySelector('[data-section="demo"]');
              if (demoSection) {
                demoSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <Icon name="Search" size={16} className="mr-2" />
            Посмотреть демо
          </Button>
        </div>

        {/* Основная карточка */}
        <div className="bg-slate-800/50 rounded-lg p-3 mb-4 border border-slate-700/50">
          <h2 className="text-base font-bold text-white mb-2 flex items-center">
            <Icon name="Bot" size={16} className="mr-2 text-blue-400" />
            Что такое Bot24.pro?
          </h2>
          <p className="text-xs text-gray-300 mb-3 leading-relaxed">
            ИИ-ассистенты для бизнеса. Бот отвечает клиентам, консультирует и превращает заявки в продажи.
          </p>
          
          <div className="space-y-2 mb-3">
            <div className="flex items-center text-xs text-blue-300">
              <span className="mr-2">📋</span>
              <span>Анализируем бизнес</span>
            </div>
            <div className="flex items-center text-xs text-purple-300">
              <span className="mr-2">⚙️</span>
              <span>Запускаем бота</span>
            </div>
            <div className="flex items-center text-xs text-green-300">
              <span className="mr-2">🚀</span>
              <span>Telegram, WhatsApp за 3 дня</span>
            </div>
          </div>
          
          <Button 
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 text-sm animate-pulse shadow-lg"
            onClick={() => {
              const contactSection = document.querySelector('[data-section="contact"]');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <Icon name="FileText" size={16} className="mr-2" />
            🔥 Оставить заявку
          </Button>
        </div>

        {/* Бонус */}
        <div className="bg-emerald-900/30 rounded-lg p-3 mb-4 border border-emerald-600/20">
          <p className="text-emerald-300 text-xs text-center font-medium">
            💎 Бесплатный аудит и шаблоны диалогов
          </p>
        </div>

        {/* Акция */}
        <div className="text-center mb-4">
          <p className="text-yellow-300 text-xs font-semibold animate-pulse">
            ⚡ Скидка 50% первым 10 клиентам
          </p>
        </div>

        {/* Инструкция */}
        <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-600/30">
          <p className="text-blue-200 text-xs leading-relaxed text-center">
            💬 <strong>Начните диалог с ИИ-ассистентом</strong> — он соберет информацию для нашего специалиста
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;