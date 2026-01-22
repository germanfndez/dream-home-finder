import { motion } from "framer-motion";
import { Play } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Power up your business
            <br />
            <span className="text-primary">with the power of AI</span>
          </h2>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-card border border-border rounded-full shadow-lg hover:shadow-xl transition-all group"
        >
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary/90 transition-colors">
            <Play className="w-5 h-5 text-primary-foreground fill-primary-foreground ml-0.5" />
          </div>
          <span className="text-lg font-medium text-foreground">
            See how Darwin works
          </span>
        </motion.button>
      </div>
    </section>
  );
};

export default CtaSection;
