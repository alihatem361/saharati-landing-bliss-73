import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'أحمد محمود',
    role: 'مستخدم منذ 6 أشهر',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    content: 'تطبيق سعراتي غير حياتي بالكامل! فقدت 15 كيلو في 6 أشهر بفضل التتبع الدقيق للسعرات الحرارية والنصائح المفيدة. سهل الاستخدام وقاعدة البيانات رائعة للمأكولات العربية.',
    rating: 5,
  },
  {
    id: 2,
    name: 'سارة أحمد',
    role: 'مستخدمة منذ عام',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    content: 'أفضل تطبيق لتتبع السعرات الحرارية جربته! أحب التحديات اليومية والأسبوعية التي تحفزني على الاستمرار. خسرت 10 كيلو وحافظت على وزني المثالي لأكثر من 6 أشهر.',
    rating: 5,
  },
  {
    id: 3,
    name: 'محمد علي',
    role: 'مستخدم منذ 3 أشهر',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    content: 'تطبيق رائع لبناء العضلات وتتبع البروتين. ساعدني على زيادة كتلة العضلات وتحسين أدائي في الجيم. أحب ميزة الوصفات الصحية عالية البروتين.',
    rating: 4,
  },
  {
    id: 4,
    name: 'فاطمة حسن',
    role: 'مستخدمة منذ 8 أشهر',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    content: 'تطبيق مميز جداً ويساعد على تغيير نمط الحياة للأفضل. استخدمه لمتابعة نظامي الغذائي خلال فترة الحمل، والنصائح الخاصة بالحوامل مفيدة جداً.',
    rating: 5,
  },
  {
    id: 5,
    name: 'خالد العمري',
    role: 'مستخدم منذ 4 أشهر',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    content: 'تطبيق سعراتي ساعدني في السيطرة على مرض السكري. متابعة الكربوهيدرات والسكريات بدقة مع إمكانية تسجيل قراءات السكر في الدم ميزة رائعة.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);
  
  const handlePrev = () => {
    if (sliding) return;
    setSliding(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setSliding(false), 500);
  };
  
  const handleNext = () => {
    if (sliding) return;
    setSliding(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setSliding(false), 500);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);
  
  return (
    <section id="testimonials" className="py-20 bg-seraaty-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ماذا قال <span className="gradient-text">مستخدمينا</span> عنا
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            آلاف المستخدمين يثقون بتطبيق سعراتي في رحلتهم نحو حياة صحية أفضل
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div 
            ref={slideRef}
            className="overflow-hidden relative"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                  style={{ transform: index === activeIndex ? 'scale(1)' : 'scale(0.9)', opacity: index === activeIndex ? 1 : 0, transition: 'all 0.5s ease-in-out', position: 'relative', zIndex: index === activeIndex ? 10 : 0 }}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-start gap-4 mb-6">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-xl">{testimonial.name}</h3>
                        <p className="text-gray-500">{testimonial.role}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{testimonial.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full border-seraaty-primary hover:bg-seraaty-primary hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">السابق</span>
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex
                      ? 'bg-seraaty-primary'
                      : 'bg-gray-300 hover:bg-seraaty-primary/50'
                  }`}
                  aria-label={`انتقل إلى الشهادة ${index + 1}`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full border-seraaty-primary hover:bg-seraaty-primary hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">التالي</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
