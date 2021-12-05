import { Category } from 'src/categories/entities/category.entity';
import { Space } from 'src/spaces/entities/space.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class List {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @OneToMany(() => Category, (category) => category.list)
  categories: Category[];

  @ManyToOne(() => Space, (space) => space.lists)
  space: Space;
}
