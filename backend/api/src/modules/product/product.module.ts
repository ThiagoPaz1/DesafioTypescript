import {
  Module,
  NestModule,
  RequestMethod,
  MiddlewareConsumer,
} from '@nestjs/common';

import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
import { ValidateProductCreationDataMiddleware } from './middlewares/validateProductCreationData.middlewares';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
})
export class ProductModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateProductCreationDataMiddleware)
      .forRoutes({ path: '/api/v1/products', method: RequestMethod.POST });
  }
}
