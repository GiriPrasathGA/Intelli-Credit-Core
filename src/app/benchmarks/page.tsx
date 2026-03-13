"use client";

import React from "react";
import { 
  TrendingUp, 
  BarChart2, 
  PieChart, 
  Target, 
  ArrowUpRight, 
  ArrowDownRight,
  Info,
  ChevronRight,
  Globe
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const benchmarks = [
  { metric: "Operating Margin", company: 18.5, average: 14.2, unit: "%", status: "Outperforming" },
  { metric: "Debt-to-Equity", company: 0.8, average: 1.2, unit: "x", status: "Superior" },
  { metric: "Current Ratio", company: 1.5, average: 1.8, unit: "x", status: "Below Avg" },
  { metric: "Interest Coverage", company: 4.2, average: 3.5, unit: "x", status: "Healthy" },
  { metric: "ROE", company: 12.4, average: 15.1, unit: "%", status: "Trailing" },
];

export default function MarketBenchmarks() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-outfit text-white">Market Benchmarking</h1>
          <p className="text-slate-400 mt-1">Comparing TechNova Solutions performance against the IT Services sector (FY25).</p>
        </div>
        <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-3">
           <Globe className="w-5 h-5 text-emerald-400" />
           <span className="text-sm font-bold text-emerald-400 uppercase tracking-widest">Global Sector Data</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
        {/* Main Sector Comparison */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-card p-8">
             <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-white font-outfit italic">Financial Performance vs. Sector Average</h3>
                <div className="flex gap-4">
                   <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      <div className="w-3 h-1.5 bg-cyan-500 rounded-sm" /> TechNova
                   </div>
                   <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      <div className="w-3 h-1.5 bg-white/10 rounded-sm" /> Sector Avg
                   </div>
                </div>
             </div>

             <div className="space-y-10">
                {benchmarks.map((item, i) => (
                  <div key={item.metric} className="space-y-3">
                     <div className="flex justify-between items-end">
                        <div className="flex items-center gap-2">
                           <span className="text-sm font-semibold text-white">{item.metric}</span>
                           <span className={cn(
                             "text-[9px] font-black uppercase tracking-tighter px-1.5 py-0.5 rounded",
                             item.status === 'Outperforming' || item.status === 'Superior' ? "bg-emerald-500/10 text-emerald-400" : 
                             item.status === 'Healthy' ? "bg-cyan-500/10 text-cyan-400" : "bg-rose-500/10 text-rose-400"
                           )}>{item.status}</span>
                        </div>
                        <div className="text-sm font-black text-white">{item.company}{item.unit}</div>
                     </div>
                     <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        {/* Sector Average Marker */}
                        <div 
                           className="absolute top-0 bottom-0 w-1 bg-white/40 z-10 transition-all"
                           style={{ left: `${(item.average / Math.max(item.company, item.average * 1.5)) * 100}%` }}
                        />
                        {/* Company Bar */}
                        <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: `${(item.company / Math.max(item.company, item.average * 1.5)) * 100}%` }}
                           transition={{ delay: i * 0.1 }}
                           className={cn(
                             "h-full rounded-full",
                             item.company > item.average ? "bg-cyan-500 shadow-glow shadow-cyan-500/50" : "bg-slate-500"
                           )}
                        />
                     </div>
                     <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-600">
                        <span>Min Threshold</span>
                        <span>Sector Average: {item.average}{item.unit}</span>
                     </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="glass-card p-6 border-cyan-500/20 bg-cyan-500/5">
                <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-4">
                   <Target className="w-4 h-4 text-cyan-400" />
                   Competitive Edge
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed italic">
                  TechNova's Operating Margin is **30% higher** than the average for mid-cap IT services, primarily driven by lower overheads and high-value specialization.
                </p>
             </div>
             <div className="glass-card p-6">
                <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-4">
                   <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                   Growth Trajectory
                </h4>
                <div className="flex items-end gap-3">
                   <div className="text-2xl font-black text-white font-outfit">+14.2%</div>
                   <div className="text-[10px] text-emerald-400 font-bold uppercase mb-1">vs Sector Avg (+8.1%)</div>
                </div>
             </div>
          </div>
        </div>

        {/* Actionable Insights Column */}
        <div className="space-y-8">
           <div className="glass-card p-6">
              <h3 className="font-bold text-white mb-6">Sectoral Risks (FY25)</h3>
              <div className="space-y-4">
                 {[
                   { risk: "Talent Acquisition Cost", severity: "High", trend: "Up" },
                   { risk: "Regulatory Tax Changes", severity: "Medium", trend: "Stable" },
                   { risk: "Currency Volatility", severity: "Low", trend: "Down" },
                 ].map((r) => (
                   <div key={r.risk} className="flex items-center justify-between p-3 bg-white/2 border border-white/5 rounded-xl">
                      <div className="text-xs font-bold text-slate-300">{r.risk}</div>
                      <div className="flex items-center gap-3">
                         <div className={cn(
                           "text-[9px] font-bold px-1.5 py-0.5 rounded",
                           r.severity === 'High' ? "bg-rose-500/10 text-rose-400" : "bg-cyan-500/10 text-cyan-400"
                         )}>{r.severity}</div>
                         {r.trend === 'Up' ? <ArrowUpRight className="w-3 h-3 text-rose-400" /> : <ArrowDownRight className="w-3 h-3 text-emerald-400" />}
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="glass-card p-6">
              <div className="flex items-center gap-2 mb-6">
                <PieChart className="w-5 h-5 text-cyan-400" />
                <h3 className="font-bold text-white">Revenue Concentration</h3>
              </div>
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-20 h-20 rounded-full border-4 border-cyan-500 border-r-transparent animate-spin-slow rotate-45" />
                 <div>
                    <div className="text-lg font-bold text-white">62%</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase">Top 3 Clients</div>
                 </div>
              </div>
              <p className="text-[11px] text-slate-500 italic border-t border-white/5 pt-4">
                 Concentration risk is slightly above sector average (55.0%). Monitoring client retention is advised.
              </p>
           </div>

           <div className="glass-card p-6 overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                 <BarChart2 className="w-16 h-16 text-cyan-400" />
              </div>
              <h4 className="text-sm font-bold text-white mb-2">Peer Comparison</h4>
              <p className="text-xs text-slate-500 mb-4">Analysis against 12 primary competitors in the NCR region.</p>
              <button className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
                 Download Competitive Matrix <ChevronRight className="w-3 h-3" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
