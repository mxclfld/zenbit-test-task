import { IsEmail, MinLength } from 'class-validator';

export class CreateFeedbackDto {
  @MinLength(3)
  name: string;

  @IsEmail()
  email: string;

  @MinLength(30)
  message: string;
}
