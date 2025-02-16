"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* ✅ Hero Section: First Impression */}
      <motion.section
        className="w-full h-screen flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
          Welcome to My Interactive CV 🚀
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
          Scroll down to explore my journey in research, technology, and innovation.
        </p>

        {/* ✅ Animated Scroll Button */}
        <motion.button
          className="mt-10 p-4 bg-blue-500 text-white rounded-full cursor-pointer shadow-lg"
          onClick={scrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ⬇ Scroll to Begin
        </motion.button>
      </motion.section>
    </div>
  );
}
