"use client";

import { useState } from "react";
import { FiShield, FiGlobe, FiCode } from "react-icons/fi";

export default function AdvancedManager() {
  const [maintenance, setMaintenance] = useState(false);

  return (
    <div className="space-y-4">
      {/* 1. Technical Settings */}
      <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-200">
        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4"><FiShield className="text-purple-600" /> Technical Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Maintenance Mode Toggle */}
          <div className="flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-gray-50/50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 text-orange-600 rounded-lg shrink-0">
                <FiShield size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">Maintenance Mode</h3>
                <p className="text-xs text-gray-500">Hide site from visitors</p>
              </div>
            </div>
            <button 
              onClick={() => setMaintenance(!maintenance)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors shrink-0 ${maintenance ? 'bg-orange-500' : 'bg-gray-300'}`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${maintenance ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </div>

          {/* SEO Settings */}
          <div className="flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-gray-50/50 opacity-70">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg shrink-0">
                <FiGlobe size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">SEO & Meta Tags</h3>
                <p className="text-xs text-gray-500">Auto-managed by system</p>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-md bg-gray-200 text-gray-500 text-[10px] font-bold uppercase tracking-wider shrink-0">Locked</span>
          </div>
        </div>
      </div>

      {/* 2. Developer & System Info */}
      <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-200">
        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4"><FiCode className="text-blue-600" /> System & Developer Info</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-sm text-gray-500">System Version</span>
              <span className="text-sm font-bold text-gray-900">v2.4.1 (Stable)</span>
            </div>
          </div>
          
          <div className="bg-gray-50/50 rounded-xl p-4 border border-gray-100">
            <h3 className="text-sm font-bold text-gray-900 mb-2">Development Team</h3>
            <p className="text-xs text-gray-600 leading-relaxed mb-3">
              This platform was custom-built for Mr. Mech by the Bowrand development team. For technical support, feature requests, or critical bugs, please contact the lead developers.
            </p>
            <div className="flex items-center gap-2">
              <a href="mailto:support@bowrand.com" className="text-xs font-semibold text-blue-600 hover:underline">support@bowrand.com</a>
              <span className="text-gray-300">•</span>
              <span className="text-xs text-gray-500">Response time: &lt; 24h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
