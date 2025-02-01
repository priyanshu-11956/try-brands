"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function HeroSection({ inView }: { inView: boolean }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevent rendering on the server

  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://res.cloudinary.com/dp61nsozp/video/upload/v1738429878/oodfavugpz4ppq78yq3n.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative text-center text-white max-w-4xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="md:text-7xl text-5xl font-extrabold mb-3"
        >
          Welcome
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0 }}
          className="md:text-xl text-3xl font-medium mb-3"
        >
          To
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0 }}
          className="gradient-text md:text-7xl text-5xl font-extrabold pb-3"
        >
          Try-Brands
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="text-xl  font-extrabold leading-tight mb-14"
        >
        </motion.h1>
        <span className="gradient-text md:font-extrabold md:text-xl">Marketing That Moves,</span>
        <br />
        <span className="gradient-text md:font-extrabold md:text-xl">Campaigns That Stick</span>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 mt-4 md:mt-5"
        >
          Your Growth, Our Mission. Building influence and authority in your niche.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="text-lg px-8 h-14 m-2">
            Start Your Growth Journey
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 h-14 m-2">
            Explore Our Services
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
