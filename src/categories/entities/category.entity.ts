import { Task } from 'src/tasks/entities/task.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { List } from 'src/lists/entities/list.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  value: string;

  @Column()
  color: string;

  @Column()
  listId: number;

  @OneToMany(() => Task, (task) => task.category)
  tasks: Task[];

  @ManyToOne(() => List, (list) => list.categories, { onDelete: 'CASCADE' })
  list: List;
}
