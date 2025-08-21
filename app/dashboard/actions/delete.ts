"use server"

/* eslint-disable @typescript-eslint/no-explicit-any */

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// Small helper: swallow "record not found" so Strict Mode double-submits don't explode
function isRecordNotFound(e: any) {
  return e?.code === "P2025";
}

/* =========================
   ANNOUNCEMENTS (by slug)
   ========================= */
export async function deleteAnnouncement(formData: FormData) {
  const slug = String(formData.get("slug") ?? "");
  if (!slug) return;

  try {
    await prisma.announcement.delete({ where: { slug } });
  } catch (e: any) {
    if (!isRecordNotFound(e)) throw e;
  }
  revalidatePath("/dashboard/announcements");
}

/* ================
   BLOG (by slug)
   ================ */
export async function deleteBlog(formData: FormData) {
  const slug = String(formData.get("slug") ?? "");
  if (!slug) return;

  try {
    await prisma.blog.delete({ where: { slug } });
  } catch (e: any) {
    if (!isRecordNotFound(e)) throw e;
  }
  revalidatePath("/dashboard/blog");
}

/* =========================
   HOMILY (by slug or id)
   - Adjust: if your schema uses id instead of slug, 
     just change the hidden input name + where clause.
   ========================= */
export async function deleteHomily(formData: FormData) {
  const slug = String(formData.get("slug") ?? "");
  if (!slug) return;

  try {
    await prisma.homily.delete({ where: { slug } });
  } catch (e: any) {
    if (!isRecordNotFound(e)) throw e;
  }
  revalidatePath("/dashboard/homily");
}

/* =========================
   CLERGY (by id/ObjectId)
   ========================= */
export async function deleteClergy(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (!id) return;

  try {
    await prisma.clergy.delete({ where: { id } });
  } catch (e: any) {
    if (!isRecordNotFound(e)) throw e;
  }
  revalidatePath("/dashboard/clergy");
}

/* =========================
   EVENT (id OR slug accepted)
   ========================= */
const isObjectId = (v: string) => /^[a-f0-9]{24}$/i.test(v);

export async function deleteEvent(formData: FormData) {
  const key = String(formData.get("key") ?? "");
  if (!key) return;

  const where = isObjectId(key) ? { id: key } : { slug: key };

  try {
    await prisma.event.delete({ where });
  } catch (e: any) {
    if (!isRecordNotFound(e)) throw e;
  }
  revalidatePath("/dashboard/events");
}
