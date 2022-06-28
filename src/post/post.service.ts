import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreatePostDto) {
    const createdPost = await this.prisma.post.create({ data });
    return createdPost;
  }

  findAll() {
    return this.prisma.post.findMany();
  }

  findOne(id: number) {
    return this.prisma.post.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdatePostDto) {
    const updatedPost = await this.prisma.post.update({
      where: { id },
      data,
    });

    return updatedPost;
  }

  remove(id: number) {
    return this.prisma.post.delete({ where: { id } });
  }
}
