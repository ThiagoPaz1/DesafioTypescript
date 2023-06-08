import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'name property cannot be empty.' })
  @IsString({ message: 'name property has to be of type string.' })
  name: string;

  @IsNotEmpty({ message: 'brand property cannot be empty.' })
  @IsString({ message: 'brand property has to be of type string.' })
  brand: string;

  @IsNotEmpty({ message: 'image property cannot be empty.' })
  @IsString({ message: 'image property has to be of type string.' })
  image: string;

  @IsNotEmpty({ message: 'price property cannot be empty.' })
  @IsNumber()
  price: number;
}
