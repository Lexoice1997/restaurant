import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersEntity } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = this.usersRepository.save(dto);
    return user;
  }

  async getAllUsers() {
    const users = await this.usersRepository.find();
    return users;
  }

  async getUserByPhone(phone: string) {
    const user = await this.usersRepository.findOne({ where: { phone } });
    return user;
  }

  async updateUser(id: string, dto: UpdateUserDto) {
    const user = await this.usersRepository.update(id, dto);
    return user;
  }

  async deleteUser(id: string) {
    const user = await this.usersRepository.delete(id);
    return user;
  }
}
