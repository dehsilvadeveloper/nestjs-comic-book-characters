import { Controller, Get, Post, Body, Patch, Param, UseInterceptors, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { UserService } from '../services/user.service';
import { UserViewModel } from '../view_models/user.view-model';
import { UserType } from '../types/user.type';
import { NotFoundInterceptor } from '@modules/common/interceptors/not-found-interceptor';

@UseInterceptors(NotFoundInterceptor)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserType> {
    const user = await this.userService.create(createUserDto);

    return UserViewModel.toHttp(user);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<UserType> {
    const user = await this.userService.update(+id, updateUserDto);

    return UserViewModel.toHttp(user);
  }

  @Get(':id')
  async firstById(@Param('id') id: number): Promise<UserType> {
    const user = await this.userService.firstById(+id);

    if (!user) {
      throw new NotFoundException(`User of ID ${id} does not exists.`);
    }

    return UserViewModel.toHttp(user);
  }
}
