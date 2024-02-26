import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from '../prisma.service';
import { CharacterTeamEntity } from '@modules/character/entities/character-team.entity';
import { CharacterTeamRepositoryInterface } from '@modules/character/repositories/character-team.repository.interface';
import { UpdateCharacterTeamDto } from '@modules/character/dtos/update-character-team.dto';
import { CharacterNotFoundError } from '@modules/character/errors/character-not-found.error';
import { CharacterTeamsEmptyError } from '@modules/character/errors/character-teams-empty.error';

@Injectable()
export class CharacterTeamPrismaRepository implements CharacterTeamRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async update(characterId: number, payload: UpdateCharacterTeamDto): Promise<CharacterTeamEntity[]> {
    const character = await this.prismaService.character.findFirst({
      where: {
        id: characterId,
      },
    });

    if (!character) {
      throw new CharacterNotFoundError(`Cannot proceed. The character of ID ${characterId} does not exists.`);
    }

    if (!payload.teams.length) {
      throw new CharacterTeamsEmptyError(`Cannot proceed. No teams were provided on the payload.`);
    }

    const updatedCharacterTeams = await this.prismaService.$transaction(async prisma => {
      // Retrieve existing teams connected to the character
      const existingCharacterTeams = await prisma.characterTeam.findMany({
        where: { characterId: characterId },
        select: { teamId: true },
      });

      // Extract existing team IDs
      const existingTeamIds = existingCharacterTeams.map(characterTeam => characterTeam.teamId);

      // Identify teams to disconnect (exists on database, but does not exists on payload)
      const teamsToDisconnect = existingTeamIds.filter(
        teamId => !payload.teams.map(team => team.teamId).includes(teamId),
      );

      // Identify teams to connect (exists on payload, but does not exists on database)
      const teamsToConnect = payload.teams.filter(team => !existingTeamIds.includes(team.teamId));

      // Disconnect unnecessary teams from the character
      await prisma.characterTeam.deleteMany({
        where: { characterId: characterId, teamId: { in: teamsToDisconnect } },
      });

      // Connect new teams to the character
      await Promise.all(
        teamsToConnect.map(async characterTeamData => {
          return prisma.characterTeam.create({
            data: {
              characterId: characterId,
              teamId: characterTeamData.teamId,
              status: characterTeamData.status,
              role: characterTeamData.role,
            },
          });
        }),
      );

      // Get the updated character teams
      return await prisma.characterTeam.findMany({
        where: {
          characterId: characterId,
        },
        include: {
          team: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });
    });

    return plainToInstance(CharacterTeamEntity, updatedCharacterTeams);
  }

  async getByCharacter(characterId: number): Promise<CharacterTeamEntity[]> {
    const characterTeams = await this.prismaService.characterTeam.findMany({
      where: { characterId: characterId },
      include: {
        team: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return plainToInstance(CharacterTeamEntity, characterTeams);
  }
}
