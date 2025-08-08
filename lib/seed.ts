import { PrismaClient } from '@prisma/client';
import { blogs } from './blog';
import { news } from './news';

const prisma = new PrismaClient();


async function main() {
  console.log("🌱 Seeding database...");

  // Seed Blogs
  await prisma.blog.createMany({
    data: blogs
  });
  console.log(`✅ Seeded ${blogs.length} blogs`);

  // Seed News
  await prisma.news.createMany({
    data: news
  });
  console.log(`✅ Seeded ${news.length} news items`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
