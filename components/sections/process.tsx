"use client";

import { motion } from "framer-motion";
import { Search, PenTool, BarChart2, Rocket } from "lucide-react";

const steps = [
  {
    icon: <Search className="h-8 w-8" />,
    title: "Research & Analysis",
    description: "Deep market research and competitor analysis to identify opportunities.",
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: "Strategy Development",
    description: "Crafting tailored marketing strategies aligned with your goals.",
  },
  {
    icon: <BarChart2 className="h-8 w-8" />,
    title: "Implementation",
    description: "Executing campaigns with precision and continuous optimization.",
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Growth & Scaling",
    description: "Monitoring results and scaling successful strategies.",
  },
];

export function Process({ inView }: { inView: boolean }) {
  return (
    <div className="relative">
      <div className="absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 md:block hidden" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2 }}
          >
            <motion.div
              className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 relative z-10"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: index * 0.2 + 0.2 }}
            >
              <div className="text-white">{step.icon}</div>
            </motion.div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}