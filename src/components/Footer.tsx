
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#F8F7F1] pt-16 pb-8 relative overflow-hidden">
      {/* Saudi pattern decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#00643C] rounded-br-3xl"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00643C] rounded-bl-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00643C] rounded-tr-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#00643C] rounded-tl-3xl"></div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#00643C] via-[#8A6E3E] to-[#00643C]"></div>
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#00643C] via-[#8A6E3E] to-[#00643C]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80" 
                alt="سعراتي" 
                className="h-8 w-auto rounded-full border-2 border-[#00643C]"
              />
              <span className="text-xl font-bold text-[#00643C]">سعراتي</span>
            </div>
            <p className="text-gray-600 mb-4">
              تطبيق سعراتي هو رفيقك المثالي نحو حياة صحية أفضل، يساعدك في تتبع نظامك الغذائي وتحقيق أهدافك الصحية بكل سهولة.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#00643C] hover:text-[#8A6E3E] transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-[#00643C] hover:text-[#8A6E3E] transition-colors">
                <Twitter />
              </a>
              <a href="#" className="text-[#00643C] hover:text-[#8A6E3E] transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-[#00643C] hover:text-[#8A6E3E] transition-colors">
                <Youtube />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#00643C]">روابط مفيدة</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#8A6E3E] flex items-center">
                  <span className="inline-block w-2 h-2 bg-[#00643C] ml-2 rounded-full"></span>
                  عن سعراتي
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#8A6E3E] flex items-center">
                  <span className="inline-block w-2 h-2 bg-[#00643C] ml-2 rounded-full"></span>
                  فريق العمل
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#8A6E3E] flex items-center">
                  <span className="inline-block w-2 h-2 bg-[#00643C] ml-2 rounded-full"></span>
                  وظائف
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#8A6E3E] flex items-center">
                  <span className="inline-block w-2 h-2 bg-[#00643C] ml-2 rounded-full"></span>
                  مدونة سعراتي
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#8A6E3E] flex items-center">
                  <span className="inline-block w-2 h-2 bg-[#00643C] ml-2 rounded-full"></span>
                  الأخبار والأحداث
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#00643C]">الدعم الفني</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#8A6E3E] flex items-center">
                  <span className="inline-block w-2 h-2 bg-[#00643C] ml-2 rounded-full"></span>
                  مركز المساعدة
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#8A6E3E] flex items-center">
                  <span className="inline-block w-2 h-2 bg-[#00643C] ml-2 rounded-full"></span>
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#8A6E3E] flex items-center">
                  <span className="inline-block w-2 h-2 bg-[#00643C] ml-2 rounded-full"></span>
                  اتصل بنا
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#8A6E3E] flex items-center">
                  <span className="inline-block w-2 h-2 bg-[#00643C] ml-2 rounded-full"></span>
                  الشروط والأحكام
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#8A6E3E] flex items-center">
                  <span className="inline-block w-2 h-2 bg-[#00643C] ml-2 rounded-full"></span>
                  سياسة الخصوصية
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#00643C]">تحميل التطبيق</h3>
            <p className="text-gray-600 mb-4">
              قم بتحميل تطبيق سعراتي الآن وابدأ رحلتك نحو حياة صحية أفضل
            </p>
            <div className="flex flex-col gap-2">
              <a href="#" className="bg-white text-[#00643C] rounded-lg p-2 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors border border-[#00643C]">
                <img src="/app-store-icon.svg" alt="App Store" className="h-7 w-7" />
                <div className="text-start">
                  <div className="text-xs">تحميل من</div>
                  <div className="font-medium">App Store</div>
                </div>
              </a>
              <a href="#" className="bg-white text-[#00643C] rounded-lg p-2 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors border border-[#00643C]">
                <img src="/google-play-icon.svg" alt="Google Play" className="h-7 w-7" />
                <div className="text-start">
                  <div className="text-xs">تحميل من</div>
                  <div className="font-medium">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#00643C]/20 pt-8 text-center">
          <p className="text-[#00643C]">
            &copy; {new Date().getFullYear()} سعراتي. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
