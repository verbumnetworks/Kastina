import prisma from "@/lib/prisma";
export default async function DashboardHome() {
  const [homilyCount] = await Promise.all([
    
    prisma.homily.count().catch(() => 0),

    prisma.announcement.findMany({
      orderBy: { date: "desc" },
      take: 5,
      select: { title: true, slug: true, date: true },
    }),
  ]);

  return (
    <div className="p-6 ">
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <CardStat label="Homilies" value={homilyCount} />
      </div>

      {/* Latest announcements */}
    </div>
  );
}

function CardStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-md  bg-orange-100 p-5 shadow-md">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="mt-2 text-3xl font-bold tracking-tight">{value}</div>
    </div>
  );
}
