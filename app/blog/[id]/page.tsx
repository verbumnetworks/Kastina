import BlogDetails from "../BlogDetails";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;


  const blog = await prisma.blog.findUnique({
    where: { id },
  });
  if (!blog) return notFound();

  return <BlogDetails blog={blog} />;
}
