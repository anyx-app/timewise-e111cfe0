import React from 'react';
import { TrendingUp, Clock, Calendar, DollarSign, ArrowUpRight } from 'lucide-react';

const StatCard = ({ title, value, change, icon: Icon, color }: any) => (
  <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <h3 className="text-2xl font-bold text-slate-800 mt-2">{value}</h3>
      </div>
      <div className={`p-3 rounded-xl ${color} bg-opacity-10`}>
        <Icon className={`h-6 w-6 ${color.replace('bg-', 'text-')}`} />
      </div>
    </div>
    <div className="mt-4 flex items-center text-sm">
      <span className="text-emerald-500 font-medium flex items-center gap-1">
        <TrendingUp className="h-3 w-3" />
        {change}
      </span>
      <span className="text-slate-400 ml-2">vs last week</span>
    </div>
  </div>
);

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Analytics Dashboard</h1>
        <p className="text-slate-500 mt-2">Overview of your productivity and earnings.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard 
          title="Total Time" 
          value="42h 15m" 
          change="+12%" 
          icon={Clock} 
          color="bg-blue-500 text-blue-500" 
        />
        <StatCard 
          title="Billable Amount" 
          value="$3,240" 
          change="+8%" 
          icon={DollarSign} 
          color="bg-emerald-500 text-emerald-500" 
        />
        <StatCard 
          title="Active Projects" 
          value="7" 
          change="+2" 
          icon={Calendar} 
          color="bg-purple-500 text-purple-500" 
        />
        <StatCard 
          title="Productivity" 
          value="94%" 
          change="+4%" 
          icon={ArrowUpRight} 
          color="bg-orange-500 text-orange-500" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chart Placeholder */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm h-80 flex flex-col items-center justify-center text-slate-400">
          <p>Weekly Activity Chart</p>
          <span className="text-xs mt-2 text-slate-300">(Chart.js integration pending)</span>
        </div>
        
        {/* Top Projects */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-slate-800 mb-6">Top Projects by Revenue</h3>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
                    P{i}
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Website Redesign</p>
                    <p className="text-xs text-slate-500">Acme Corp</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-slate-800">$1,200</p>
                  <p className="text-xs text-slate-500">12h 30m</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
