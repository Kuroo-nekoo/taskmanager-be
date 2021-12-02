import { IsAlphanumeric, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsAlphanumeric()
  @Length(4, 20)
  @IsNotEmpty()
  username: string;

  @IsAlphanumeric()
  @Length(4, 20)
  @IsNotEmpty()
  password: string;
}
