"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export function Logo() {
  return (
    <motion.div 
      className="flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-25 blur-lg"
        />
        <div className="relative bg-background rounded-full p-2">
          <Rocket className="h-6 w-6 text-primary" />
        </div>
      </div>
      <span className="text-2xl font-bold gradient-text">PRE-Branding</span>
    </motion.div>
  );
}