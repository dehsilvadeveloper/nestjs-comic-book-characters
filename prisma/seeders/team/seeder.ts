import { PrismaClient } from '@prisma/client';
import { teamSeederData } from './data';

export async function teamSeed(prisma: PrismaClient): Promise<void> {
  try {
    console.info('Seeding table team...');

    await prisma.team.createMany({
      data: teamSeederData,
      skipDuplicates: true,
    });

    console.info('Data inserted with success on the table team.');
  } catch (error) {
    console.error('An error occurred during seeding of table team.', error);
    throw error;
  }
}
