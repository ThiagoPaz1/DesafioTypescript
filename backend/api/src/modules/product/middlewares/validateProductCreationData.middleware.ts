import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ValidateProductCreationDataMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.body?.price <= 0) {
      return res
        .status(400)
        .json({ message: 'Product price must be greater than zero.' });
    }

    try {
      new URL(req.body?.image);
    } catch (err) {
      return res.status(400).json({ message: 'Enter a valid image URL.' });
    }

    next();
  }
}
