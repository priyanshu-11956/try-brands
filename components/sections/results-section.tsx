"use client";

import { motion } from "framer-motion";
import { BarChart, Target, TrendingUp } from "lucide-react";

const results = [
  {
    icon: <Target className="h-12 w-12" />,
    title: "Data-Driven Strategies",
    description: "Our approach is backed by solid data and analytics, ensuring every decision is informed and effective.",
    stat: "98%",
    statLabel: "Success Rate",
  },
  {
    icon: <TrendingUp className="h-12 w-12" />,
    title: "Measurable Results",
    description: "Track your growth with clear metrics and regular performance reports.",
    stat: "150%",
    statLabel: "Average ROI",
  },
  {
    icon: <BarChart className="h-12 w-12" />,
    title: "Full-Funnel Approach",
    description: "From awareness to conversion, we optimize every step of the customer journey.",
    stat: "3x",
    statLabel: "Conversion Rate",
  },
];

export function ResultsSection({ inView }: { inView: boolean }) {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">
        Results-Oriented Approach
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {results.map((result, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2 }}
            className="p-6 rounded-lg bg-card shadow-lg relative overflow-hidden group hover:-translate-y-2 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="text-primary mb-4">{result.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{result.title}</h3>
              <p className="text-muted-foreground mb-6">{result.description}</p>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-bold gradient-text">{result.stat}</span>
                <span className="text-muted-foreground">{result.statLabel}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}