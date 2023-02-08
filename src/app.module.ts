import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesEntity } from 'src/categories/entities/categories.entity';
import { FoodsEntity } from 'src/foods/entities/foods.entity';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { FilesModule } from './files/files.module';
import { FoodsModule } from './foods/foods.module';
import { UsersEntity } from './users/entities/users.entity';
import { UsersModule } from './users/users.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      entities: [UsersEntity, CategoriesEntity, FoodsEntity],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    CategoriesModule,
    FoodsModule,
    FilesModule,
  ],
})
export class AppModule {}
