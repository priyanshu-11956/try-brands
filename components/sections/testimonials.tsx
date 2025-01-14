"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Try-Brands transformed our brand's online presence. Their strategies doubled our engagement in just 3 months!",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
  },
  {
    quote: "The team's creativity and data-driven approach helped us reach markets we never thought possible.",
    author: "Michael Chen",
    role: "Marketing Director, GrowthCo",
  },
  {
    quote: "Their personal branding expertise helped establish me as a thought leader in my industry.",
    author: "Emma Davis",
    role: "Founder, InnovateHub",
  },
];

export function Testimonials({ inView }: { inView: boolean }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-secondary/10 via-primary/10 to-accent/10 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.2 }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-card/80 backdrop-blur-sm" />
          <div className="relative z-10">
            <Quote className="h-8 w-8 mb-4 text-primary" />
            <p className="text-foreground/90 mb-4 italic">{testimonial.quote}</p>
            <div>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}