"use client";

import { useState } from "react";
import { FiShield, FiGlobe } from "react-icons/fi";

export default function AdvancedManager() {
  const [maintenance, setMaintenance] = useState(false);

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/40">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Advanced Settings</h2>
        <p className="text-gray-500 mt-1 text-sm">These settings rarely need to be changed. Only modify if necessary.</p>
      </div>

      <div className="space-y-6 max-w-2xl">
        {/* Maintenance Mode Toggle */}
        <div className="flex items-center justify-between p-5 rounded-2xl border border-gray-100 bg-gray-50/50">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
              <FiShield size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Maintenance Mode</h3>
              <p className="text-sm text-gray-500">Temporarily hide the website from visitors.</p>
            </div>
          </div>
          <button 
            onClick={() => setMaintenance(!maintenance)}
            className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors ${maintenance ? 'bg-orange-500' : 'bg-gray-300'}`}
          >
            <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${maintenance ? 'translate-x-8' : 'translate-x-1'}`} />
          </button>
        </div>

        {/* SEO Settings Placeholder */}
        <div className="flex items-center justify-between p-5 rounded-2xl border border-gray-100 bg-gray-50/50 opacity-60 cursor-not-allowed">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
              <FiGlobe size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">SEO & Meta Tags</h3>
              <p className="text-sm text-gray-500">Managed automatically by the system.</p>
            </div>
          </div>
          <button disabled className="px-4 py-2 rounded-lg bg-gray-200 text-gray-500 text-sm font-medium">Locked</button>
        </div>
      </div>
    </div>
  );
}
