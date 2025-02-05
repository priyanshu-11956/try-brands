"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "https://res.cloudinary.com/dp61nsozp/video/upload/v1738502945/Our_work_slide_1_lm2flq.mp4", // Video
  "/work2.jpg", // Image
  "/work3.jpeg", // Image
];

export function CarouselSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-lg shadow-lg">
      {/* Slide container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[550px] relative"
        >
          {images[current].endsWith(".mp4") ? (
            <video
              src={images[current]}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <Image
              src={images[current]}
              alt={`Slide ${current + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
