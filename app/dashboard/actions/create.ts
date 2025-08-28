"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { AnnouncementFormData } from "../admin/announcements/new/page";//This ensures the form and the server action recieve the same data
import {BlogFormData} from "../admin/blog/new/page";
import { HomilyFormData } from "../bishop/homily/new/page";

/**
 * Creates a new announcement with the provided form data
 * @param formData - The data for the new announcement containing title, slug, date, image, description, and details
 * @returns Promise<void>
 */
export async function createAnnouncement(formData: AnnouncementFormData) {
  // Destructure the required fields from the form data
const { title, slug, date, image, description, details } = formData;
  // Create a new announcement record in the database
  await prisma.announcement.create({
    data: {
      title,
      slug,
      date: new Date(date), // Convert the date string to a Date object
      image,
      description,
      details,
    },
  });
  // Revalidate the announcements page to update the data
  revalidatePath("/dashboard/admin/announcements");
  //I do not handle errors here because I want to handle them in the form itself
}

// create blog action
export async function createBlog(formData: BlogFormData) {
  // Destructure the required fields from the form data
const { title, slug, date, image, excerpt, content } = formData;
  // Create a new blog record in the database
  await prisma.blog.create({
    data: {
      title,
      slug,
      date: new Date(date), // Convert the date string to a Date object
      image,
      excerpt,
      content,
    },
  });
  // Revalidate the blog page to update the data
  revalidatePath("/dashboard/admin/blog");
  //I do not handle errors here because I want to handle them in the form itself
}
// create homily action
export async function createHomily(formData: HomilyFormData) {
  // Destructure the required fields from the form data
const { title, slug, date, image, summary, content } = formData;
  // Create a new blog record in the database
  await prisma.homily.create({
    data: {
      title,
      slug,
      date: new Date(date), // Convert the date string to a Date object
      image,
      summary,
      content,
    },
  });
  // Revalidate the blog page to update the data
  revalidatePath("/dashboard/bishop/homily");
  //I do not handle errors here because I want to handle them in the form itself
}