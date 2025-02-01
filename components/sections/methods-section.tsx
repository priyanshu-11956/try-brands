"use client";

import { motion } from "framer-motion";
import { Droplets, Lightbulb, Users } from "lucide-react";
import Image from "next/image";

const methods = [
  {
    icon: <Droplets className="h-10 w-10 font-extrabold" />,
    title: "Branded Water Bottles",
    description: "Amplify visibility through unique branded merchandise that keeps your brand in hand.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 font-extrabold" />,
    title: "Creative Campaigns",
    description: "On-the-ground campaigns that create real connections with your audience for better branding.",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Community Engagement",
    description: "Building lasting relationships through meaningful interactions.",
  },
];

export function MethodsSection({ inView }: { inView: boolean }) {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative h-[100px] md:h-[150px]"
      >

        <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text">
          Unique Methods
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative h-[300px] md:h-[400px]"
        >
          <Image
            src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?auto=format&fit=crop&q=80"
            alt="Creative marketing methods"
            fill
            className="object-cover rounded-lg"
          />
        </motion.div>

        <div className="space-y-12">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {method.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-muted-foreground">{method.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}