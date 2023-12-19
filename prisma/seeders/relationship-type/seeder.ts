import { PrismaClient } from '@prisma/client';
import { relationshipTypeSeederData } from './data';

export async function relationshipTypeSeed(prisma: PrismaClient): Promise<void> {
  try {
    console.info('Seeding table relationship_type...');

    for (const data of relationshipTypeSeederData) {
      await prisma.relationshipType.upsert({
        where: { id: data.id },
        update: data,
        create: data,
      });
    }

    console.info('Data inserted with success on the table relationship_type.');
  } catch (error) {
    console.error('An error occurred during seeding of table relationship_type.', error);
    throw error;
  }
}
