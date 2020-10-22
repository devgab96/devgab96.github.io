const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();
// import { Category } from "@prisma/client";

const seed = async () => {
  const ranks = [
    'Master',
    'Chief Mate',
    'Second Mate',
    'Third Mate',
    'Deck Cadet',
    'Chief Engineer',
    'Second Engineer',
    'Third Engineer',
    'Fourth Engineer',
    'Engine Cadet',
    'Electrician',
    'Boatswain',
    'Pump Man',
    'Quartermaster,',
    'Ordinary Seaman',
    'Fitter',
    'Oiler',
    'Wiper',
    'Chief Cook and Steward',
  ];

  for (const name of ranks) {
    await prisma.rank.upsert({
      create: { name },
      update: { name },
      where: { name }
    })
  }
}

seed().catch(err => {
  throw err;
}).finally(() => {
  prisma.$disconnect();
});
