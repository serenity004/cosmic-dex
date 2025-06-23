'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ConnectButton } from '@rainbow-me/rainbowkit';

interface NavigationProps {
  onNavigate: (page: 'home' | 'swap') => void;
  activePage: 'home' | 'swap';
}

export function Navigation({ onNavigate, activePage }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center bg-void/30 backdrop-blur-md">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
        <Image src="/galaxy.svg" alt="Cosmic DEX Logo" width={40} height={40} priority />
        <span className="text-2xl font-extrabold bg-gradient-to-r from-cosmic-400 to-stellar-400 bg-clip-text text-transparent font-orbitron tracking-wide select-none">
          Cosmic DEX
        </span>
      </div>
      <div className="flex items-center gap-6">
        <motion.button
          onClick={() => onNavigate('home')}
          className={`text-lg font-medium font-orbitron ${activePage === 'home' ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}
          whileHover={{ scale: 1.05 }}
        >
          Home
        </motion.button>
        <motion.button
          onClick={() => onNavigate('swap')}
          className={`text-lg font-medium font-orbitron ${activePage === 'swap' ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}
          whileHover={{ scale: 1.05 }}
        >
          Swap
        </motion.button>
        <ConnectButton />
      </div>
    </nav>
  );
} 