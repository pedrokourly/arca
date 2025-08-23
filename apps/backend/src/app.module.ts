import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { WaitlistModule } from './waitlist/waitlist.module';


@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal: true,
    }),
    UsersModule,
    AuthModule,
      envFilePath: process.env.NODE_ENV
        ? `.env.${process.env.NODE_ENV}`
        : '.env',
    }),
    WaitlistModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
