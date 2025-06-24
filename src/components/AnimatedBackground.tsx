'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const cryptoData = [
  { symbol: 'BTC', name: 'Bitcoin', imageUrl: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400', fallback: '₿', color: '#F7931A' },
  { symbol: 'ETH', name: 'Ethereum', imageUrl: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628', fallback: 'Ξ', color: '#627EEA' },
  { symbol: 'SOL', name: 'Solana', imageUrl: 'https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756', fallback: '◑', color: '#00FFA3' },
  { symbol: 'ADA', name: 'Cardano', imageUrl: 'https://assets.coingecko.com/coins/images/975/large/Cardano.png?1696502090', fallback: '◈', color: '#0033AD' },
  { symbol: 'DOT', name: 'Polkadot', imageUrl: 'https://assets.coingecko.com/coins/images/12171/large/polkadot_new_logo.png?1696512458', fallback: '◆', color: '#E6007A' },
  { symbol: 'LINK', name: 'Chainlink', imageUrl: 'https://assets.coingecko.com/coins/images/877/large/chainlink.png?1696501999', fallback: '◇', color: '#2A5ADA' },
  { symbol: 'UNI', name: 'Uniswap', imageUrl: 'https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png?1696512458', fallback: '○', color: '#FF007A' },
  { symbol: 'AAVE', name: 'Aave', imageUrl: 'https://assets.coingecko.com/coins/images/12645/large/AAVE.png?1696512458', fallback: '●', color: '#B6509E' },
  { symbol: 'MATIC', name: 'Polygon', imageUrl: 'https://assets.coingecko.com/coins/images/4713/large/matic.png?1696501628', fallback: '◒', color: '#8247E5' },
  { symbol: 'AVAX', name: 'Avalanche', imageUrl: 'https://assets.coingecko.com/coins/images/12559/large/avalanche.png?1696512458', fallback: '◓', color: '#E84142' },
];

export default function AnimatedBackground() {
  const [items, setItems] = useState<any[]>([]);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  useEffect(() => {
    const generateItems = () => {
      const newItems = [];
      const numItems = 12; // Reduced for better spacing
      
      // Create zones for better placement
      const zones = [
        { x: 10, y: 20, width: 30, height: 30 }, // Top left
        { x: 60, y: 15, width: 30, height: 30 }, // Top right
        { x: 15, y: 60, width: 30, height: 30 }, // Bottom left
        { x: 65, y: 65, width: 30, height: 30 }, // Bottom right
        { x: 35, y: 40, width: 30, height: 30 }, // Center
        { x: 5, y: 45, width: 25, height: 25 },  // Far left
        { x: 70, y: 35, width: 25, height: 25 }, // Far right
        { x: 40, y: 10, width: 20, height: 20 }, // Top center
        { x: 45, y: 70, width: 20, height: 20 }, // Bottom center
      ];

      for (let i = 0; i < numItems; i++) {
        const randomCrypto = cryptoData[Math.floor(Math.random() * cryptoData.length)];
        const depth = Math.random();
        
        // Use zone-based placement for better distribution
        const zone = zones[i % zones.length];
        const x = zone.x + Math.random() * zone.width;
        const y = zone.y + Math.random() * zone.height;
        
        newItems.push({
          id: i,
          symbol: randomCrypto.symbol,
          name: randomCrypto.name,
          imageUrl: randomCrypto.imageUrl,
          fallback: randomCrypto.fallback,
          color: randomCrypto.color,
          x: x,
          y: y,
          delay: Math.random() * 8,
          duration: 25 + Math.random() * 25,
          size: 80 + Math.random() * 80, // Bigger size: 80-160px
          opacity: 0.15 + depth * 0.5, // Higher opacity: 0.15-0.65
          blur: (1 - depth) * 4, // Less blur: 0-4px
          zIndex: Math.floor(depth * 10),
        });
      }
      setItems(newItems);
    };

    generateItems();
  }, []);

  const handleImageError = (id: number) => {
    setImageErrors(prev => new Set(prev).add(id));
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-void via-space to-cosmic-dark opacity-90" />
      
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute select-none"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            width: `${item.size}px`,
            height: `${item.size}px`,
            opacity: item.opacity,
            filter: `blur(${item.blur}px)`,
            zIndex: item.zIndex,
            animation: `float ${item.duration}s ease-in-out infinite`,
            animationDelay: `${item.delay}s`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {imageErrors.has(item.id) ? (
            <div 
              className="w-full h-full flex items-center justify-center font-bold text-4xl"
              style={{
                color: item.color,
                textShadow: `0 0 ${item.size / 3}px ${item.color}80`,
              }}
            >
              {item.fallback}
            </div>
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                className="object-contain"
                sizes={`${item.size}px`}
                onError={() => handleImageError(item.id)}
                unoptimized
              />
            </div>
          )}
        </div>
      ))}

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nebula-gradient rounded-full opacity-5 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-stellar-gradient rounded-full opacity-5 blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
          25% { transform: translate(-50%, -50%) translateY(-40px) rotate(2deg); }
          50% { transform: translate(-50%, -50%) translateY(-80px) rotate(0deg); }
          75% { transform: translate(-50%, -50%) translateY(-40px) rotate(-2deg); }
        }
      `}</style>
    </div>
  );
}
