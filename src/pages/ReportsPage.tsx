import React from 'react';
import { FileText, Download, Filter } from 'lucide-react';

export default function ReportsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Reports</h1>
          <p className="text-slate-500 mt-1">Export your time data and insights.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white border border-slate-200 text-slate-600 px-4 py-2.5 rounded-xl font-medium flex items-center gap-2 hover:bg-slate-50 transition-colors">
            <Filter className="h-4 w-4" />
            Filter
          </button>
          <button className="bg-[#4A90E2] hover:bg-[#357ABD] text-white px-4 py-2.5 rounded-xl font-medium flex items-center gap-2 transition-all shadow-lg shadow-blue-200">
            <Download className="h-4 w-4" />
            Export CSV
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 text-center py-24">
          <div className="h-16 w-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="h-8 w-8 text-slate-300" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800">No reports generated</h3>
          <p className="text-slate-500 max-w-sm mx-auto mt-2">
            Select a date range and project to generate a detailed time report.
          </p>
        </div>
      </div>
    </div>
  );
}
