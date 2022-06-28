import { Prisma } from '@prisma/client';
import { Post } from '../entities/post.entity';

export class CreatePostDto implements Post {
  id?: number;
  title: string;
  content?: string;
  published?: boolean;
  authorId?: number;
}
