import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CharacterRepositoryInterface } from '@modules/character/repositories/character.repository.interface';
import { CharacterPrismaRepository } from './prisma/repositories/character.prisma.repository';
import { CharacterAllyRepositoryInterface } from '@modules/character/repositories/character-ally.repository.interface';
import { CharacterAllyPrismaRepository } from './prisma/repositories/character-ally.prisma.repository';
import { CharacterEnemyRepositoryInterface } from '@modules/character/repositories/character-enemy.repository.interface';
import { CharacterEnemyPrismaRepository } from './prisma/repositories/character-enemy.prisma.repository';
import { CharacterPowerRepositoryInterface } from '@modules/character/repositories/character-power.repository.interface';
import { CharacterPowerPrismaRepository } from './prisma/repositories/character-power.prisma.repository';
import { CharacterRelativeRepositoryInterface } from '@modules/character/repositories/character-relative.repository.interface';
import { CharacterRelativePrismaRepository } from './prisma/repositories/character-relative.prisma.repository';
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
      provide: CharacterAllyRepositoryInterface,
      useClass: CharacterAllyPrismaRepository,
    },
    {
      provide: CharacterEnemyRepositoryInterface,
      useClass: CharacterEnemyPrismaRepository,
    },
    {
      provide: CharacterPowerRepositoryInterface,
      useClass: CharacterPowerPrismaRepository,
    },
    {
      provide: CharacterRelativeRepositoryInterface,
      useClass: CharacterRelativePrismaRepository,
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
    CharacterAllyRepositoryInterface,
    CharacterEnemyRepositoryInterface,
    CharacterPowerRepositoryInterface,
    CharacterRelativeRepositoryInterface,
    AlignmentRepositoryInterface,
    LivingStatusRepositoryInterface,
    MaritalStatusRepositoryInterface,
    PowerRepositoryInterface,
    TeamRepositoryInterface,
    UserRepositoryInterface,
  ],
})
export class DatabaseModule {}
