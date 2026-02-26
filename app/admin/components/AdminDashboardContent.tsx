"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiEdit3, FiActivity, FiTerminal } from "react-icons/fi";
import ContentManager from "./ContentManager";
import AnalyticsManager from "./AnalyticsManager";
import AdvancedManager from "./AdvancedManager";

const tabs = [
  { id: "content", label: "1. Content", icon: FiEdit3, desc: "Jobs, Images, Info, Comments" },
  { id: "analytics", label: "2. Analytics & Leads", icon: FiActivity, desc: "Forms, Logs, Clicks, Visitors" },
  { id: "advanced", label: "3. Advanced", icon: FiTerminal, desc: "Technical, Developers, Version" },
];

export default function AdminDashboardContent() {
  const [activeTab, setActiveTab] = useState("content");

  return (
    <div className="space-y-6">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-2 pb-3 border-b border-gray-200/60">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-1">
            Admin Dashboard
          </h1>
          <p className="text-gray-500 text-sm">
            Manage your website content, view leads, and configure technical settings.
          </p>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-3 p-3 rounded-2xl border transition-all duration-200 text-left
                ${isActive 
                  ? "bg-gray-900 border-gray-900 shadow-md text-white" 
                  : "bg-white border-gray-200 shadow-sm hover:bg-gray-50 text-gray-700"}
              `}
            >
              <div className={`p-2 rounded-xl shrink-0 ${isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"}`}>
                <tab.icon size={18} />
              </div>
              <div>
                <h3 className={`text-sm font-bold ${isActive ? "text-white" : "text-gray-900"}`}>
                  {tab.label}
                </h3>
                <p className={`text-xs mt-0.5 ${isActive ? "text-gray-300" : "text-gray-500"}`}>
                  {tab.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="min-h-[50vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === "content" && <ContentManager />}
            {activeTab === "analytics" && <AnalyticsManager />}
            {activeTab === "advanced" && <AdvancedManager />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
