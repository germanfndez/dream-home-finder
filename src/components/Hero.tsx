import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage1 from "@/assets/hero-real-estate-1.jpg";
import heroImage2 from "@/assets/hero-real-estate-2.jpg";

const Hero = () => {
  return (
    <section className="pt-16 pb-20 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight text-balance"
        >
          Close More Deals with Darwin
          <br />
          <span className="text-foreground">for Real Estate</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Automated answers to property inquiries, improving the customer experience.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <Button size="lg" className="rounded-full px-8 py-6 text-base gap-2 group shadow-lg hover:shadow-xl transition-all">
            Try Darwin now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Hero Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src={heroImage1}
              alt="Real estate agent showing properties"
              className="w-full h-[300px] md:h-[380px] object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src={heroImage2}
              alt="Real estate deal closing"
              className="w-full h-[300px] md:h-[380px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
