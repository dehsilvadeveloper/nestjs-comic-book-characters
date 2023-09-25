import { PrismaClient } from '@prisma/client';
import { characterPowerSeederData } from './data';

export async function characterPowerSeed(prisma: PrismaClient): Promise<void> {
  try {
    console.info('Seeding table character_power...');

    await prisma.characterPower.createMany({
      data: characterPowerSeederData,
      skipDuplicates: true,
    });

    console.info('Data inserted with success on the table character_power.');
  } catch (error) {
    console.error('An error occurred during seeding of table character_power.', error);
    throw error;
  }
}
