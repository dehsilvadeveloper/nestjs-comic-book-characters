import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from '../prisma.service';
import { CharacterAllyEntity } from '@modules/character/entities/character-ally.entity';
import { CharacterAllyRepositoryInterface } from '@modules/character/repositories/character-ally.repository.interface';
import { UpdateCharacterAllyDto } from '@modules/character/dtos/update-character-ally.dto';
import { CharacterNotFoundError } from '@modules/character/errors/character-not-found.error';
import { CharacterAlliesEmptyError } from '@modules/character/errors/character-allies-empty.error';

@Injectable()
export class CharacterAllyPrismaRepository implements CharacterAllyRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async update(characterId: number, payload: UpdateCharacterAllyDto): Promise<CharacterAllyEntity[]> {
    const character = await this.prismaService.character.findFirst({
      where: {
        id: characterId,
      },
    });

    if (!character) {
      throw new CharacterNotFoundError(`Cannot proceed. The character of ID ${characterId} does not exists.`);
    }

    if (!payload.allies.length) {
      throw new CharacterAlliesEmptyError(`Cannot proceed. No allies were provided on the payload.`);
    }

    const updatedCharacterAllies = await this.prismaService.$transaction(async prisma => {
      // Retrieve existing allies connected to the character
      const existingCharacterAllies = await prisma.characterAlly.findMany({
        where: { characterId: characterId },
        select: { allyId: true },
      });

      // Extract existing ally IDs
      const existingAllyIds = existingCharacterAllies.map(characterAlly => characterAlly.allyId);

      // Identify allies to disconnect (exists on database, but does not exists on payload)
      const alliesToDisconnect = existingAllyIds.filter(id => !payload.allies.includes(id));

      // Identify allies to connect (exists on payload, but does not exists on database)
      const alliesToConnect = payload.allies.filter(id => !existingAllyIds.includes(id));

      // Disconnect unnecessary allies from the character
      await prisma.characterAlly.deleteMany({
        where: { characterId: characterId, allyId: { in: alliesToDisconnect } },
      });

      // Connect new allies to the character
      await Promise.all(
        alliesToConnect.map(async allyId => {
          return prisma.characterAlly.create({
            data: {
              characterId: characterId,
              allyId: allyId,
            },
          });
        }),
      );

      // Get the updated character allies
      return await prisma.characterAlly.findMany({
        where: {
          characterId: characterId,
        },
        include: {
          ally: {
            select: {
              id: true,
              name: true,
              civilName: true,
            },
          },
        },
      });
    });

    return plainToInstance(CharacterAllyEntity, updatedCharacterAllies);
  }

  async getByCharacter(characterId: number): Promise<CharacterAllyEntity[]> {
    const character = await this.prismaService.character.findFirst({
      where: {
        id: characterId,
      },
    });

    if (!character) {
      throw new CharacterNotFoundError(`Cannot proceed. The character of ID ${characterId} does not exists.`);
    }

    const characterAllies = await this.prismaService.characterAlly.findMany({
      where: { characterId: characterId },
      include: {
        ally: {
          select: {
            id: true,
            name: true,
            civilName: true,
          },
        },
      },
    });

    return plainToInstance(CharacterAllyEntity, characterAllies);
  }
}
