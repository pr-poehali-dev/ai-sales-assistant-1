import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Footer from '@/components/sections/Footer';

const IIAssistentDlyaNishi = () => {
  return (
    <>
      <Helmet>
        <title>ИИ-ассистент для стоматологии: как увеличить количество записей | Bot24.pro</title>
        <meta name="description" content="Специализированное решение для стоматологических клиник. Автоматизация записей, консультаций и напоминаний пациентам." />
        <meta name="keywords" content="ИИ-ассистент для стоматологии, чат-бот для клиники, автоматизация записей, стоматологическая клиника" />
        <link rel="canonical" href="https://bot24.pro/blog/ii-assistent-dlya-nishi" />
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
              <span className="text-blue-300">Отрасли</span>
            </div>
          </nav>

          <article className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            {/* Метаинформация */}
            <div className="flex items-center space-x-4 mb-6 text-sm text-gray-400">
              <div className="bg-teal-900/30 px-3 py-1 rounded-full border border-teal-500/30">
                <span className="text-teal-300">Отрасли</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Calendar" size={14} />
                <span>09 сентября 2025</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={14} />
                <span>7 мин чтения</span>
              </div>
            </div>

            {/* Заголовок */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              ИИ-ассистент для стоматологии: как увеличить количество записей
            </h1>

            {/* Вводный текст */}
            <div className="bg-teal-900/20 border-l-4 border-teal-500 p-6 mb-8 rounded-r-xl">
              <p className="text-lg text-gray-300 italic">
                Специализированное решение, которое автоматизирует 80% задач администратора, 
                увеличивает записи на 150% и экономит до 4 часов в день. 
                Реальный кейс стоматологической клиники.
              </p>
            </div>

            {/* Содержание статьи */}
            <div className="prose prose-invert max-w-none space-y-8">
              <div className="text-gray-300 text-lg leading-relaxed">

                <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-semibold text-red-300 mb-3">🦷 Главные проблемы стоматологических клиник:</h3>
                  <ul className="space-y-2">
                    <li>• Администратор не успевает отвечать на все звонки</li>
                    <li>• 40% потенциальных пациентов не дозваниваются</li>
                    <li>• Пациенты забывают о записи и не приходят</li>
                    <li>• Много времени тратится на объяснение цен и услуг</li>
                    <li>• Сложно записываться в нерабочее время</li>
                  </ul>
                </div>
                
                <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                  🤖 Что умеет ИИ-ассистент для стоматологии?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-500/30">
                    <div className="text-3xl mb-4">📅</div>
                    <h3 className="text-xl font-bold text-blue-300 mb-3">Запись на прием</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Подбор свободного времени</li>
                      <li>• Выбор врача по специализации</li>
                      <li>• Уточнение жалоб и симптомов</li>
                      <li>• Сбор контактных данных</li>
                    </ul>
                  </div>

                  <div className="bg-green-900/30 p-6 rounded-xl border border-green-500/30">
                    <div className="text-3xl mb-4">💰</div>
                    <h3 className="text-xl font-bold text-green-300 mb-3">Консультации по ценам</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Актуальный прайс-лист</li>
                      <li>• Расчет стоимости лечения</li>
                      <li>• Информация о рассрочке</li>
                      <li>• Акции и скидки</li>
                    </ul>
                  </div>

                  <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/30">
                    <div className="text-3xl mb-4">⏰</div>
                    <h3 className="text-xl font-bold text-purple-300 mb-3">Напоминания</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• За день до приема</li>
                      <li>• За час до визита</li>
                      <li>• Подготовка к процедурам</li>
                      <li>• Рекомендации после лечения</li>
                    </ul>
                  </div>

                  <div className="bg-orange-900/30 p-6 rounded-xl border border-orange-500/30">
                    <div className="text-3xl mb-4">📋</div>
                    <h3 className="text-xl font-bold text-orange-300 mb-3">Первичная консультация</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Сбор анамнеза</li>
                      <li>• Определение срочности</li>
                      <li>• Подготовка к приему</li>
                      <li>• Ответы на частые вопросы</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                  📊 Реальный кейс: клиника "ДентаЛюкс"
                </h2>

                <div className="bg-slate-700/50 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Исходная ситуация:</h3>
                  <ul className="space-y-2 mb-6">
                    <li>• <strong className="text-white">Размер:</strong> 3 кабинета, 5 врачей</li>
                    <li>• <strong className="text-white">Проблема:</strong> 1 администратор на всю клинику</li>
                    <li>• <strong className="text-white">Записей в день:</strong> 15-20 пациентов</li>
                    <li>• <strong className="text-white">Недозвоны:</strong> 35-40%</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-red-300 mb-3">ДО внедрения</h3>
                    <ul className="space-y-3">
                      <li>
                        <div className="flex justify-between">
                          <span>Записей в день:</span>
                          <span className="text-white font-bold">18</span>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between">
                          <span>Недозвоны:</span>
                          <span className="text-red-400 font-bold">38%</span>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between">
                          <span>Неявки:</span>
                          <span className="text-red-400 font-bold">25%</span>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between">
                          <span>Время администратора на звонки:</span>
                          <span className="text-red-400 font-bold">6 часов</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-green-300 mb-3">ПОСЛЕ внедрения</h3>
                    <ul className="space-y-3">
                      <li>
                        <div className="flex justify-between">
                          <span>Записей в день:</span>
                          <span className="text-green-400 font-bold">46</span>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between">
                          <span>Недозвоны:</span>
                          <span className="text-green-400 font-bold">8%</span>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between">
                          <span>Неявки:</span>
                          <span className="text-green-400 font-bold">7%</span>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between">
                          <span>Время администратора на звонки:</span>
                          <span className="text-green-400 font-bold">2 часа</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 p-8 rounded-xl border border-emerald-500/30 mb-8">
                  <h3 className="text-2xl font-bold text-white text-center mb-6">Итоговые результаты за 3 месяца</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-emerald-400">+156%</div>
                      <div className="text-emerald-300 text-sm">новых записей</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-emerald-400">+89%</div>
                      <div className="text-emerald-300 text-sm">выручка</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-emerald-400">4 часа</div>
                      <div className="text-emerald-300 text-sm">экономии в день</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-emerald-400">95%</div>
                      <div className="text-emerald-300 text-sm">довольных пациентов</div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                  ⚙️ Техническая реализация
                </h2>

                <div className="space-y-6">
                  <div className="bg-slate-700/30 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-blue-300 mb-4">1. Интеграции</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong className="text-white">Календарь врачей:</strong> синхронизация расписания</li>
                      <li>• <strong className="text-white">1C или другая CRM:</strong> карточки пациентов</li>
                      <li>• <strong className="text-white">IP-телефония:</strong> уведомления о звонках</li>
                      <li>• <strong className="text-white">WhatsApp/Telegram:</strong> основные каналы связи</li>
                    </ul>
                  </div>

                  <div className="bg-slate-700/30 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-green-300 mb-4">2. ИИ-возможности</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Понимает стоматологическую терминологию</li>
                      <li>• Определяет срочность по симптомам</li>
                      <li>• Рекомендует подходящего врача</li>
                      <li>• Ведет естественный диалог</li>
                    </ul>
                  </div>

                  <div className="bg-slate-700/30 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-purple-300 mb-4">3. База знаний</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Прайс-лист всех услуг</li>
                      <li>• Информация о врачах и специализациях</li>
                      <li>• Рекомендации по подготовке к процедурам</li>
                      <li>• Ответы на 200+ частых вопросов</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                  💡 Пример диалога с ИИ-ассистентом
                </h2>

                <div className="bg-slate-800/50 p-6 rounded-xl mb-8 space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 rounded-full p-2 text-white text-sm">П</div>
                    <div>
                      <div className="bg-blue-100 text-gray-800 p-3 rounded-lg inline-block max-w-xs">
                        Здравствуйте! Болит зуб, можно записаться на сегодня?
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 justify-end">
                    <div>
                      <div className="bg-gray-700 text-white p-3 rounded-lg inline-block max-w-md">
                        Здравствуйте! Конечно, поможем с записью. Расскажите, какая боль: острая, ноющая? Когда началась?
                      </div>
                    </div>
                    <div className="bg-gray-600 rounded-full p-2 text-white text-sm">🤖</div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 rounded-full p-2 text-white text-sm">П</div>
                    <div>
                      <div className="bg-blue-100 text-gray-800 p-3 rounded-lg inline-block max-w-xs">
                        Острая боль с утра, особенно на холодное
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 justify-end">
                    <div>
                      <div className="bg-gray-700 text-white p-3 rounded-lg inline-block max-w-md">
                        Понимаю, это требует срочного осмотра. У нас есть окно сегодня в 15:30 у терапевта Ивановой А.С. Подойдет? Стоимость осмотра 1500₽.
                      </div>
                    </div>
                    <div className="bg-gray-600 rounded-full p-2 text-white text-sm">🤖</div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 rounded-full p-2 text-white text-sm">П</div>
                    <div>
                      <div className="bg-blue-100 text-gray-800 p-3 rounded-lg inline-block max-w-xs">
                        Да, подойдет. Как записаться?
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 justify-end">
                    <div>
                      <div className="bg-gray-700 text-white p-3 rounded-lg inline-block max-w-md">
                        Отлично! Назовите ваше имя и номер телефона. Запишу вас на 15:30. За час до приема отправлю напоминание.
                      </div>
                    </div>
                    <div className="bg-gray-600 rounded-full p-2 text-white text-sm">🤖</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-blue-500/30 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Хотите такой же результат для своей клиники?
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Настроим специализированного ИИ-ассистента под вашу стоматологическую клинику. 
                    Увеличим количество записей и снизим нагрузку на администратора. 
                    Узнайте <Link 
                      to="/blog/stoimost-razrabotki-chatbota-2025" 
                      className="text-blue-400 hover:text-blue-300 underline transition-colors"
                    >сколько стоит разработка</Link> или <Link 
                      to="/services" 
                      className="text-emerald-400 hover:text-emerald-300 underline transition-colors"
                    >заказать внедрение ИИ-ассистента</Link> прямо сейчас.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="https://t.me/cocozzAAA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105"
                    >
                      <Icon name="MessageCircle" size={18} className="mr-2" />
                      Заказать для своей клиники
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Навигация в конце */}
            <div className="mt-12 pt-8 border-t border-slate-600 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <Link 
                to="/blog/stoimost-razrabotki-chatbota-2024"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Предыдущая статья
              </Link>
              
              <Link 
                to="/blog"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Все статьи блога
              </Link>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IIAssistentDlyaNishi;