import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Post()
  create(@Body() categoryDto: CreateCategoryDto) {
    console.log(categoryDto);

    return this.categoriesService.createCategory(categoryDto);
  }

  @Get()
  getAll() {
    return this.categoriesService.getAllCategories();
  }

  @Get('/foods')
  getAllWithFoods() {
    return this.categoriesService.getAllCategoriesWithFood();
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.categoriesService.getCategoryById(id);
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() categoryDto: UpdateCategoryDto) {
    return this.categoriesService.updateCategory(id, categoryDto);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.categoriesService.deleteCategory(id);
  }
}
