import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from '../prisma.service';
import { CharacterEnemyEntity } from '@modules/character/entities/character-enemy.entity';
import { CharacterEnemyRepositoryInterface } from '@modules/character/repositories/character-enemy.repository.interface';
import { UpdateCharacterEnemyDto } from '@modules/character/dtos/update-character-enemy.dto';
import { CharacterNotFoundError } from '@modules/character/errors/character-not-found.error';
import { CharacterEnemiesEmptyError } from '@modules/character/errors/character-enemies-empty.error';

@Injectable()
export class CharacterEnemyPrismaRepository implements CharacterEnemyRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async update(characterId: number, payload: UpdateCharacterEnemyDto): Promise<CharacterEnemyEntity[]> {
    const character = await this.prismaService.character.findFirst({
      where: {
        id: characterId,
      },
    });

    if (!character) {
      throw new CharacterNotFoundError(`Cannot proceed. The character of ID ${characterId} does not exists.`);
    }

    if (!payload.enemies.length) {
      throw new CharacterEnemiesEmptyError(`Cannot proceed. No enemies were provided on the payload.`);
    }

    const updatedCharacterEnemies = await this.prismaService.$transaction(async prisma => {
      // Retrieve existing enemies connected to the character
      const existingCharacterEnemies = await prisma.characterEnemy.findMany({
        where: { characterId: characterId },
        select: { enemyId: true },
      });

      // Extract existing enemy IDs
      const existingEnemyIds = existingCharacterEnemies.map(characterEnemy => characterEnemy.enemyId);

      // Identify enemies to disconnect (exists on database, but does not exists on payload)
      const enemiesToDisconnect = existingEnemyIds.filter(id => !payload.enemies.includes(id));

      // Identify enemies to connect (exists on payload, but does not exists on database)
      const enemiesToConnect = payload.enemies.filter(id => !existingEnemyIds.includes(id));

      // Disconnect unnecessary enemies from the character
      await prisma.characterEnemy.deleteMany({
        where: { characterId: characterId, enemyId: { in: enemiesToDisconnect } },
      });

      // Connect new enemies to the character
      await Promise.all(
        enemiesToConnect.map(async enemyId => {
          return prisma.characterEnemy.create({
            data: {
              characterId: characterId,
              enemyId: enemyId,
            },
          });
        }),
      );

      // Get the updated character enemies
      return await prisma.characterEnemy.findMany({
        where: {
          characterId: characterId,
        },
        include: {
          enemy: {
            select: {
              id: true,
              name: true,
              civilName: true,
            },
          },
        },
      });
    });

    return plainToInstance(CharacterEnemyEntity, updatedCharacterEnemies);
  }

  async getByCharacter(characterId: number): Promise<CharacterEnemyEntity[]> {
    const characterEnemies = await this.prismaService.characterEnemy.findMany({
      where: { characterId: characterId },
      include: {
        enemy: {
          select: {
            id: true,
            name: true,
            civilName: true,
          },
        },
      },
    });

    return plainToInstance(CharacterEnemyEntity, characterEnemies);
  }
}
