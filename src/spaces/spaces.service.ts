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
    return this.spacesRepository.find({
      relations: ['lists', 'lists.categories', 'lists.categories.tasks'],
    });
  }

  findOne(id: string) {
    return this.spacesRepository.findOne(
      { id },
      {
        relations: ['lists', 'lists.categories', 'lists.categories.tasks'],
      },
    );
  }

  update(id: string, updateSpaceDto: UpdateSpaceDto) {
    return this.spacesRepository.update(id, updateSpaceDto);
  }

  remove(id: string) {
    return this.spacesRepository.delete(id);
  }
}
