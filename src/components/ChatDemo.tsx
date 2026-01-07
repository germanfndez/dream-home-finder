import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatDemo = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Muestra y arrienda propiedades por chat
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Tu asistente virtual agenda visitas, comparte fotos y detalles de departamentos o casas, y da seguimiento a interesados. Una forma más rápida de captar clientes y cerrar operaciones.
            </p>
            <Button className="mt-8 rounded-full gap-2 group" size="lg">
              Prueba darwin ahora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Chat Demo UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
              {/* Chat Header */}
              <div className="flex items-center gap-3 p-4 border-b border-border">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">MG</span>
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">María González</h4>
                  <p className="text-xs text-green-600">En línea ahora</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-4 space-y-4 bg-secondary/20 min-h-[300px]">
                {/* User Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex justify-end"
                >
                  <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-md px-4 py-2.5 max-w-[80%]">
                    <p className="text-sm">Hola, busco un departamento de 2 habitaciones</p>
                    <span className="text-xs text-primary-foreground/70 block text-right mt-1">15:04</span>
                  </div>
                </motion.div>

                {/* AI Response */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="flex justify-start"
                >
                  <div className="bg-card border border-border rounded-2xl rounded-bl-md px-4 py-2.5 max-w-[80%] shadow-sm">
                    <p className="text-sm text-foreground">
                      ¡Hola! 👋 Tengo varias opciones excelentes disponibles. ¿Prefieres zona norte o sur de la ciudad?
                    </p>
                    <span className="text-xs text-muted-foreground block text-right mt-1">15:04</span>
                  </div>
                </motion.div>

                {/* Property Card Preview */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="flex justify-start"
                >
                  <div className="bg-card border border-border rounded-2xl overflow-hidden max-w-[85%] shadow-sm">
                    <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">📸 3 fotos del departamento</span>
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-medium text-foreground">Depto. 2 hab. - Providencia</p>
                      <p className="text-xs text-muted-foreground mt-0.5">$850.000/mes • 65m²</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-border">
                <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
                  <input
                    type="text"
                    placeholder="Escribe un mensaje..."
                    className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                  />
                  <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-primary-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;
