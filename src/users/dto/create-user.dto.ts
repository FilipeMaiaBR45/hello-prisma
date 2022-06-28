import { Prisma } from '@prisma/client';
import { User } from '../entities/user.entity';

export class CreateUserDto implements User {
  id?: number;
  email: string;
  name?: string;
  posts?: Prisma.PostUncheckedCreateNestedManyWithoutAuthorInput;
}
