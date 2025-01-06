"use client";

import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, Award, Users } from "lucide-react";

const features = [
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Innovative Ideas",
    description: "Creative solutions that set your brand apart without breaking the bank.",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Proven Success",
    description: "Track record of delivering exceptional results for our clients.",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Industry Expertise",
    description: "Deep understanding of market trends and consumer behavior.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Personal Touch",
    description: "Dedicated team committed to your brand's success.",
  },
];

export function WhyUsSection({ inView }: { inView: boolean }) {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-lg bg-card shadow-lg hover:-translate-y-2 transition-transform"
          >
            <div className="text-primary mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}