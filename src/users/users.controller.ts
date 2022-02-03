import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOneById(@Param() param: number): Promise<User> {
    return this.usersService.findOneById(param);
  }

  @Post()
  create(@Body() user: User): Promise<User> {
    const newUser = this.usersService.create(user.name);
    return newUser;
  }
}
