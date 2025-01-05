"use client";

import { motion } from "framer-motion";
import { Users2, Trophy, TrendingUp, Globe2 } from "lucide-react";

const stats = [
  {
    icon: <Users2 className="h-6 w-6 text-primary" />,
    value: "500+",
    label: "Happy Clients",
  },
  {
    icon: <Trophy className="h-6 w-6 text-secondary" />,
    value: "150%",
    label: "Average Growth",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-accent" />,
    value: "10M+",
    label: "Social Reach",
  },
  {
    icon: <Globe2 className="h-6 w-6 text-primary" />,
    value: "25+",
    label: "Countries",
  },
];

export function Stats({ inView }: { inView: boolean }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex justify-center mb-2">{stat.icon}</div>
          <motion.div
            className="text-3xl font-bold mb-1"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            {stat.value}
          </motion.div>
          <div className="text-muted-foreground">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}