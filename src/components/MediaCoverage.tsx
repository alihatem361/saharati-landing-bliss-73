
const MediaCoverage = () => {
  return (
    <section id="media" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            التغطية <span className="gradient-text">الإعلامية</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            تم تغطية تطبيق سعراتي في العديد من المنصات الإعلامية المرموقة
          </p>
        </div>
        
        <div className="relative">
          {/* Gradient fades */}
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Logos */}
          <div className="flex animate-marquee">
            <div className="flex items-center gap-16 flex-shrink-0">
              <div className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                <div className="text-xl font-bold text-gray-700">الجزيرة</div>
              </div>
              <div className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                <div className="text-xl font-bold text-gray-700">CNN</div>
              </div>
              <div className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                <div className="text-xl font-bold text-gray-700">العربية</div>
              </div>
              <div className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                <div className="text-xl font-bold text-gray-700">سكاي نيوز</div>
              </div>
              <div className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                <div className="text-xl font-bold text-gray-700">BBC</div>
              </div>
              <div className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                <div className="text-xl font-bold text-gray-700">TechCrunch</div>
              </div>
              <div className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                <div className="text-xl font-bold text-gray-700">فوربس</div>
              </div>
            </div>
            
            {/* Duplicate for continuous scroll */}
            <div className="flex items-center gap-16 flex-shrink-0">
              <div className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                <div className="text-xl font-bold text-gray-700">الجزيرة</div>
              </div>
              <div className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                <div className="text-xl font-bold text-gray-700">CNN</div>
              </div>
              <div className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                <div className="text-xl font-bold text-gray-700">العربية</div>
              </div>
              <div className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                <div className="text-xl font-bold text-gray-700">سكاي نيوز</div>
              </div>
              <div className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                <div className="text-xl font-bold text-gray-700">BBC</div>
              </div>
              <div className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                <div className="text-xl font-bold text-gray-700">TechCrunch</div>
              </div>
              <div className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                <div className="text-xl font-bold text-gray-700">فوربس</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* Media feature 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="font-bold text-lg mr-2 text-gray-700">الجزيرة</div>
            </div>
            <p className="text-gray-600 mb-4">
              "سعراتي من أفضل التطبيقات العربية في مجال الصحة والتغذية، يقدم حلول مبتكرة لمتابعة النظام الغذائي"
            </p>
            <a href="#" className="text-seraaty-primary font-medium hover:underline">قراءة المزيد</a>
          </div>
          
          {/* Media feature 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="font-bold text-lg mr-2 text-gray-700">TechCrunch</div>
            </div>
            <p className="text-gray-600 mb-4">
              "تطبيق سعراتي يعيد تعريف تطبيقات الصحة في الشرق الأوسط من خلال تقديم حلول مخصصة للمستخدم العربي"
            </p>
            <a href="#" className="text-seraaty-primary font-medium hover:underline">قراءة المزيد</a>
          </div>
          
          {/* Media feature 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="font-bold text-lg mr-2 text-gray-700">فوربس</div>
            </div>
            <p className="text-gray-600 mb-4">
              "نجاح مذهل لتطبيق سعراتي في جذب أكثر من مليون مستخدم في أقل من عام، وتحقيق نتائج ملموسة للمستخدمين"
            </p>
            <a href="#" className="text-seraaty-primary font-medium hover:underline">قراءة المزيد</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaCoverage;
