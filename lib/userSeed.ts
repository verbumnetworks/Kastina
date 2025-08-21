// lib/userSeed.ts
// import type { User } from ';

import { User } from "@prisma/client";

export const users: Omit<User, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    name: 'System Admin',
    email: 'admin@diocese.org',
    password: 'hashed-admin-pass', // Replace with actual hash in real app
    role: 'ADMIN',
    avatar: '/images/admin-avatar.png',
    bio: 'Platform administrator',
    title: 'Administrator',
    isActive: true,
  },
  {
    name: 'Bishop John Doe',
    email: 'bishop@diocese.org',
    password: 'hashed-bishop-pass',
    role: 'BISHOP',
    avatar: '/images/bishop-avatar.png',
    bio: 'The Shepherd of our Diocese',
    title: 'His Lordship',
    isActive: true,
  }
];
