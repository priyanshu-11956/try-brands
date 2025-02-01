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
        <div className="relative bg-background rounded-full">
          <img src="https://res.cloudinary.com/dp61nsozp/image/upload/v1738431440/TRY--NOVATE_2_par3nu.png" alt="Logo" className="w-16 h-16 rounded-full" />
        </div>
      </div>
      <span className="sm: text-2xl font-bold ">Try-Brands</span>
    </motion.div>
  );
}