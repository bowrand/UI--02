"use client";

import { useState } from "react";
import { FiPhoneCall, FiUsers, FiFileText, FiEye, FiGlobe, FiChevronDown, FiX, FiFilter, FiMaximize2 } from "react-icons/fi";

// --- MOCK DATA ---
const initialForms = [
  { id: 1, name: "Mike Thompson", phone: "403-555-0123", issue: "Brakes are squeaking badly on my Honda Civic", date: "Feb 25, 2026", time: "10:30 AM", status: "new" },
  { id: 2, name: "Sarah Lee", phone: "403-555-0987", issue: "Car won't start, clicking sound when I turn the key", date: "Feb 24, 2026", time: "2:15 PM", status: "contacted" },
  { id: 3, name: "James Wilson", phone: "403-555-0456", issue: "Check engine light is on, need diagnostics", date: "Feb 23, 2026", time: "9:45 AM", status: "contacted" },
  { id: 4, name: "Robert Davis", phone: "403-555-7890", issue: "Oil change and general inspection", date: "Feb 20, 2026", time: "1:00 PM", status: "contacted" },
  { id: 5, name: "Emily Chen", phone: "403-555-3210", issue: "AC is blowing warm air", date: "Feb 18, 2026", time: "4:20 PM", status: "contacted" },
];

const callClicks = [
  { id: 1, date: "Feb 25, 2026", time: "11:02 AM", ip: "192.168.1.***", source: "Hero CTA button" },
  { id: 2, date: "Feb 25, 2026", time: "9:18 AM", ip: "74.125.21.***", source: "Mobile sticky bar" },
  { id: 3, date: "Feb 24, 2026", time: "4:33 PM", ip: "216.58.194.***", source: "Contact section" },
  { id: 4, date: "Feb 24, 2026", time: "1:12 PM", ip: "142.250.80.***", source: "Footer CTA" },
  { id: 5, date: "Feb 22, 2026", time: "10:45 AM", ip: "99.231.45.***", source: "Hero CTA button" },
  { id: 6, date: "Feb 20, 2026", time: "2:30 PM", ip: "174.94.12.***", source: "Mobile sticky bar" },
];

const trafficSources = [
  { source: "Google Search", visitors: 682, pct: 55 },
  { source: "Direct", visitors: 311, pct: 25 },
  { source: "Facebook", visitors: 156, pct: 12 },
  { source: "Other", visitors: 99, pct: 8 },
];

// --- COMPONENTS ---

// Reusable Time Range Selector
const TimeRangeSelector = ({ value, onChange }: { value: string, onChange: (val: string) => void }) => (
  <div className="relative inline-block">
    <select 
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2 pl-4 pr-10 rounded-lg text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer hover:bg-gray-100 transition-colors"
    >
      <option value="7d">Last 7 Days</option>
      <option value="30d">Last 30 Days</option>
      <option value="all">All Time</option>
    </select>
    <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
  </div>
);

