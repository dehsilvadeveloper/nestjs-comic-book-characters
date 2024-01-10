import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { CommonModule } from '@modules/common/common.module';
import { DatabaseModule } from '@modules/database/database.module';


@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [CommonModule, DatabaseModule],
  exports: [UserService],
})
export class UserModule {}
