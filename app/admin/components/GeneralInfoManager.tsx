"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiSave, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

export default function GeneralInfoManager() {
  const [settings, setSettings] = useState({
    phone: "(403) 555-0199",
    email: "david@mrmech.ca",
    location: "Calgary, AB",
    announcement: "Accepting new clients in Calgary. Limited same-day slots available.",
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 1000);
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/40">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Primary Information</h2>
        <p className="text-gray-500 mt-1 text-sm">Update the most important details that customers see first.</p>
      </div>

      <form onSubmit={handleSave} className="space-y-6 max-w-2xl">
        {/* Announcement Bar */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <FiAlertCircle className="text-red-500" /> Top Announcement Bar
          </label>
          <input
            type="text"
            value={settings.announcement}
            onChange={(e) => setSettings({ ...settings, announcement: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50/50 text-base font-medium text-gray-900"
            required
          />
          <p className="text-xs text-gray-500">This is the scrolling text at the very top of the website.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone Number */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <FiPhone className="text-blue-600" /> Phone Number
            </label>
            <input
              type="tel"
              value={settings.phone}
              onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50/50 text-base font-medium text-gray-900"
              required
            />
          </div>

          {/* Email Address */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <FiMail className="text-orange-500" /> Email Address
            </label>
            <input
              type="email"
              value={settings.email}
              onChange={(e) => setSettings({ ...settings, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-gray-50/50 text-base font-medium text-gray-900"
              required
            />
          </div>
        </div>

        {/* Service Area */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <FiMapPin className="text-green-600" /> Service Area
          </label>
          <input
            type="text"
            value={settings.location}
            onChange={(e) => setSettings({ ...settings, location: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all bg-gray-50/50 text-base font-medium text-gray-900"
            required
          />
        </div>

        <div className="pt-6 border-t border-gray-100 flex items-center gap-4">
          <button
            type="submit"
            disabled={isSaving}
            className={`
              flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white transition-all shadow-md
              ${isSaving ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 hover:-translate-y-0.5 shadow-blue-600/20"}
            `}
          >
            {isSaving ? "Saving..." : <><FiSave size={18} /> Save Changes</>}
          </button>

          {saved && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 text-green-600 text-sm font-medium bg-green-50 px-4 py-2 rounded-lg"
            >
              <FiCheckCircle size={18} /> Saved successfully!
            </motion.span>
          )}
        </div>
      </form>
    </div>
  );
}
