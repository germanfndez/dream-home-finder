import { motion } from "framer-motion";

const logos = [
  { name: "WhatsApp", color: "#25D366" },
  { name: "HubSpot", color: "#FF7A59" },
  { name: "Salesforce", color: "#00A1E0" },
  { name: "Slack", color: "#4A154B" },
  { name: "Zapier", color: "#FF4F00" },
  { name: "Microsoft", color: "#00BCF2" },
  { name: "Google", color: "#4285F4" },
  { name: "Zoho", color: "#D32F2F" },
];

const IntegrationLogos = () => {
  return (
    <section className="py-12 border-y border-border bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider"
        >
          Integrated with the best tools
        </motion.h2>
      </div>

      {/* Marquee */}
      <div className="relative flex overflow-hidden">
        <div className="flex marquee gap-12 py-4">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-6 py-3 bg-card rounded-lg shadow-sm border border-border/50 min-w-max"
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: logo.color }}
              />
              <span className="text-sm font-medium text-foreground whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationLogos;
