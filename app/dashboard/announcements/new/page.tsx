// app/dashboard/announcements/new/page.tsx
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


async function createAnnouncement(formData: FormData) {
  "use server";
  const title = String(formData.get("title") || "").trim();
  const slug = String(formData.get("slug") || "").trim();
  const dateStr = String(formData.get("date") || "").trim();
  const image = String(formData.get("image") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const details = String(formData.get("details") || "").trim();

  if (!title || !slug || !dateStr) {
    throw new Error("Title, slug, and date are required");
  }

  await prisma.announcement.create({
    data: {
      title,
      slug,
      date: new Date(dateStr),
      image,
      description,
      details,
    },
  });

  revalidatePath("/dashboard/announcements");
  redirect("/dashboard/announcements");
}

export default function NewAnnouncementPage() {
  return (
    <div className="max-w-2xl">
      <h2 className="text-xl font-semibold mb-4">New Announcement</h2>

      <form action={createAnnouncement} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input name="title" required className="mt-1 w-full rounded-lg border px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Slug</label>
          <input name="slug" required placeholder="ordination-rev-john-doe" className="mt-1 w-full rounded-lg border px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Date</label>
          <input name="date" type="date" required className="mt-1 w-full rounded-lg border px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Image URL</label>
          <input name="image" placeholder="/assets/building1.jpg" className="mt-1 w-full rounded-lg border px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Short description</label>
          <textarea name="description" rows={3} className="mt-1 w-full rounded-lg border px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Details</label>
          <textarea name="details" rows={8} className="mt-1 w-full rounded-lg border px-3 py-2" />
        </div>

        <div className="flex gap-3">
          <button type="submit" className="rounded-lg border px-4 py-2 hover:bg-slate-50">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
