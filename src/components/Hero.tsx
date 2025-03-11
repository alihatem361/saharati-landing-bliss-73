
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden saudi-pattern">
      {/* Decorative elements inspired by Saudi geometric patterns */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-seraaty-primary/5 animate-desert-wave"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-seraaty-secondary/5 animate-desert-wave" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Main hero content */}
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6 p-2 bg-seraaty-light rounded-xl saudi-border border-2 shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <span className="text-seraaty-primary font-bold px-4 py-1">تطبيق صحي سعودي 100%</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <motion.span 
                className="block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="gradient-text">سعراتي</span> 
              </motion.span>
              <motion.span 
                className="block text-3xl md:text-5xl mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                طريقك نحو حياة صحية متوازنة
              </motion.span>
            </h1>
            
            <motion.p 
              className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              تطبيق سعراتي يساعدك على تتبع سعراتك الحرارية وتحقيق أهدافك الصحية
              بأسلوب سهل ومرن يناسب نمط الحياة السعودي
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Button className="btn-primary text-lg group relative overflow-hidden">
                <span className="relative z-10">تحميل التطبيق الآن</span>
                <span className="absolute inset-0 bg-seraaty-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Button>
              
              <Button className="btn-secondary text-lg">تعرف على المميزات</Button>
            </motion.div>
          </motion.div>
          
          {/* App showcase */}
          <motion.div 
            className="relative w-full max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="تطبيق سعراتي - طعام صحي" 
                className="w-full object-cover rounded-xl"
              />
              
              <motion.div 
                className="absolute top-4 right-4 bg-seraaty-primary text-white p-4 rounded-full shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.6, type: "spring" }}
              >
                <span className="font-bold text-xl">4.8 ★</span>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-4 left-4 bg-white p-3 rounded-xl shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.8, type: "spring" }}
              >
                <div className="text-lg font-medium text-gray-800">ساعد +100 ألف مستخدم</div>
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 w-64 h-64 bg-seraaty-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 left-0 transform -translate-x-1/4 w-80 h-80 bg-seraaty-secondary/10 rounded-full blur-3xl"></div>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <a href="#features" className="inline-block">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ArrowDown className="h-10 w-10 text-seraaty-primary mx-auto" />
                <span className="text-seraaty-primary font-medium">تعرف على المميزات</span>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
