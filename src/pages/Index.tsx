import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntegrationLogos from "@/components/IntegrationLogos";
import ChatDemo from "@/components/ChatDemo";
import Features from "@/components/Features";
import CtaSection from "@/components/CtaSection";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <IntegrationLogos />
        <ChatDemo />
        <Features />
        <CtaSection />
        <Faqs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
