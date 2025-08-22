// app/dashboard/events/new/page.tsx
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function createEvent(formData: FormData) {
  "use server";

  const title = String(formData.get("title") || "").trim();
  const slug = String(formData.get("slug") || "").trim();
  const dateStr = String(formData.get("date") || "").trim();
  const excerpt = String(formData.get("excerpt") || "").trim();
  const cover = String(formData.get("cover") || "").trim();
  const images = String(formData.get("images") || "").split(",").map(i => i.trim());
  const content = String(formData.get("content") || "").split("\n").map(c => c.trim());

  if (!title || !slug || !dateStr) {
    throw new Error("Title, slug, and date are required");
  }

  await prisma.event.create({
    data: {
      title,
      slug,
      date: new Date(dateStr),
      excerpt,
      cover,
      images,
      content,
    },
  });

  revalidatePath("/dashboard/events");
  redirect("/dashboard/events");
}

export default function NewEventPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">New Event</h2>

      <form action={createEvent} className="space-y-4">
        <input name="title" placeholder="Title" className="w-full border rounded p-2" />
        <input name="slug" placeholder="Slug" className="w-full border rounded p-2" />
        <input name="date" type="date" className="w-full border rounded p-2" />
        <input name="cover" placeholder="Cover image URL" className="w-full border rounded p-2" />
        <textarea name="excerpt" placeholder="Short description" className="w-full border rounded p-2" />
        <textarea name="images" placeholder="Comma-separated image URLs" className="w-full border rounded p-2" />
        <textarea name="content" placeholder="One paragraph per line" className="w-full border rounded p-2" />

        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Save
        </button>
      </form>
    </div>
  );
}
