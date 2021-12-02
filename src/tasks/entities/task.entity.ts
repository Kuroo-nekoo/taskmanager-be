import { Category } from 'src/categories/entities/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @Column()
  categoryId: number;

  @ManyToOne(() => Category, (category) => category.tasks)
  category: Category;
}
