'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PageBanner from '../../components/banner/PageBanner'; 
import HistorySection from './History';
import DeaneriesSection from './Parishes';
import PoliciesSection from './PoliciesSection';
import AboutBishopPreview from './AboutBishop';

const ministries = [
  {
    title: 'Governing Body Of The Diocese',
    img: '/assets/popeleo.jpeg', // update with your actual path
    link: '/people',
  },
  {
    title: 'OTHER CHURCHES (RITES)',
    img: '/assets/popeleo2.jpeg', // update with your actual path
    link: '/other-rites',
  },
  {
    title: 'VISITING CLERGY',
    img: '/assets/popeleo3.jpeg', // update with your actual path
    link: '/visiting-clergy',
  },
];

export default function page() {
  return (
    <section>
         <PageBanner
        title="About Us"
        subtitle="Learn more about our mission and values"
        backgroundImage="/assets/popeleo3.jpeg"
      />
      <HistorySection />
      <AboutBishopPreview/>
      <DeaneriesSection/>
      <PoliciesSection />
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 bg-[#0C3E66]  py-16 px-4">
        {ministries.map(({ title, img, link }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <Link href={link}>
              <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-md cursor-pointer group-hover:shadow-xl transition-all">
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="mt-4 text-lg font-semibold text-[#F9C55D] group-hover:underline">
                {title}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
