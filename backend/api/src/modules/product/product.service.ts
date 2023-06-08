import { Injectable } from '@nestjs/common';

import { ProductRepository } from './product.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './types';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async create(createProductDto: CreateProductDto): Promise<void> {
    await this.productRepository.create(createProductDto);
  }

  async findAll(): Promise<{ totalProducts: number; data: Product[] }> {
    const data = await this.productRepository.getAll();
    return {
      totalProducts: data.length,
      data,
    };
  }

  async findOne(id: number): Promise<Product> {
    return await this.productRepository.getById(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
