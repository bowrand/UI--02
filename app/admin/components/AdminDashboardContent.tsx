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
    <div className="flex h-[calc(100vh-80px)] w-full bg-[#F5F5F7] rounded-2xl shadow-md overflow-hidden">
      {/* Sidebar Tabs */}
      <nav className="w-56 min-w-[180px] max-w-[220px] bg-white border-r border-gray-200 flex flex-col py-6 px-3 gap-2">
        <h1 className="text-lg font-bold text-gray-900 mb-6 pl-2">Admin Dashboard</h1>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-semibold transition-all duration-200 text-left ${isActive ? "bg-gray-900 border-gray-900 text-white" : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"}`}
              style={{ fontSize: '13px', padding: '8px 12px' }}
            >
              <div className={`p-1.5 rounded-lg shrink-0 ${isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"}`}> <tab.icon size={15} /> </div>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Main Content Area */}
      <section className="flex-1 h-full overflow-hidden px-6 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="h-full overflow-auto w-full"
          >
            {activeTab === "content" && <ContentManager />}
            {activeTab === "analytics" && <AnalyticsManager wide />}
            {activeTab === "advanced" && <AdvancedManager />}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}
