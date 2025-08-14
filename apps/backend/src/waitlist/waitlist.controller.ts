import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WaitlistService } from './waitlist.service';
import { CreateWaitlistDto } from './dto/create-waitlist.dto';
import { UpdateWaitlistDto } from './dto/update-waitlist.dto';

@Controller('waitlist')
export class WaitlistController {
  constructor(private readonly waitlistService: WaitlistService) {}

  @Post()
  create(@Body() createWaitlistDto: CreateWaitlistDto) {
    return this.waitlistService.create(createWaitlistDto);
  }

  @Get()
  findAll() {
    return this.waitlistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.waitlistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWaitlistDto: UpdateWaitlistDto) {
    return this.waitlistService.update(+id, updateWaitlistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.waitlistService.remove(+id);
  }
}
