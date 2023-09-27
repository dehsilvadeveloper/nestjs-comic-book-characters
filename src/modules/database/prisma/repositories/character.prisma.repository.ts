import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CharacterEntity } from '@modules/character/entities/character.entity';
import { CharacterRepositoryInterface } from '@modules/character/repositories/character.repository.interface';

@Injectable()
export class CharacterPrismaRepository implements CharacterRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async create(character: CharacterEntity): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async save(character: CharacterEntity): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async findAll(): Promise<CharacterEntity[]> {
    throw new Error('Method not implemented.');
  }

  async findById(id: number): Promise<CharacterEntity | null> {
    throw new Error('Method not implemented.');
  }

  async findFirst(id: number): Promise<CharacterEntity | null> {
    return null;
  }
}
