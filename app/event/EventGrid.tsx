"use client";
import { motion } from "framer-motion";
import EventCard from "./EventCard";
import type { EventItem } from "@/lib/events";

export default function EventGrid({ items }: { items: EventItem[] }) {
  return (
    <motion.div
      layout
      className="grid gap-8 sm:grid-cols-2"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.06 } },
      }}
    >
      {items.map((e) => (
        <EventCard key={e.id} event={e} />
      ))}
    </motion.div>
  );
}
