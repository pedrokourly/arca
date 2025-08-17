import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WaitlistService } from './waitlist.service';
import { CreateWaitlistDto } from './dto/create-waitlist.dto';
import { UpdateWaitlistDto } from './dto/update-waitlist.dto';
import { UUID } from 'node:crypto';

@Controller('waitlist')
export class WaitlistController {
  constructor(private readonly waitlistService: WaitlistService) {}

  @Post()
  create(@Body() body: CreateWaitlistDto) {
    return this.waitlistService.create(body);
  }

  @Get()
  findAll() {
    return this.waitlistService.findAll();
  }

  @Get('stats')
  findPositions() {
    return this.waitlistService.findPositions();
  }

  @Get(':id')
  findOne(@Param('id') id: UUID) {
    return this.waitlistService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: UUID, @Body() body: UpdateWaitlistDto) {
    return this.waitlistService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: UUID) {
    return this.waitlistService.remove(id);
  }
}
