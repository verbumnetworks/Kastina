import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ id: string }> };

export default async function ViewClergyPage({ params }: PageProps) {
  const { id } = await params;

  const item = await prisma.clergy.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      role: true,
      parish: true,
      address: true,
      phone: true,
      extra: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!item) return notFound();

  return (
    <div className="max-w-2xl p-6">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">View Clergy</h1>
        <a href="/dashboard/clergy" className="rounded-lg border px-3 py-1.5 text-sm hover:bg-slate-50">
          ← Back
        </a>
      </div>

      <div className="space-y-4 rounded-2xl border bg-white p-5">
        <div>
          <h2 className="text-lg font-medium">{item.name}</h2>
          <p className="text-sm text-slate-500">{item.role}</p>
        </div>

        <dl className="divide-y divide-slate-200">
          <div className="py-3 flex justify-between">
            <dt className="font-medium">Parish</dt>
            <dd>{item.parish}</dd>
          </div>
          <div className="py-3 flex justify-between">
            <dt className="font-medium">Address</dt>
            <dd>{item.address}</dd>
          </div>
          <div className="py-3 flex justify-between">
            <dt className="font-medium">Phone</dt>
            <dd>{item.phone ?? "—"}</dd>
          </div>
          <div className="py-3 flex justify-between">
            <dt className="font-medium">Extra</dt>
            <dd>{item.extra ?? "—"}</dd>
          </div>
          <div className="py-3 flex justify-between text-xs text-slate-500">
            <dt>Created</dt>
            <dd>{item.createdAt.toLocaleDateString()}</dd>
          </div>
          <div className="py-3 flex justify-between text-xs text-slate-500">
            <dt>Last updated</dt>
            <dd>{item.updatedAt.toLocaleDateString()}</dd>
          </div>
        </dl>

        <div className="flex gap-3 justify-end">
          <a
            href={`/dashboard/clergy/${item.id}/edit`}
            className="rounded-xl border px-4 py-2 hover:bg-slate-50"
          >
            Edit
          </a>
          <a
            href={`/dashboard/clergy/${item.id}/delete`}
            className="rounded-xl bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Delete
          </a>
        </div>
      </div>
    </div>
  );
}
