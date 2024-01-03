import { PrismaClient } from '@prisma/client';
import { getUserSeederData } from './data';

export async function userSeed(prisma: PrismaClient): Promise<void> {
  try {
    console.info('Seeding table user...');

    const userSeederData = await getUserSeederData();

    await prisma.user.createMany({
      data: userSeederData,
      skipDuplicates: true,
    });

    console.info('Data inserted with success on the table user.');
  } catch (error) {
    console.error('An error occurred during seeding of table user.', error);
    throw error;
  }
}
