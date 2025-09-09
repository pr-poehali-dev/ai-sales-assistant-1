import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-700/50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Bot" size={32} className="text-blue-400" />
              <span className="text-2xl font-bold text-white">Bot24.pro</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              ИИ-ассистенты для автоматизации продаж и обработки заявок. 
              Настроим умного помощника для вашего бизнеса за 3 дня.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://t.me/pocovorimzzzz_bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Telegram"
              >
                <Icon name="MessageCircle" size={24} />
              </a>
            </div>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="text-white font-semibold mb-4">Услуги</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Все услуги
                </Link>
              </li>
              <li>
                <Link 
                  to="/cases" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Кейсы клиентов
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Блог и статьи
                </Link>
              </li>
              <li>
                <a 
                  href="https://t.me/pocovorimzzzz_bot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Протестировать бота
                </a>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://t.me/pocovorimzzzz_bot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Telegram
                </a>
              </li>
              <li>
                <span className="text-gray-400">
                  Консультации: 24/7
                </span>
              </li>
              <li>
                <span className="text-gray-400">
                  Настройка: 3 дня
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Разделитель */}
        <div className="border-t border-slate-700/50 my-8"></div>

        {/* Trust-факторы */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 mb-6">
          <div className="text-gray-400 text-sm text-center lg:text-left">
            <div className="mb-2">
              ИП Иванов И.И. | ОГРНИП 123456789012345
            </div>
            <div>
              © 2025 Bot24.pro. Все права защищены.
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-500 text-sm mr-2">Связаться с нами:</span>
            <a 
              href="https://t.me/pocovorimzzzz_bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 hover:text-blue-200 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105"
              aria-label="Telegram"
            >
              <Icon name="MessageCircle" size={18} />
              <span className="text-sm font-medium">Telegram</span>
            </a>
            <a 
              href="https://wa.me/79000000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-600/20 hover:bg-green-600/30 text-green-300 hover:text-green-200 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105"
              aria-label="WhatsApp"
            >
              <Icon name="MessageSquare" size={18} />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0 pt-6 border-t border-slate-700/50">
          <div className="flex flex-wrap gap-6 text-sm justify-center md:justify-start">
            <Link 
              to="/privacy" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Политика конфиденциальности
            </Link>
            <Link 
              to="/terms" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Пользовательское соглашение
            </Link>
            <a 
              href="https://t.me/pocovorimzzzz_bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Протестировать бота-продавца
            </a>
          </div>
          
          <div className="text-gray-500 text-xs">
            Разработка и поддержка: Bot24.pro
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;