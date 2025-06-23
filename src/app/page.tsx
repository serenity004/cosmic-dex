'use client';

import { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { SwapInterface } from '@/components/SwapInterface';
import { Navigation } from '@/components/Navigation';

type Page = 'home' | 'swap';

export default function Home() {
  const [activePage, setActivePage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setActivePage(page);
  };

  return (
    <main className="relative">
      <Navigation onNavigate={handleNavigate} activePage={activePage} />
      {activePage === 'home' && <HeroSection />}
      {activePage === 'swap' && <SwapInterface />}
    </main>
  );
}
