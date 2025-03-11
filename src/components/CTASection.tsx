
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-seraaty-dark to-seraaty-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ابدأ رحلتك نحو حياة صحية أفضل مع سعراتي
          </h2>
          <p className="text-xl text-white/90 mb-10">
            انضم لأكثر من مليون مستخدم يثقون بتطبيق سعراتي لتحقيق أهدافهم الصحية
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button className="bg-white text-seraaty-primary hover:bg-seraaty-light hover:text-seraaty-primary font-bold text-lg px-8 py-6 h-auto rounded-xl flex items-center gap-2">
              <Download className="h-6 w-6" />
              <div className="text-start">
                <div className="text-xs">تحميل من</div>
                <div className="font-bold">App Store</div>
              </div>
            </Button>
            
            <Button className="bg-white text-seraaty-primary hover:bg-seraaty-light hover:text-seraaty-primary font-bold text-lg px-8 py-6 h-auto rounded-xl flex items-center gap-2">
              <Download className="h-6 w-6" />
              <div className="text-start">
                <div className="text-xs">تحميل من</div>
                <div className="font-bold">Google Play</div>
              </div>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="text-4xl font-bold">4.8</div>
              <div className="flex flex-col items-start">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm">App Store</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="text-4xl font-bold">4.7</div>
              <div className="flex flex-col items-start">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm">Google Play</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
