import { motion } from "framer-motion";
import featureConsultation from "@/assets/feature-consultation.jpg";
import featureScheduling from "@/assets/feature-scheduling.jpg";
import featureConversion from "@/assets/feature-conversion.jpg";

const features = [
  {
    title: "Automatiza Consultas de Propiedades en Tiempo Real",
    description:
      "Responde preguntas sobre características, precios y disponibilidad de propiedades con rapidez y precisión, mejorando la satisfacción del cliente.",
    image: featureConsultation,
    reverse: false,
  },
  {
    title: "Facilita la Programación de Visitas",
    description:
      "Darwin automatiza el agendamiento de visitas y el seguimiento, optimizando el trabajo de los agentes.",
    image: featureScheduling,
    reverse: true,
  },
  {
    title: "Mejora la Conversión y la Eficiencia",
    description:
      "Darwin guía a los clientes hacia decisiones informadas, ayudando a cerrar más ventas y optimizando los recursos de tu equipo.",
    image: featureConversion,
    reverse: false,
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl space-y-20">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`grid lg:grid-cols-2 gap-12 items-center ${
              feature.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className={feature.reverse ? "lg:order-2" : ""}>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                {feature.title}
              </h3>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
            <div className={feature.reverse ? "lg:order-1" : ""}>
              <div className="overflow-hidden rounded-2xl shadow-xl card-elevated">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-[280px] md:h-[340px] object-cover"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
