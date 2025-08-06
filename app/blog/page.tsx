 
import { FC } from "react";
import BlogCard from "./BlogCard";
import PageBanner from "../components/banner/PageBanner";
import prisma from "@/lib/prisma";

const BlogPage: FC = async () => {
  const blogs = await prisma.blog.findMany();
 
  return (
    <div>
      <PageBanner 
       title="Blog Posts"
        subtitle="Learn more about our mission and values"
        backgroundImage="/assets/popeleo.jpeg"
      />{" "}
      <section className="w-full py-12 px-4 flex flex-col items-center gap-10">
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 text-center">
          All Blog Posts
        </h1>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
          {blogs.map((post, i) => (
            <BlogCard key={post.id} {...post} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
