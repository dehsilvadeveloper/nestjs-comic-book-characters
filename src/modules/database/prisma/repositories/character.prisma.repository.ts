import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from '../prisma.service';
import { CharacterEntity } from '@modules/character/entities/character.entity';
import { CharacterRepositoryInterface } from '@modules/character/repositories/character.repository.interface';
import { FindCharacterDto } from '@modules/character/dtos/find-character.dto';
import { CreateCharacterDto } from '@modules/character/dtos/create-character.dto';
import { UpdateCharacterDto } from '@modules/character/dtos/update-character.dto';
import { PrismaError } from '../constants/prisma_errors/all';
import { characterInclude } from '../constants/character.constants';
import { PaginatedOutputType } from '@modules/common/types/paginated-output.type';
import { CharacterNotFoundError } from '@modules/character/errors/character-not-found.error';
import { CharacterRelationshipInvalidError } from '../../../character/errors/character-relationship-invalid.error';
import { PaginationOptions } from '@modules/common/value_objects/pagination-options';
import { SortingOptions } from '@modules/common/value_objects/sorting-options';

@Injectable()
export class CharacterPrismaRepository implements CharacterRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async create(payload: CreateCharacterDto): Promise<CharacterEntity> {
    try {
      const character = await this.prismaService.$transaction(async prisma => {
        // Create the character
        let characterCreated = await prisma.character.create({
          data: {
            name: payload.name,
            civilName: payload.civilName,
            gender: payload.gender,
            alignmentId: payload.alignmentId,
            maritalStatusId: payload.maritalStatusId,
            livingStatusId: payload.livingStatusId,
          },
          include: characterInclude,
        });

        // Connect character created to powers
        await Promise.all(
          payload.powers.map(async powerId => {
            return prisma.characterPower.create({
              data: {
                characterId: characterCreated.id,
                powerId: powerId,
              },
            });
          }),
        );

        // Get the created character with associated relationships
        return prisma.character.findFirst({
          where: {
            id: characterCreated.id,
          },
          include: characterInclude,
        });
      });

      return plainToInstance(CharacterEntity, character);
    } catch (error) {
      console.log(JSON.stringify(error, null, 4));
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === PrismaError.uniqueConstraintViolation
      ) {
        throw new CharacterRelationshipInvalidError(
          'Some of the provided relationships for the character entity are invalid.',
        );
      }

      throw error;
    }
  }

  async update(id: number, payload: UpdateCharacterDto): Promise<CharacterEntity> {
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

  async getWhere(
    paginationOptions: PaginationOptions,
    sortingOptions: SortingOptions,
  ): Promise<PaginatedOutputType<CharacterEntity>> {
    const [characters, count] = await this.prismaService.$transaction([
      this.prismaService.character.findMany({
        include: characterInclude,
        orderBy: sortingOptions.orderBy,
        take: paginationOptions.take,
        skip: paginationOptions.skip,
      }),
      this.prismaService.character.count(),
    ]);

    const characterList = plainToInstance(CharacterEntity, characters);
    const totalPages = Math.ceil(count / paginationOptions.pageSize);

    return {
      meta: {
        total: count,
        pageSize: paginationOptions.pageSize,
        lastPage: totalPages,
        currentPage: paginationOptions.page,
        prevPage: paginationOptions.page > 1 ? paginationOptions.page - 1 : null,
        nextPage: paginationOptions.page < totalPages ? paginationOptions.page + 1 : null,
      },
      data: characterList,
    };
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
    if (Object.keys(where).length === 0) {
      return null;
    }

    const character = await this.prismaService.character.findFirst({ where: where, include: characterInclude });

    return plainToInstance(CharacterEntity, character);
  }
}
