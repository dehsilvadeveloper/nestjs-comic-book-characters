import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CharacterEntity } from '@modules/character/entities/character.entity';
import { CharacterRepositoryInterface } from '@modules/character/repositories/character.repository.interface';

@Injectable()
export class CharacterPrismaRepository implements CharacterRepositoryInterface {
    constructor(private readonly prismaService: PrismaService) {}

    create(character: CharacterEntity): Promise<void> {
        throw new Error('Method not implemented.');
    }

    save(character: CharacterEntity): Promise<void> {
        throw new Error('Method not implemented.');
    }

    findAll(): Promise<CharacterEntity[]> {
        throw new Error('Method not implemented.');
    }

    findById(id: string): Promise<CharacterEntity | null> {
        throw new Error('Method not implemented.');
    }
}
