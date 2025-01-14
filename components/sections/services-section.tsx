"use client";

import { motion } from "framer-motion";
import { Share2, Palette, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Share2 className="h-12 w-12" />,
    title: "Social Media Marketing",
    description: "Strategic social media management to boost your brand's presence and engagement.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: <Palette className="h-12 w-12" />,
    title: "Website Design",
    description: "Beautiful, responsive websites that convert visitors into loyal customers.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: <Megaphone className="h-12 w-12" />,
    title: "Trendy Campaigns",
    description: "Creative campaigns that capture attention and drive meaningful engagement.",
    color: "from-orange-500/20 to-yellow-500/20",
  },
];

export function ServicesSection({ inView }: { inView: boolean }) {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative h-[400px] md:h-[150px]"
        >

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 gradient-text">
        Core Services
      </h2>
        </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2 }}
            className={`p-8 rounded-lg bg-gradient-to-br ${service.color} relative overflow-hidden group`}
          >
            <div className="absolute inset-0 bg-card/90 backdrop-blur-sm" />
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.2 }}
                className="mb-6 text-primary"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                Learn More
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}