"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EventGallery({ images }: { images: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((src, i) => (
        <motion.div
          key={src}
          className="relative aspect-[4/3] overflow-hidden rounded-xl border bg-white"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
        >
          <Image src={src} alt={`Event image ${i + 1}`} fill className="object-cover" />
        </motion.div>
      ))}
    </div>
  );
}
