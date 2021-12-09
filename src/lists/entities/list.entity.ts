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
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  value: string;

  @Column()
  spaceId: number;

  @OneToMany(() => Category, (category) => category.list, {
    onDelete: 'CASCADE',
  })
  categories: Category[];

  @ManyToOne(() => Space, (space) => space.lists)
  space: Space;
}
