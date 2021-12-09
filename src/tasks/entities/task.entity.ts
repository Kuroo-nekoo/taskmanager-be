import { Category } from 'src/categories/entities/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  value: string;

  @Column()
  categoryId: number;

  @ManyToOne(() => Category, (category) => category.tasks, {
    onDelete: 'CASCADE',
  })
  category: Category;
}
