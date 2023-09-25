import { PrismaClient } from '@prisma/client';
import { characterTeamSeederData } from './data';

export async function characterTeamSeed(prisma: PrismaClient): Promise<void> {
  try {
    console.info('Seeding table character_team...');

    await prisma.characterTeam.createMany({
      data: characterTeamSeederData,
      skipDuplicates: true,
    });

    console.info('Data inserted with success on the table character_team.');
  } catch (error) {
    console.error('An error occurred during seeding of table character_team.', error);
    throw error;
  }
}
