import {Injectable, NotImplementedException} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PrismaService } from "../prisma.service";
import { Prisma, User } from "@prisma/client";
import { UserEntity } from "./entities/user.entity";

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    throw new NotImplementedException();
  }

  findAll() {
    throw new NotImplementedException();
  }

  findOne(id: number) {
    throw new NotImplementedException();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    throw new NotImplementedException();
  }

  remove(id: number) {
    throw new NotImplementedException();
  }


}