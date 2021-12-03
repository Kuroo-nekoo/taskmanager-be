import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  value: string;
}