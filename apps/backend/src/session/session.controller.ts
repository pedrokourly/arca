import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Query } from '@nestjs/common';
import { SessionService } from './session.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { TokenDto } from './dto/token.dto';
import { UUID } from 'node:crypto';

@Controller('session')
@UseGuards(JwtAuthGuard)
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post()
  create(@Body() createSessionDto: CreateSessionDto, @Req() req: any) {
    return this.sessionService.create(createSessionDto, req.user as TokenDto);
  }

  @Get()
  findAll(@Req() req: any) {
    return this.sessionService.findAll(req.user as TokenDto);
  }

  @Get(':id')
  findOne(@Param('id') id: UUID, @Req() req: any) {
    return this.sessionService.findOne(id, req.user as TokenDto);
  }

  @Patch(':id')
  update(@Param('id') id: UUID, @Req() req: any, @Body() updateSessionDto: UpdateSessionDto) {
    return this.sessionService.update(id, updateSessionDto, req.user as TokenDto);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: UUID, @Req() req: any, @Body() body: { id_Status: number } ) {
    return this.sessionService.updateStatus(id, body.id_Status, req.user as TokenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: UUID, @Req() req: any) {
    return this.sessionService.remove(id, req.user as TokenDto);
  }
}
