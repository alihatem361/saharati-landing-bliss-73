
import { Check, TrendingUp, Database, Zap, Clock, Award } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">مميزات تطبيق <span className="gradient-text">سعراتي</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            صمم تطبيق سعراتي ليكون رفيقك اليومي لتحقيق نمط حياة صحي ومتوازن بطريقة سهلة ومرنة
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="feature-card group">
            <div className="h-14 w-14 bg-seraaty-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-seraaty-primary/20 transition-colors">
              <Database className="h-7 w-7 text-seraaty-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">قاعدة بيانات طعام واسعة</h3>
            <p className="text-gray-600 mb-4">
              تحتوي على أكثر من 10,000 صنف طعام مع المعلومات الغذائية الكاملة خاصة بالمطبخ العربي
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-seraaty-primary ml-2" />
                <span className="text-sm text-gray-700">معلومات غذائية دقيقة</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-seraaty-primary ml-2" />
                <span className="text-sm text-gray-700">تحديثات مستمرة للأطعمة</span>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-24 h-24 bg-seraaty-light/50 rounded-full arrow-pointer"></div>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="feature-card group">
            <div className="h-14 w-14 bg-seraaty-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-seraaty-primary/20 transition-colors">
              <TrendingUp className="h-7 w-7 text-seraaty-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">تتبع ذكي للتقدم</h3>
            <p className="text-gray-600 mb-4">
              تتبع تقدمك بسهولة من خلال رسوم بيانية واضحة وتقارير أسبوعية وشهرية مفصلة
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-seraaty-primary ml-2" />
                <span className="text-sm text-gray-700">رسوم بيانية تفاعلية</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-seraaty-primary ml-2" />
                <span className="text-sm text-gray-700">تقارير مخصصة</span>
              </div>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="feature-card group">
            <div className="h-14 w-14 bg-seraaty-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-seraaty-primary/20 transition-colors">
              <Zap className="h-7 w-7 text-seraaty-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">خطط غذائية مخصصة</h3>
            <p className="text-gray-600 mb-4">
              خطط غذائية مخصصة تناسب احتياجاتك وأهدافك الشخصية سواء لإنقاص الوزن أو زيادة العضلات
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-seraaty-primary ml-2" />
                <span className="text-sm text-gray-700">تخصيص كامل لأهدافك</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-seraaty-primary ml-2" />
                <span className="text-sm text-gray-700">اقتراحات وجبات صحية</span>
              </div>
            </div>
          </div>
          
          {/* Feature 4 */}
          <div className="feature-card group">
            <div className="h-14 w-14 bg-seraaty-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-seraaty-primary/20 transition-colors">
              <Clock className="h-7 w-7 text-seraaty-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">تذكيرات ذكية</h3>
            <p className="text-gray-600 mb-4">
              تذكيرات مخصصة لشرب الماء وتناول الوجبات وممارسة التمارين بناءً على جدولك اليومي
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-seraaty-primary ml-2" />
                <span className="text-sm text-gray-700">جدولة ذكية</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-seraaty-primary ml-2" />
                <span className="text-sm text-gray-700">تنبيهات مخصصة</span>
              </div>
            </div>
          </div>
          
          {/* Feature 5 */}
          <div className="feature-card group">
            <div className="h-14 w-14 bg-seraaty-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-seraaty-primary/20 transition-colors">
              <Award className="h-7 w-7 text-seraaty-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">تحديات وجوائز</h3>
            <p className="text-gray-600 mb-4">
              تحديات أسبوعية وشهرية تحفزك على الاستمرار مع نظام المكافآت والشارات
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-seraaty-primary ml-2" />
                <span className="text-sm text-gray-700">تحديات جماعية</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-seraaty-primary ml-2" />
                <span className="text-sm text-gray-700">نظام مكافآت محفز</span>
              </div>
            </div>
          </div>
          
          {/* Feature 6 */}
          <div className="feature-card group">
            <div className="h-14 w-14 bg-seraaty-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-seraaty-primary/20 transition-colors">
              <img src="/community-icon.svg" alt="مجتمع" className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">مجتمع داعم</h3>
            <p className="text-gray-600 mb-4">
              انضم لمجتمع المستخدمين للحصول على الدعم والنصائح ومشاركة قصص النجاح
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-seraaty-primary ml-2" />
                <span className="text-sm text-gray-700">مجموعات دعم</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-seraaty-primary ml-2" />
                <span className="text-sm text-gray-700">نصائح من الخبراء</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
