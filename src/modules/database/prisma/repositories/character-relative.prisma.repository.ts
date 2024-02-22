import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from '../prisma.service';
import { CharacterRelativeEntity } from '@modules/character/entities/character-relative.entity';
import { CharacterRelativeRepositoryInterface } from '@modules/character/repositories/character-relative.repository.interface';
import { UpdateCharacterRelativeDto } from '@modules/character/dtos/update-character-relative.dto';
import { CharacterNotFoundError } from '@modules/character/errors/character-not-found.error';
import { CharacterRelativesEmptyError } from '@modules/character/errors/character-relatives-empty.error';

@Injectable()
export class CharacterRelativePrismaRepository implements CharacterRelativeRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async update(characterId: number, payload: UpdateCharacterRelativeDto): Promise<CharacterRelativeEntity[]> {
    const character = await this.prismaService.character.findFirst({
      where: {
        id: characterId,
      },
    });

    if (!character) {
      throw new CharacterNotFoundError(`Cannot proceed. The character of ID ${characterId} does not exists.`);
    }

    if (!payload.relatives.length) {
      throw new CharacterRelativesEmptyError(`Cannot proceed. No relatives were provided on the payload.`);
    }

    const updatedCharacterRelatives = await this.prismaService.$transaction(async prisma => {
      // Retrieve existing relatives connected to the character
      const existingCharacterRelatives = await prisma.characterRelative.findMany({
        where: { characterId: characterId },
        select: { relativeId: true },
      });

      // Extract existing relative IDs
      const existingRelativeIds = existingCharacterRelatives.map(characterRelative => characterRelative.relativeId);

      // Identify relatives to disconnect (exists on database, but does not exists on payload)
      const relativesToDisconnect = existingRelativeIds.filter(
        relativeId => !payload.relatives.map(relative => relative.relativeId).includes(relativeId),
      );

      // Identify relatives to connect (exists on payload, but does not exists on database)
      const relativesToConnect = payload.relatives.filter(relative => !existingRelativeIds.includes(relative.relativeId));

      // Disconnect unnecessary relatives from the character
      await prisma.characterRelative.deleteMany({
        where: { characterId: characterId, relativeId: { in: relativesToDisconnect } },
      });

      // Connect new relatives to the character
      await Promise.all(
        relativesToConnect.map(async relativeData => {
          return prisma.characterRelative.create({
            data: {
              characterId: characterId,
              relativeId: relativeData.relativeId,
              relationshipTypeId: relativeData.relationshipTypeId,
            },
          });
        }),
      );

      // Get the updated character relatives
      return await prisma.characterRelative.findMany({
        where: {
          characterId: characterId,
        },
        include: {
          relative: {
            select: {
              id: true,
              name: true,
              civilName: true,
            },
          },
          relationship: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });
    });

    return plainToInstance(CharacterRelativeEntity, updatedCharacterRelatives);
  }

  async getByCharacter(characterId: number): Promise<CharacterRelativeEntity[]> {
    const characterRelatives = await this.prismaService.characterRelative.findMany({
      where: { characterId: characterId },
      include: {
        relative: {
          select: {
            id: true,
            name: true,
            civilName: true,
          },
        },
        relationship: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return plainToInstance(CharacterRelativeEntity, characterRelatives);
  }
}
