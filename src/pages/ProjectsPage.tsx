import React from 'react';
import { Plus, Search, Folder, MoreHorizontal } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Projects</h1>
          <p className="text-slate-500 mt-1">Manage your ongoing work and rates.</p>
        </div>
        <button className="bg-[#4A90E2] hover:bg-[#357ABD] text-white px-4 py-2.5 rounded-xl font-medium flex items-center gap-2 transition-all shadow-lg shadow-blue-200">
          <Plus className="h-5 w-5" />
          New Project
        </button>
      </div>

      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search projects..." 
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-[#4A90E2] focus:ring-4 focus:ring-[#4A90E2]/10 transition-all outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className={`h-12 w-12 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-md bg-gradient-to-br ${
                i % 2 === 0 ? 'from-purple-500 to-indigo-500' : 'from-[#4A90E2] to-[#50E3C2]'
              }`}>
                {String.fromCharCode(64 + i)}
              </div>
              <button className="text-slate-300 hover:text-slate-600 transition-colors">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
            
            <h3 className="text-lg font-bold text-slate-800 mb-1">Project Alpha</h3>
            <p className="text-sm text-slate-500 mb-6">Client: Tech Solutions Inc.</p>
            
            <div className="flex items-center justify-between text-sm pt-4 border-t border-slate-50">
              <span className="text-slate-500 flex items-center gap-2">
                <Folder className="h-4 w-4" />
                12 entries
              </span>
              <span className="font-medium text-slate-900">$150/hr</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
