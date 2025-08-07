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
          <p className="text-gray-700 text-justify leading-relaxed">
            The announcement of the creation of the new Ecclesiastical
            jurisdiction known as Catholic Diocese of Katsina was conveyed to
            the world on Monday, 16th October 2023 from the Vatican. In doing
            so, His Holiness Pope Benedict announced the appointment of Reverend
            Monsignor Gerald Mamman Musa as its first Bishop, hitherto, an
            Associate Professor of Communications at the Catholic Institute of
            West Africa, CIWA, PortHarcourt. By this decision, the former
            Diocese of Sokoto which comprised Katsina, Kebbi, Sokoto and Zamfara
            has now been split. The new Diocese of Katsina now covers Katsina
            state and Kaura Namoda (a part of Zamfara State) which is about 25,
            060 km2 (9,676 sa mi) - located in the North-West region of northern
            Nigeria. The history of the new Diocese of Katsina is interwoven
            with that of the Catholic Diocese of Sokoto. It stretches back
            peripherally in 1870. When two Franciscan Priests from Agadez (Niger
            Republic) were said to have traveled down to the areas that now make
            up part of Katsina today.
          </p>
          <p className="italic text-gray-600">
           Most Reverend Gerald Mamman Musa  <br />
          </p>
          {/* <motion.button
            className="mt-6 px-6 py-2 bg-gradient-to-r from-[#B59F6C] to-[#CBC2AE] text-white font-semibold rounded shadow transition-all ease-in-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            READ MORE
          </motion.button> */}
        </motion.div>

        {/* Right Side - Grid of Four Blocks (spans 2 columns) */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "OUR PEOPLE", img: "/assets/building2.jpg" },
            { label: "OUR STANDARD ", img: "/assets/groto.jpg" },
            { label: "CATHECATICAL CENTER", img: "/assets/building1.jpg" },
            { label: "OUR BISHOP", img: "/assets/building3.jpg" },
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
