import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [ConfigModule.forRoot(), ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
