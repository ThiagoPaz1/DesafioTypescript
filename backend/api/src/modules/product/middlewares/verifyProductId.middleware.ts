import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

import { ProductService } from '../product.service';

@Injectable()
export class VerifyProductIdMiddleware implements NestMiddleware {
  constructor(private readonly productService: ProductService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const findProduct = await this.productService.findOne(
      Number(req.params?.id),
    );

    if (!findProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    next();
  }
}
