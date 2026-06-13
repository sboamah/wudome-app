// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import solarLamps from "../images/solar-lamps.png";

export default function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 bg-cyan-800 opacity-50" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: -30 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold max-w-5xl">
          Empowering Farmers and Families in Rural Communities
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
          Supporting education, sustainable agriculture,
          entrepreneurs, and rural development.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="#donate"
            className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-semibold transition"
          >
            Donate Now
          </a>

          <a
            href="#projects"
            className="bg-white/20 backdrop-blur hover:bg-white/30 px-8 py-4 rounded-2xl font-semibold transition"
          >
            View Projects
          </a>
        </div>
      </motion.div>
    </section>
  );
}