import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ValidateProductCreationDataMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const bodyValues = Object.values(req.body);
    const findErrorInFields = bodyValues.some((i) => !i);
    const findNumberType = bodyValues.filter((i) => typeof i === 'number');
    const findStrigType = bodyValues.filter((i) => typeof i === 'string');

    if (findErrorInFields) {
      const message =
        'All fields are required, please enter valid values.The price of a product must be greater than zero.';

      return res.status(400).json({ message });
    }

    if (findNumberType.length !== 1 || findStrigType.length !== 3) {
      const message =
        'Only the name, image, and brand properties can be of type string, and only the price property can be of type number.';

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
