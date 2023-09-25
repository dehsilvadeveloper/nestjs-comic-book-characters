import { PrismaClient } from '@prisma/client';
import { alignmentSeederData } from './data';

export async function alignmentSeed(prisma: PrismaClient): Promise<void> {
  try {
    console.info('Seeding table alignment...');

    for (const data of alignmentSeederData) {
      await prisma.alignment.upsert({
        where: { id: data.id },
        update: data,
        create: data,
      });
    }

    console.info('Data inserted with success on the table alignment.');
  } catch (error) {
    console.error('An error occurred during seeding of table alignment.', error);
    throw error;
  }
}
