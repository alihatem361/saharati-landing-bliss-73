
import { Button } from "@/components/ui/button";

const AppDemo = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-seraaty-light/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -z-10 w-72 h-72 bg-seraaty-primary/10 rounded-full -top-10 -left-10"></div>
              <img 
                src="/app-screens.png" 
                alt="واجهة تطبيق سعراتي" 
                className="relative z-10 mx-auto drop-shadow-2xl max-w-md" 
              />
              <div className="absolute -z-10 w-40 h-40 bg-seraaty-accent/10 rounded-full -bottom-5 -right-5"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">واجهة <span className="gradient-text">سهلة الاستخدام</span> تناسب الجميع</h2>
            <p className="text-lg text-gray-700 mb-8">
              صممنا تطبيق سعراتي ليكون سهل الاستخدام للجميع، بواجهة بسيطة وجذابة تساعدك على تتبع نظامك الغذائي دون تعقيد.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-seraaty-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-seraaty-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">إضافة وجباتك بسرعة</h3>
                  <p className="text-gray-600">
                    إضافة الوجبات بسهولة من خلال البحث السريع أو مسح الباركود للأطعمة المعلبة
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-seraaty-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-seraaty-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">متابعة تقدمك بوضوح</h3>
                  <p className="text-gray-600">
                    تقارير ورسوم بيانية سهلة الفهم تساعدك على رؤية تقدمك بشكل واضح
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-seraaty-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-seraaty-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">تخصيص كامل لاحتياجاتك</h3>
                  <p className="text-gray-600">
                    ضبط أهدافك الشخصية والحصول على خطط غذائية تناسب احتياجاتك الخاصة
                  </p>
                </div>
              </div>
            </div>
            
            <Button className="btn-primary">تجربة التطبيق الآن</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDemo;
