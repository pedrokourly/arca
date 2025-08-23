import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UUID } from 'node:crypto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { TokenDto } from './dto/token.dto';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto, @Req() req: any) {
    return this.usersService.create(createUserDto, req.user as TokenDto);
  }

  @Get()
  findAll(@Req() req: any) {
    return this.usersService.findAll(req.user as TokenDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: UUID, @Req() req: any) {
    return this.usersService.findOne(id, req.user as TokenDto);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: UUID, @Body() updateUserDto: UpdateUserDto, @Req() req: any) {
    return this.usersService.update(id, updateUserDto, req.user as TokenDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: UUID, @Req() req: any) {
    return this.usersService.remove(id, req.user as TokenDto);
  }
}
