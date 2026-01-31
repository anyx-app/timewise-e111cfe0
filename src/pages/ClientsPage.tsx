import React from 'react';
import { Users, Mail, MapPin } from 'lucide-react';

export default function ClientsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Clients</h1>
        <p className="text-slate-500 mt-1">Manage client details and billing info.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 rounded-full bg-slate-100 border-2 border-white shadow-sm flex items-center justify-center text-xl font-bold text-slate-500">
                CL
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">Acme Corp</h3>
                <span className="inline-block px-2 py-0.5 rounded-md bg-green-100 text-green-700 text-xs font-semibold">
                  Active
                </span>
              </div>
            </div>
            
            <div className="space-y-3 text-sm text-slate-500">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                billing@acme.com
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                San Francisco, CA
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-4 w-4" />
                Contact: John Doe
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
