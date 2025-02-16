"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="w-full max-w-4xl mx-auto text-center py-20 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* ✅ Title with Smooth Scaling */}
      <motion.h2
        className="text-4xl font-bold text-gray-800 dark:text-white mb-6"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        About Me
      </motion.h2>

      {/* ✅ Intro Text */}
      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I am <span className="font-semibold text-blue-500">Samrat Chakraborty</span>, a passionate scientist, researcher, and innovator.
        With expertise in AI, chemistry, and quantum computing, I strive to push the boundaries of technology to make a global impact.
      </motion.p>

      {/* ✅ Skills Section */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6">
        {[
          { title: "🚀 AI & Machine Learning" },
          { title: "🔬 Quantum Computing" },
          { title: "🧪 Chemistry Research" },
          { title: "📊 Data Science" },
          { title: "💻 Software Development" },
          { title: "📡 Space Science" },
        ].map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white py-3 px-4 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {skill.title}
          </motion.div>
        ))}
      </div>

      {/* ✅ Parallax Image */}
      <motion.img
        src="/profile.jpg"
        alt="Samrat Chakraborty"
        className="w-40 h-40 rounded-full mx-auto mt-10 shadow-lg"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.section>
  );
}
