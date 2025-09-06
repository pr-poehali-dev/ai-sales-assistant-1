import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface ContactSectionProps {
  isVisible: boolean;
  sectionRef: (el: HTMLElement | null) => void;
}

const ContactSection = ({ isVisible, sectionRef }: ContactSectionProps) => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно';
    } else {
      // Простая проверка: должен содержать минимум 10 цифр
      const phoneDigits = formData.phone.replace(/\D/g, '');
      if (phoneDigits.length < 10) {
        newErrors.phone = 'Телефон должен содержать минимум 10 цифр';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Создаём ссылку для Telegram с данными формы
      const telegramMessage = `Новая заявка на ИИ-ассистента!

Имя: ${formData.name}
Телефон: ${formData.phone}${formData.message ? `
Сообщение: ${formData.message}` : ''}`;
      const telegramUrl = `https://t.me/cocozzAAA?text=${encodeURIComponent(telegramMessage)}`;
      
      window.open(telegramUrl, '_blank');
      alert('Спасибо! Ваша заявка отправляется в Telegram.');
      setFormData({ name: '', phone: '', message: '' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      data-section="contact"
      className={`py-20 px-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 transition-all duration-1000 delay-600 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto max-w-4xl px-2 sm:px-4 ml-0 sm:ml-auto mr-auto">
        <div className="text-left sm:text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 px-2" style={{lineHeight: '1.2'}}>
            Готовы автоматизировать<br className="sm:hidden" /> продажи?
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            Свяжитесь с нами и получите персональную консультацию
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Оставьте заявку
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-300">Имя *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData(prev => ({ ...prev, name: e.target.value }));
                      if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                    }}
                    className="bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                    placeholder="Ваше имя"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-gray-300">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData(prev => ({ ...prev, phone: e.target.value }));
                      if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
                    }}
                    className="bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                    placeholder="+7 999 123 45 67 или 8 999 123 45 67"
                  />
                  {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-gray-300">Сообщение</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="bg-gray-700 border-gray-600 text-white focus:border-blue-500 resize-none"
                    rows={4}
                    placeholder="Опишите ваш бизнес и задачи..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg hover-scale"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="text-left sm:text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-6">
                Свяжитесь с нами
              </h3>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white hover-scale"
                  onClick={() => window.open('https://t.me/cocozzAAA', '_blank')}
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Telegram: @cocozzAAA
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full lg:w-auto border-gray-600 text-gray-300 hover:bg-gray-800 hover-scale"
                  onClick={() => window.open('https://t.me/iidlyabiz', '_blank')}
                >
                  <Icon name="Users" size={20} className="mr-2" />
                  Канал: ИИ для бизнеса
                </Button>
              </div>
            </div>
            
            <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Icon name="Gift" size={20} className="text-pink-400" />
                Бонусы при заказе:
              </h3>
              <div className="text-gray-300 space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Бесплатный аудит вашей воронки</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                  <span>3 шаблона под разные ниши</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Персональная настройка под вашу нишу</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;