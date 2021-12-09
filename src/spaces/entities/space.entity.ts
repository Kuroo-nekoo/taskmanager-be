import { List } from 'src/lists/entities/list.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Space {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  value: string;

  @OneToMany(() => List, (list) => list.space)
  lists: List[];
}
