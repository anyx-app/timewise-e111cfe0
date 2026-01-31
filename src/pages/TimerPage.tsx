import React, { useState } from 'react';
import { Play, Pause, Plus, Clock } from 'lucide-react';

export default function TimerPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl space-y-8">
      {/* Timer Input Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-4 transition-all hover:shadow-md">
        <div className="flex-1 w-full">
          <input 
            type="text" 
            placeholder="What are you working on?" 
            className="w-full text-lg text-slate-700 placeholder:text-slate-400 border-none focus:ring-0 bg-transparent"
          />
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto justify-between">
          <button className="text-[#4A90E2] font-medium hover:text-[#357ABD] transition-colors flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-[#4A90E2]/10">
            <Plus className="h-4 w-4" />
            Project
          </button>
          <div className="text-2xl font-mono font-bold text-slate-700 tracking-wider">
            00:00:00
          </div>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className={`h-12 w-12 rounded-full flex items-center justify-center text-white transition-all transform active:scale-95 ${
              isPlaying 
                ? 'bg-red-500 hover:bg-red-600 shadow-red-200' 
                : 'bg-[#50E3C2] hover:bg-[#3DD1B0] shadow-[#50E3C2]/30'
            } shadow-lg`}
          >
            {isPlaying ? <Pause className="h-5 w-5 fill-current" /> : <Play className="h-5 w-5 fill-current ml-1" />}
          </button>
        </div>
      </div>

      {/* Recent Entries */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-700 pl-1">Today</h2>
        
        {/* Empty State Mock */}
        {/* <div className="text-center py-20 bg-white/50 border-2 border-dashed border-slate-200 rounded-xl">
          <Clock className="h-10 w-10 text-slate-300 mx-auto mb-3" />
          <p className="text-slate-500">No time entries yet today. Start the timer!</p>
        </div> */}

        {/* Mock Entry */}
        <div className="group bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:border-[#4A90E2]/30 transition-all flex items-center justify-between">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <span className="font-medium text-slate-800">UI Design System</span>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-100 text-purple-600">
                TimeWise
              </span>
              <span className="text-slate-400 text-sm hidden md:inline">-</span>
              <span className="text-slate-500 text-sm">Design Phase</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-lg font-mono font-medium text-slate-700">02:30:15</div>
            <button className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#4A90E2] hover:border-[#4A90E2] transition-colors opacity-0 group-hover:opacity-100">
              <Play className="h-3 w-3 fill-current ml-0.5" />
            </button>
          </div>
        </div>

        <div className="group bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:border-[#4A90E2]/30 transition-all flex items-center justify-between">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <span className="font-medium text-slate-800">Client Meeting</span>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-600">
                Consulting
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-lg font-mono font-medium text-slate-700">01:00:00</div>
            <button className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#4A90E2] hover:border-[#4A90E2] transition-colors opacity-0 group-hover:opacity-100">
              <Play className="h-3 w-3 fill-current ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
