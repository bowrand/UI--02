"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiInfo, FiImage, FiSettings } from "react-icons/fi";
import GeneralInfoManager from "./GeneralInfoManager";
import PortfolioManager from "./PortfolioManager";
import AdvancedManager from "./AdvancedManager";

const tabs = [
  { id: "general", label: "1. Basic Info", icon: FiInfo, desc: "Phone, Email, Location" },
  { id: "portfolio", label: "2. Jobs & Gallery", icon: FiImage, desc: "Photos & Recent Work" },
  { id: "advanced", label: "3. Advanced", icon: FiSettings, desc: "Technical settings" },
];

export default function AdminDashboardContent() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-4 border-b border-gray-200/60">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-2">
            Welcome back, David
          </h1>
          <p className="text-gray-500 text-base">
            Manage your website content easily. Select a category below to get started.
          </p>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex flex-col items-start p-5 rounded-3xl border transition-all duration-300 text-left
                ${isActive 
                  ? "bg-blue-600 border-blue-600 shadow-lg shadow-blue-600/20 text-white scale-[1.02]" 
                  : "bg-white/80 border-white/40 shadow-sm hover:shadow-md hover:bg-white text-gray-700"}
              `}
            >
              <div className={`p-3 rounded-2xl mb-3 ${isActive ? "bg-white/20 text-white" : "bg-blue-50 text-blue-600"}`}>
                <tab.icon size={24} />
              </div>
              <h3 className={`text-lg font-bold ${isActive ? "text-white" : "text-gray-900"}`}>
                {tab.label}
              </h3>
              <p className={`text-sm mt-1 ${isActive ? "text-blue-100" : "text-gray-500"}`}>
                {tab.desc}
              </p>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="min-h-[50vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "general" && <GeneralInfoManager />}
            {activeTab === "portfolio" && <PortfolioManager />}
            {activeTab === "advanced" && <AdvancedManager />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
