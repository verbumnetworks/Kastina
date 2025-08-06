'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PageBanner from '../components/banner/PageBanner';

export default function CatecheticalCentrePage() {
  return (
    <main className="bg-white text-gray-800">
      <PageBanner
        title="Catechetical Centre"
        subtitle="Empowering Faith Through Catechesis"
      />

      {/* About the Centre */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">About the Centre</h2>
        <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
          The Catechetical Centre of the Catholic Diocese of Katsina is committed to forming disciples of Christ
          through systematic catechesis, training of catechists, and developing resources to support parish and community faith formation.
          We believe in bringing the light of Christ to every home, classroom, and online platform.
        </p>
      </section>

      {/* Ongoing Online Catechesis */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Ongoing Online Catechesis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden"
            >
              <Image
                src="/assets/online.jpeg"
                alt="Online Catechesis"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-700 mb-4">
                Our online catechesis program offers weekly sessions that cover various topics in Catholic faith, scripture study, and moral teachings.
                These sessions are designed for all ages, providing interactive opportunities to ask questions and grow spiritually.
              </p>
              <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>Weekly Zoom & YouTube Live sessions</li>
                <li>Topics: Sacraments, Liturgy, Scripture</li>
                <li>Open to parishioners and the general public</li>
              </ul>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-red-700 text-white font-semibold rounded-full hover:bg-red-800 transition"
              >
                Join Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">How to Participate</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-8">
          Register through your parish catechist, or sign up online to receive updates, session links, and study materials directly to your email or phone.
        </p>
        <Link
          href="/register-catechesis"
          className="px-6 py-3 bg-[#D6A739] text-black font-semibold rounded-full hover:bg-yellow-500 transition"
        >
          Register Here
        </Link>
      </section>

      {/* Become a Catechist CTA */}
      <section className="bg-[#D6A739] py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-black">Answer the Call to Serve</h2>
        <p className="text-black max-w-2xl mx-auto mb-6">
          Do you feel called to share the faith and guide others on their journey with Christ?  
          Join our dedicated community of catechists and make a lasting impact.
        </p>
        <Link
          href="/form"
          className="inline-block px-6 py-3 bg-red-700 text-white font-semibold rounded-full hover:bg-red-800 transition"
        >
          Become a Catechist
        </Link>
      </section>

      {/* Contact & Location */}
      <section className="bg-blue-900 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact the Centre</h2>
        <p className="max-w-2xl mx-auto mb-4">
          Catechetical Centre, Catholic Diocese of Katsina  
          Near St. Mary’s Cathedral, Katsina
        </p>
        <p>Email: catechesis@cdkatsina.org | Phone: +234 800 123 4567</p>
      </section>
    </main>
  );
}
