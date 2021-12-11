import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { List } from './entities/list.entity';

@Injectable()
export class ListsService {
  constructor(
    @InjectRepository(List) private listsRepository: Repository<List>,
  ) {}

  create(createListDto: CreateListDto) {
    return this.listsRepository.save(
      this.listsRepository.create(createListDto),
    );
  }

  findAll() {
    return this.listsRepository.find({ relations: ['categories'] });
  }

  findOne(id: string) {
    return this.listsRepository.findOne(
      { id },
      { relations: ['categories', 'categories.tasks'] },
    );
  }

  update(id: number, updateListDto: UpdateListDto) {
    return `This action updates a #${id} list`;
  }

  remove(id: string) {
    return this.listsRepository.delete(id);
  }
}