// Modal Component
const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-gray-50/80">
          <h3 className="text-xl font-black text-gray-900">{title}</h3>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-200 rounded-full transition-colors">
            <FiX size={24} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto flex-1 bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function AnalyticsManager() {
  // State for time ranges
  const [trafficRange, setTrafficRange] = useState("7d");
  const [formsRange, setFormsRange] = useState("7d");
  const [callsRange, setCallsRange] = useState("7d");

  // State for modals
  const [isFormsModalOpen, setIsFormsModalOpen] = useState(false);
  const [isCallsModalOpen, setIsCallsModalOpen] = useState(false);

  // State for data
  const [forms, setForms] = useState(initialForms);
  const [formsSort, setFormsSort] = useState<"newest" | "oldest">("newest");

  const markContacted = (id: number) => setForms(forms.map(f => f.id === id ? { ...f, status: "contacted" } : f));

  // Sort forms
  const sortedForms = [...forms].sort((a, b) => {
    if (formsSort === "newest") return b.id - a.id;
    return a.id - b.id;
  });

  return (
    <div className="space-y-8 pb-10">
      
      {/* --- SECTION 1: WEBSITE VIEWS & TRAFFIC --- */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-5 border-b border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <FiGlobe size={24} />
            </div>
            <div>
              <h2 className="text-xl font-black text-gray-900">Website Views & Traffic</h2>
              <p className="text-sm font-medium text-gray-500">See how many people are visiting your site.</p>
            </div>
          </div>
          <TimeRangeSelector value={trafficRange} onChange={setTrafficRange} />
        </div>
        
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Big Stats */}
          <div className="col-span-1 space-y-4">
            <div className="bg-blue-50/50 rounded-2xl p-5 border border-blue-100">
              <div className="flex items-center gap-2 text-blue-800 mb-2">
                <FiUsers size={18} />
                <span className="text-sm font-bold uppercase tracking-wider">Total Visitors</span>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-5xl font-black text-gray-900">{trafficRange === '7d' ? '1,248' : trafficRange === '30d' ? '4,892' : '12,450'}</span>
                <span className="text-sm font-bold text-green-600 mb-1.5 bg-green-100 px-2 py-0.5 rounded-md">+12%</span>
              </div>
            </div>
            <div className="bg-purple-50/50 rounded-2xl p-5 border border-purple-100">
              <div className="flex items-center gap-2 text-purple-800 mb-2">
                <FiEye size={18} />
                <span className="text-sm font-bold uppercase tracking-wider">Page Views</span>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-5xl font-black text-gray-900">{trafficRange === '7d' ? '3,890' : trafficRange === '30d' ? '15,200' : '45,120'}</span>
                <span className="text-sm font-bold text-green-600 mb-1.5 bg-green-100 px-2 py-0.5 rounded-md">+5%</span>
              </div>
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="col-span-1 lg:col-span-2 bg-gray-50/50 rounded-2xl p-6 border border-gray-100">
            <h3 className="text-sm font-bold text-gray-500 mb-5 uppercase tracking-wider">Where they come from</h3>
            <div className="space-y-4">
              {trafficSources.map((src, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <span className="text-base font-bold text-gray-700 w-32 shrink-0">{src.source}</span>
                  <div className="flex-1 h-8 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: `${src.pct}%` }}></div>
                  </div>
                  <span className="text-lg font-black text-gray-900 w-16 text-right">{src.visitors}</span>
                  <span className="text-sm font-bold text-gray-400 w-12 text-right">{src.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- SECTION 2: SERVICE REQUESTS (FORMS) --- */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-5 border-b border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
              <FiFileText size={24} />
            </div>
            <div>
              <h2 className="text-xl font-black text-gray-900">Service Requests</h2>
              <p className="text-sm font-medium text-gray-500">Messages from the "Get Back to You" form.</p>
            </div>
          </div>
          <TimeRangeSelector value={formsRange} onChange={setFormsRange} />
        </div>

        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex gap-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
              <div className="text-center px-4">
                <span className="block text-3xl font-black text-gray-900">{forms.length}</span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Total</span>
              </div>
              <div className="w-px bg-gray-200"></div>
              <div className="text-center px-4">
                <span className="block text-3xl font-black text-orange-600">{forms.filter(f => f.status === 'new').length}</span>
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">New</span>
              </div>
            </div>
            <button 
              onClick={() => setIsFormsModalOpen(true)}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-sm"
            >
              <FiMaximize2 size={18} /> View Full List
            </button>
          </div>

          {/* Preview Table */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-left">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-5 py-4 font-bold">Name & Contact</th>
                  <th className="px-5 py-4 font-bold">Issue</th>
                  <th className="px-5 py-4 font-bold">Date</th>
                  <th className="px-5 py-4 font-bold text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {forms.slice(0, 3).map((form) => (
                  <tr key={form.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-5 py-4">
                      <div className="font-bold text-gray-900 text-base">{form.name}</div>
                      <div className="text-gray-500 text-sm font-medium mt-0.5">{form.phone}</div>
                    </td>
                    <td className="px-5 py-4 text-gray-700 text-sm font-medium max-w-[300px] truncate">{form.issue}</td>
                    <td className="px-5 py-4 text-gray-500 text-sm font-medium">{form.date}</td>
                    <td className="px-5 py-4 text-right">
                      {form.status === 'new' ? (
                        <span className="px-3 py-1.5 text-xs font-bold text-orange-700 bg-orange-100 rounded-lg uppercase tracking-wider">New</span>
                      ) : (
                        <span className="px-3 py-1.5 text-xs font-bold text-gray-500 bg-gray-100 rounded-lg uppercase tracking-wider">Done</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* --- SECTION 3: PHONE CALL CLICKS --- */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-5 border-b border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0">
              <FiPhoneCall size={24} />
            </div>
            <div>
              <h2 className="text-xl font-black text-gray-900">Phone Call Clicks</h2>
              <p className="text-sm font-medium text-gray-500">People who clicked your phone number to call.</p>
            </div>
          </div>
          <TimeRangeSelector value={callsRange} onChange={setCallsRange} />
        </div>

        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex gap-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
              <div className="text-center px-4">
                <span className="block text-3xl font-black text-gray-900">{callClicks.length}</span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Total Clicks</span>
              </div>
            </div>
            <button 
              onClick={() => setIsCallsModalOpen(true)}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-sm"
            >
              <FiMaximize2 size={18} /> View Full List
            </button>
          </div>

          {/* Preview Table */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-left">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-5 py-4 font-bold">Date & Time</th>
                  <th className="px-5 py-4 font-bold">Clicked From</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {callClicks.slice(0, 3).map((click) => (
                  <tr key={click.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-5 py-4">
                      <div className="font-bold text-gray-900 text-base">{click.date}</div>
                      <div className="text-gray-500 text-sm font-medium mt-0.5">{click.time}</div>
                    </td>
                    <td className="px-5 py-4">
                      <span className="px-3 py-1.5 text-xs font-bold bg-green-100 text-green-800 rounded-lg uppercase tracking-wider">{click.source}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* --- MODALS --- */}
      
      {/* Forms Modal */}
      <Modal isOpen={isFormsModalOpen} onClose={() => setIsFormsModalOpen(false)} title="All Service Requests">
        <div className="mb-6 flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
          <div className="flex items-center gap-2 text-base font-bold text-gray-700">
            <FiFilter size={20} /> Sort by:
          </div>
          <select 
            value={formsSort}
            onChange={(e) => setFormsSort(e.target.value as any)}
            className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 font-bold cursor-pointer"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="text-xs text-gray-500 uppercase bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-5 py-4 font-bold">Name & Contact</th>
                <th className="px-5 py-4 font-bold">Vehicle Issue</th>
                <th className="px-5 py-4 font-bold">Date & Time</th>
                <th className="px-5 py-4 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {sortedForms.map((form) => (
                <tr key={form.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="px-5 py-4">
                    <div className="font-bold text-gray-900 text-base">{form.name}</div>
                    <div className="text-gray-600 text-sm font-medium mt-0.5">{form.phone}</div>
                  </td>
                  <td className="px-5 py-4 text-gray-800 text-sm font-medium">{form.issue}</td>
                  <td className="px-5 py-4 text-gray-500 text-sm font-medium whitespace-nowrap">
                    <div className="text-gray-900">{form.date}</div>
                    <div className="text-gray-500">{form.time}</div>
                  </td>
                  <td className="px-5 py-4 text-right">
                    {form.status === 'new' ? (
                      <button onClick={() => markContacted(form.id)} className="px-4 py-2 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors uppercase tracking-wider border border-blue-200 shadow-sm">
                        Mark Done
                      </button>
                    ) : (
                      <span className="px-4 py-2 text-xs font-bold text-gray-500 bg-gray-100 rounded-lg uppercase tracking-wider border border-gray-200">Done</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal>

      {/* Calls Modal */}
      <Modal isOpen={isCallsModalOpen} onClose={() => setIsCallsModalOpen(false)} title="All Phone Call Clicks">
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="text-xs text-gray-500 uppercase bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-5 py-4 font-bold">Date & Time</th>
                <th className="px-5 py-4 font-bold">IP Address</th>
                <th className="px-5 py-4 font-bold">Clicked From</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {callClicks.map((click) => (
                <tr key={click.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="px-5 py-4">
                    <div className="font-bold text-gray-900 text-base">{click.date}</div>
                    <div className="text-gray-500 text-sm font-medium mt-0.5">{click.time}</div>
                  </td>
                  <td className="px-5 py-4 text-gray-500 text-sm font-mono">{click.ip}</td>
                  <td className="px-5 py-4">
                    <span className="px-3 py-1.5 text-xs font-bold bg-green-100 text-green-800 rounded-lg uppercase tracking-wider">{click.source}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal>

    </div>
  );
}
