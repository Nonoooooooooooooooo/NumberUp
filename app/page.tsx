"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-blue-50 to-white text-gray-800">
      
      {/* Header */}
      <header className="w-full flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold text-blue-600">NumberUp</h1>
        <Link
          href="/login"
          className="text-sm font-semibold text-blue-600 hover:text-blue-800"
        >
          Se connecter
        </Link>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4"
        >
          Progresse en maths, un défi à la fois 🧠
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 max-w-xl mb-8"
        >
          Résous des problèmes adaptés à ton niveau, gagne des points et deviens un vrai champion des nombres !
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/niveau"
            className="px-8 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-lg shadow-md hover:bg-blue-700 transition"
          >
            Commencer →
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} NumberUp — Apprendre en s’amusant 🎯
      </footer>
    </main>
  );
}
