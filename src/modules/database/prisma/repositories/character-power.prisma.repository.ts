import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from '../prisma.service';
import { CharacterPowerEntity } from '@modules/character/entities/character-power.entity';
import { CharacterPowerRepositoryInterface } from '@modules/character/repositories/character-power.repository.interface';
import { UpdateCharacterPowerDto } from '@modules/character/dtos/update-character-power.dto';
import { CharacterNotFoundError } from '@modules/character/errors/character-not-found.error';
import { CharacterPowersEmptyError } from '@modules/character/errors/character-powers-empty.error';

@Injectable()
export class CharacterPowerPrismaRepository implements CharacterPowerRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async update(characterId: number, payload: UpdateCharacterPowerDto): Promise<CharacterPowerEntity[]> {
    const character = await this.prismaService.character.findFirst({
      where: {
        id: characterId,
      },
    });

    if (!character) {
      throw new CharacterNotFoundError(`Cannot proceed. The character of ID ${characterId} does not exists.`);
    }

    if (!payload.powers.length) {
      throw new CharacterPowersEmptyError(`Cannot proceed. No powers were provided on the payload.`);
    }

    const updatedCharacterPowers = await this.prismaService.$transaction(async prisma => {
      // Retrieve existing powers connected to the character
      const existingCharacterPowers = await prisma.characterPower.findMany({
        where: { characterId: characterId },
        select: { powerId: true },
      });

      // Extract existing power IDs
      const existingPowerIds = existingCharacterPowers.map(characterPower => characterPower.powerId);

      // Identify powers to disconnect (exists on database, but does not exists on payload)
      const powersToDisconnect = existingPowerIds.filter(id => !payload.powers.includes(id));

      // Identify powers to connect (exists on payload, but does not exists on database)
      const powersToConnect = payload.powers.filter(id => !existingPowerIds.includes(id));

      // Disconnect unnecessary powers from the character
      await prisma.characterPower.deleteMany({
        where: { characterId: characterId, powerId: { in: powersToDisconnect } },
      });

      // Connect new powers to the character
      await Promise.all(
        powersToConnect.map(async powerId => {
          return prisma.characterPower.create({
            data: {
              characterId: characterId,
              powerId: powerId,
            },
          });
        }),
      );

      // Get the updated character powers
      return await prisma.characterPower.findMany({
        where: {
          characterId: characterId,
        },
        include: {
          power: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });
    });

    return plainToInstance(CharacterPowerEntity, updatedCharacterPowers);
  }

  async getByCharacter(characterId: number): Promise<CharacterPowerEntity[]> {
    const character = await this.prismaService.character.findFirst({
      where: {
        id: characterId,
      },
    });

    if (!character) {
      throw new CharacterNotFoundError(`Cannot proceed. The character of ID ${characterId} does not exists.`);
    }
    
    const characterPowers = await this.prismaService.characterPower.findMany({
      where: { characterId: characterId },
      include: {
        power: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return plainToInstance(CharacterPowerEntity, characterPowers);
  }
}
