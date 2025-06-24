import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import { WalletProvider } from "@/components/WalletProvider";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
  weight: ["400", "500", "700", "900"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Cosmic DEX - Decentralized Exchange",
  description: "The future of decentralized trading. Experience seamless swaps across the galaxy. Built for the Umi network.",
  keywords: ["DEX", "DeFi", "Cryptocurrency", "Swap", "Blockchain", "Decentralized Exchange"],
  icons: {
    icon: "/galaxy.svg",
    shortcut: "/galaxy.svg",
    apple: "/galaxy.svg",
  },
  openGraph: {
    title: "Cosmic DEX - Decentralized Exchange",
    description: "The future of decentralized trading is here.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} font-orbitron`}>
      <body className="font-orbitron bg-void text-white antialiased min-h-screen">
        <WalletProvider>
          <AnimatedBackground />
          <Navigation />
          {/* <Navbar /> removed, use Navigation in pages if needed */}
          <div className="pt-20 min-h-[80vh] relative z-10">{children}</div>
          <Footer />
        </WalletProvider>
      </body>
    </html>
  );
}