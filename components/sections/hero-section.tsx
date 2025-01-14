"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSection({ inView }: { inView: boolean }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevent rendering on the server

  return (
    <div className="max-w-7xl mx-auto w-full relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left space-y-8"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="md:text-7xl mt-10 sm:font-bold text-primary font-bold mb-8"
            >
              Welcome to Try-Brands
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-4xl md:text-6xl xl:text-3xl font-bold leading-tight md:mt-10"
            >
              <span className="gradient-text">Marketing That Moves,</span>
              <br />
              <span className="gradient-text">Campaigns That Stick</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-4"
          >
            <div>Your Growth, Our Mission.</div>
            <div>Building influence and authority in your niche.</div>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button size="lg" className="text-lg px-8 h-14">
              Start Your Growth Journey
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 h-14">
              Explore Our Services
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative h-[400px] lg:h-[600px] w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl -rotate-6 transform-gpu" />
          <div className="absolute inset-0 bg-gradient-to-tl from-primary/20 via-secondary/20 to-accent/20 rounded-2xl rotate-3 transform-gpu" />
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
            alt="Marketing team collaboration"
            fill
            className="object-cover rounded-2xl shadow-2xl"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-2xl" />
        </motion.div>
      </div>
    </div>
  );
}
