import { FoodsEntity } from 'src/foods/entities/foods.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
export class CategoriesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => FoodsEntity, (foods) => foods.category)
  foods: FoodsEntity;
}
