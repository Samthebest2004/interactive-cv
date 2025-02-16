"use client";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (!isMounted) return null; // ✅ Prevents hydration error

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow-lg py-4 px-6 flex justify-between items-center transition-all duration-300"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.h1
        className="text-2xl font-bold text-gray-900 dark:text-white cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        Interactive CV
      </motion.h1>

      <motion.button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white transition-all hover:scale-110"
        whileTap={{ scale: 0.9 }}
      >
        {theme === "dark" ? <FiSun size={24} /> : <FiMoon size={24} />}
      </motion.button>
    </motion.nav>
  );
}
