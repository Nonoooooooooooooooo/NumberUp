"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-blue-100 to-white overflow-hidden font-sans">

      {/* SVG fond flottant */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <text x="20%" y="20%" className="text-blue-200 text-9xl opacity-20 animate-float">1</text>
        <text x="50%" y="50%" className="text-blue-300 text-8xl opacity-15 animate-float-slow">2</text>
        <text x="70%" y="80%" className="text-blue-400 text-10xl opacity-10 animate-float-reverse">3</text>
      </svg>

      {/* Header */}
      <header className="w-full flex justify-between items-center px-8 py-6 bg-white/70 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <h1 className="text-3xl font-title text-blue-600">NumberUp</h1>
        <Link href="/login" className="text-lg font-medium text-blue-600 hover:text-blue-800">
          Se connecter
        </Link>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-24 px-6 max-w-4xl z-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl font-title font-extrabold mb-6"
        >
          Progresse en maths, un défi à la fois 🧠
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl sm:text-2xl text-gray-700 mb-12"
        >
          Résous des problèmes adaptés à ton niveau, gagne des points et deviens un vrai champion des nombres !
        </motion.p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/niveau"
            className="px-10 py-4 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold text-xl shadow-lg hover:from-blue-700 hover:to-blue-500 transition"
          >
            Commencer →
          </Link>
        </motion.div>
      </section>

      {/* Features */}
      <section className="mt-32 grid grid-cols-1 sm:grid-cols-3 gap-8 px-6 max-w-6xl text-center z-10 relative">
        {[
          { icon: "📝", title: "Résous des problèmes", text: "Des exercices adaptés à ton niveau, du primaire au lycée." },
          { icon: "📊", title: "Suivi de progression", text: "Garde un œil sur tes scores et deviens plus fort chaque jour." },
          { icon: "🏆", title: "Défie tes amis", text: "Partage tes scores et rivalise avec tes camarades." },
        ].map((f, i) => (
          <motion.div key={i} className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <span className="text-4xl mb-4 block">{f.icon}</span>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="w-full mt-32 py-8 text-center text-gray-500 border-t relative z-10">
        © {new Date().getFullYear()} NumberUp — Apprendre en s’amusant 🎯
      </footer>

      {/* Animations CSS */}
      <style jsx>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes floatSlow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes floatReverse { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(15px); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: floatSlow 8s ease-in-out infinite; }
        .animate-float-reverse { animation: floatReverse 7s ease-in-out infinite; }
      `}</style>
    </main>
  );
}
