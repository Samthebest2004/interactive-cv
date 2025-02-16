"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const achievements = [
  {
    title: "🚀 NASA International Asteroid Search Campaign",
    description: "Recognized for outstanding contributions to asteroid detection research.",
    year: "2023",
    icon: "🛰️",
  },
  {
    title: "🧠 ACS Manuscript Reviewer",
    description: "Youngest reviewer for the American Chemical Society's scientific journals.",
    year: "2024",
    icon: "📜",
  },
  {
    title: "🔬 Quantum Computing Research",
    description: "Published work on quantum algorithms in top research conferences.",
    year: "2022",
    icon: "⚛️",
  },
  {
    title: "🏆 National Award in AI & Healthcare",
    description: "Developed an AI model for disease detection, winning national recognition.",
    year: "2023",
    icon: "🥇",
  },
];

export default function Achievements() {
  const [unlocked, setUnlocked] = useState([true, false, false, false]);

  useEffect(() => {
    // ✅ Automatically unlock next achievement when scrolling
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const achievementSections = document.querySelectorAll(".achievement-card");

      achievementSections.forEach((section, index) => {
        if (scrollPosition > section.offsetTop && !unlocked[index]) {
          setUnlocked((prev) => {
            const newUnlocked = [...prev];
            newUnlocked[index] = true;
            return newUnlocked;
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [unlocked]);

  return (
    <motion.section
      id="achievements"
      className="max-w-4xl mx-auto text-center py-10 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* ✅ Title */}
      <motion.h2
        className="text-5xl font-bold text-gray-800 dark:text-white mb-6"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        Achievements 🏆
      </motion.h2>

      {/* ✅ Gamified Progress Bar */}
      <div className="flex justify-center items-center space-x-2 mb-6">
        {achievements.map((_, index) => (
          <motion.span
            key={index}
            className={`w-6 h-6 rounded-full ${
              unlocked[index] ? "bg-green-500" : "bg-gray-400"
            } flex items-center justify-center text-white text-sm`}
            initial={{ scale: 0.8 }}
            animate={{ scale: unlocked[index] ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {unlocked[index] ? "🏆" : "🔒"}
          </motion.span>
        ))}
      </div>

      {/* ✅ Achievements List */}
      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className={`p-6 border rounded-lg shadow-md transition transform bg-white dark:bg-gray-700 achievement-card ${
              unlocked[index] ? "opacity-100" : "opacity-50 blur-sm"
            }`}
            whileHover={unlocked[index] ? { scale: 1.05 } : {}}
          >
            {/* ✅ Achievement Title */}
            <h3 className="text-2xl font-semibold flex items-center justify-center">
              {achievement.icon} {achievement.title}
            </h3>

            {/* ✅ Description */}
            <p className="text-gray-600 dark:text-gray-300 mt-2">{achievement.description}</p>

            {/* ✅ Year */}
            <p className="text-gray-500 dark:text-gray-400 mt-2 italic">{achievement.year}</p>

            {/* ✅ Unlock Message */}
            {!unlocked[index] && (
              <p className="text-red-500 mt-2">🔒 Scroll to unlock this achievement!</p>
            )}
          </motion.div>
        ))}
      </div>

      {/* ✅ Encouragement Message */}
      <motion.p
        className="mt-6 text-gray-500 dark:text-gray-400 text-lg"
        animate={{ opacity: unlocked[unlocked.length - 1] ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        🎮 Keep scrolling to unlock all achievements!
      </motion.p>
    </motion.section>
  );
}
