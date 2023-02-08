import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesEntity } from 'src/categories/entities/categories.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoriesEntity)
    private categoriesRepository: Repository<CategoriesEntity>,
  ) {}

  async createCategory(dto: CreateCategoryDto) {
    const categories = this.categoriesRepository.save(dto);
    return categories;
  }

  async getAllCategories() {
    const categories = await this.categoriesRepository.find({
      relations: { foods: true },
    });
    return categories;
  }

  async getCategoryById(id: string) {
    const category = await this.categoriesRepository.findBy({ id });
    return category;
  }

  async updateCategory(id: string, dto: UpdateCategoryDto) {
    const category = await this.categoriesRepository.update(id, dto);
    return category;
  }

  async deleteCategory(id: string) {
    const category = await this.categoriesRepository.delete(id);
    return category;
  }
}
