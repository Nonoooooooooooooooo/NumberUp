"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  // Les symboles/chiffres colorés
  const symbols = ["1","2","3","4","5","6","7","8","9","0","+","-","×","÷","=","π","√","∞","%"];

  return (
    <main className="relative min-h-screen font-sans bg-[#fdf6e3] overflow-hidden">

      {/* Chiffres et symboles animés */}
      {Array.from({ length: 30 }).map((_, i) => (
        <span
          key={i}
          className={`absolute text-2xl sm:text-4xl`}
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
            color: `hsl(${Math.random() * 360}, 80%, 50%)`,
            animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
            fontWeight: 'bold',
          }}
        >
          {symbols[Math.floor(Math.random() * symbols.length)]}
        </span>
      ))}

      {/* Bande supérieure */}
      <header className="w-full bg-blue-600 text-white flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold mx-auto absolute left-1/2 transform -translate-x-1/2">NumberUp</h1>
        <Link
          href="/login"
          className="ml-auto bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Se connecter
        </Link>
      </header>

      {/* Contenu central */}
      <section className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-128px)]">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            href="/niveau"
            className="px-10 py-5 bg-blue-600 text-white text-xl font-bold rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            Commencer →
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-blue-600 text-white py-4 text-center text-sm">
        <p>© {new Date().getFullYear()} NumberUp</p>
        <p>
          <Link href="/contact" className="underline">Contact</Link> | 
          <Link href="/mentions-legales" className="underline ml-2">Mentions légales</Link>
        </p>
      </footer>

      {/* Animations flottantes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </main>
  );
}
