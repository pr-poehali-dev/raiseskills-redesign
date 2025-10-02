import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-gradient-to-r from-primary via-purple-600 to-purple-500 rounded-3xl p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center text-white">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
                НИЧЕГО НЕ ПОНИМАЕТЕ<br />В ЭТИХ ПИТОНАХ И СКРЕТЧ?
              </h2>
              <p className="text-white/90 mb-4 leading-relaxed">
                Оставьте заявку и мы подробно расскажем, с чего начать, ответим на все вопросы и запишем на бесплатный урок.
              </p>
              <p className="text-white font-bold text-lg">
                Время ожидания: 15 минут
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="h-12 border-gray-200"
                  required
                />
                <Input
                  placeholder="Номер телефона"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="h-12 border-gray-200"
                  required
                />
                <Input
                  placeholder="Возраст ребёнка"
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  className="h-12 border-gray-200"
                  required
                />
                <Button 
                  type="submit"
                  className="w-full h-12 bg-yellow-400 text-primary hover:bg-yellow-300 font-bold text-lg"
                >
                  ОСТАВИТЬ ЗАЯВКУ
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
