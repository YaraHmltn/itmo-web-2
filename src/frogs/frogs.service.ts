import {Injectable, NotImplementedException} from '@nestjs/common';
import { CreateFrogDto } from './dto/create-frog.dto';
import { UpdateFrogDto } from './dto/update-frog.dto';

@Injectable()
export class FrogsService {
  create(createFrogDto: CreateFrogDto) {
    throw new NotImplementedException();
  }

  findAll() {
    throw new NotImplementedException();
  }

  findOne(id: number) {
    throw new NotImplementedException();
  }

  update(id: number, updateFrogDto: UpdateFrogDto) {
    throw new NotImplementedException();
  }

  remove(id: number) {
    throw new NotImplementedException();
  }
}
