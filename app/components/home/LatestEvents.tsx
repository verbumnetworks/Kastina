import EventGrid from "@/app/event/EventGrid";
import { events} from "@/lib/events";
import AnimatedButton from "../button/Button";

export default function LatestEvents() {

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 text-center">
          latest Diocesean Events
        </h2>
        <p>
          etur adipisicing elit. Error
          nostrum est m fugiat est, autem error sunt dolor magnam!
        </p>
      </div>

      <div className="mt-8">
        <EventGrid items={events.slice(0, 2)} />
      </div>

      <div className="mt-8 text-center">
        {/* <Link
          href="/event"
          className="inline-block rounded-lg border px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
        >
          View all events
        </Link> */}
        <AnimatedButton
          href="/event"
          label=" View All Events"
          variant="secondary"
        />
      </div>
    </section>
  );
}
