"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedButton from "../button/Button";

const BishopSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-20 bg-white bg-gradient-to-r from-[#ede4cd] to-[#CBC2AE]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl text-center font-bold mb-4 text-gray-900">
            Welcome Address
          </h2>
          <p className="text-gray-800 mb-6">
            On behalf of the Diocese, we warmly welcome you to our online home.
            Under the spiritual guidance of our beloved Bishop, we remain
            committed to nurturing faith, fostering unity, and serving our
            communities with love and compassion. May this space be a source of
            inspiration, connection, and renewal for all who visit. Whether
            you are seeking spiritual growth, community engagement, or simply a
            place to belong—know that you are welcome here. “Let all that you do
            be done in love.” — 1 Corinthians 16:14
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <AnimatedButton href="/about" label="READ MORE" />
          </div>
        </motion.div>

        {/* Image Section with Animation */}
        <motion.div
          className="relative w-full h-64 md:h-[400px] bg-gray-200"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/bishop.png"
            alt="Bishop Image"
            fill
            className="object-scale-down rounded-lg shadow-lg "
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BishopSection;
