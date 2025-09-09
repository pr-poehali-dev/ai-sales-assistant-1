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
                href="https://t.me/cocozzAAA" 
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
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  ИИ-ассистенты
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Чат-боты
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Автоматизация продаж
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Техподдержка
                </span>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://t.me/cocozzAAA" 
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

        {/* Нижняя часть футера */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2025 Bot24.pro. Все права защищены.
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
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
              href="https://t.me/cocozzAAA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Поддержка
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;