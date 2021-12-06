import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsString()
  color: string;
}
