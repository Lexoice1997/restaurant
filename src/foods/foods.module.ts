import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesEntity } from 'src/categories/entities/categories.entity';
import { FoodsEntity } from 'src/foods/entities/foods.entity';
import { FilesModule } from './../files/files.module';
import { FoodsController } from './foods.controller';
import { FoodsService } from './foods.service';

@Module({
  controllers: [FoodsController],
  providers: [FoodsService],
  imports: [
    TypeOrmModule.forFeature([FoodsEntity, CategoriesEntity]),
    FilesModule,
  ],
})
export class FoodsModule {}
