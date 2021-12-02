import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dtos/create-task.dto';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks() {
    return this.tasksService.getTasks();
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    this.tasksService.createTask(createTaskDto);
  }

  @Delete(':id')
  deleteTask(@Param('id') taskId: number) {
    return this.tasksService.deleteTask(taskId);
  }
}
