import { PrismaClient } from '@prisma/client';
import { characterEnemySeederData } from './data';

export async function characterEnemySeed(prisma: PrismaClient): Promise<void> {
  try {
    console.info('Seeding table character_enemy...');

    await prisma.characterEnemy.createMany({
      data: characterEnemySeederData,
      skipDuplicates: true,
    });

    console.info('Data inserted with success on the table character_enemy.');
  } catch (error) {
    console.error('An error occurred during seeding of table character_enemy.', error);
    throw error;
  }
}
