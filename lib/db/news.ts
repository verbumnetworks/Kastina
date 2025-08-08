import prisma from "../prisma";

export async function getAllNews() {
  return await prisma.news.findMany({
    orderBy: { date: 'desc' },
  });
}

export async function getNewsById(id: string) {
  return await prisma.news.findUnique({
    where: { id },
  });
}
