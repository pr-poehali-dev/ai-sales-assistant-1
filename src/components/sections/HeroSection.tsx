import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  isVisible: boolean;
  sectionRef: (el: HTMLElement | null) => void;
}

const HeroSection = ({ isVisible, sectionRef }: HeroSectionProps) => {
  return (
    <div className="w-full overflow-x-hidden">
      <section 
        ref={sectionRef}
        data-section="hero"
        className={`relative w-full min-h-screen py-8 sm:py-16 px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm" />
        
        <div className="relative z-10 w-full max-w-sm mx-auto sm:max-w-2xl lg:max-w-4xl">
          {/* Верхний бейдж */}
          <div className="text-center mb-6">
            <Button 
              size="sm"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 text-sm border-0 shadow-lg"
              style={{ boxShadow: '0 8px 20px rgba(16, 185, 129, 0.3)' }}
            >
              <Icon name="Bot" size={14} className="mr-2" />
              ИИ для бизнеса
            </Button>
          </div>

          {/* Главный заголовок - мобильная версия */}
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ИИ-продавец 24/7
              </span>
              <span className="block text-xl sm:text-3xl lg:text-5xl mt-2">
                Заявки на автопилоте
              </span>
            </h1>
            
            <p className="text-sm sm:text-lg text-gray-300 mb-4 px-2">
              Продаёт, отвечает и консультирует вместо менеджеров
            </p>
            
            <p className="text-sm sm:text-base text-blue-300 font-medium px-2">
              👉 Настроим за 3 дня. Без кода, без головной боли.
            </p>
          </div>

          {/* Основные кнопки */}
          <div className="flex flex-col gap-3 mb-8 px-2">
            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 shadow-lg"
              onClick={() => window.open('https://t.me/pocovorimzzzz_bot', '_blank')}
            >
              <Icon name="MessageCircle" size={18} className="mr-2" />
              🔥 Протестировать бота
            </Button>
            
            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-4 shadow-lg"
              onClick={() => {
                const demoSection = document.querySelector('[data-section="demo"]');
                if (demoSection) {
                  demoSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Icon name="Search" size={18} className="mr-2" />
              Посмотреть демо
            </Button>
          </div>

          {/* Информационный блок */}
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 mb-6 border border-slate-700/50">
            <div className="space-y-4">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center">
                  <Icon name="Bot" size={20} className="mr-2 text-blue-400" />
                  Что такое Bot24.pro?
                </h2>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Сервис внедрения умных ИИ-ассистентов для бизнеса. Наш AI-бот отвечает на вопросы клиентов, консультирует по услугам и превращает заявки в продажи.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 flex items-center">
                  <Icon name="ArrowRight" size={18} className="mr-2 text-purple-400" />
                  Как работаем?
                </h3>
                <div className="space-y-2 text-sm sm:text-base">
                  <div className="flex items-start text-blue-300">
                    <span className="mr-2 mt-1">📋</span>
                    <span>Анализируем ваш бизнес</span>
                  </div>
                  <div className="flex items-start text-purple-300">
                    <span className="mr-2 mt-1">⚙️</span>
                    <span>Запускаем и настраиваем бота</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 flex items-center">
                  <Icon name="Settings" size={18} className="mr-2 text-green-400" />
                  Настройка под вас
                </h3>
                <div className="flex items-center text-sm sm:text-base text-green-300 mb-4">
                  <span className="mr-2">🚀</span>
                  <span>Telegram, ВКонтакте или WhatsApp за 3 дня</span>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 animate-pulse shadow-lg"
                  onClick={() => {
                    const contactSection = document.querySelector('[data-section="contact"]');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <Icon name="FileText" size={18} className="mr-2" />
                  🔥 Оставить заявку
                </Button>
              </div>
            </div>
          </div>

          {/* Бонус */}
          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-xl p-4 border border-emerald-600/20 mb-6">
            <p className="text-emerald-300 font-medium text-center text-sm sm:text-base">
              💎 Получите бесплатный аудит воронки продаж и шаблоны диалогов
            </p>
          </div>

          {/* Акция */}
          <div className="text-center">
            <p className="text-yellow-300 font-semibold animate-pulse text-sm sm:text-base px-2">
              ⚡ Ограниченное предложение: первые 10 клиентов получают скидку 50%
            </p>
          </div>

          {/* Инструкция */}
          <div className="text-center mt-6 bg-blue-900/20 p-4 rounded-lg border border-blue-600/30">
            <p className="text-blue-200 text-sm sm:text-base leading-relaxed">
              💬 <strong>Начните диалог с нашим ИИ-ассистентом</strong> — он ответит на ваши вопросы и соберет информацию, чтобы наш специалист связался с вами уже с готовым решением.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;