
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const calculateTimeLeft = (targetDate: Date) => {
  const difference = +targetDate - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};

const NextChallenge = () => {
  // Set the countdown to be 30 days from now
  const challengeDate = new Date();
  challengeDate.setDate(challengeDate.getDate() + 30);
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(challengeDate));
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(challengeDate));
    }, 1000);
    
    return () => clearTimeout(timer);
  });
  
  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };
  
  return (
    <section id="challenge" className="py-20 bg-seraaty-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            انضم إلى <span className="text-seraaty-light">التحدي القادم</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            شارك مع آلاف المستخدمين في تحدي سعراتي الشهري لخسارة الوزن وتحسين الصحة
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{formatNumber(timeLeft.days)}</div>
              <div className="text-white/80">يوم</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{formatNumber(timeLeft.hours)}</div>
              <div className="text-white/80">ساعة</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{formatNumber(timeLeft.minutes)}</div>
              <div className="text-white/80">دقيقة</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{formatNumber(timeLeft.seconds)}</div>
              <div className="text-white/80">ثانية</div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl flex gap-4 items-center">
              <div className="text-4xl font-bold">5,783</div>
              <div className="text-white/80">مشارك حتى الآن</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl flex gap-4 items-center">
              <div className="text-4xl font-bold">25,000</div>
              <div className="text-white/80">ريال جوائز</div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-white/90 mb-8 text-lg">
              سجل الآن واستعد للتحدي القادم. اتبع خطة غذائية صحية، مارس الرياضة، وتنافس مع المشاركين الآخرين لفرصة الفوز بالجوائز!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-seraaty-primary hover:bg-seraaty-light font-bold text-lg px-8 py-3 rounded-full">
                سجل في التحدي الآن
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-3 rounded-full">
                معرفة التفاصيل
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextChallenge;
