// src/app/page.tsx
"use client";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import { useEffect, useState } from "react";

export default function Home() {
  // Mounting check to prevent hydration mismatches
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-screen h-screen flex items-center justify-center text-gray-800 dark:text-white">
        Loading...
      </div>
    );
  }

  return (
    <motion.main
      className="flex flex-col items-center justify-center space-y-16 py-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Hero />
      <motion.div
        className="w-full flex flex-col items-center space-y-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <About />
        <Projects />
        <Achievements />
      </motion.div>
    </motion.main>
  );
}
