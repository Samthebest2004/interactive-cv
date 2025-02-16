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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [completed, setCompleted] = useState(new Array(projects.length).fill(false));

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    if (!completed[index]) {
      setCompleted((prev) => {
        const newCompleted = [...prev];
        newCompleted[index] = true;
        return newCompleted;
      });
    }
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto text-center py-10 px-4 bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg"
    >
      <motion.h2
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="text-5xl font-bold text-gray-800 dark:text-white mb-6"
      >
        Projects 🏗️
      </motion.h2>
      
      {/* ✅ Progress Bar for Unlocking Projects */}
      <div className="flex justify-center items-center space-x-2 mb-6">
        {projects.map((_, index) => (
          <motion.span
            key={index}
            className={`w-6 h-6 rounded-full ${completed[index] ? "bg-green-500" : "bg-gray-400"} flex items-center justify-center text-white text-sm`}
            initial={{ scale: 0.8 }}
            animate={{ scale: completed[index] ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {completed[index] ? "✅" : "🔒"}
          </motion.span>
        ))}
      </div>

      {/* ✅ Projects List */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, type: "spring" }}
            className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md transition transform hover:scale-105 bg-white dark:bg-gray-700"
          >
            <h3 className="text-2xl font-semibold flex items-center justify-center">
              {project.icon} {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{project.shortDescription}</p>
            <button
              className="text-blue-500 hover:underline mt-4 block"
              onClick={() => toggleExpand(index)}
            >
              {expandedIndex === index ? "Show Less" : "Learn More"}
            </button>
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
    </motion.section>
  );
}
