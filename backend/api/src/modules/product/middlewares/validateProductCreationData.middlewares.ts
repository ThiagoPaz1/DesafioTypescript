import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ValidateProductCreationDataMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const bodyValue = Object.values(req.body);
    const findErrorInFields = bodyValue.some((i) => !i);

    if (findErrorInFields) {
      const message =
        'All fields are required, please enter valid values.The price of a product must be greater than zero.';

      return res.status(400).json({ message });
    }

    try {
      new URL(req.body?.image);
    } catch (err) {
      return res.status(400).json({ message: 'Enter a valid image URL' });
    }

    next();
  }
}
