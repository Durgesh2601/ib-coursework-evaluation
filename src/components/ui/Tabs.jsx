"use client"
import { useState } from "react";

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div>
      <div className="flex space-x-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`px-4 py-2 rounded-lg ${
              activeTab === tab.label
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs.find((tab) => tab.label === activeTab).content}</div>
    </div>
  );
}
