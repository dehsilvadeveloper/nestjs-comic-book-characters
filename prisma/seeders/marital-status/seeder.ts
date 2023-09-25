import { PrismaClient } from '@prisma/client';
import { maritalStatusSeederData } from './data';

export async function maritalStatusSeed(prisma: PrismaClient): Promise<void> {
  try {
    console.info('Seeding table marital_status...');

    for (const data of maritalStatusSeederData) {
      await prisma.maritalStatus.upsert({
        where: { id: data.id },
        update: data,
        create: data,
      });
    }

    console.info('Data inserted with success on the table marital_status.');
  } catch (error) {
    console.error('An error occurred during seeding of table marital_status.', error);
    throw error;
  }
}
