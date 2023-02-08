import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodsEntity } from './../foods/entities/foods.entity';
import { CategoriesEntity } from './entities/categories.entity';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [TypeOrmModule.forFeature([CategoriesEntity, FoodsEntity])]
})


export class CategoriesModule {}
