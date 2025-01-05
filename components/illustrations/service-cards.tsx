"use client";

import { motion } from "framer-motion";
import { Rocket, TrendingUp, Target } from "lucide-react";

const services = [
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Social Media Marketing",
    description: "Strategic social media management to boost your brand's presence.",
    gradient: "from-pink-500/20 to-purple-500/20",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Website Design",
    description: "Beautiful, responsive websites that convert visitors into customers.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Trendy Campaigns",
    description: "Creative campaigns that capture attention and drive engagement.",
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
];

export function ServiceCards({ inView }: { inView: boolean }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className={`p-6 rounded-lg shadow-lg relative overflow-hidden bg-gradient-to-br ${service.gradient}`}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.2 }}
          whileHover={{ y: -5 }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-card/80 backdrop-blur-sm" />
          <div className="relative z-10">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}