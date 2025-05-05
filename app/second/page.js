import Link from 'next/link';

export default function SecondPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Second Page</h1>
      <p className="text-lg text-gray-700 mb-6">
        This is your secondary route in the CRM dashboard.
      </p>

      <Link href="/">
        <button className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition">
          ← Back to Dashboard
        </button>
      </Link>
    </div>
  );
}
