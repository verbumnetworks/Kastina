'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const news = [
  {
    id: 1,
    title: 'Pope Francis Announces New Encyclical',
    date: 'July 15, 2025',
    summary:
      'The Holy Father has released a new encyclical emphasizing peace and unity in a fragmented world.',
    image: '/assets/popeleo1.jpeg',
  },
  {
    id: 2,
    title: 'World Youth Day Reflections',
    date: 'July 10, 2025',
    summary:
      'Young Catholics from across the globe gathered to share stories of faith, hope, and renewal.',
    image: '/assets/popeleo2.jpeg',
  },
  {
    id: 3,
    title: 'Local Diocese Hosts Faith Seminar',
    date: 'July 3, 2025',
    summary:
      'A weekend of learning and community engagement hosted at the Cathedral of St. John.',
    image: '/assets/popeleo3.jpeg',
  },
];

export default function LatestNews() {
  const router = useRouter();

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#0C1A2B] mb-4"
        >
          Latest from our Bishop
        </motion.h2>

        <div className="w-24 h-1 bg-[#D6A739] mx-auto mb-10 rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* News List */}
          <div className="lg:col-span-3 grid gap-8 md:grid-cols-2">
            {news.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
                onClick={() => router.push(`/news/${item.id}`)}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="text-xl font-semibold text-[#0C1A2B] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{item.summary}</p>
                  <span className="text-[#D6A739] font-semibold hover:underline">
                    Read More →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-[#0C1A2B] mb-4 border-b pb-2">Latest News</h3>
            <ul className="space-y-4">
              {news.map((item) => (
                <li key={item.id}>
                  <Link href={`/news/${item.id}`} className="text-[#D6A739] hover:underline text-sm">
                    {item.title}
                  </Link>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}