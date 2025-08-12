import prisma from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function AnnouncementsList() {
  const items = await prisma.announcement.findMany({
    orderBy: { date: "desc" },
    select: { title: true, slug: true, image: true },
  });

  return (
    <div className="p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Announcements</h2>
          <p className="text-sm text-slate-500">Create, edit and manage announcements.</p>
        </div>

        <Link
          href="/dashboard/announcements/new"
          className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2 text-sm font-medium text-white hover:bg-amber-600"
        >
          <span>+ Add New</span>
        </Link>
      </div>

      <div className="overflow-hidden rounded-2xl border bg-white">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50">
              <tr className="text-left text-slate-600">
                <th className="px-4 py-3 font-medium">Image</th>
                <th className="px-4 py-3 font-medium">Title</th>
                <th className="px-4 py-3 font-medium">Slug</th>
                <th className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((a) => (
                <tr key={a.slug} className="border-t">
                  <td className="px-4 py-3">
                    <div className="relative h-10 w-16 overflow-hidden rounded border bg-slate-100">
                      {a.image ? (
                        <Image src={a.image} alt={a.title} fill className="object-cover" />
                      ) : null}
                    </div>
                  </td>
                  <td className="px-4 py-3 font-medium">{a.title}</td>
                  <td className="px-4 py-3 text-slate-500">{a.slug}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-3">
                      <Link className="text-blue-700 hover:underline" href={`/announcements/${a.slug}`}>
                        View
                      </Link>
                      <Link className="text-emerald-700 hover:underline" href={`/dashboard/announcements/${a.slug}`}>
                        Edit
                      </Link>
                      <Link className="text-red-700 hover:underline" href={`/dashboard/announcements/${a.slug}?delete=1`}>
                        Delete
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}

              {items.length === 0 && (
                <tr>
                  <td className="px-4 py-6 text-slate-500" colSpan={4}>
                    No announcements yet.
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
