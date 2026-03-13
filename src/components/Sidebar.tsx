"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  FileText, 
  Search, 
  Settings, 
  ShieldCheck, 
  TrendingUp,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Credit Appraisal", href: "/appraisal", icon: FileText },
  { name: "Risk Insights", href: "/risk", icon: ShieldCheck },
  { name: "Market Benchmarks", href: "/benchmarks", icon: TrendingUp },
  { name: "Research Agent", href: "/research", icon: Search },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-black/40 backdrop-blur-xl border-r border-white/10 flex flex-col fixed left-0 top-0 z-50">
      <div className="p-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <ShieldCheck className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-outfit">Intelli-Credit</span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300",
                isActive 
                  ? "bg-white/10 text-white shadow-inner" 
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className={cn(
                  "w-5 h-5 transition-colors",
                  isActive ? "text-cyan-400" : "group-hover:text-cyan-300"
                )} />
                <span className="font-medium">{item.name}</span>
              </div>
              {isActive && (
                <motion.div 
                  layoutId="active-nav"
                  className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-glow shadow-cyan-400/50"
                />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto">
        <div className="glass-card p-4 flex flex-col gap-3">
          <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">System Status</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm text-slate-300">AI Engine Ready</span>
          </div>
          <button className="glass-button w-full py-2 flex items-center justify-center gap-2 text-sm text-white rounded-lg">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
}
