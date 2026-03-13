"use client";

import React, { useState } from "react";
import { 
  ArrowLeft, 
  Download, 
  Share2, 
  CheckCircle2, 
  AlertCircle, 
  Info,
  ChevronRight,
  TrendingUp,
  FileText,
  ShieldCheck,
  Building2,
  Users2,
  Coins
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const fiveCs = [
  { id: "character", name: "Character", icon: Users2, score: 85, status: "Excellent", description: "Promoter experience (15+ yrs), clean litigation history, and positive industry reputation." },
  { id: "capacity", name: "Capacity", icon: TrendingUp, score: 72, status: "Strong", description: "Debt Service Coverage Ratio (DSCR) at 1.8x. Cash flow shows circular trading flag in Q3." },
  { id: "capital", name: "Capital", icon: Coins, score: 65, status: "Moderate", description: "Promoter contribution at 25%. Significant reliance on short-term debt for expansion." },
  { id: "collateral", name: "Collateral", icon: ShieldCheck, score: 90, status: "Exceptional", description: "Asset coverage at 2.5x. Primary security: Industrial land with clear title." },
  { id: "conditions", name: "Conditions", icon: Building2, score: 45, status: "At Risk", description: "Sector headwinds (Textiles): Regulatory changes in export duty impacting margins." },
];

export default function AppraisalDetails() {
  const [activeTab, setActiveTab] = useState("analysis");

  return (
    <div className="p-8 space-y-8 max-w-7xl">
      {/* Navigation & Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-white/5 rounded-lg transition-colors group">
            <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-white" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-white font-outfit">TechNova Solutions Pvt Ltd</h1>
              <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-emerald-500/20">
                Active
              </span>
            </div>
            <p className="text-slate-500 text-sm mt-0.5">Application ID: APP-982-TN | Sector: IT Services</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="glass-button px-4 py-2 text-sm text-white rounded-xl flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
          <button className="bg-cyan-500 hover:bg-cyan-400 text-[#020617] font-bold px-4 py-2 text-sm rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/20">
            <Download className="w-4 h-4" />
            <span>Export CAM (PDF)</span>
          </button>
        </div>
      </div>

      {/* Summary Score Bar */}
      <div className="glass-card p-1 overflow-hidden">
        <div className="flex items-stretch h-24">
          <div className="w-48 flex flex-col items-center justify-center border-r border-white/5 bg-white/2">
            <div className="text-3xl font-black text-cyan-400 font-outfit">7.4</div>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Intelli-Score</div>
          </div>
          <div className="flex-1 px-8 py-4 flex flex-col justify-center">
             <div className="flex justify-between items-end mb-2">
                <span className="text-sm font-semibold text-white">Lending Recommendation</span>
                <span className="text-sm text-cyan-400 font-bold">Recommended: ₹50.0M @ 10.5%</span>
             </div>
             <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "74%" }}
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                />
             </div>
             <div className="flex justify-between mt-2">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-[10px] text-slate-400">Low Default Probability</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                    <span className="text-[10px] text-slate-400">Sectoral Volatility</span>
                  </div>
                </div>
                <div className="text-[10px] text-slate-500 italic">Target TAT: 4h | Actual: 1.5h</div>
             </div>
          </div>
        </div>
      </div>

      {/* Main Tabs */}
      <div className="flex items-center gap-8 border-b border-white/10 px-2">
        {["Analysis", "The Data Whisperer", "Research Manager", "Site Visit", "CAM Preview"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={cn(
              "pb-4 text-sm font-semibold transition-all relative",
              activeTab === tab.toLowerCase() ? "text-cyan-400" : "text-slate-500 hover:text-slate-300"
            )}
          >
            {tab}
            {activeTab === tab.toLowerCase() && (
              <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 shadow-glow shadow-cyan-400/50" />
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
        {/* Left Column: Analysis Sections */}
        <div className="lg:col-span-2 space-y-8">
          <AnimatePresence mode="wait">
            {activeTab === "analysis" && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                   <h3 className="text-xl font-bold text-white font-outfit italic">The 5 Cs of Credit Appraisal</h3>
                   <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">AI Generated</span>
                   </div>
                </div>

                <div className="space-y-4">
                  {fiveCs.map((c, i) => (
                    <div key={c.id} className="glass-card p-6 hover:bg-white/[0.07] transition-all group cursor-default">
                      <div className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                            <c.icon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                             <div className="flex items-center gap-3">
                                <span className="text-lg font-bold text-white font-outfit tracking-wide">{c.name}</span>
                                <span className={cn(
                                  "px-2 py-0.5 text-[9px] font-black uppercase tracking-tighter rounded border",
                                  c.score > 80 ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                                  c.score > 60 ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" :
                                  "bg-rose-500/10 text-rose-400 border-rose-500/20"
                                )}>
                                  {c.status}
                                </span>
                             </div>
                             <div className="text-xl font-black text-white/40 font-outfit">{c.score}%</div>
                          </div>
                          
                          {c.id === "capacity" && (
                            <div className="mb-3 px-3 py-2 bg-rose-500/10 border border-rose-500/20 rounded-lg flex items-center gap-2">
                               <AlertCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                               <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest">Anomaly Detected: Circular Trading Flag (Q3-FY24)</span>
                            </div>
                          )}

                          <p className="text-sm text-slate-400 leading-relaxed">
                            {c.description}
                          </p>
                          <div className="mt-4 flex items-center gap-4 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                             <button className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
                               View Data Points <ChevronRight className="w-3 h-3" />
                             </button>
                             <button className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
                               Cross-Reference Docs <ChevronRight className="w-3 h-3" />
                             </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "site visit" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-6"
              >
                <div className="glass-card p-8 bg-gradient-to-br from-cyan-500/5 to-transparent">
                   <h3 className="text-xl font-bold text-white font-outfit italic mb-6">Qualitative Site Visit Insights</h3>
                   <div className="space-y-6">
                      <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                         <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">Visit Summary (March 05, 2026)</div>
                         <p className="text-sm text-slate-300 leading-relaxed">
                            Factory operating at 85% capacity. Machinery well-maintained. Interaction with senior management confirms expansion plans are on track despite sector export duty concerns.
                         </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div className="p-4 border border-white/5 rounded-xl">
                             <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Labor Relations</div>
                             <div className="text-white font-semibold mt-1">Stable (No Disputes)</div>
                         </div>
                         <div className="p-4 border border-white/5 rounded-xl">
                             <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Inventory Level</div>
                             <div className="text-white font-semibold mt-1">Optimal (2.5 Months)</div>
                         </div>
                      </div>
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: AI Extraction & Details */}
        <div className="space-y-8">
           <div className="glass-card p-6">
              <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-6">
                 <FileText className="w-4 h-4 text-cyan-400" />
                 Confidence Breakdown
              </h4>
              <div className="space-y-6">
                 {[
                   { label: "GST Data Extraction", value: 98 },
                   { label: "Bank Statement OCR", value: 94 },
                   { label: "MCA Filing Match", value: 100 },
                   { label: "News Sentiment Analysis", value: 82 },
                 ].map((item) => (
                   <div key={item.label} className="space-y-2">
                      <div className="flex justify-between text-xs font-semibold">
                         <span className="text-slate-400">{item.label}</span>
                         <span className="text-white">{item.value}%</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                         <div className="h-full bg-cyan-500" style={{ width: `${item.value}%` }} />
                      </div>
                   </div>
                 ))}
              </div>
              <div className="mt-8 p-4 bg-white/2 border border-white/5 rounded-xl">
                 <div className="flex items-start gap-3">
                    <Info className="w-4 h-4 text-slate-400 mt-1" />
                    <p className="text-[11px] text-slate-500 italic leading-relaxed">
                       This appraisal memo was synthesized from 14 source documents including GSTR-3B (Oct-Mar), MCA filings (FY24), and E-Courts litigation search results.
                    </p>
                 </div>
              </div>
           </div>

           <div className="glass-card shadow-2xl shadow-cyan-500/5 relative overflow-hidden p-6 hover:border-cyan-500/30 transition-all cursor-pointer group">
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <ShieldCheck className="w-32 h-32 text-cyan-400" />
              </div>
              <h4 className="text-sm font-bold text-white mb-2">Policy Deviation Check</h4>
              <p className="text-xs text-slate-500 mb-4">No critical policy deviations found. All parameters within Basel III guidelines for corporate exposure.</p>
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest">
                View Compliance Log <ChevronRight className="w-3 h-3" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
