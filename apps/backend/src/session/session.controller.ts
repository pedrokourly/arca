import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Query,
  ParseUUIDPipe,
} from '@nestjs/common';
import { SessionService } from './session.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { TokenDto } from 'src/common/dto/token.dto';
import { UUID } from 'node:crypto';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RoleAccess } from 'src/common/enums/status.enum';

@Controller('session')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Roles(RoleAccess.ADMIN, RoleAccess.SECRETARIO)
  @Post()
  create(@Body() createSessionDto: CreateSessionDto, @Req() req: any) {
    return this.sessionService.create(createSessionDto, req.user as TokenDto);
  }

  @Get()
  findAll(@Req() req: any) {
    return this.sessionService.findAll(req.user as TokenDto);
  }

  @Roles(RoleAccess.ADMIN, RoleAccess.SECRETARIO)
  @Get('no-session')
  findAllWithNoSession() {
    return this.sessionService.findAllWithNoSession();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: UUID, @Req() req: any) {
    return this.sessionService.findOne(id, req.user as TokenDto);
  }

  @Roles(RoleAccess.ADMIN, RoleAccess.SECRETARIO)
  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: UUID, @Body() updateSessionDto: UpdateSessionDto) {
    return this.sessionService.update(id, updateSessionDto);
  }

  @Roles(RoleAccess.ADMIN, RoleAccess.SECRETARIO)
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.sessionService.remove(id);
  }
}
