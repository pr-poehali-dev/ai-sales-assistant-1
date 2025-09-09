import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Footer from '@/components/sections/Footer';

const ChatbotKonversiyaProdazhi = () => {
  return (
    <>
      <Helmet>
        <title>Как чат-бот увеличивает конверсию в продажах: кейсы и примеры | Bot24.pro</title>
        <meta name="description" content="Разбираем реальные кейсы увеличения продаж с помощью чат-ботов. Цифры, факты и готовые стратегии для вашего бизнеса." />
        <meta name="keywords" content="чат-бот, конверсия, продажи, кейсы, увеличение продаж, автоматизация" />
        <link rel="canonical" href="https://bot24.pro/blog/chatbot-konversiya-prodazhi" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20 max-w-4xl">
          {/* Навигация */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-gray-400">
              <Link to="/" className="hover:text-white transition-colors">Главная</Link>
              <Icon name="ChevronRight" size={16} />
              <Link to="/blog" className="hover:text-white transition-colors">Блог</Link>
              <Icon name="ChevronRight" size={16} />
              <span className="text-blue-300">Кейсы</span>
            </div>
          </nav>

          <article className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            {/* Метаинформация */}
            <div className="flex items-center space-x-4 mb-6 text-sm text-gray-400">
              <div className="bg-blue-900/30 px-3 py-1 rounded-full border border-blue-500/30">
                <span className="text-blue-300">Кейсы</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Calendar" size={14} />
                <span>09 сентября 2025</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={14} />
                <span>8 мин чтения</span>
              </div>
            </div>

            {/* Заголовок */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Как чат-бот увеличивает конверсию в продажах: кейсы и примеры
            </h1>

            {/* Вводный текст */}
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-8 rounded-r-xl">
              <p className="text-lg text-gray-300 italic">
                Чат-боты не просто отвечают на вопросы — они превращают посетителей в покупателей. 
                В этой статье разберем реальные кейсы компаний, которые увеличили конверсию 
                на 200-400% с помощью ИИ-ассистентов.
              </p>
            </div>

            {/* Содержание статьи */}
            <div className="prose prose-invert max-w-none space-y-8">
              <div className="text-gray-300 text-lg leading-relaxed">
                
                <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                  📊 Статистика: почему чат-боты работают?
                </h2>
                
                <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/20 p-6 rounded-xl border border-emerald-500/30 mb-8">
                  <ul className="space-y-3">
                    <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> 67% пользователей предпочитают чат-боты звонкам</li>
                    <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> Время ответа сокращается с 24 часов до 30 секунд</li>
                    <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> Средняя конверсия увеличивается на 67%</li>
                    <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> Стоимость лида снижается в 3-5 раз</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                  🏆 Кейс #1: Интернет-магазин электроники
                </h2>
                
                <p className="mb-4">
                  <strong className="text-white">Задача:</strong> Увеличить количество заказов и снизить количество брошенных корзин.
                </p>
                
                <div className="bg-slate-700/30 p-6 rounded-xl mb-6">
                  <h3 className="text-xl font-semibold text-blue-300 mb-3">Что внедрили:</h3>
                  <ul className="space-y-2">
                    <li>• Консультант по выбору товаров</li>
                    <li>• Напоминания о брошенной корзине</li>
                    <li>• Ответы на частые вопросы</li>
                    <li>• Помощь в оформлении заказа</li>
                  </ul>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-semibold text-green-300 mb-3">Результаты за 3 месяца:</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">+340%</div>
                      <div className="text-green-300">конверсия</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">-65%</div>
                      <div className="text-green-300">брошенные корзины</div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                  🎯 Кейс #2: Стоматологическая клиника
                </h2>
                
                <p className="mb-4">
                  <strong className="text-white">Задача:</strong> Автоматизировать запись пациентов и увеличить количество первичных консультаций.
                </p>

                <div className="bg-purple-900/20 border border-purple-500/30 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">Результаты за 2 месяца:</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Записей через бота:</span>
                      <span className="text-white font-bold">78%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Рост новых пациентов:</span>
                      <span className="text-white font-bold">+156%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Экономия времени администратора:</span>
                      <span className="text-white font-bold">4 часа в день</span>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                  🚀 Готовые стратегии для внедрения
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/30">
                    <h3 className="text-xl font-semibold text-blue-300 mb-3">Для e-commerce:</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Персональные рекомендации</li>
                      <li>• Сравнение товаров</li>
                      <li>• Помощь в выборе размера</li>
                      <li>• Уведомления о скидках</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/30">
                    <h3 className="text-xl font-semibold text-purple-300 mb-3">Для услуг:</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Квалификация лидов</li>
                      <li>• Запись на консультацию</li>
                      <li>• Расчет стоимости</li>
                      <li>• FAQ по услугам</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-blue-500/30 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Хотите такие же результаты?
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Настроим ИИ-ассистента под вашу нишу за 3 дня. 
                    Бесплатный аудит воронки продаж в подарок.
                  </p>
                  <a 
                    href="https://t.me/cocozzAAA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105"
                  >
                    <Icon name="MessageCircle" size={18} className="mr-2" />
                    Получить консультацию
                  </a>
                </div>
              </div>
            </div>

            {/* Навигация в конце */}
            <div className="mt-12 pt-8 border-t border-slate-600 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <Link 
                to="/blog"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Все статьи блога
              </Link>
              
              <div className="flex space-x-4">
                <Link 
                  to="/blog/stoimost-razrabotki-chatbota-2024"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Следующая статья →
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChatbotKonversiyaProdazhi;