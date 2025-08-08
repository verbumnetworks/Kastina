"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { EventItem } from "@/lib/events";

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="flex gap-4"
    >
      <div className="relative h-28 w-40 flex-shrink-0 overflow-hidden rounded-lg border bg-white">
        <Image
          src={event.cover}
          alt={event.title}
          fill
          className="object-cover"
          sizes="160px"
        />
      </div>

      <div className="min-w-0">
     
        <Link
          href={`/event/${event.slug}`}
          className="mt-1 block text-xl font-semibold text-slate-800 hover:underline"
        >
          {event.title}
        </Link>
        <p className="mt-1 text-xs text-slate-500">
          {new Date(event.date).toLocaleDateString()}
        </p>
        <p className="mt-2 line-clamp-2 text-slate-600">{event.excerpt}</p>

        <div className="mt-3">
          <Link
            href={`/event/${event.slug}`}
            className="text-emerald-700 hover:underline text-sm"
          >
            See details →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
