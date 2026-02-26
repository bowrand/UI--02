"use client";

import { useState } from "react";
import { FiPhoneCall, FiUsers, FiFileText, FiEye, FiTrendingUp, FiGlobe, FiClock } from "react-icons/fi";

const initialForms = [
  { id: 1, name: "Mike Thompson", phone: "403-555-0123", issue: "Brakes are squeaking badly on my Honda Civic", date: "Feb 25, 2026", time: "10:30 AM", status: "new" },
  { id: 2, name: "Sarah Lee", phone: "403-555-0987", issue: "Car won't start, clicking sound when I turn the key", date: "Feb 24, 2026", time: "2:15 PM", status: "contacted" },
  { id: 3, name: "James Wilson", phone: "403-555-0456", issue: "Check engine light is on, need diagnostics", date: "Feb 23, 2026", time: "9:45 AM", status: "contacted" },
];

const callClicks = [
  { id: 1, date: "Feb 25, 2026", time: "11:02 AM", ip: "192.168.1.***", source: "Hero CTA button" },
  { id: 2, date: "Feb 25, 2026", time: "9:18 AM", ip: "74.125.21.***", source: "Mobile sticky bar" },
  { id: 3, date: "Feb 24, 2026", time: "4:33 PM", ip: "216.58.194.***", source: "Contact section" },
  { id: 4, date: "Feb 24, 2026", time: "1:12 PM", ip: "142.250.80.***", source: "Footer CTA" },
];

const gaStats = [
  { label: "Visitors (7d)", value: "1,248", change: "+12%", icon: FiUsers, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Call Clicks (7d)", value: "42", change: "+8%", icon: FiPhoneCall, color: "text-green-600", bg: "bg-green-50" },
  { label: "Form Submissions", value: "18", change: "+23%", icon: FiFileText, color: "text-orange-600", bg: "bg-orange-50" },
  { label: "Page Views (7d)", value: "3,890", change: "+5%", icon: FiEye, color: "text-purple-600", bg: "bg-purple-50" },
];

const trafficSources = [
  { source: "Google Search", visitors: 682, pct: 55 },
  { source: "Direct", visitors: 311, pct: 25 },
  { source: "Facebook", visitors: 156, pct: 12 },
  { source: "Other", visitors: 99, pct: 8 },
];

export default function AnalyticsManager() {
  const [forms, setForms] = useState(initialForms);

  const markContacted = (id: number) => setForms(forms.map(f => f.id === id ? { ...f, status: "contacted" } : f));

  return (
    <div className="space-y-4">
      {/* 1. Quick Stats (Google Analytics style) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {gaStats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-3 shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
                <stat.icon size={16} />
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{stat.label}</span>
            </div>
            <div className="flex items-end gap-2">
              <p className="text-xl font-bold text-gray-900">{stat.value}</p>
              <span className="text-xs font-semibold text-green-600 mb-0.5">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 2. Where Traffic Comes From */}
      <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-200">
        <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-3"><FiGlobe className="text-blue-600" /> Traffic Sources (Last 7 Days)</h2>
        <div className="space-y-2">
          {trafficSources.map((src, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-xs font-medium text-gray-600 w-24 shrink-0">{src.source}</span>
              <div className="flex-1 h-5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${src.pct}%` }}></div>
              </div>
              <span className="text-xs font-bold text-gray-900 w-16 text-right">{src.visitors}</span>
              <span className="text-[10px] text-gray-500 w-8 text-right">{src.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Recent Service Requests (from the "Get Back to You" form) */}
      <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-200">
        <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-3"><FiFileText className="text-orange-500" /> Service Requests (from "Get Back to You" form)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-[10px] text-gray-500 uppercase bg-gray-50/50 border-b border-gray-100">
              <tr>
                <th className="px-3 py-2.5 font-semibold">Name</th>
                <th className="px-3 py-2.5 font-semibold">Phone</th>
                <th className="px-3 py-2.5 font-semibold">Vehicle Issue</th>
                <th className="px-3 py-2.5 font-semibold">Date & Time</th>
                <th className="px-3 py-2.5 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {forms.map((form) => (
                <tr key={form.id} className="hover:bg-gray-50/30 transition-colors">
                  <td className="px-3 py-2.5 font-medium text-gray-900 text-sm">{form.name}</td>
                  <td className="px-3 py-2.5 text-gray-600 text-sm">{form.phone}</td>
                  <td className="px-3 py-2.5 text-gray-600 text-xs max-w-[200px] truncate">{form.issue}</td>
                  <td className="px-3 py-2.5 text-gray-500 text-xs whitespace-nowrap">{form.date}, {form.time}</td>
                  <td className="px-3 py-2.5 text-right">
                    {form.status === 'new' ? (
                      <button onClick={() => markContacted(form.id)} className="px-2.5 py-1 text-[10px] font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors uppercase tracking-wider">
                        Mark Done
                      </button>
                    ) : (
                      <span className="px-2.5 py-1 text-[10px] font-bold text-gray-500 bg-gray-100 rounded-md uppercase tracking-wider">Done</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Phone Call CTA Clicks */}
      <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-200">
        <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-3"><FiPhoneCall className="text-green-600" /> Phone Call Button Clicks</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-[10px] text-gray-500 uppercase bg-gray-50/50 border-b border-gray-100">
              <tr>
                <th className="px-3 py-2.5 font-semibold">Date</th>
                <th className="px-3 py-2.5 font-semibold">Time</th>
                <th className="px-3 py-2.5 font-semibold">IP Address</th>
                <th className="px-3 py-2.5 font-semibold">Clicked From</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {callClicks.map((click) => (
                <tr key={click.id} className="hover:bg-gray-50/30 transition-colors">
                  <td className="px-3 py-2.5 text-gray-900 text-sm font-medium">{click.date}</td>
                  <td className="px-3 py-2.5 text-gray-600 text-sm">{click.time}</td>
                  <td className="px-3 py-2.5 text-gray-500 text-xs font-mono">{click.ip}</td>
                  <td className="px-3 py-2.5">
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-green-50 text-green-700 rounded-md uppercase tracking-wider">{click.source}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
