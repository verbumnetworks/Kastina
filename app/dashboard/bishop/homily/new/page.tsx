import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


async function createReflection(formData: FormData) {
  "use server";
  const title = String(formData.get("title") || "").trim();
  const slug = String(formData.get("slug") || "").trim();
  const dateStr = String(formData.get("date") || "").trim();
  const image = String(formData.get("image") || "").trim();
  const  summary = String(formData.get("summary") || "").trim();
  const content = String(formData.get("content") || "").trim();

  if (!title || !slug || !dateStr) {
    throw new Error("Title, slug, and date are required");
  }

  await prisma.homily.create({
    data: {
      title,
      slug,
      date: new Date(dateStr),
      image,
       summary,
      content,
    },
  });

  revalidatePath("/dashboard/homily");
  redirect("/dashboard/homily");
}

export default function NewReflectionPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">New Homily</h2>

      <form action={createReflection} className="space-y-4">
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
          <textarea name="summary" rows={3} className="mt-1 w-full rounded-lg border px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Details</label>
          <textarea name="content" rows={8} className="mt-1 w-full rounded-lg border px-3 py-2" />
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
