import { PrismaClient } from '@prisma/client';
import { characterSeederData } from './data';

export async function characterSeed(prisma: PrismaClient): Promise<void> {
  try {
    console.info('Seeding table character...');

    await prisma.character.createMany({
      data: characterSeederData,
      skipDuplicates: true,
    });

    console.info('Data inserted with success on the table character.');
  } catch (error) {
    console.error('An error occurred during seeding of table character.', error);
    throw error;
  }
}
