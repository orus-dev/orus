"use client";

import { motion } from "framer-motion";
import { ArrowRight, FrownIcon, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen relative bg-linear-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden flex items-center justify-center px-6">
      {/* Grid Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgb(168, 85, 247) 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-center z-10 max-w-2xl"
      >
        <motion.span
          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <FrownIcon className="w-4 h-4" />
          ORUS Navigation Error
        </motion.span>

        <h1 className="text-7xl font-bold mt-6 mb-4 bg-linear-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
          404
        </h1>

        <p className="text-xl text-slate-300 mb-10">
          The page you're looking for doesn’t exist or was moved.
        </p>

        <motion.a
          href="/"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-lg font-semibold text-lg shadow-lg shadow-purple-500/50"
          whileHover={{
            scale: 1.01,
            boxShadow: "0 20px 50px rgba(168, 85, 247, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          Return Home
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </div>
  );
}
