import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { UserModule } from './modules/user/user.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      logging: true,
      synchronize: true,
      database: 'data/dev-db.sqlite',
      entities: ['dist/**/*.model{.ts,.js}']
    }),
    UserModule
  ],
  controllers: [AppController]
})
export class AppModule {}