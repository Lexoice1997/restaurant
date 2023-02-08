import { CategoriesEntity } from 'src/categories/entities/categories.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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
  category: CategoriesEntity;
}
