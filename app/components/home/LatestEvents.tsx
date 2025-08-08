import Link from "next/link";
import EventGrid from "@/app/event/EventGrid";
import { getLatestEvents } from "@/lib/events";

export default function LatestEvents() {
  const latest = getLatestEvents(3);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-4xl font-bold tracking-tight text-slate-900">
        latest Diocesean Events
      </h2>

      <div className="mt-8">
        <EventGrid items={latest} />
      </div>

      <div className="mt-8">
        <Link
          href="/event"
          className="inline-block rounded-lg border px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
        >
          View all events
        </Link>
      </div>
    </section>
  );
}
