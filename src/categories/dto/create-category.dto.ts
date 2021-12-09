import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsOptional()
  @IsNumber()
  id: string;

  @IsString()
  color: string;
}
