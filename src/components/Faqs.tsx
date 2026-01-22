import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Darwin AI avoid mistakes from its digital employees?",
    answer:
      "Darwin's answers are highly accurate thanks to a rigorous process that includes manual audits, automated tests, and sentiment analysis—ensuring zero hallucinations.",
  },
  {
    question: "What other tasks can Darwin optimize?",
    answer:
      "Darwin does more than answer questions. It can optimize scheduling, sales follow-up, customer support, and more—while integrating into your existing workflows.",
  },
  {
    question: "Does Darwin learn and improve through conversations?",
    answer:
      "Yes. Darwin is constantly learning. With each interaction, it improves accuracy and adapts to your processes. You can also fine-tune its behavior to better match your needs.",
  },
  {
    question: "Can Darwin match the local style of each country?",
    answer:
      "Absolutely. Darwin can adapt to the local tone and communication style, reflecting culture and preferences so interactions feel natural and close to your audience.",
  },
  {
    question: "How long does it take to train Darwin?",
    answer:
      "The training process is fast. In just a few days, you can have Darwin fully integrated and running—customized for your business and connected to the information it needs.",
  },
  {
    question: "Can Darwin integrate with our systems to answer with specific information?",
    answer:
      "Yes. Darwin connects to internal systems like CRMs, ERPs, or custom databases to provide detailed, customer-specific answers—keeping information always up to date.",
  },
];

const Faqs = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            FAQs
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
              Everything You Need to Know About Darwin AI
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn how Darwin AI can transform your operations by automating key processes and improving business efficiency.
          </p>
          <Button className="mt-6 rounded-full gap-2 group" size="lg">
              Try Darwin
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-5 text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Faqs;
