import { PrismaClient } from '@prisma/client';
import { alignmentSeed } from './alignment/seeder';
import { livingStatusSeed } from './living-status/seeder';
import { maritalStatusSeed } from './marital-status/seeder';
import { characterSeed } from './character/seeder';
import { powerSeed } from './power/seeder';
import { teamSeed } from './team/seeder';
import { characterPowerSeed } from './character-power/seeder';
import { characterTeamSeed } from './character-team/seeder';
import { characterRelativeSeed } from './character-relative/seeder';
import { characterAllySeed } from './character-ally/seeder';
import { characterEnemySeed } from './character-enemy/seeder';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  console.info('Starting database seeding ...');

  await seedEssentialData();
  await seedDevelopmentData();

  console.info('Database seeding completed.');
}

async function seedEssentialData(): Promise<void> {
  console.info('Executing seeds for essential data!');
  
  await alignmentSeed(prisma);
  await livingStatusSeed(prisma);
  await maritalStatusSeed(prisma);
}

async function seedDevelopmentData(): Promise<void> {
  const canSeedDevelopmentData = process.env.APP_ENV == 'development';

  if (canSeedDevelopmentData) {
    console.info('Executing seeds for development data!');
    
    await characterSeed(prisma);
    await powerSeed(prisma);
    await teamSeed(prisma);
    await characterPowerSeed(prisma);
    await characterTeamSeed(prisma);
    await characterRelativeSeed(prisma);
    await characterAllySeed(prisma);
    await characterEnemySeed(prisma);
  }
}

main()
  .catch((error) => {
    console.error('Error occurred during database seeding. ', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
