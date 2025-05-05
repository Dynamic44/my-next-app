// app/page.js
import Link from 'next/link';

const features = [
  { name: 'Projects', href: '/second', icon: '🏗️' },
  { name: 'Clients', href: '/clients', icon: '👤' },
  { name: 'Finances', href: '/finances', icon: '💰' },
  { name: 'Schedule', href: '/schedule', icon: '🗓️' },
  { name: 'Tenders', href: '/tenders', icon: '📑' },
  { name: 'Reports', href: '/reports', icon: '📊' },
  { name: 'Settings', href: '/settings', icon: '⚙️' },
  { name: 'Tasks', href: '/tasks', icon: '✅' },
  { name: 'Team', href: '/team', icon: '👷' },
  { name: 'Messages', href: '/messages', icon: '💬' },
  { name: 'Docs', href: '/docs', icon: '📁' },
  { name: 'Help', href: '/help', icon: '❓' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dynamic Dashboard</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {features.map((feature) => (
          <Link
            key={feature.name}
            href={feature.href}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow hover:bg-blue-50 transition text-center"
          >
            <span className="text-4xl mb-2">{feature.icon}</span>
            <span className="text-sm font-medium text-gray-700">{feature.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
