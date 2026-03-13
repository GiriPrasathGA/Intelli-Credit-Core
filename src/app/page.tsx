"use client";

import React from "react";
import { 
  Plus, 
  Search, 
  Bell, 
  ChevronDown, 
  FileUp, 
  ShieldAlert, 
  Users, 
  Zap,
  TrendingUp,
  Clock,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Active Appraisals", value: "142", icon: FileUp, trend: "+12%", positive: true },
  { label: "High Risk Flags", value: "08", icon: ShieldAlert, trend: "-03%", positive: true },
  { label: "Avg. TAT", value: "2.4h", icon: Clock, trend: "-1.2h", positive: true },
  { label: "Credit Scored", value: "₹4.2B", icon: Zap, trend: "+₹1.2B", positive: true },
];

const recentActivity = [
  { id: 1, company: "TechNova Solutions Pvt Ltd", type: "CAM Generation", status: "Completed", time: "12m ago", risk: "Low" },
  { id: 2, company: "Vertex Manufacturing", type: "GST Analysis", status: "In Progress", time: "45m ago", risk: "Medium" },
  { id: 3, company: "Global Logistics Corp", type: "Research Agent", status: "Flagged", time: "2h ago", risk: "High" },
  { id: 4, company: "Prime Retailers", type: "Site Visit Notes", status: "Pending", time: "5h ago", risk: "Low" },
];

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-outfit text-white">Credit Command Center</h1>
          <p className="text-slate-400 mt-1">AI-Powered insights for mid-sized corporate lending.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
            <input 
              type="text" 
              placeholder="Search companies, promoters..." 
              className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 w-64 transition-all"
            />
          </div>
          
          <button className="p-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors relative">
            <Bell className="w-5 h-5 text-slate-400" />
            <div className="absolute top-2 right-2.5 w-2 h-2 bg-cyan-500 rounded-full border-2 border-[#020617]" />
          </button>
          
          <div className="h-10 w-[1px] bg-white/10 mx-2" />
          
          <div className="flex items-center gap-3 pl-2">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-semibold text-white">Anand Sharma</div>
              <div className="text-xs text-slate-500">Senior Credit Officer</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-500 p-[1px]">
              <div className="w-full h-full rounded-[11px] bg-[#020617] flex items-center justify-center font-bold text-cyan-400">
                AS
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Action Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden glass-card p-8 group"
      >
        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
          <Zap className="w-48 h-48 text-cyan-400" />
        </div>
        
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-2xl font-bold text-white font-outfit italic">The Data Whisperer</h2>
          <p className="text-slate-300 mt-2 text-lg">
            Upload financial documents and let the AI synthesize GST, ITR, and Bank Statements into a ready-to-sign CAM.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-[#020617] font-bold rounded-xl flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-cyan-500/20">
              <Plus className="w-5 h-5" />
              <span>New Credit Appraisal</span>
            </button>
            <button className="px-6 py-3 glass-button text-white font-semibold rounded-xl flex items-center gap-2">
              <FileUp className="w-5 h-5" />
              <span>Bulk Upload (.zip)</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="p-2 bg-white/5 rounded-lg">
                <stat.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <div className={cn(
                "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
                stat.positive ? "text-emerald-400 bg-emerald-500/10" : "text-rose-400 bg-rose-500/10"
              )}>
                {stat.positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.trend}
              </div>
            </div>
            <div className="mt-4">
              <div className="text-2xl font-bold text-white font-outfit tracking-tight">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 glass-card overflow-hidden">
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <h3 className="font-bold text-white">Recent Activity Feed</h3>
            <button className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold uppercase tracking-wider">View All</button>
          </div>
          <div className="p-2">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors rounded-xl group">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-2 h-2 rounded-full",
                    activity.risk === 'High' ? "bg-rose-500" : activity.risk === 'Medium' ? "bg-amber-500" : "bg-emerald-500"
                  )} />
                  <div>
                    <div className="text-sm font-semibold text-white">{activity.company}</div>
                    <div className="text-xs text-slate-500 flex items-center gap-2">
                      <span>{activity.type}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-700" />
                      <span>{activity.time}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
                    activity.status === 'Completed' ? "bg-emerald-500/10 text-emerald-400" : 
                    activity.status === 'Flagged' ? "bg-rose-500/10 text-rose-400" : "bg-cyan-500/10 text-cyan-400"
                  )}>
                    {activity.status}
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 p-2 hover:bg-white/10 rounded-lg transition-all">
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Research Agent Preview */}
        <div className="glass-card flex flex-col">
          <div className="p-6 border-b border-white/10">
            <h3 className="font-bold text-white flex items-center gap-2">
              <Search className="w-4 h-4 text-cyan-400" />
              Digital Credit Manager
            </h3>
          </div>
          <div className="p-6 flex-1 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 relative">
               <Zap className="w-8 h-8 text-slate-500 animate-pulse" />
               <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full animate-ping" />
            </div>
            <div>
              <div className="text-white font-semibold">Web Research Agent</div>
              <p className="text-slate-500 text-sm mt-1 px-4">
                Scanning MCA filings and litigation status for new cases...
              </p>
            </div>
            <div className="w-full space-y-2 mt-4">
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "65%" }}
                  className="h-full bg-cyan-500"
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase">
                <span>Promoter Check</span>
                <span>65%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>
  );
}
