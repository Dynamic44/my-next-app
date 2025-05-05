"use client";

import DashboardHeader from "./DashboardHeader";
import DashboardPage from "./DashboardPage";


export default function DashboardShell() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <DashboardHeader
        title="Dynamic CRM"
        description="Internal project dashboard for high-value construction clients"
        selectedView="overview"
        onViewChange={(v) => console.log("Selected:", v)}
      />
      <DashboardPage />
    </div>
  );
}
