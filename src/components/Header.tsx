
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Download } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80" 
            alt="سعراتي" 
            className="h-10 w-auto rounded-full"
          />
          <span className="text-xl font-bold gradient-text">سعراتي</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="font-medium text-gray-700 hover:text-seraaty-primary transition-colors">
            المميزات
          </a>
          <a href="#testimonials" className="font-medium text-gray-700 hover:text-seraaty-primary transition-colors">
            آراء المستخدمين
          </a>
          <a href="#media" className="font-medium text-gray-700 hover:text-seraaty-primary transition-colors">
            التغطية الإعلامية
          </a>
          <a href="#challenge" className="font-medium text-gray-700 hover:text-seraaty-primary transition-colors">
            التحدي القادم
          </a>
          <Button className="btn-primary flex items-center gap-2">
            <Download size={18} />
            <span>تحميل التطبيق</span>
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">فتح القائمة</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80vw] sm:w-[380px]">
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-2">
                  <img 
                    src="https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80" 
                    alt="سعراتي" 
                    className="h-8 w-auto rounded-full"
                  />
                  <span className="text-lg font-bold gradient-text">سعراتي</span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex flex-col gap-6 mt-8">
                <a 
                  href="#features" 
                  className="text-lg font-medium px-2 py-2 hover:bg-seraaty-light/20 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  المميزات
                </a>
                <a 
                  href="#testimonials" 
                  className="text-lg font-medium px-2 py-2 hover:bg-seraaty-light/20 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  آراء المستخدمين
                </a>
                <a 
                  href="#media" 
                  className="text-lg font-medium px-2 py-2 hover:bg-seraaty-light/20 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  التغطية الإعلامية
                </a>
                <a 
                  href="#challenge" 
                  className="text-lg font-medium px-2 py-2 hover:bg-seraaty-light/20 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  التحدي القادم
                </a>
              </div>
              <div className="mt-auto pb-8">
                <Button className="btn-primary w-full flex items-center justify-center gap-2">
                  <Download size={18} />
                  <span>تحميل التطبيق</span>
                </Button>
                <div className="flex justify-center gap-4 mt-6">
                  <a href="#" className="text-gray-500 hover:text-seraaty-primary transition-colors">العربية</a>
                  <a href="#" className="text-gray-500 hover:text-seraaty-primary transition-colors">English</a>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
