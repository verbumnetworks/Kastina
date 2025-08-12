import prisma from "@/lib/prisma";

export default async function DashboardHome() {
  const [annCount, evtCount, latestAnn] = await Promise.all([
    prisma.announcement.count(),
    prisma.event.count().catch(() => 0),
    prisma.announcement.findMany({
      orderBy: { date: "desc" },
      take: 5,
      select: { title: true, slug: true, date: true },
    }),
  ]);

  return (
    <div className="p-6">
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <CardStat label="Announcements" value={annCount} />
        <CardStat label="Events" value={evtCount} />
        <CardStat label="Pending Reviews" value={0} />
      </div>

      {/* Latest announcements */}
      <div className="mt-6 rounded-xl border overflow-hidden">
        <div className="flex items-center justify-between border-b bg-slate-50 px-4 py-3">
          <h3 className="text-sm font-semibold">Latest announcements</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500">
                <th className="px-4 py-3 font-medium">Title</th>
                <th className="px-4 py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {latestAnn.map((a) => (
                <tr key={a.slug} className="border-t">
                  <td className="px-4 py-3">{a.title}</td>
                  <td className="px-4 py-3">
                    {a.date.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                </tr>
              ))}
              {latestAnn.length === 0 && (
                <tr>
                  <td className="px-4 py-6 text-slate-500" colSpan={2}>
                    Nothing yet. Create your first announcement.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function CardStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="mt-2 text-3xl font-bold tracking-tight">{value}</div>
    </div>
  );
}
