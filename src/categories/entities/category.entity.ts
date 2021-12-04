import { Task } from 'src/tasks/entities/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @Column()
  color: string;

  // @Column()
  // listId: number;

  @OneToMany(() => Task, (task) => task.category)
  tasks: Task[];
}
