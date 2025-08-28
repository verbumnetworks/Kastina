import { updateEvent } from "@/app/dashboard/actions/update";
import prisma from "@/lib/prisma";
import { isObjectId } from "@/lib/slugify";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ id: string }> };

export default async function EditEventPage({ params }: PageProps) {
  const { id: key } = await params;
  if (!key) return notFound();

  const where = isObjectId(key) ? { id: key } : { slug: key };

  const ev = await prisma.event.findUnique({ where });
  if (!ev) return notFound();

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">Edit Event</h2>

      <form action={updateEvent.bind(null, key)} className="space-y-4">
        <input
          name="title"
          defaultValue={ev.title}
          className="w-full border rounded p-2"
        />
        <input
          name="date"
          type="date"
          defaultValue={ev.date.toISOString().split("T")[0]}
          className="w-full border rounded p-2"
        />
        <input
          name="cover"
          defaultValue={ev.cover}
          className="w-full border rounded p-2"
        />
        <textarea
          name="excerpt"
          defaultValue={ev.excerpt}
          className="w-full border rounded p-2"
        />
        <textarea
          name="images"
          defaultValue={ev.images.join(", ")}
          className="w-full border rounded p-2"
        />
        <textarea
          name="content"
          defaultValue={ev.content.join("\n")}
          className="w-full border rounded p-2"
        />

        <div className="flex gap-3">
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
            Update
          </button>
          <a href="/dashboard/events" className="px-4 py-2 border rounded hover:bg-slate-50">
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
}
