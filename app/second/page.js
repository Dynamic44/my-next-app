// app/page.js
import Link from 'next/link';
import features from './data/features';

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
            <img src={feature.icon} alt={feature.name} className="w-10 h-10 mb-2" />
            <span className="text-sm font-medium text-gray-700">{feature.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

