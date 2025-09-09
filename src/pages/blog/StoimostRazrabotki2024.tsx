import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Footer from '@/components/sections/Footer';

const StoimostRazrabotki2024 = () => {
  return (
    <>
      <Helmet>
        <title>Сколько стоит разработка чат-бота для малого бизнеса в 2024 году | Bot24.pro</title>
        <meta name="description" content="Полный разбор цен на разработку чат-ботов: от простых до сложных решений. Что влияет на стоимость и как сэкономить." />
        <meta name="keywords" content="стоимость чат-бота, цена разработки, чат-бот для бизнеса, разработка ботов 2024" />
        <link rel="canonical" href="https://bot24.pro/blog/stoimost-razrabotki-chatbota-2024" />
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
              <span className="text-blue-300">Цены</span>
            </div>
          </nav>

          <article className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            {/* Метаинформация */}
            <div className="flex items-center space-x-4 mb-6 text-sm text-gray-400">
              <div className="bg-green-900/30 px-3 py-1 rounded-full border border-green-500/30">
                <span className="text-green-300">Цены</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Calendar" size={14} />
                <span>09 сентября 2025</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={14} />
                <span>6 мин чтения</span>
              </div>
            </div>

            {/* Заголовок */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Сколько стоит разработка чат-бота для малого бизнеса в 2024 году
            </h1>

            {/* Вводный текст */}
            <div className="bg-green-900/20 border-l-4 border-green-500 p-6 mb-8 rounded-r-xl">
              <p className="text-lg text-gray-300 italic">
                Разбираем все варианты: от бесплатных конструкторов до индивидуальной разработки. 
                Узнайте реальные цены и выберите оптимальное решение для вашего бизнеса.
              </p>
            </div>

            {/* Содержание статьи */}
            <div className="prose prose-invert max-w-none space-y-8">
              <div className="text-gray-300 text-lg leading-relaxed">

                <div className="bg-amber-900/20 border border-amber-500/30 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-semibold text-amber-300 mb-3">⚡ Коротко о главном:</h3>
                  <ul className="space-y-2">
                    <li>• <strong className="text-white">Конструкторы:</strong> 0-5 000 ₽/мес</li>
                    <li>• <strong className="text-white">Простые боты:</strong> 15 000-50 000 ₽</li>
                    <li>• <strong className="text-white">Умные ИИ-ассистенты:</strong> 50 000-150 000 ₽</li>
                    <li>• <strong className="text-white">Корпоративные решения:</strong> от 200 000 ₽</li>
                  </ul>
                </div>
                
                <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                  📊 Сравнение всех вариантов
                </h2>
                
                <div className="grid grid-cols-1 gap-6 mb-8">
                  {/* Бесплатные конструкторы */}
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-600/50">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-white">🆓 Бесплатные конструкторы</h3>
                      <span className="text-2xl font-bold text-green-400">0 ₽</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-green-300 font-semibold mb-2">Плюсы:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Быстрый старт</li>
                          <li>• Готовые шаблоны</li>
                          <li>• Без затрат</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-red-300 font-semibold mb-2">Минусы:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Ограниченный функционал</li>
                          <li>• Реклама сервиса</li>
                          <li>• Нет ИИ</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Простые боты */}
                  <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-500/30">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-white">🤖 Простые чат-боты</h3>
                      <span className="text-2xl font-bold text-blue-400">15-50k ₽</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-blue-300 font-semibold mb-2">Что входит:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Готовые сценарии</li>
                          <li>• Интеграция с CRM</li>
                          <li>• Базовая аналитика</li>
                          <li>• Поддержка 1 месяц</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-blue-300 font-semibold mb-2">Подходит для:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Интернет-магазинов</li>
                          <li>• Простых услуг</li>
                          <li>• FAQ и поддержки</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* ИИ-ассистенты */}
                  <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/30 relative">
                    <div className="absolute -top-3 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Рекомендуем
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-white">🧠 ИИ-ассистенты</h3>
                      <span className="text-2xl font-bold text-purple-400">50-150k ₽</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-purple-300 font-semibold mb-2">Что входит:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• ИИ для естественного общения</li>
                          <li>• Персонализация ответов</li>
                          <li>• Обучение на ваших данных</li>
                          <li>• Интеграции с системами</li>
                          <li>• Аналитика и отчеты</li>
                          <li>• Поддержка 3 месяца</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-purple-300 font-semibold mb-2">Результат:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Конверсия +200-400%</li>
                          <li>• Экономия времени</li>
                          <li>• Работа 24/7</li>
                          <li>• Довольные клиенты</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                  💰 От чего зависит стоимость?
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-slate-700/30 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-blue-300 mb-4">1. Сложность сценариев</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="font-medium text-white mb-2">Простые (FAQ)</div>
                        <div className="text-gray-400">+0 к базовой цене</div>
                      </div>
                      <div>
                        <div className="font-medium text-white mb-2">Средние (продажи)</div>
                        <div className="text-gray-400">+20-30k ₽</div>
                      </div>
                      <div>
                        <div className="font-medium text-white mb-2">Сложные (консультации)</div>
                        <div className="text-gray-400">+50k+ ₽</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-700/30 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-green-300 mb-4">2. Количество интеграций</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• CRM-системы: +10-15k ₽</li>
                      <li>• Онлайн-касса: +5-10k ₽</li>
                      <li>• Складская система: +15-25k ₽</li>
                      <li>• Email-маркетинг: +5k ₽</li>
                    </ul>
                  </div>

                  <div className="bg-slate-700/30 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-purple-300 mb-4">3. Использование ИИ</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Без ИИ (готовые ответы):</span>
                        <span className="text-white font-medium">Базовая цена</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Простой ИИ (GPT-3.5):</span>
                        <span className="text-white font-medium">+30-50k ₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Продвинутый ИИ (GPT-4):</span>
                        <span className="text-white font-medium">+50-100k ₽</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                  💡 Как сэкономить без потери качества?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-emerald-900/20 p-6 rounded-xl border border-emerald-500/30">
                    <h3 className="text-xl font-semibold text-emerald-300 mb-3">✅ Стоит делать:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Начать с MVP-версии</li>
                      <li>• Использовать готовые шаблоны</li>
                      <li>• Поэтапное внедрение функций</li>
                      <li>• Тестировать на небольшой аудитории</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-900/20 p-6 rounded-xl border border-red-500/30">
                    <h3 className="text-xl font-semibold text-red-300 mb-3">❌ Не стоит экономить на:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Качестве сценариев</li>
                      <li>• Тестировании</li>
                      <li>• Технической поддержке</li>
                      <li>• Обучении команды</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-blue-500/30 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Узнайте точную стоимость для вашего проекта
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Каждый бизнес уникален. Получите персональный расчет стоимости 
                    с учетом всех ваших требований. Консультация — бесплатно.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="https://t.me/cocozzAAA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105"
                    >
                      <Icon name="MessageCircle" size={18} className="mr-2" />
                      Получить расчет стоимости
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Навигация в конце */}
            <div className="mt-12 pt-8 border-t border-slate-600 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <Link 
                to="/blog/chatbot-konversiya-prodazhi"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Предыдущая статья
              </Link>
              
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/blog"
                  className="text-gray-400 hover:text-white transition-colors text-sm text-center"
                >
                  Все статьи
                </Link>
                <Link 
                  to="/blog/ii-assistent-dlya-nishi"
                  className="text-gray-400 hover:text-white transition-colors text-sm text-center"
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

export default StoimostRazrabotki2024;