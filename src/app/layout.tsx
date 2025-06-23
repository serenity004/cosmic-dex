import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import { WalletProvider } from "@/components/WalletProvider";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Cosmic DEX",
  description: "The future of decentralized trading.",
  icons: {
    icon: "/galaxy.svg",
    shortcut: "/galaxy.svg",
    apple: "/galaxy.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={orbitron.variable}>
      <body className="font-orbitron bg-void text-white antialiased">
        <WalletProvider>{children}</WalletProvider>
      </body>
    </html>
  );
}
