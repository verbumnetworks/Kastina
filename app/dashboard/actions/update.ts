"use server";

import prisma from "@/lib/prisma";
import { isObjectId } from "@/lib/slugify";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function updateEvent(key: string, formData: FormData) {
  const title   = String(formData.get("title") ?? "").trim();
  const dateStr = String(formData.get("date") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const cover   = String(formData.get("cover") ?? "").trim();
  const images  = String(formData.get("images") ?? "")
    .split(",")
    .map(s => s.trim())
    .filter(Boolean);
  const content = String(formData.get("content") ?? "")
    .split("\n")
    .map(s => s.trim())
    .filter(Boolean);

  const where = isObjectId(key) ? { id: key } : { slug: key };

  const updated = await prisma.event.update({
    where,
    data: {
      title,
      date: dateStr ? new Date(dateStr) : undefined,
      excerpt,
      cover,
      images,
      content,
    },
  });

  revalidatePath("/dashboard/admin/events");
  redirect(`/dashboard/admin/events/${updated.slug}/view`);
}
