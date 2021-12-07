import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateSpaceDto } from './dto/create-space.dto';
import { UpdateSpaceDto } from './dto/update-space.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Space } from './entities/space.entity';

@Injectable()
export class SpacesService {
  constructor(
    @InjectRepository(Space) private spacesRepository: Repository<Space>,
  ) {}

  create(createSpaceDto: CreateSpaceDto) {
    return this.spacesRepository.save(
      this.spacesRepository.create(createSpaceDto),
    );
  }

  findAll() {
    return this.spacesRepository.find({ relations: ['lists'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} space`;
  }

  update(id: number, updateSpaceDto: UpdateSpaceDto) {
    return this.spacesRepository.update(id, updateSpaceDto);
  }

  remove(id: number) {
    return this.spacesRepository.delete(id);
  }
}
