import { PrismaClient } from '@prisma/client';
import { characterAllySeederData } from './data';

export async function characterAllySeed(prisma: PrismaClient): Promise<void> {
  try {
    console.info('Seeding table character_ally...');

    await prisma.characterAlly.createMany({
      data: characterAllySeederData,
      skipDuplicates: true,
    });

    console.info('Data inserted with success on the table character_ally.');
  } catch (error) {
    console.error('An error occurred during seeding of table character_ally.', error);
    throw error;
  }
}
