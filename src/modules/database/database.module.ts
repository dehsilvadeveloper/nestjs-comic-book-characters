import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CharacterRepositoryInterface } from '@modules/character/repositories/character.repository.interface';
import { CharacterPrismaRepository } from './prisma/repositories/character.prisma.repository';
import { TeamRepositoryInterface } from '@modules/team/repositories/team.repository.interface';
import { TeamPrismaRepository } from './prisma/repositories/team.prisma.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: CharacterRepositoryInterface,
      useClass: CharacterPrismaRepository,
    },
    {
      provide: TeamRepositoryInterface,
      useClass: TeamPrismaRepository,
    },
  ],
  exports: [CharacterRepositoryInterface, TeamRepositoryInterface],
})
export class DatabaseModule {}
