import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { TeamEntity } from '@modules/team/entities/team.entity';
import { TeamRepositoryInterface } from '@modules/team/repositories/team.repository.interface';
import { FindTeamDto } from '@modules/team/dtos/find-team.dto';
import { CreateTeamDto } from '@modules/team/dtos/create-team.dto';
import { UpdateTeamDto } from '@modules/team/dtos/update-team.dto';

@Injectable()
export class TeamPrismaRepository implements TeamRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async create(payload: CreateTeamDto): Promise<TeamEntity> {
    throw new Error('Method not implemented.');
  }

  async update(id: number, payload: UpdateTeamDto): Promise<TeamEntity> {
    throw new Error('Method not implemented.');
  }

  async delete(id: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  async getAll(): Promise<TeamEntity[]> {
    throw new Error('Method not implemented.');
  }

  async getByField(field: string, value: any): Promise<TeamEntity[]> {
    throw new Error('Method not implemented.');
  }

  async getWhere(where: FindTeamDto): Promise<TeamEntity[]> {
    throw new Error('Method not implemented.');
  }

  async firstById(id: number): Promise<TeamEntity | null> {
    throw new Error('Method not implemented.');
  }

  async firstByField(field: string, value: any): Promise<TeamEntity | null> {
    throw new Error('Method not implemented.');
  }

  async firstWhere(where: FindTeamDto): Promise<TeamEntity | null> {
    throw new Error('Method not implemented.');
  }
}
