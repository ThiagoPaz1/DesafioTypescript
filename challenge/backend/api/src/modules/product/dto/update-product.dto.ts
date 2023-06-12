import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiPropertyOptional()
  name?: string;

  @ApiPropertyOptional()
  brand?: string;

  @ApiPropertyOptional()
  image?: string;

  @ApiPropertyOptional()
  price?: number;
}
