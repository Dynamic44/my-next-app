"use client";

import React from "react";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Active Projects</h2>
          <p className="text-3xl font-bold text-blue-600">12</p>
          <p className="text-sm text-gray-500">Ongoing large-scale builds</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Total Value</h2>
          <p className="text-3xl font-bold text-green-600">$24.7M</p>
          <p className="text-sm text-gray-500">This quarter</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Client Satisfaction</h2>
          <p className="text-3xl font-bold text-yellow-500">98%</p>
          <p className="text-sm text-gray-500">Based on feedback surveys</p>
        </div>
      </div>

      {/* Upcoming Deadlines */}
      <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Upcoming Milestones</h3>
        <ul className="divide-y divide-gray-200">
          <li className="py-3 flex justify-between">
            <span className="text-gray-700">Pour concrete for Southbank tower</span>
            <span className="text-sm text-gray-500">May 14</span>
          </li>
          <li className="py-3 flex justify-between">
            <span className="text-gray-700">Client review for CBD offices</span>
            <span className="text-sm text-gray-500">May 19</span>
          </li>
          <li className="py-3 flex justify-between">
            <span className="text-gray-700">Electrical fit-out – Brighton Estate</span>
            <span className="text-sm text-gray-500">May 21</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
