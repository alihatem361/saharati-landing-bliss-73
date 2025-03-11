
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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

// Animation for counting up numbers
const CountUp = ({ end, duration = 2.5, className = "" }: { end: number, duration?: number, className?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const requestRef = useRef<number>();

  useEffect(() => {
    startTimeRef.current = performance.now();
    requestRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [end]);

  const animate = (timestamp: number) => {
    const elapsed = timestamp - startTimeRef.current;
    const progress = Math.min(elapsed / (duration * 1000), 1);
    
    // Easing function for smoother animation
    const easeOutQuart = (x: number) => 1 - Math.pow(1 - x, 4);
    const easedProgress = easeOutQuart(progress);
    
    countRef.current = Math.floor(easedProgress * end);
    setCount(countRef.current);
    
    if (progress < 1) {
      requestRef.current = requestAnimationFrame(animate);
    }
  };

  return <span className={className}>{count.toLocaleString()}</span>;
};

const NextChallenge = () => {
  // Set the countdown to be 30 days from now
  const challengeDate = new Date();
  challengeDate.setDate(challengeDate.getDate() + 30);
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(challengeDate));
  const [animationStarted, setAnimationStarted] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(challengeDate));
    }, 1000);
    
    // Start animations after 500ms delay
    const animationTimer = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(animationTimer);
    };
  }, [timeLeft]);
  
  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };
  
  return (
    <section id="challenge" className="py-20 bg-seraaty-primary text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            انضم إلى <span className="text-seraaty-light">التحدي القادم</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            شارك مع آلاف المستخدمين في تحدي سعراتي الشهري لخسارة الوزن وتحسين الصحة
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12"
          >
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center relative overflow-hidden group"
            >
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-1 bg-seraaty-light opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <div className="text-4xl md:text-5xl font-bold mb-2">{formatNumber(timeLeft.days)}</div>
              <div className="text-white/80">يوم</div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center relative overflow-hidden group"
            >
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute bottom-0 left-0 h-1 bg-seraaty-light opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <div className="text-4xl md:text-5xl font-bold mb-2">{formatNumber(timeLeft.hours)}</div>
              <div className="text-white/80">ساعة</div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center relative overflow-hidden group"
            >
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute bottom-0 left-0 h-1 bg-seraaty-light opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <div className="text-4xl md:text-5xl font-bold mb-2">{formatNumber(timeLeft.minutes)}</div>
              <div className="text-white/80">دقيقة</div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center relative overflow-hidden group"
            >
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute bottom-0 left-0 h-1 bg-seraaty-light opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <motion.div 
                animate={{ 
                  opacity: [1, 0.7, 1],
                  scale: [1, 1.03, 1]
                }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
                className="text-4xl md:text-5xl font-bold mb-2"
              >
                {formatNumber(timeLeft.seconds)}
              </motion.div>
              <div className="text-white/80">ثانية</div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-6 items-center justify-center mb-12"
          >
            <motion.div 
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl flex gap-4 items-center relative overflow-hidden"
            >
              <motion.div 
                variants={pulseVariants}
                animate="pulse"
                className="text-4xl font-bold"
              >
                {animationStarted ? <CountUp end={5783} className="text-4xl font-bold" /> : "0"}
              </motion.div>
              <div className="text-white/80">مشارك حتى الآن</div>
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute top-0 right-0 w-1 bg-seraaty-light"
              />
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl flex gap-4 items-center relative overflow-hidden"
            >
              <motion.div 
                variants={pulseVariants}
                animate="pulse"
                className="text-4xl font-bold"
              >
                {animationStarted ? <CountUp end={25000} className="text-4xl font-bold" /> : "0"}
              </motion.div>
              <div className="text-white/80">ريال جوائز</div>
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute top-0 right-0 w-1 bg-seraaty-light"
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-white/90 mb-8 text-lg"
            >
              سجل الآن واستعد للتحدي القادم. اتبع خطة غذائية صحية، مارس الرياضة، وتنافس مع المشاركين الآخرين لفرصة الفوز بالجوائز!
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="bg-white text-seraaty-primary hover:bg-seraaty-light font-bold text-lg px-8 py-3 rounded-full">
                  سجل في التحدي الآن
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-3 rounded-full">
                  معرفة التفاصيل
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NextChallenge;
