// app/dashboard/events/page.tsx
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function EventsPage() {
  const events = await prisma.event.findMany({
    orderBy: { date: "desc" },
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Events</h1>
        <Link
          href="/dashboard/events/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          + New Event
        </Link>
      </div>

      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Title</th>
            <th className="p-2">Date</th>
            <th className="p-2">Excerpt</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((ev) => (
            <tr key={ev.id} className="border-t">
              <td className="p-2">{ev.title}</td>
              <td className="p-2">{new Date(ev.date).toLocaleDateString()}</td>
              <td className="p-2">{ev.excerpt}</td>
              <td className="p-2 flex gap-3">
                <Link
                  href={`/dashboard/events/${ev.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  View
                </Link>
                <Link
                  href={`/dashboard/events/${ev.slug}/edit`}
                  className="text-green-600 hover:underline"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
