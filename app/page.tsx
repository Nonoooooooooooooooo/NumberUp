"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-50 to-white text-gray-900 font-sans">
      
      {/* Header */}
      <header className="w-full flex justify-between items-center px-8 py-6 shadow-sm bg-white sticky top-0 z-50">
        <h1 className="text-3xl font-bold text-blue-600">NumberUp</h1>
        <Link
          href="/login"
          className="text-lg font-medium text-blue-600 hover:text-blue-800"
        >
          Se connecter
        </Link>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-24 px-6 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-extrabold mb-6"
        >
          Progresse en maths, un défi à la fois 🧠
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl sm:text-2xl text-gray-700 mb-12"
        >
          Résous des problèmes adaptés à ton niveau, gagne des points et deviens un vrai champion des nombres !
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/niveau"
            className="px-10 py-4 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold text-xl shadow-lg hover:from-blue-700 hover:to-blue-500 transition"
          >
            Commencer →
          </Link>
        </motion.div>
      </section>

      {/* Features */}
      <section className="mt-32 grid grid-cols-1 sm:grid-cols-3 gap-8 px-6 max-w-6xl text-center">
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
          <span className="text-4xl mb-4 block">📝</span>
          <h3 className="text-xl font-semibold mb-2">Résous des problèmes</h3>
          <p className="text-gray-600">Des exercices adaptés à ton niveau, du primaire au lycée.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
          <span className="text-4xl mb-4 block">📊</span>
          <h3 className="text-xl font-semibold mb-2">Suivi de progression</h3>
          <p className="text-gray-600">Garde un œil sur tes scores et deviens plus fort chaque jour.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
          <span className="text-4xl mb-4 block">🏆</span>
          <h3 className="text-xl font-semibold mb-2">Défie tes amis</h3>
          <p className="text-gray-600">Partage tes scores et rivalise avec tes camarades.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full mt-32 py-8 text-center text-gray-500 border-t">
        © {new Date().getFullYear()} NumberUp — Apprendre en s’amusant 🎯
      </footer>
    </main>
  );
}
