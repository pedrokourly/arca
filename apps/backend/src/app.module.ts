import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { WaitlistModule } from './waitlist/waitlist.module';


@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: process.env.NODE_ENV
          ? `.env.${process.env.NODE_ENV}`
          : '.env',
    }),
    UsersModule,
    AuthModule,
    WaitlistModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
