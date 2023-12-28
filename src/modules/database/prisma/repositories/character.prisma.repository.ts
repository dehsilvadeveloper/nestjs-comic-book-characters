import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from '../prisma.service';
import { CharacterEntity } from '@modules/character/entities/character.entity';
import { CharacterRepositoryInterface } from '@modules/character/repositories/character.repository.interface';
import { FindCharacterDto } from '@modules/character/dtos/find-character.dto';
import { characterInclude } from '../constants/character.constants';
import { CharacterNotFoundError } from '@modules/character/errors/character-not-found.error';

@Injectable()
export class CharacterPrismaRepository implements CharacterRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async create(character: CharacterEntity): Promise<CharacterEntity> {
    throw new Error('Method not implemented.');
  }

  async update(character: CharacterEntity): Promise<CharacterEntity> {
    throw new Error('Method not implemented.');
  }

  async delete(id: number): Promise<boolean> {
    const character = await this.prismaService.character.findFirst({
      where: {
        id: id,
      },
    });

    if (!character) {
      throw new CharacterNotFoundError(`Cannot proceed. The character of ID ${id} does not exists.`);
    }

    await this.prismaService.character.delete({ where: { id: id } });

    return true;
  }

  async getAll(): Promise<CharacterEntity[]> {
    const characters = await this.prismaService.character.findMany({ include: characterInclude });

    return plainToInstance(CharacterEntity, characters);
  }

  async getByField(field: string, value: any): Promise<CharacterEntity[]> {
    const characters = await this.prismaService.character.findMany({
      where: { [field]: value },
      include: characterInclude,
    });

    return plainToInstance(CharacterEntity, characters);
  }

  async getWhere(where: FindCharacterDto): Promise<CharacterEntity[]> {
    const characters = await this.prismaService.character.findMany({ where: where, include: characterInclude });

    return plainToInstance(CharacterEntity, characters);
  }

  async firstById(id: number): Promise<CharacterEntity | null> {
    const character = await this.prismaService.character.findFirst({
      where: {
        id: id,
      },
      include: characterInclude,
    });

    return plainToInstance(CharacterEntity, character);
  }

  async firstByField(field: string, value: any): Promise<CharacterEntity | null> {
    const character = await this.prismaService.character.findFirst({
      where: { [field]: value },
      include: characterInclude,
    });

    return plainToInstance(CharacterEntity, character);
  }

  async firstWhere(where: FindCharacterDto): Promise<CharacterEntity | null> {
    const character = await this.prismaService.character.findFirst({ where: where, include: characterInclude });

    return plainToInstance(CharacterEntity, character);
  }
}
