import { CreateCategoryDto } from './dtos/create-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  getCategories() {
    return this.categoriesRepository.find();
  }

  createCategory(createCategoryDto: CreateCategoryDto) {
    return this.categoriesRepository.save(
      this.categoriesRepository.create(createCategoryDto),
    );
  }
}
