'use client';

import Image from 'next/image';
import AnimatedButton from "../button/Button";
import { announcements } from "@/lib/announcement"; // Assuming you have a file that exports announcements data


export default function UpcomingAnnouncementsSection()
 {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold mb-2 md:text-4xl">Upcoming Diocesan Announcements</h2>
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
            <AnimatedButton href="/announcement" label=" View All Announcements" variant='secondary' />
        
        </div>
      </div>
    </section>
  );
}
