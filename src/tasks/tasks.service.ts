import { CreateTaskDto } from './dtos/create-task.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private tasksRepository: Repository<Task>,
  ) {}

  getTasks() {
    return this.tasksRepository.find();
  }

  createTask(createTaskDto: CreateTaskDto) {
    return this.tasksRepository.save(
      this.tasksRepository.create(createTaskDto),
    );
  }

  deleteTask(taskId: number) {
    return this.tasksRepository.delete({ id: taskId });
  }
}
