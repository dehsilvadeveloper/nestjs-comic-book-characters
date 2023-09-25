import { PrismaClient } from '@prisma/client';
import { powerSeederData } from './data';

export async function powerSeed(prisma: PrismaClient): Promise<void> {
  try {
    console.info('Seeding table power...');

    await prisma.power.createMany({
      data: powerSeederData,
      skipDuplicates: true,
    });

    console.info('Data inserted with success on the table power.');
  } catch (error) {
    console.error('An error occurred during seeding of table power.', error);
    throw error;
  }
}
