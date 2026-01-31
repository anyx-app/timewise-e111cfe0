import React from 'react';
import { User, Bell, Shield, CreditCard } from 'lucide-react';

export default function SettingsPage() {
  const tabs = [
    { name: 'Profile', icon: User, active: true },
    { name: 'Notifications', icon: Bell, active: false },
    { name: 'Security', icon: Shield, active: false },
    { name: 'Billing', icon: CreditCard, active: false },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-slate-800 tracking-tight mb-8">Settings</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                tab.active 
                  ? 'bg-white text-[#4A90E2] shadow-sm ring-1 ring-slate-200' 
                  : 'text-slate-500 hover:bg-white/50 hover:text-slate-900'
              }`}
            >
              <tab.icon className="h-5 w-5" />
              {tab.name}
            </button>
          ))}
        </div>

        <div className="flex-1 space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Profile Information</h3>
            <div className="flex items-center gap-6 mb-8">
              <div className="h-20 w-20 rounded-full bg-slate-100 border-4 border-white shadow-sm overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" />
              </div>
              <button className="text-sm font-medium text-[#4A90E2] hover:underline">
                Change Avatar
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <input type="text" defaultValue="Alex" className="w-full rounded-lg border-slate-200 focus:border-[#4A90E2] focus:ring-[#4A90E2]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <input type="text" defaultValue="Freelancer" className="w-full rounded-lg border-slate-200 focus:border-[#4A90E2] focus:ring-[#4A90E2]" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" defaultValue="alex@timewise.com" className="w-full rounded-lg border-slate-200 focus:border-[#4A90E2] focus:ring-[#4A90E2]" />
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <button className="bg-[#4A90E2] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-[#357ABD] transition-colors shadow-lg shadow-blue-200">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
