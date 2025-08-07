'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { piousOrganizations } from '@/lib/organ';

export default function PiousOrganizationsSection() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Pious Organizations in the Catholic Diocese of Katsina
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          These organizations contribute immensely to the spiritual and social life of the Diocese through prayer, outreach, and devotion.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {piousOrganizations.map((org, i) => (
            <motion.div
              key={org.id}
              className="bg-white rounded-xl shadow hover:shadow-2xl hover:cursor-pointer p-6 text-center transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full border-4 border-amber-700 overflow-hidden hover:scale-105 transition-transform duration-300">
                <Image
                  src={org.image}
                  alt={org.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{org.title}</h3>
              <p className="text-sm text-gray-700">{org.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
