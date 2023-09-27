import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { TeamEntity } from '@modules/team/entities/team.entity';
import { TeamRepositoryInterface } from '@modules/team/repositories/team.repository.interface';

@Injectable()
export class TeamPrismaRepository implements TeamRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async create(team: TeamEntity): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async save(team: TeamEntity): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async findAll(): Promise<TeamEntity[]> {
    throw new Error('Method not implemented.');
  }

  async findById(id: number): Promise<TeamEntity | null> {
    throw new Error('Method not implemented.');
  }

  async findFirst(id: number): Promise<TeamEntity | null> {
    throw new Error('Method not implemented.');
  }
}
