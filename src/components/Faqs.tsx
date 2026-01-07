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
    question: "¿Cómo Darwin AI evita errores de sus empleados digitales?",
    answer:
      "Las respuestas de Darwin son extremadamente precisas gracias a un proceso riguroso que incluye auditorías manuales, tests automáticos y análisis de sentimiento, el cual garantiza cero alucinaciones de parte de su IA.",
  },
  {
    question: "¿Qué otras tareas puede optimizar Darwin?",
    answer:
      "Darwin no solo responde preguntas, sino que puede ayudar a optimizar tareas como la gestión de agendas, el seguimiento de ventas, la atención al cliente y mucho más, siempre integrándose en tus flujos de trabajo existentes.",
  },
  {
    question: "¿La IA de Darwin aprende sola y evoluciona con las conversaciones?",
    answer:
      "Sí, Darwin está en constante aprendizaje. Con cada interacción, mejora su capacidad para ofrecer respuestas más precisas y adaptarse a tus procesos. Sin embargo, también puedes ajustar manualmente su comportamiento para alinearlo mejor con tus necesidades.",
  },
  {
    question: "¿Se le puede dar a Darwin una impronta propia del país de cada cliente?",
    answer:
      "¡Por supuesto! Darwin puede adaptarse al estilo y tono de comunicación local, reflejando la cultura y preferencias del país en el que operes, para que las interacciones sean más cercanas y naturales.",
  },
  {
    question: "¿Cuánto tiempo toma entrenar a Darwin?",
    answer:
      "El proceso de entrenamiento es rápido. En pocos días, puedes tener a Darwin completamente integrado y funcional, personalizado para tu negocio y con acceso a la información que necesita para operar eficientemente.",
  },
  {
    question: "¿Se puede integrar Darwin con nuestros sistemas para responder con información específica?",
    answer:
      "Sí, Darwin se conecta a tus sistemas internos, como CRMs, ERPs o bases de datos personalizadas, para ofrecer respuestas detalladas y específicas de cada cliente, asegurando que la información siempre esté actualizada.",
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
            Todo lo que Necesitas Saber sobre Darwin AI
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo Darwin AI puede transformar tus operaciones, automatizando procesos clave y mejorando la eficiencia de tu negocio.
          </p>
          <Button className="mt-6 rounded-full gap-2 group" size="lg">
            Prueba Darwin
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
