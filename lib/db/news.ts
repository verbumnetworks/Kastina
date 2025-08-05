// lib/db/news.ts
// import { prisma } from '../client';

import prisma from "../prisma";

export async function getAllNews() {
  return await prisma.news.findMany({
    orderBy: { date: 'desc' },
  });
}

export async function getNewsById(id: number) {
  return await prisma.news.findUnique({
    where: { id },
  });
}
