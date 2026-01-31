import React from 'react';
import { Play, Plus, MoreHorizontal, Calendar, Clock, DollarSign } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Hero Timer Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-2 md:p-4 flex flex-col md:flex-row items-center gap-4 transition-all hover:shadow-md">
        <div className="flex-1 w-full">
          <input 
            type="text" 
            placeholder="What are you working on?" 
            className="w-full text-lg md:text-xl font-medium text-slate-700 placeholder-slate-400 bg-transparent border-none focus:ring-0 px-4"
          />
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end px-4 md:px-0">
          <button className="text-[#4A90E2] font-semibold text-sm hover:text-[#357ABD] transition-colors">
            + Project
          </button>
          <div className="text-2xl font-mono font-bold text-slate-700 tracking-wider">
            00:00:00
          </div>
          <button className="h-12 w-12 rounded-full bg-gradient-to-r from-[#4A90E2] to-[#357ABD] flex items-center justify-center text-white shadow-lg shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all duration-300 group">
            <Play className="h-5 w-5 ml-1 fill-current" />
          </button>
        </div>
      </div>

      {/* Quick Stats Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Hours', value: '32.5h', icon: Clock, color: 'text-blue-500', bg: 'bg-blue-50' },
          { label: 'Billable Amount', value: '$2,450', icon: DollarSign, color: 'text-emerald-500', bg: 'bg-emerald-50' },
          { label: 'Active Projects', value: '4', icon: Calendar, color: 'text-purple-500', bg: 'bg-purple-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400">{stat.label}</p>
                <h3 className="text-3xl font-bold text-slate-800 mt-2">{stat.value}</h3>
              </div>
              <div className={`p-3 rounded-xl ${stat.bg}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-700">Recent Activity</h3>
          <button className="text-sm text-[#4A90E2] hover:underline">View All</button>
        </div>
        
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          {[
            { project: 'Website Redesign', client: 'Acme Corp', time: '09:00 AM - 11:30 AM', duration: '02:30:00', billable: true },
            { project: 'Mobile App API', client: 'Stark Ind', time: '01:00 PM - 03:15 PM', duration: '02:15:00', billable: true },
            { project: 'Meeting', client: 'Internal', time: '04:00 PM - 05:00 PM', duration: '01:00:00', billable: false },
          ].map((entry, i) => (
            <div key={i} className="group flex items-center justify-between p-4 border-b border-slate-50 last:border-none hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`h-2 w-2 rounded-full ${entry.billable ? 'bg-[#50E3C2]' : 'bg-slate-300'}`} />
                <div>
                  <p className="font-medium text-slate-800">{entry.project}</p>
                  <p className="text-sm text-slate-400">{entry.client}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-8">
                <span className="text-sm text-slate-400 hidden sm:block">{entry.time}</span>
                <span className="font-mono font-medium text-slate-700">{entry.duration}</span>
                <button className="p-2 text-slate-300 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors opacity-0 group-hover:opacity-100">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
