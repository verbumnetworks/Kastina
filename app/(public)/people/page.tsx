"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PageBanner from "../../components/banner/PageBanner";
import PiousOrganizationsSection from "../../components/organization/PiousOrganisationSection";
import SectionHeading from "@/app/components/heading/SectionHeading";
import { team } from "@/lib/team";



export default function OurPeoplePage() {
  return (
    <main className="bg-white text-gray-800">
      <PageBanner
        title="Our People"
        subtitle="Meet the amazing people behind Katsina Diocese"
        backgroundImage="/assets/popeleo3.jpeg"
      />

      {/* Team Section */}
      <section className="py-16 bg-white">
        <SectionHeading
          title="Meet Our Governing Council"
          subtitle="meet  the amazing governing body of Katsina Diocese"
        />

        <div className="w-full flex flex-wrap justify-center gap-8 px-4">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              className="w-[90%] sm:w-[45%] lg:w-[22%] flex flex-col items-center text-center p-4 hover:shadow-md rounded-lg transition bg-gray-50"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover border-2 border-red-700"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
     

      {/* Core Values Section */}
      <PiousOrganizationsSection />
    </main>
  );
}
