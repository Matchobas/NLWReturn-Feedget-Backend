import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  // Configuração para sempre uma query for rodada ela seu log seja mostrado no console
  log: ['query'],
});