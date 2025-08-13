import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV
        ? `.env.${process.env.NODE_ENV}`
        : '.env',
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
