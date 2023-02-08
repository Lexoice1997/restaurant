import { Body, Controller, Post } from '@nestjs/common';
import { Delete, Get, Param, Put, UseGuards } from '@nestjs/common/decorators';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  update(@Param('id') id: string, @Body() userDto: UpdateUserDto) {
    return this.usersService.updateUser(id, userDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
