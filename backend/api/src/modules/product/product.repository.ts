import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductRepository extends PrismaClient {
  private readonly productModel = this.product;

  async create(createProductDto: CreateProductDto): Promise<void> {
    await this.productModel.create({
      data: createProductDto,
    });
  }
}
