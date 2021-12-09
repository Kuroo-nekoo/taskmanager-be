import { Category } from 'src/categories/entities/category.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.categoriesRepository.save(
      this.categoriesRepository.create(createCategoryDto),
    );
  }

  findAll() {
    return this.categoriesRepository.find({ relations: ['tasks'] });
  }

  findAllByListId(listId: number) {
    return this.categoriesRepository.find({ where: { listId } });
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesRepository.update({ id }, updateCategoryDto);
  }

  remove(id: string) {
    return this.categoriesRepository.delete({ id });
  }
}
