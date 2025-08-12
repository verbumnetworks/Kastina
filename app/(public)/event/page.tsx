import EventGrid from "./EventGrid";
import { events } from "@/lib/events";

export const metadata = { title: "Events" };

export default function EventsPage() {
  return (
      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">All Events</h1>
        <p className="mt-2 text-slate-600">
          Browse reflections, stories, and special celebrations.
        </p>

        <div className="mt-10">
          <EventGrid items={[...events].sort((a,b)=>+new Date(b.date)-+new Date(a.date))} />
        </div>
      </main>
  );
}
