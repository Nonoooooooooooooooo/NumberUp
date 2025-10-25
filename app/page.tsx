"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white font-sans px-6">

      {/* Header */}
      <header className="w-full flex justify-center items-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-wide">NumberUp</h1>
      </header>

      {/* Hero Section */}
      <section className="max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold mb-6 leading-snug"
        >
          Progresse en maths, un défi à la fois 🧠
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg sm:text-xl mb-10"
        >
          Résous des problèmes adaptés à ton niveau, gagne des points et deviens un vrai champion des nombres !
        </motion.p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/niveau"
            className="px-12 py-4 rounded-full bg-white text-blue-600 font-bold text-lg shadow-lg hover:bg-gray-100 transition"
          >
            Commencer →
          </Link>
        </motion.div>
      </section>

      {/* Features */}
      <section className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl">
        {[
          { icon: "📝", title: "Résous des problèmes", text: "Des exercices adaptés à ton niveau." },
          { icon: "📊", title: "Suivi de progression", text: "Garde un œil sur tes scores." },
          { icon: "🏆", title: "Défie tes amis", text: "Partage tes scores et rivalise avec tes camarades." },
        ].map((f, i) => (
          <motion.div
            key={i}
            className="p-6 bg-white/20 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <span className="text-5xl mb-4 block">{f.icon}</span>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-sm sm:text-base">{f.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="w-full mt-32 py-8 text-center text-white/80">
        © {new Date().getFullYear()} NumberUp — Apprendre en s’amusant 🎯
      </footer>
    </main>
  );
}

