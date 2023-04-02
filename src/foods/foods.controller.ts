import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { FoodsService } from './foods.service';

@Controller('foods')
export class FoodsController {
  constructor(private foodsService: FoodsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() foodDto: CreateFoodDto, @UploadedFile() image) {
    return this.foodsService.createFood(foodDto, image);
  }

  @Get()
  getAll(@Query() query) {
    return this.foodsService.getAllFoods(query);
  }

  @Get('/search')
  search(@Query() query) {
    return this.foodsService.searchFoods(query);
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.foodsService.getFoodById(id);
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() foodDto: UpdateFoodDto) {
    console.log(foodDto.categoryId);
    return this.foodsService.updateFood(id, foodDto);
  }

  @Delete('/:id')
  delete(@Param('id') id: string, @Body() fileId: string) {
    return this.foodsService.deleteFood(id, fileId);
  }
}
