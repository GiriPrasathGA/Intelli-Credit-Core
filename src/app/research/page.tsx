"use client";

import React, { useState, useEffect } from "react";
import { 
  Search, 
  Cpu, 
  Globe, 
  ShieldAlert, 
  Scale, 
  Newspaper,
  ChevronRight,
  Loader2,
  CheckCircle2,
  Building2,
  AlertTriangle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const newsResults = [
  { id: 1, title: "TechNova announces expansion into SEA markets", source: "Mint News", sentiment: "Positive", date: "2h ago" },
  { id: 2, title: "GST Council clarifies taxation on IT exports", source: "ET Now", sentiment: "Neutral", date: "5h ago" },
  { id: 3, title: "Promoter of TechNova appointed to Industry Council", source: "Business Standard", sentiment: "Positive", date: "1d ago" },
];

const litigationChecks = [
  { id: 1, court: "National Company Law Tribunal (NCLT)", status: "Clean", details: "No active insolvency proceedings found against entity or promoters." },
  { id: 2, court: "Delhi High Court", status: "Flagged", details: "Civil suit (CS-442/2023) regarding vendor dispute. Impact: Low (₹1.2M claim)." },
  { id: 3, court: "Consumer Forums", status: "Clean", details: "No significant adverse orders found in the last 5 years." },
];

export default function ResearchAgent() {
  const [scanning, setScanning] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (scanning) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setScanning(false);
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [scanning]);

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-outfit text-white">Digital Credit Manager</h1>
          <p className="text-slate-400 mt-1">Real-time secondary research and litigation monitoring.</p>
        </div>
        <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center gap-3">
           <Cpu className="w-5 h-5 text-cyan-400" />
           <span className="text-sm font-bold text-cyan-400 uppercase tracking-widest">AI Agent Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Scanning Controller */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-card p-8 flex flex-col items-center justify-center text-center relative overflow-hidden h-96">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {scanning ? (
                <motion.div 
                  key="scanning"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 relative z-10"
                >
                  <div className="w-24 h-24 rounded-full border-2 border-dashed border-cyan-500/50 flex items-center justify-center animate-spin">
                    <Globe className="w-10 h-10 text-cyan-400 rotate-animation" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white font-outfit italic">Scanning Public Domains...</h2>
                    <p className="text-slate-500 mt-2 max-w-md">The agent is currently trawling news archives, court records, and MCA filings for TechNova Solutions Pvt Ltd.</p>
                  </div>
                  <div className="w-64 mx-auto space-y-2">
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div className="h-full bg-cyan-500" style={{ width: `${progress}%` }} />
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                       <span>Progress</span>
                       <span>{progress}%</span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                   key="completed"
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="space-y-6 relative z-10"
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                  <div>
                    <h2 className="text-2xl font-bold text-white font-outfit italic">Research Synthesized</h2>
                    <p className="text-slate-500 mt-2 max-w-sm">3 adverse news items and 1 litigation flag found. Risk profiles updated.</p>
                  </div>
                  <button onClick={() => {setScanning(true); setProgress(0);}} className="glass-button px-6 py-2 rounded-xl text-sm font-semibold">
                    Re-Scan Entity
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="glass-card p-6">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                   <Newspaper className="w-4 h-4 text-cyan-400" />
                   Industry & Promoter News
                </h3>
                <div className="space-y-4">
                   {newsResults.map((news) => (
                     <div key={news.id} className="p-3 bg-white/2 border border-white/5 rounded-xl hover:bg-white/5 transition-colors">
                        <div className="text-sm font-semibold text-white leading-snug">{news.title}</div>
                        <div className="flex items-center justify-between mt-2">
                           <span className="text-[10px] text-slate-500">{news.source} • {news.date}</span>
                           <span className={cn(
                             "text-[9px] font-bold px-1.5 py-0.5 rounded",
                             news.sentiment === 'Positive' ? "bg-emerald-500/10 text-emerald-400" : "bg-white/10 text-slate-400"
                           )}>{news.sentiment}</span>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
             
             <div className="glass-card p-6">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                   <Scale className="w-4 h-4 text-amber-400" />
                   Litigation Search (e-Courts)
                </h3>
                <div className="space-y-4">
                   {litigationChecks.map((check) => (
                     <div key={check.id} className="p-3 bg-white/2 border border-white/5 rounded-xl">
                        <div className="flex items-center justify-between mb-1">
                           <div className="text-xs font-bold text-white">{check.court}</div>
                           <div className={cn(
                             "text-[9px] font-bold uppercase",
                             check.status === 'Clean' ? "text-emerald-400" : "text-amber-400"
                           )}>{check.status}</div>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-relaxed">{check.details}</p>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>

        {/* Right Column: Key Entities & Connections */}
        <div className="space-y-8">
           <div className="glass-card p-6">
              <h3 className="font-bold text-white mb-6">Promotor Network</h3>
              <div className="space-y-6">
                 {[
                   { name: "Rahul Deshmukh", role: "Managing Director", pan: "ABC****12H", risk: "Low" },
                   { name: "Sanjay Mehta", role: "Co-Founder", pan: "XYZ****05K", risk: "Medium" },
                 ].map((p) => (
                   <div key={p.name} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center font-bold text-slate-500 text-xs border border-white/10">
                         {p.name.split(' ').map(n=>n[0]).join('')}
                      </div>
                      <div className="flex-1">
                         <div className="text-sm font-bold text-white">{p.name}</div>
                         <div className="text-[10px] text-slate-500">{p.role} • {p.pan}</div>
                      </div>
                      <div className={cn(
                        "text-[9px] font-bold px-2 py-0.5 rounded-full border",
                        p.risk === 'Low' ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                      )}>{p.risk} Risk</div>
                   </div>
                 ))}
                 <button className="w-full py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                    Visual Entity Map
                 </button>
              </div>
           </div>

           <div className="glass-card p-6 border-amber-500/30 bg-amber-500/5">
              <h4 className="text-sm font-bold text-amber-400 flex items-center gap-2 mb-3">
                 <AlertTriangle className="w-4 h-4" />
                 Early Warning Flags
              </h4>
              <ul className="space-y-3">
                 <li className="text-[11px] text-slate-300 flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-amber-500 mt-1.5" />
                    Increased litigation activity in group companies noted in the last 6 months.
                 </li>
                 <li className="text-[11px] text-slate-300 flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-amber-500 mt-1.5" />
                    Recent change in statutory auditor for major subsidiary.
                 </li>
              </ul>
           </div>
        </div>
      </div>
    </div>
  );
}
