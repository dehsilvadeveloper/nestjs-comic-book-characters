import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CharacterRepositoryInterface } from '@modules/character/repositories/character.repository.interface';
import { CharacterPrismaRepository } from './prisma/repositories/character.prisma.repository';
import { AlignmentRepositoryInterface } from '@modules/common/repositories/alignment.repository.interface';
import { AlignmentPrismaRepository } from './prisma/repositories/alignment.prisma.repository';
import { LivingStatusRepositoryInterface } from '@modules/common/repositories/living-status.repository.interface';
import { LivingStatusPrismaRepository } from './prisma/repositories/living-status.prisma.repository';
import { MaritalStatusRepositoryInterface } from '@modules/common/repositories/marital-status.repository.interface';
import { MaritalStatusPrismaRepository } from './prisma/repositories/marital-status.prisma.repository';
import { PowerRepositoryInterface } from '../power/repositories/power.repository.interface';
import { PowerPrismaRepository } from './prisma/repositories/power.prisma.repository';
import { TeamRepositoryInterface } from '@modules/team/repositories/team.repository.interface';
import { TeamPrismaRepository } from './prisma/repositories/team.prisma.repository';
import { UserRepositoryInterface } from '@modules/user/repositories/user.repository.interface';
import { UserPrismaRepository } from './prisma/repositories/user.prisma.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: CharacterRepositoryInterface,
      useClass: CharacterPrismaRepository,
    },
    {
      provide: AlignmentRepositoryInterface,
      useClass: AlignmentPrismaRepository,
    },
    {
      provide: LivingStatusRepositoryInterface,
      useClass: LivingStatusPrismaRepository,
    },
    {
      provide: MaritalStatusRepositoryInterface,
      useClass: MaritalStatusPrismaRepository,
    },
    {
      provide: PowerRepositoryInterface,
      useClass: PowerPrismaRepository,
    },
    {
      provide: TeamRepositoryInterface,
      useClass: TeamPrismaRepository,
    },
    {
      provide: UserRepositoryInterface,
      useClass: UserPrismaRepository,
    },
  ],
  exports: [
    PrismaService,
    CharacterRepositoryInterface,
    AlignmentRepositoryInterface,
    LivingStatusRepositoryInterface,
    MaritalStatusRepositoryInterface,
    PowerRepositoryInterface,
    TeamRepositoryInterface,
    UserRepositoryInterface,
  ],
})
export class DatabaseModule {}
