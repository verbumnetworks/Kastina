'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export interface Homily {
  id: string;
  title: string;
  category: string;
  content: string;
  date: string;
  location: string;
}

export default function HomilyCard({ homily }: { homily: Homily }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <Image src="/assets/logo.jpg" width={200} height={200} alt="Logo" className="mx-auto h-24" loading='lazy' />
      <p className="text-xs font-semibold uppercase mt-4 text-gray-500">{homily.category}</p>
      <h3 className="font-bold text-lg mt-2 text-gray-800">{homily.title}</h3>
      <p className="text-sm mt-2 text-gray-600">{homily.location}</p>
      <p className="text-xs mt-4 text-gray-500">{homily.date}</p>
      <Link
        href={`/homily/${homily.id}`}
        className="block text-center mt-4 text-[#D6A739] font-medium"
      >
        Read more
      </Link>
    </motion.div>
  );
}
