
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AppDemo from "@/components/AppDemo";
import Testimonials from "@/components/Testimonials";
import MediaCoverage from "@/components/MediaCoverage";
import NextChallenge from "@/components/NextChallenge";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <AppDemo />
        <Testimonials />
        <MediaCoverage />
        <NextChallenge />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
