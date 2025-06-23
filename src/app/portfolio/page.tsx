'use client';
import { motion } from 'framer-motion';

export default function PortfolioPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="max-w-2xl mx-auto mt-24 p-8 bg-white/5 rounded-2xl shadow-lg border border-white/10 text-center">
        <h1 className="text-3xl font-orbitron font-bold mb-4">Portfolio</h1>
        <p className="text-gray-300 mb-2">Connect your wallet to view your token holdings.</p>
        <div className="text-gray-500">(Mock dashboard and Zapper integration coming soon!)</div>
      </div>
    </motion.div>
  );
} 