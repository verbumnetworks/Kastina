"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Homily } from "@prisma/client";
import AnimatedBtutton from "../button/Button";
import SectionHeading from "../heading/SectionHeading";

export default function LatestHomilies({
  homilies,
}: {
  homilies: Partial<Homily>[];
}) {
  const router = useRouter();

  return (
    <main>
      <section className="py-16 px-4 bg-gray-100">
        <SectionHeading
          title="Latest Bishop's Reflections"
          subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <div className="max-w-7xl mx-auto">
          {/* <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#0C1A2B] mb-4"
        >
          Latest Bishop&apos;s Reflections
        </motion.h2>
        <div className="w-24 h-1 bg-[#D6A739] mx-auto mb-10 rounded-full" /> */}

          {/* News Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-3 grid gap-8 md:grid-cols-3">
              {homilies.map((item, i) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
                  onClick={() => router.push(`/homily/${item.slug}`)}
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={item.image as string}
                      alt={item.title as string}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-500 mb-2">
                      {item.date?.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <h3 className="text-xl font-semibold text-[#0C1A2B] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.summary}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* View All Button */}
          <div className="mt-12 text-center">
            <AnimatedBtutton
              href="/homily"
              variant="secondary"
              label="View All ReflectionsS"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
