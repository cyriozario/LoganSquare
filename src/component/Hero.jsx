import React from "react";
import { Button } from "@/components/ui/button";
import heroImg from "../../public/images/hero_van.png";
import { motion } from "framer-motion";

// Small, minimal slide offsets
const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};
const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

export default function Hero() {
  return (
    <section className="w-full min-h-[90vh] flex flex-col md:flex-row">
      {/* Left: slide-in text */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col justify-center px-4 md:px-8 bg-white pt-40 md:pt-0"
        variants={slideInLeft}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: "easeOut" }} // no delay here
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900">
          Built on Family. Fueled by Quality
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-lg">
          From our mobile van to this detail center—
          <span className="text-green-600 font-semibold">premium care</span>,
          powered by heart.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Book Your Shine
          </Button>

          <Button variant="outline" size="lg">
            View Our Services
          </Button>
        </div>
      </motion.div>

      {/* Right: slide-in image */}
      <motion.div
        className="w-full lg:w-1/2 flex items-center justify-center bg-slate-50"
        variants={slideInRight}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <img
          src={heroImg}
          alt="Shiny red car"
          className="w-full h-auto object-contain max-h-[80vh]"
        />
      </motion.div>
    </section>
  );
}
