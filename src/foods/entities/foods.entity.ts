import { CategoriesEntity } from 'src/categories/entities/categories.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('foods')
export class FoodsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  image: string;

  @Column()
  fileId: string;

  @ManyToOne(() => CategoriesEntity, (category) => category.foods)
  @JoinTable({ name: 'categoryId' })
  category: CategoriesEntity;
}
