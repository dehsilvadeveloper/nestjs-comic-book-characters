import { Module } from '@nestjs/common';
import { CharacterController } from './controllers/character.controller';
import { CharacterService } from './services/character.service';

@Module({
  controllers: [CharacterController],
  providers: [CharacterService],
})
export class CharacterModule {}
