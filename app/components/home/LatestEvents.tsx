import EventGrid from "@/app/(public)/event/EventGrid";

import AnimatedButton from "../button/Button";
import SectionHeading from "../heading/SectionHeading";
import prisma from "@/lib/prisma";

export default async function LatestEvents() {
  const events = await prisma.event.findMany({
    take: 4,
    orderBy: { date: "desc" }
  })
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-center space-y-4">
        <SectionHeading
          title="Latest Diocesan Events"
          subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>

      <div className="mt-8">
        <EventGrid items={events} />
      </div>

      <div className="mt-8 text-center">
        <AnimatedButton
          href="/event"
          label=" View All Events"
          variant="secondary"
        />
      </div>
    </section>
  );
}
