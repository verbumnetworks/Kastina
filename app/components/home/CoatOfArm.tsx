'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
          <Image
            src="/assets/logo.jpg"
            alt="Archdiocese Coat of Arms"
            width={150}
            height={300}
            className="w-auto h-auto"
          />
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
            The arms of the Archdiocese of Sydney are displayed with the mitre preciosa but neither the crosier nor the cross is used.
          </p>
          <ul className="list-disc list-inside text-gray-100 space-y-2 mb-4">
            <li>The cross is reference to the crucifixion of Jesus Christ,</li>
            <li>The stars of the Southern Cross constellation reinforce this crucifixion imagery and refer to its location.</li>
            <li>The colour blue in the field of the arms of the Archdiocese traditionally represents the Virgin.</li>
          </ul>
          <Link href="/coat" className="text-yellow-400 hover:underline font-semibold">
            READ MORE
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CoatOfArmsSection;
