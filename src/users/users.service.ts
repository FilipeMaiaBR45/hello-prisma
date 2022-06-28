import { Injectable } from '@nestjs/common';
import { createHash } from 'crypto';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const createdUser = await this.prisma.user.create({ data });
    return createdUser;
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateUserDto) {
    const updatedUser = await this.prisma.user.update({
      where: { id },
      data,
    });
    return updatedUser;
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
