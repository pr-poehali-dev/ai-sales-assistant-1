import { Helmet } from 'react-helmet-async';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Пользовательское соглашение | Bot24.pro</title>
        <meta name="description" content="Пользовательское соглашение сервиса Bot24.pro - ИИ-ассистенты для бизнеса" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bot24.pro/terms" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20 max-w-4xl">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">
              Пользовательское соглашение
            </h1>
            
            <div className="prose prose-invert max-w-none space-y-6">
              <div className="text-gray-300">
                <p className="mb-4"><strong>Дата вступления в силу:</strong> 09 сентября 2025 года</p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Общие положения</h2>
                <p>
                  Настоящее Пользовательское соглашение (далее — «Соглашение») определяет условия 
                  использования сайта bot24.pro (далее — «Сайт») и услуг, предоставляемых Bot24.pro 
                  (далее — «Сервис», «Мы»).
                </p>
                <p>
                  Используя Сайт, вы соглашаетесь с условиями настоящего Соглашения. 
                  Если вы не согласны с какими-либо условиями, прекратите использование Сайта.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Описание услуг</h2>
                <p>Сервис Bot24.pro предоставляет следующие услуги:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Разработка и внедрение ИИ-ассистентов для бизнеса</li>
                  <li>Настройка чат-ботов для различных мессенджеров</li>
                  <li>Автоматизация процессов продаж и обработки заявок</li>
                  <li>Консультационные услуги по внедрению ИИ-технологий</li>
                  <li>Техническая поддержка и сопровождение</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Порядок оказания услуг</h2>
                <p>Процесс работы включает следующие этапы:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Консультация:</strong> Анализ потребностей вашего бизнеса</li>
                  <li><strong>Разработка:</strong> Создание индивидуального сценария работы бота</li>
                  <li><strong>Интеграция:</strong> Настройка и запуск ИИ-ассистента</li>
                  <li><strong>Тестирование:</strong> Проверка работоспособности и корректировка</li>
                  <li><strong>Запуск:</strong> Передача готового решения заказчику</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Права и обязанности сторон</h2>
                
                <h3 className="text-xl font-medium text-blue-300 mt-6 mb-3">4.1. Наши обязательства:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Предоставить услуги в соответствии с техническим заданием</li>
                  <li>Обеспечить конфиденциальность данных клиента</li>
                  <li>Предоставить техническую поддержку в рамках договора</li>
                  <li>Соблюдать сроки выполнения работ</li>
                </ul>
                
                <h3 className="text-xl font-medium text-blue-300 mt-6 mb-3">4.2. Обязательства клиента:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Предоставить необходимую информацию для разработки</li>
                  <li>Своевременно оплачивать услуги согласно договору</li>
                  <li>Тестировать предоставленное решение и давать обратную связь</li>
                  <li>Не использовать услуги для незаконной деятельности</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Стоимость и оплата</h2>
                <p>
                  Стоимость услуг определяется индивидуально на основе технического задания 
                  и согласовывается с клиентом перед началом работ.
                </p>
                <p>
                  Оплата производится согласно выставленному счету в сроки, указанные в договоре.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Гарантии и ответственность</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Мы гарантируем работоспособность предоставленного решения</li>
                  <li>Гарантийный период составляет 30 дней с момента сдачи проекта</li>
                  <li>Устранение ошибок в гарантийный период — бесплатно</li>
                  <li>Мы не несем ответственности за действия третьих лиц</li>
                  <li>Ответственность сторон ограничивается стоимостью оказанных услуг</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Интеллектуальная собственность</h2>
                <p>
                  Права на разработанное программное обеспечение и алгоритмы принадлежат Bot24.pro. 
                  Клиент получает право использования готового решения в рамках своей деятельности.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Конфиденциальность</h2>
                <p>
                  Обработка персональных данных осуществляется в соответствии с Политикой конфиденциальности 
                  и требованиями действующего законодательства РФ.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Форс-мажор</h2>
                <p>
                  Стороны освобождаются от ответственности за неисполнение обязательств, 
                  если это вызвано обстоятельствами непреодолимой силы.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Разрешение споров</h2>
                <p>
                  Все споры разрешаются путем переговоров. При невозможности достижения соглашения 
                  споры передаются в суд по месту нахождения исполнителя.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">11. Заключительные положения</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Соглашение вступает в силу с момента начала использования сайта</li>
                  <li>Мы вправе изменять условия с уведомлением пользователей</li>
                  <li>Если часть условий признана недействительной, остальные остаются в силе</li>
                  <li>Применяется законодательство Российской Федерации</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">12. Контакты</h2>
                <p>
                  По вопросам соглашения обращайтесь: 
                  <a href="https://t.me/cocozzAAA" className="text-blue-400 hover:text-blue-300 ml-1" target="_blank" rel="noopener noreferrer">
                    Telegram
                  </a>
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-600">
              <a 
                href="/" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                ← Вернуться на главную
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;