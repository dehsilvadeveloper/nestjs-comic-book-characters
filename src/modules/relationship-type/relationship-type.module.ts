import { Module } from '@nestjs/common';
import { RelationshipTypeController } from './controllers/relationship-type.controller';
import { RelationshipTypeService } from './services/relationship-type.service';
import { DatabaseModule } from '@modules/database/database.module';

@Module({
  controllers: [RelationshipTypeController],
  providers: [RelationshipTypeService],
  imports: [DatabaseModule],
})
export class RelationshipTypeModule {}
