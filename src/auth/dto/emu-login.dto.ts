import { IsNotEmpty } from 'class-validator';

export class EMULoginDto {
  @IsNotEmpty({ message: 'Username is required' })
  readonly username: string;

  @IsNotEmpty({ message: 'Password is required' })
  readonly password: string;
}
