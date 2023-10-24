//quando esta usando Next Js13 com prisma precisa tomar cuidado em sempre que reiniciar o servidor
//irá criar uma conexão nova a cada reload
// define apenas um prisma client
import { PrismaClient } from "@prisma/client";

declare global {
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const prismaClient = prisma;

