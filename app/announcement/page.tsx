'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageBanner from '../components/banner/PageBanner';

import { announcements } from '@/lib/announcement'; 
export default function AnnouncementsPage() {
  return (
    <main className="bg-gray-100 ">
        <PageBanner
        title='Diocesean Announcements'/>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 py-12 px-4">
        {/* Main Announcement Content */}
        <div className="lg:col-span-2 space-y-10">
          {announcements.map((announcement, i) => (
            <div key={i} className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
              <div className="relative w-full h-56">
                <Image
                  src={announcement.image}
                  alt={announcement.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{announcement.title}</h2>
                <p className="text-sm text-gray-500 mb-2">
                  📅 {new Date(announcement.date).toDateString()}
                </p>
                <p className="text-gray-700 mb-4">{announcement.description}</p>
                <Link
                  href={`/announcements/${i}`}
                  className="inline-block text-red-700 font-medium hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Highlights */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-4 ">Upcoming Highlights</h3>
            <ul className="space-y-3 text-sm">
              {announcements.map((a, idx) => (
                <li key={idx}>
                  <Link href={`/announcements/${idx}`} className="text-red-700 hover:underline">
                    {a.title}
                  </Link>
                  <p className="text-gray-500 text-xs">{new Date(a.date).toLocaleDateString()}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Downloads */}
          <div className="bg-white p-6 rounded shadow">
  <h3 className="text-xl font-semibold mb-4 ">Upcoming Baptism Dates</h3>
  <ul className="text-sm space-y-2 text-gray-700">
    <li>📍 St. Mary’s Cathedral – Sept 21, 2025</li>
    <li>📍 Holy Trinity Parish – Oct 5, 2025</li>
    <li>📍 St. Joseph’s Mission – Oct 19, 2025</li>
    <li>📍 Our Lady of Fatima – Nov 2, 2025</li>
  </ul>
</div>
<div className="bg-white p-6 rounded shadow">
  <h3 className="text-xl font-semibold mb-4">Cathedraticum 2025</h3>
  <ul className="text-sm space-y-2 text-gray-700">
    <li>📍 Katsina Deanery – Mar 2, 2025</li>
    <li>📍 Daura Deanery – Mar 9, 2025</li>
    <li>📍 Malumfashi Deanery – Mar 16, 2025</li>
    <li>📍 Funtua Deanery – Mar 23, 2025</li>
  </ul>
</div>
        </aside>
      </div>
    </main>
  );
}
