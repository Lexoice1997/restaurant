import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilesService } from 'src/files/files.service';
import { FoodsEntity } from 'src/foods/entities/foods.entity';
import { Repository } from 'typeorm';
import { CreateFoodDto } from './dto/create-food.dto';

@Injectable()
export class FoodsService {
  constructor(
    @InjectRepository(FoodsEntity) private foodsEntity: Repository<FoodsEntity>,
    private filesService: FilesService,
  ) {}

  async createFood(dto: CreateFoodDto, image: any) {
    const { fileId, fileName } = await this.filesService.createFile(image);
    const food = this.foodsEntity.save({
      name: dto.name,
      description: dto.description,
      price: dto.price,
      category: { id: dto.categoryId },
      image: fileName,
      fileId: fileId,
    });
    return food;
  }

  async getAllFoods() {
    const foods = this.foodsEntity.find({ relations: { category: true } });
    return foods;
  }

  async getFoodById(id: string) {
    const food = await this.foodsEntity.findBy({ id });
    return food;
  }

  async updateFood(id: string, dto: CreateFoodDto) {
    const food = await this.foodsEntity.update(id, {
      ...dto,
      category: { id: dto.categoryId },
    });
    return food;
  }

  async deleteFood(id: string) {
    const food = await this.foodsEntity.delete(id);
    return food;
  }
}
