import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Footer from '@/components/sections/Footer';

const Blog = () => {
  const blogPosts = [
    {
      slug: 'chatbot-konversiya-prodazhi',
      title: 'Как чат-бот увеличивает конверсию в продажах: кейсы и примеры',
      description: 'Разбираем реальные кейсы увеличения продаж с помощью чат-ботов. Цифры, факты и готовые стратегии для вашего бизнеса.',
      date: '09 сентября 2025',
      readTime: '8 мин',
      category: 'Кейсы',
      image: '🚀'
    },
    {
      slug: 'stoimost-razrabotki-chatbota-2024',
      title: 'Сколько стоит разработка чат-бота для малого бизнеса в 2024 году',
      description: 'Полный разбор цен на разработку чат-ботов: от простых до сложных решений. Что влияет на стоимость и как сэкономить.',
      date: '09 сентября 2025',
      readTime: '6 мин',
      category: 'Цены',
      image: '💰'
    },
    {
      slug: 'ii-assistent-dlya-nishi',
      title: 'ИИ-ассистент для стоматологии: как увеличить количество записей',
      description: 'Специализированное решение для стоматологических клиник. Автоматизация записей, консультаций и напоминаний пациентам.',
      date: '09 сентября 2025',
      readTime: '7 мин',
      category: 'Отрасли',
      image: '🦷'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Блог о чат-ботах и ИИ для бизнеса | Bot24.pro</title>
        <meta name="description" content="Экспертные статьи о внедрении ИИ-ассистентов, автоматизации продаж и увеличении конверсии с помощью чат-ботов" />
        <meta name="keywords" content="блог, чат-боты, ИИ для бизнеса, автоматизация продаж, кейсы, стоимость разработки" />
        <link rel="canonical" href="https://bot24.pro/blog" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Шапка блога */}
        <div className="container mx-auto px-4 py-20 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-600/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-blue-500/30">
              <Icon name="BookOpen" size={20} className="text-blue-400" />
              <span className="text-blue-300 font-medium">Экспертный блог</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Блог Bot24.pro
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Кейсы, гайды и экспертные материалы о внедрении ИИ-технологий в бизнес. 
              Изучайте реальный опыт и применяйте в своей компании.
            </p>
          </div>

          {/* Список статей */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link to={`/blog/${post.slug}`}>
                  <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl">{post.image}</span>
                      <div className="text-right">
                        <div className="text-blue-300 text-sm font-medium bg-blue-900/30 px-3 py-1 rounded-full border border-blue-500/30">
                          {post.category}
                        </div>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-3">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-400 mb-6 line-clamp-3 flex-grow">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                      <span>{post.date}</span>
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Призыв к действию */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">
                Хотите свой ИИ-ассистент?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Изучили наши кейсы? Готовы внедрить решение в свой бизнес? 
                Получите персональную консультацию и бесплатный аудит воронки продаж.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105"
                >
                  <Icon name="ArrowLeft" size={18} className="mr-2" />
                  На главную
                </Link>
                <a 
                  href="https://t.me/cocozzAAA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105"
                >
                  <Icon name="MessageCircle" size={18} className="mr-2" />
                  Заказать консультацию
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;