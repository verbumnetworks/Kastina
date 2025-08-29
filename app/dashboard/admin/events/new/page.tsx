import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import ImageKit from "imagekit";
/* eslint-disable @typescript-eslint/no-explicit-any */
// Initialize ImageKit client
const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
  privateKey: process.env.PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});

// Server action to create an event with image uploads
async function createEvent(formData: FormData) {
  "use server";

  // Extract text fields
  const title = String(formData.get("title") || "").trim();
  const slug = String(formData.get("slug") || "").trim();
  const dateStr = String(formData.get("date") || "").trim();
  const excerpt = String(formData.get("excerpt") || "").trim();
  const content = String(formData.get("content") || "").split("\n").map(c => c.trim());

  // Validate required text fields
  if (!title || !slug || !dateStr) {
    throw new Error("Title, slug, and date are required");
  }

  // Validate date
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format");
  }

  // Handle cover image upload
  const coverFile = formData.get("cover");
  let coverUrl = "";
  if (coverFile instanceof File && coverFile.size > 0) {
    try {
      const arrayBuffer = await coverFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const uploadResponse = await imagekit.upload({
        file: buffer,
        fileName: `event-cover-${slug}-${Date.now()}.${coverFile.name.split(".").pop()}`,
        folder: "/events/covers",
      });
      coverUrl = uploadResponse.url;
    } catch (error: any) {
      throw new Error(`Failed to upload cover image: ${error.message}`);
    }
  } else {
    throw new Error("Cover image is required");
  }

  // Handle additional images upload
  const imageFiles = formData.getAll("images");
  const imageUrls = [];
  for (const file of imageFiles) {
    if (file instanceof File && file.size > 0) {
      try {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const uploadResponse = await imagekit.upload({
          file: buffer,
          fileName: `event-image-${slug}-${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${file.name.split(".").pop()}`,
          folder: "/katsina/events",
        });
        imageUrls.push(uploadResponse.url);
      } catch (error: any) {
        throw new Error(`Failed to upload image: ${error.message}`);
      }
    }
  }

  // Create event in Prisma
  try {
    await prisma.event.create({
      data: {
        title,
        slug,
        date,
        excerpt,
        cover: coverUrl,
        images: imageUrls,
        content,
      },
    });
  } catch (error: any) {
    throw new Error(`Failed to create event: ${error.message}`);
  }

  // Revalidate and redirect
  revalidatePath("/dashboard/events");
  redirect("/dashboard/events");
}

export default function NewEventPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">New Event</h2>

      <form action={createEvent} className="space-y-4" encType="multipart/form-data">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-slate-700">Title</label>
          <input
            id="title"
            name="title"
            placeholder="Event Title"
            className="w-full border rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="slug" className="block text-sm font-medium text-slate-700">Slug</label>
          <input
            id="slug"
            name="slug"
            placeholder="event-slug"
            className="w-full border rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-slate-700">Date</label>
          <input
            id="date"
            name="date"
            type="date"
            className="w-full border rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="cover" className="block text-sm font-medium text-slate-700">Cover Image</label>
          <input
            id="cover"
            name="cover"
            type="file"
            accept="image/*"
            className="w-full border rounded p-2 mt-1"
            required
          />
        </div>

        <div>
          <label htmlFor="images" className="block text-sm font-medium text-slate-700">Additional Images</label>
          <input
            id="images"
            name="images"
            type="file"
            accept="image/*"
            multiple
            className="w-full border rounded p-2 mt-1"
          />
          <p className="mt-1 text-sm text-slate-500">Select multiple images if needed.</p>
        </div>

        <div>
          <label htmlFor="excerpt" className="block text-sm font-medium text-slate-700">Excerpt</label>
          <textarea
            id="excerpt"
            name="excerpt"
            placeholder="Short description"
            className="w-full border rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-slate-700">Content</label>
          <textarea
            id="content"
            name="content"
            placeholder="One paragraph per line"
            className="w-full border rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={6}
          />
          <p className="mt-1 text-sm text-slate-500">Enter each paragraph on a new line.</p>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save
        </button>
      </form>
    </div>
  );
}