
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="سعراتي" className="h-8 w-auto" />
              <span className="text-xl font-bold gradient-text">سعراتي</span>
            </div>
            <p className="text-gray-600 mb-4">
              تطبيق سعراتي هو رفيقك المثالي نحو حياة صحية أفضل، يساعدك في تتبع نظامك الغذائي وتحقيق أهدافك الصحية بكل سهولة.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-seraaty-primary">
                <Facebook />
              </a>
              <a href="#" className="text-gray-500 hover:text-seraaty-primary">
                <Twitter />
              </a>
              <a href="#" className="text-gray-500 hover:text-seraaty-primary">
                <Instagram />
              </a>
              <a href="#" className="text-gray-500 hover:text-seraaty-primary">
                <Youtube />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">روابط مفيدة</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-seraaty-primary">عن سعراتي</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-seraaty-primary">فريق العمل</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-seraaty-primary">وظائف</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-seraaty-primary">مدونة سعراتي</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-seraaty-primary">الأخبار والأحداث</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">الدعم الفني</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-seraaty-primary">مركز المساعدة</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-seraaty-primary">الأسئلة الشائعة</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-seraaty-primary">اتصل بنا</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-seraaty-primary">الشروط والأحكام</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-seraaty-primary">سياسة الخصوصية</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">تحميل التطبيق</h3>
            <p className="text-gray-600 mb-4">
              قم بتحميل تطبيق سعراتي الآن وابدأ رحلتك نحو حياة صحية أفضل
            </p>
            <div className="flex flex-col gap-2">
              <a href="#" className="bg-black text-white rounded-lg p-2 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                <img src="/app-store-icon.svg" alt="App Store" className="h-7 w-7" />
                <div className="text-start">
                  <div className="text-xs">تحميل من</div>
                  <div className="font-medium">App Store</div>
                </div>
              </a>
              <a href="#" className="bg-black text-white rounded-lg p-2 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                <img src="/google-play-icon.svg" alt="Google Play" className="h-7 w-7" />
                <div className="text-start">
                  <div className="text-xs">تحميل من</div>
                  <div className="font-medium">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} سعراتي. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
