import { PrismaClient } from '@prisma/client';
import { livingStatusSeederData } from './data';

export async function livingStatusSeed(prisma: PrismaClient): Promise<void> {
  try {
    console.info('Seeding table living_status...');

    for (const data of livingStatusSeederData) {
      await prisma.livingStatus.upsert({
        where: { id: data.id },
        update: data,
        create: data,
      });
    }

    console.info('Data inserted with success on the table living_status.');
  } catch (error) {
    console.error('An error occurred during seeding of table living_status.', error);
    throw error;
  }
}
