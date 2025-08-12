import { PrismaClient } from '@prisma/client';
// import { users } from './userSeed';
// import { blogs } from './blog';
// import { homilies } from './homily';
// import { events } from './events';
import { clergy } from './clergy';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Seed Users
  // await prisma.user.createMany({
  //   data: users,
  // });
  // console.log(`✅ Seeded ${users.length} users`);

  // Seed Blogs (optional)
  // await prisma.blog.createMany({ data: blogs, skipDuplicates: true });
  // console.log(`✅ Seeded ${blogs.length} blogs`);

  // Seed Homilies (optional)
  // await prisma.homily.createMany({ data: homilies });
  // console.log(`✅ Seeded ${homilies.length} homilies`);
  // Seed Events
  // await prisma.event.createMany({ data: events});
  // console.log(`✅ Seeded ${events.length} events`);
  // Seed Clergy
  await prisma.clergy.createMany({ data: clergy });
  console.log(`✅ Seeded ${clergy.length} clergy members`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
