"use client";

interface DashboardHeaderProps {
  title: string;
  description: string;
  selectedView: "overview" | "projects" | "clients" | "finances";
  onViewChange: (view: "overview" | "projects" | "clients" | "finances") => void;
}

export default function DashboardHeader({
  title,
  description,
  selectedView,
  onViewChange,
}: DashboardHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      {/* Add tabs or buttons here for switching views */}
    </div>
  );
}
