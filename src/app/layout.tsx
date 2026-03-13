import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Intelli-Credit | Next-Gen Corporate Credit Appraisal",
  description: "AI-powered comprehensive credit appraisal for modern lending.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-[#020617] text-white overflow-hidden`}
      >
        <div className="flex h-screen w-screen overflow-hidden">
          <Sidebar />
          <main className="flex-1 flex flex-col min-w-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] pl-64 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
