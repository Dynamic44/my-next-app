// app/page.js
import Link from 'next/link';
import DashboardShell from './components/DashboardShell';

export default function Home() {
  return (
    <>
      <DashboardShell />
      <div className="flex justify-center mt-8">
      <Link href="/second">
  <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
    Go to The Second Page
  </button>
</Link>

      </div>
    </>
  );
}
