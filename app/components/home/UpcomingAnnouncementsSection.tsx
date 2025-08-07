'use client';

import Image from 'next/image';
import AnimatedButton from "../button/Button";

export interface AnnouncementItem {
  title: string;
  date: string;
  image: string;
  description: string;
}

const sampleAnnouncements: AnnouncementItem[] = [
  {
    title: 'Ordination of Rev. John Doe',
    date: '2025-09-14',
    image: '/assets/building1.jpg',
    description:
      'The Catholic Diocese of Katsina joyfully invites you to the ordination of Rev. John Doe at St. Mary’s Cathedral.',
  },
  {
    title: 'Dedication of Holy Trinity Church',
    date: '2025-10-01',
    image: '/assets/building2.jpg',
    description:
      'Join us for the solemn dedication of Holy Trinity Catholic Church, Daura Deanery. A moment of grace for the faithful!',
  },
  {
    title: 'Diocesan Youth Rally 2025',
    date: '2025-11-12',
    image: '/assets/building3.jpg',
    description:
      'All youths across the Diocese are invited to our annual rally for praise, worship, formation, and fellowship.',
  },
];

export default function UpcomingAnnouncementsSection({
  announcements = sampleAnnouncements,
}: {
  announcements?: AnnouncementItem[];
}) {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Upcoming Diocesan Announcements</h2>
          <p className="text-gray-600">Stay informed about what’s happening in our diocese.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {announcements.slice(0, 3).map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-lg shadow hover:shadow-md transition overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-2">
                  📅 {new Date(item.date).toDateString()}
                </p>
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">{item.description}</p>
                {/* <Link
                  href={`/announcements/${i}`}
                  className="text-blue-700 font-medium text-sm hover:underline"
                >
                  View Details →
                </Link> */}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
            <AnimatedButton href="/announcement" label=" View All Announcements" />
          {/* <Link
            href="/announcement"
            className="inline-block px-6 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition"
          >
            View All Announcements
          </Link> */}
        </div>
      </div>
    </section>
  );
}
