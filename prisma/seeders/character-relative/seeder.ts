import { PrismaClient } from '@prisma/client';
import { characterRelativeSeederData } from './data';

export async function characterRelativeSeed(prisma: PrismaClient): Promise<void> {
  try {
    console.info('Seeding table character_relative...');

    await prisma.characterRelative.createMany({
      data: characterRelativeSeederData,
      skipDuplicates: true,
    });

    console.info('Data inserted with success on the table character_relative.');
  } catch (error) {
    console.error('An error occurred during seeding of table character_relative.', error);
    throw error;
  }
}
