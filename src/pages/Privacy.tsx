import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Политика конфиденциальности | Bot24.pro</title>
        <meta name="description" content="Политика конфиденциальности сервиса Bot24.pro - ИИ-ассистенты для бизнеса" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bot24.pro/privacy" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20 max-w-4xl">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">
              Политика конфиденциальности
            </h1>
            
            <div className="prose prose-invert max-w-none space-y-6">
              <div className="text-gray-300">
                <p className="mb-4"><strong>Дата вступления в силу:</strong> 09 сентября 2025 года</p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Общие положения</h2>
                <p>
                  Настоящая Политика конфиденциальности регулирует порядок обработки персональных данных 
                  пользователей сайта bot24.pro (далее — «Сайт»), принадлежащего Bot24.pro (далее — «Администрация»).
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Собираемая информация</h2>
                <p>Мы можем собирать следующие типы информации:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Контактные данные (имя, email, телефон)</li>
                  <li>Информация о компании и сфере деятельности</li>
                  <li>Техническая информация (IP-адрес, тип браузера, операционная система)</li>
                  <li>Данные о взаимодействии с сайтом</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Цели обработки данных</h2>
                <p>Ваши персональные данные обрабатываются для:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Предоставления услуг по созданию ИИ-ассистентов</li>
                  <li>Консультации и технической поддержки</li>
                  <li>Информирования о новых услугах и предложениях</li>
                  <li>Улучшения качества сервиса</li>
                  <li>Выполнения правовых обязательств</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Правовые основания обработки</h2>
                <p>
                  Обработка персональных данных осуществляется на основании согласия субъекта персональных данных, 
                  исполнения договора, правовых обязательств и законных интересов администрации сайта.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Передача данных третьим лицам</h2>
                <p>
                  Мы не передаем ваши персональные данные третьим лицам, за исключением случаев, 
                  предусмотренных законодательством РФ, или с вашего явного согласия.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Безопасность данных</h2>
                <p>
                  Мы применяем технические и организационные меры для защиты персональных данных 
                  от неправомерного доступа, изменения, раскрытия или уничтожения.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Ваши права</h2>
                <p>Вы имеете право:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Получать информацию об обработке ваших персональных данных</li>
                  <li>Требовать уточнения, блокирования или уничтожения данных</li>
                  <li>Отзывать согласие на обработку данных</li>
                  <li>Обратиться с жалобой в надзорный орган</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Использование cookies</h2>
                <p>
                  Сайт использует файлы cookie для улучшения пользовательского опыта и аналитики. 
                  Вы можете отключить cookie в настройках браузера.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Контактная информация</h2>
                <p>
                  По вопросам обработки персональных данных обращайтесь: 
                  <a href="https://t.me/cocozzAAA" className="text-blue-400 hover:text-blue-300 ml-1" target="_blank" rel="noopener noreferrer">
                    Telegram
                  </a>
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Изменения политики</h2>
                <p>
                  Мы оставляем за собой право изменять настоящую Политику конфиденциальности. 
                  Актуальная версия всегда доступна на данной странице.
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

export default Privacy;