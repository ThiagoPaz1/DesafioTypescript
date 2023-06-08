import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './types';

@Injectable()
export class ProductRepository extends PrismaClient {
  private readonly productModel = this.product;

  async create(createProductDto: CreateProductDto): Promise<void> {
    await this.productModel.create({
      data: createProductDto,
    });
  }

  async getAll(): Promise<Product[]> {
    return await this.productModel.findMany();
  }

  async getById(id: number): Promise<Product> {
    return await this.productModel.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return await this.productModel.update({
      where: {
        id: id,
      },
      data: updateProductDto,
    });
  }
}
