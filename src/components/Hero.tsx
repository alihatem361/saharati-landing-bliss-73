
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-seraaty-light/30 to-transparent -z-10"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-right md:pr-8 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">سعراتي</span> - طريقك نحو
              <br />
              <span className="text-seraaty-primary">حياة صحية</span> أفضل
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              تطبيق سعراتي يساعدك على تتبع سعراتك الحرارية وتحقيق أهدافك الصحية بأسلوب سهل ومرن يناسب نمط حياتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
              <Button className="btn-primary">تحميل من App Store</Button>
              <Button className="btn-secondary">تحميل من Google Play</Button>
            </div>
            <div className="hidden md:flex items-center justify-center mt-16">
              <a href="#features" className="animate-bounce">
                <ArrowDown className="h-10 w-10 text-seraaty-primary" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative animate-fade-in-right">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="تطبيق سعراتي - طعام صحي" 
                className="mx-auto md:mr-0 max-w-full md:max-w-lg animate-float rounded-2xl shadow-2xl object-cover" 
              />
              <div className="absolute -top-6 -right-6 bg-seraaty-primary text-white p-4 rounded-full shadow-lg">
                <span className="font-bold text-lg">4.8 ★</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg">
                <div className="text-sm font-medium text-gray-800">ساعد +100 ألف مستخدم</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
