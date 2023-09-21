import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CharacterRepositoryInterface } from '@modules/character/repositories/character.repository.interface';
import { CharacterPrismaRepository } from './prisma/repositories/character.prisma.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: CharacterRepositoryInterface,
      useClass: CharacterPrismaRepository,
    },
  ],
  exports: [CharacterRepositoryInterface],
})
export class DatabaseModule {}
