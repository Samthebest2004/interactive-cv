"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "🚀 NASA International Asteroid Search Campaign",
    shortDescription: "Led a research project on asteroid detection.",
    fullDescription:
      "Worked in collaboration with NASA and IASC to analyze telescope data and identify potential near-Earth objects. Used advanced image processing techniques to validate discoveries.",
    icon: "🪐",
  },
  {
    title: "🧠 AI-Based Healthcare Project",
    shortDescription: "Developed an AI model for disease detection.",
    fullDescription:
      "Built a deep learning model for medical imaging analysis, improving early disease diagnosis accuracy. Applied convolutional neural networks (CNNs) for tumor detection.",
    icon: "💊",
  },
  {
    title: "🔬 Quantum Computing Research",
    shortDescription: "Researched quantum algorithms.",
    fullDescription:
      "Studied quantum computing applications in cryptography and AI for optimization problems. Designed quantum circuits for superposition and entanglement experiments.",
    icon: "🧩",
  },
];

export default function Projects() {
  const [unlocked, setUnlocked] = useState([true, false, false]);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleExpand = (index: number) => {
    if (!unlocked[index]) return; // Prevent opening locked projects
    setExpandedIndex(expandedIndex === index ? null : index);
    if (index + 1 < projects.length) {
      setUnlocked((prev) => {
        const newUnlocked = [...prev];
        newUnlocked[index + 1] = true; // Unlock the next project
        return newUnlocked;
      });
    }
  };

  return (
    <motion.section
      id="projects"
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
        Projects
      </motion.h2>

      {/* ✅ Gamification Progress Bar */}
      <div className="flex justify-center items-center space-x-2 mb-6">
        {projects.map((_, index) => (
          <motion.span
            key={index}
            className={`w-6 h-6 rounded-full ${
              unlocked[index] ? "bg-green-500" : "bg-gray-400"
            } flex items-center justify-center text-white text-sm`}
            initial={{ scale: 0.8 }}
            animate={{ scale: unlocked[index] ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {unlocked[index] ? "✅" : "🔒"}
          </motion.span>
        ))}
      </div>

      {/* ✅ Projects List */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`p-6 border rounded-lg shadow-md transition transform ${
              unlocked[index] ? "hover:scale-105" : "opacity-50 cursor-not-allowed"
            } bg-white dark:bg-gray-700`}
            whileHover={unlocked[index] ? { scale: 1.05 } : {}}
          >
            {/* ✅ Project Title */}
            <h3 className="text-2xl font-semibold flex items-center justify-center">
              {project.icon} {project.title}
            </h3>

            {/* ✅ Short Description */}
            <p className="text-gray-600 dark:text-gray-300 mt-2">{project.shortDescription}</p>

            {/* ✅ Unlock Message */}
            {!unlocked[index] && (
              <p className="text-red-500 mt-2">🔒 Unlock previous projects to access this!</p>
            )}

            {/* ✅ Learn More Button */}
            <button
              className={`text-blue-500 hover:underline mt-4 block ${
                unlocked[index] ? "" : "cursor-not-allowed opacity-50"
              }`}
              onClick={() => handleExpand(index)}
            >
              {expandedIndex === index ? "Show Less" : "Learn More"}
            </button>

            {/* ✅ Expanded Full Description */}
            {expandedIndex === index && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="text-gray-500 dark:text-gray-400 mt-2"
              >
                {project.fullDescription}
              </motion.p>
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
        🎮 Keep unlocking projects by clicking "Learn More" to explore my full journey!
      </motion.p>
    </motion.section>
  );
}
