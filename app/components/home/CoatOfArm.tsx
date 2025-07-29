"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CoatOfArmsSection = () => {
  return (
    <section className=" relative w-full text-white py-12 px-4 md:px-16 overflow-hidden bg-blue-900">
      <div className="max-w-6xl mx-auto flex flex-col z-10 relative justify-center md:flex-row items-center gap-10">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* <Image
            src="/assets/logo.jpg"
            alt="Archdiocese Coat of Arms"
            width={150}
            height={300}
            className="w-auto h-auto"
          /> */}
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="text-white"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Diocese of Kaastina Coat of Arms
          </h2>
          <p className="text-gray-100 mb-4">
            Coats of arms, originating in Europe during the late 11th century,
            were initially employed on the battlefield for warriors to
            distinguish their comrades. These same symbols were later utilised
            on seals to verify the authenticity of documents. The Catholic
            Church also used seals to establish legitimacy and ownership. These
            seals evolved from personal likenesses to impersonal shields
            representing dioceses. Martial helmets and coronets were replaced
            with ecclesiastical hats, retaining the shield.
          </p>

          <Link
            href="/coat"
            className="text-yellow-400 hover:underline font-semibold"
          >
            READ MORE
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CoatOfArmsSection;
