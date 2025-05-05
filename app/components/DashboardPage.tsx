"use client";

import React from "react";

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Dynamic CRM</h1>
        <p className="text-gray-600 text-lg">
          Internal project dashboard for high-value construction clients
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-800">Active Projects</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">12</p>
          <p className="text-gray-500">Ongoing large-scale builds</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-800">Total Value</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">$24.7M</p>
          <p className="text-gray-500">This quarter</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-800">Client Satisfaction</h2>
          <p className="text-3xl font-bold text-yellow-500 mt-2">98%</p>
          <p className="text-gray-500">Based on feedback surveys</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Milestones</h2>
        <ul className="space-y-2">
          <li className="flex justify-between text-gray-700">
            <span>Pour concrete for Southbank tower</span>
            <span className="text-sm text-gray-500">May 14</span>
          </li>
          <li className="flex justify-between text-gray-700">
            <span>Client review for CBD offices</span>
            <span className="text-sm text-gray-500">May 19</span>
          </li>
          <li className="flex justify-between text-gray-700">
            <span>Electrical fit-out – Brighton Estate</span>
            <span className="text-sm text-gray-500">May 21</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
