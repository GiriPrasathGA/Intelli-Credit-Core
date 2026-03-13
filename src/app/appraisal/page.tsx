"use client";

import React from "react";
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  ExternalLink,
  Building2,
  Clock,
  ShieldCheck,
  ShieldAlert,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const applications = [
  { id: "APP-982-TN", name: "TechNova Solutions Pvt Ltd", sector: "IT Services", amount: "₹50.0M", score: 7.4, status: "Ready to Review", date: "Today, 10:45 AM", risk: "Low" },
  { id: "APP-441-VM", name: "Vertex Manufacturing", sector: "Heavy Engineering", amount: "₹120.0M", score: 6.2, status: "Digital Research", date: "Yesterday", risk: "Medium" },
  { id: "APP-112-GL", name: "Global Logistics Corp", sector: "Transportation", amount: "₹85.5M", score: 4.8, status: "Flagged", date: "2 days ago", risk: "High" },
  { id: "APP-556-PR", name: "Prime Retailers", sector: "Consumer Goods", amount: "₹25.0M", score: 8.1, status: "Completed", date: "3 days ago", risk: "Low" },
];

export default function AppraisalList() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-outfit text-white">Credit Appraisals</h1>
          <p className="text-slate-400 mt-1">Manage and review incoming corporate loan applications.</p>
        </div>
        <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-[#020617] font-bold rounded-xl flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-cyan-500/20">
          <Plus className="w-5 h-5" />
          <span>New Appraisal Case</span>
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
          <input 
            type="text" 
            placeholder="Search by company name, PAN, or Application ID..." 
            className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
          />
        </div>
        <button className="px-4 py-3 glass-button rounded-xl flex items-center gap-2 text-sm text-slate-300">
           <Filter className="w-4 h-4" />
           <span>Filters</span>
        </button>
      </div>

      <div className="glass-card overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-white/2 border-b border-white/5">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Corporation</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Loan Amount</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Intelli-Score</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Status / Risk</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Date Modified</th>
              <th className="px-6 py-4 text-center text-xs font-bold text-slate-500 uppercase tracking-widest">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {applications.map((app) => (
              <motion.tr 
                key={app.id} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="hover:bg-white/[0.03] transition-colors group cursor-pointer"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                      <Building2 className="w-5 h-5 text-slate-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">{app.name}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{app.id} • {app.sector}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm font-semibold text-white">{app.amount}</span>
                </td>
                <td className="px-6 py-5">
                   <div className="flex items-center gap-3">
                      <div className="text-sm font-black text-white">{app.score}</div>
                      <div className="w-12 h-1 bg-white/5 rounded-full overflow-hidden">
                         <div className={cn(
                           "h-full rounded-full",
                           app.score > 7 ? "bg-emerald-500" : app.score > 5 ? "bg-cyan-500" : "bg-rose-500"
                         )} style={{ width: `${app.score * 10}%` }} />
                      </div>
                   </div>
                </td>
                <td className="px-6 py-5">
                   <div className="flex flex-col gap-1.5">
                      <div className={cn(
                        "text-[10px] font-bold uppercase tracking-widest",
                        app.status === 'Ready to Review' ? "text-cyan-400" : 
                        app.status === 'Flagged' ? "text-rose-400" : 
                        app.status === 'Completed' ? "text-emerald-400" : "text-amber-400"
                      )}>
                        {app.status}
                      </div>
                      <div className="flex items-center gap-1.5">
                         {app.risk === 'Low' ? <ShieldCheck className="w-3 h-3 text-emerald-500" /> : <ShieldAlert className="w-3 h-3 text-amber-500" />}
                         <span className="text-[10px] text-slate-500 font-medium">Risk: {app.risk}</span>
                      </div>
                   </div>
                </td>
                <td className="px-6 py-5">
                   <div className="flex items-center gap-2 text-slate-500 text-xs">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{app.date}</span>
                   </div>
                </td>
                <td className="px-6 py-5">
                   <div className="flex items-center justify-center gap-2">
                     <Link href={`/appraisal/${app.id}`}>
                        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors border border-transparent hover:border-white/5">
                           <ExternalLink className="w-4 h-4 text-slate-400 hover:text-cyan-400" />
                        </button>
                      </Link>
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors border border-transparent hover:border-white/5">
                        <MoreVertical className="w-4 h-4 text-slate-400" />
                      </button>
                   </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
