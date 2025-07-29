"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurVision() {
  return (
    <section className="py-16 px-4 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-[#0C1A2B] mb-8"
      >
        Get to Know More About Us{" "}
      </motion.h2>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start pt-8">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0C1A2B]">
            OUR VISION
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            My hope is for a Church in which the Gospel is preached with joy,
            the wisdom of our tradition mined with fidelity, the sacraments
            celebrated with dignity and welcome, and the seminaries, convents
            and youth groups teeming with new life; a Church in which our
            parishes, chaplaincies and educational institutions are true centres
            of the new evangelisation, our laity theologically literate and
            spiritually well-formed, our outreach to the needy effective and
            growing, and God glorified above all. That will depend hugely on
            three factors: our clergy and religious; our families; and our young
            people.
          </p>
          <p className="italic text-gray-600">
            Archbishop Anthony Fisher OP, <br />
            Homily for the Mass of Installation
          </p>
          <motion.button
            className="mt-6 px-6 py-2 bg-gradient-to-r from-[#B59F6C] to-[#CBC2AE] text-white font-semibold rounded shadow transition-all ease-in-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            READ MORE
          </motion.button>
        </motion.div>

        {/* Right Side - Grid of Four Blocks (spans 2 columns) */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "OUR PEOPLE", img: "/assets/popeleo1.jpeg" },
            { label: "OUR YOUTH", img: "/assets/popeleo2.jpeg" },
            { label: "ST MARY’S CATHEDRAL", img: "/assets/popeleo3.jpeg" },
            { label: "EDUCATION", img: "/assets/popeleo.jpeg" },
          ].map(({ label, img }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative h-36 sm:h-44 md:h-52 lg:h-48 xl:h-56 overflow-hidden rounded-lg shadow-md group cursor-pointer"
            >
              <Image
                src={img}
                alt={label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-end justify-start p-3">
                <span className="text-white text-lg font-bold drop-shadow">
                  {label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
