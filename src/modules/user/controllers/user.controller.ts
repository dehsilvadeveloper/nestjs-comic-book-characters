import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseInterceptors,
  UseGuards,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { UserService } from '../services/user.service';
import { UserViewModel } from '../view_models/user.view-model';
import { UserType } from '../types/user.type';
import { NotFoundInterceptor } from '@modules/common/interceptors/not-found.interceptor';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';

@UseInterceptors(NotFoundInterceptor)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createUserDto: CreateUserDto): Promise<UserType> {
    const user = await this.userService.create(createUserDto);

    return UserViewModel.toHttp(user);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<UserType> {
    const user = await this.userService.update(+id, updateUserDto);

    return UserViewModel.toHttp(user);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async firstById(@Param('id') id: number): Promise<UserType> {
    const user = await this.userService.firstById(+id);

    if (!user) {
      throw new NotFoundException(`User of ID ${id} does not exists.`);
    }

    return UserViewModel.toHttp(user);
  }
}
