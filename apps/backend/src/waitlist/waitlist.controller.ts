import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseUUIDPipe } from '@nestjs/common';
import { WaitlistService } from './waitlist.service';
import { CreateWaitlistDto } from './dto/create-waitlist.dto';
import { UpdateWaitlistDto } from './dto/update-waitlist.dto';
import { UUID } from 'node:crypto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Throttle } from '@nestjs/throttler';

@Controller('waitlist')
export class WaitlistController {
  constructor(private readonly waitlistService: WaitlistService) {}

  @Throttle({ default: { ttl: 60_000, limit: 5 } })
  @Post()
  create(@Body() body: CreateWaitlistDto) {
    return this.waitlistService.create(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.waitlistService.findAll();
  }

  @Get('stats')
  findPositions() {
    return this.waitlistService.findPositions();
  }

  @Get(':id/position')
  findPublicPosition(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.waitlistService.findPublicPosition(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.waitlistService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: UUID, @Body() body: UpdateWaitlistDto) {
    return this.waitlistService.update(id, body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.waitlistService.remove(id);
  }
}
