"use client";

import React from "react";
import { 
  ShieldAlert, 
  TrendingDown, 
  Zap, 
  BarChart3, 
  AlertTriangle,
  ChevronRight,
  Info,
  Layers
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const riskItems = [
  { id: 1, name: "Market Volatility", likelihood: 4, impact: 5, category: "External" },
  { id: 2, name: "Capital Scarcity", likelihood: 2, impact: 4, category: "Financial" },
  { id: 3, name: "Operational Latency", likelihood: 3, impact: 2, category: "Operational" },
  { id: 4, name: "Regulatory Shift", likelihood: 5, impact: 3, category: "External" },
  { id: 5, name: "Promoter Conflict", likelihood: 1, impact: 5, category: "Governance" },
];

const sensitivityScenarios = [
  { item: "Interest Rate Shock (+2.5%)", impact: "₹4.5M", resilience: "High", risk: "Low" },
  { item: "Revenue Decline (-15.0%)", impact: "₹12.2M", resilience: "Moderate", risk: "Medium" },
  { item: "EBITDA Margin Compression (-5%)", impact: "₹8.1M", resilience: "Strong", risk: "Low" },
  { item: "Currency Devaluation (USD/INR +10%)", impact: "₹1.4M", resilience: "Excellent", risk: "Negligible" },
];

export default function RiskInsights() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-outfit text-white">Advanced Risk Simulation</h1>
          <p className="text-slate-400 mt-1">Stress testing and multi-variate risk assessment for TechNova Solutions.</p>
        </div>
        <div className="px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-center gap-3">
           <ShieldAlert className="w-5 h-5 text-rose-400" />
           <span className="text-sm font-bold text-rose-400 uppercase tracking-widest">Active Risk Monitoring</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Risk Matrix (Heatmap) */}
        <div className="lg:col-span-2 glass-card p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-white font-outfit italic">Risk Heatmap (Likelihood vs Impact)</h3>
            <div className="flex gap-4 text-[10px] items-center text-slate-500 font-bold uppercase tracking-widest">
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-rose-500" /> Critical</div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-amber-500" /> High</div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-500" /> Low</div>
            </div>
          </div>

          <div className="relative aspect-square md:aspect-video w-full border-l border-b border-white/10 flex flex-col-reverse">
            {/* Grid background */}
            <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 pointer-events-none opacity-5">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="border border-white" />
              ))}
            </div>

            {/* Axis Labels */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Impact Level</div>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Likelihood Level</div>

            {/* Risk Points */}
            <div className="relative w-full h-full">
              {riskItems.map((risk) => {
                const isCritical = risk.impact * risk.likelihood > 15;
                const isHigh = risk.impact * risk.likelihood > 8;
                return (
                  <motion.div
                    key={risk.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: risk.id * 0.1 }}
                    className="absolute group"
                    style={{ 
                      left: `${(risk.likelihood / 5) * 100 - 10}%`, 
                      bottom: `${(risk.impact / 5) * 100 - 10}%` 
                    }}
                  >
                    <div className={cn(
                      "w-4 h-4 rounded-full shadow-lg relative cursor-pointer transition-all hover:scale-150",
                      isCritical ? "bg-rose-500 shadow-rose-500/50" : isHigh ? "bg-amber-500 shadow-amber-500/50" : "bg-emerald-500 shadow-emerald-500/50"
                    )}>
                       <div className="absolute inset-0 rounded-full animate-ping opacity-20" />
                    </div>
                    {/* Tooltip-like label */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 backdrop-blur-md border border-white/10 px-2 py-1 rounded text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {risk.name} ({risk.category})
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="mt-12 p-4 bg-white/2 border border-white/5 rounded-xl flex items-start gap-3">
             <Info className="w-5 h-5 text-slate-500 mt-1" />
             <p className="text-xs text-slate-400 leading-relaxed italic">
               Risk items are dynamically mapped using LLM-extracted sentiment from industry news and financial statements. Higher right-top corner indicates immediate attention required.
             </p>
          </div>
        </div>

        {/* Sensitivity Analysis */}
        <div className="space-y-8">
           <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="w-5 h-5 text-cyan-400" />
                <h3 className="font-bold text-white font-outfit">Shock Resilience</h3>
              </div>
              <div className="space-y-4">
                 {sensitivityScenarios.map((scenario) => (
                   <div key={scenario.item} className="p-4 bg-white/2 border border-white/5 rounded-xl hover:bg-white/5 transition-all group">
                      <div className="flex justify-between items-start mb-2">
                         <div className="text-xs font-bold text-slate-400 group-hover:text-white transition-colors">{scenario.item}</div>
                         <div className={cn(
                           "text-[9px] font-black px-1.5 py-0.5 rounded",
                           scenario.risk === 'Low' || scenario.risk === 'Negligible' ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"
                         )}>{scenario.risk.toUpperCase()}</div>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex flex-col">
                           <span className="text-[10px] text-slate-600 font-bold uppercase tracking-tight">Financial Impact</span>
                           <span className="text-sm font-black text-rose-400">{scenario.impact}</span>
                        </div>
                        <div className="text-right">
                           <span className="text-[10px] text-slate-600 font-bold uppercase tracking-tight">Resilience</span>
                           <div className="text-xs font-bold text-white">{scenario.resilience}</div>
                        </div>
                      </div>
                   </div>
                 ))}
              </div>
              <button className="w-full mt-6 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-cyan-400 hover:bg-cyan-400/10 transition-all flex items-center justify-center gap-2">
                 Generate Sensitivity Report <ChevronRight className="w-3 h-3" />
              </button>
           </div>

           <div className="glass-card p-6 bg-gradient-to-br from-indigo-500/10 to-transparent">
              <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-4">
                 <Zap className="w-4 h-4 text-cyan-400" />
                 Monte Carlo Simulation
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Analysis of 10,000 simulations indicates a **97.8%** probability that TechNova will meet debt obligations under baseline market conditions.
              </p>
              <div className="flex items-center gap-2">
                 <BarChart3 className="w-8 h-8 text-cyan-500/30" />
                 <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Confidence Score: 0.94</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
