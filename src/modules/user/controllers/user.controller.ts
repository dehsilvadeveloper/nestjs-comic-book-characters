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
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { UserService } from '../services/user.service';
import { UserViewModel } from '../view_models/user.view-model';
import { UserType } from '../types/user.type';
import { NotFoundInterceptor } from '@modules/common/interceptors/not-found.interceptor';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';

@ApiTags('user')
@ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized.' })
@ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
@UseInterceptors(NotFoundInterceptor)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Create a new user.',
    description: 'Create a new user.',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The user has been successfully created.',
    type: UserType,
  })
  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createUserDto: CreateUserDto): Promise<UserType> {
    const user = await this.userService.create(createUserDto);

    return UserViewModel.toHttp(user);
  }

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Update a user.',
    description: 'Update a user.',
  })
  @ApiParam({ name: 'id', description: 'User ID.' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The user has been successfully updated.',
    type: UserType,
  })
  @ApiResponse({ status: 404, description: 'User with the provided ID does not exists.' })
  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<UserType> {
    const user = await this.userService.update(+id, updateUserDto);

    return UserViewModel.toHttp(user);
  }

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Retrieve data of a specific user.',
    description: 'Retrieve data of a specific user.',
  })
  @ApiParam({ name: 'id', description: 'User ID.' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the user data found.',
    type: UserType,
  })
  @ApiResponse({ status: 404, description: 'User with the provided ID does not exists.' })
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
