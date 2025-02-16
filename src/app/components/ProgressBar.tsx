
"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  // Use a spring for smooth, snappy animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 25,
    restDelta: 0.001,
  });

  const [progress, setProgress] = useState(0);
  const [level, setLevel] = useState("🔒 Locked");

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      const newProgress = Math.floor(v * 100);
      setProgress(newProgress);

      if (newProgress < 25) setLevel("🔒 Locked");
      else if (newProgress < 50) setLevel("🛠️ About Unlocked");
      else if (newProgress < 75) setLevel("🚀 Projects Unlocked");
      else setLevel("🏆 Achievements Unlocked");
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="fixed top-16 left-0 right-0 z-50"> {/* Moved down from top-0 to top-16 */}
      {/* Animated Progress Bar */}
      <motion.div
        className="h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left rounded-full shadow-lg"
        style={{ scaleX }}
      />

      {/* Real-Time Percentage Display */}
      <motion.div
        className="absolute right-4 top-2 bg-black/70 text-white px-2 py-1 rounded text-sm shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {progress}%
      </motion.div>

      {/* Game-Like Level Display */}
      <motion.div
        className="absolute left-4 top-2 bg-black/70 text-white px-2 py-1 rounded text-sm shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {level}
      </motion.div>
    </div>
  );
}
