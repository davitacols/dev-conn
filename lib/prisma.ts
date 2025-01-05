import { PrismaClient } from '@prisma/client';

// Extend the global object to include PrismaClient for development mode
declare global {
  var prisma: PrismaClient | undefined;
}

// Use a single Prisma Client instance based on the environment
const prisma =
  global.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : [],
  });

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;
