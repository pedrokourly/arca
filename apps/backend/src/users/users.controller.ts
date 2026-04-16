import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseGuards,
  Put,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UUID } from 'node:crypto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { TokenDto } from 'src/common/dto/token.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RoleAccess } from 'src/common/enums/status.enum';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto, @CurrentUser() user: TokenDto) {
    return this.usersService.create(createUserDto, user);
  }

  @Get()
  findAll(@CurrentUser() user: TokenDto, @Query() pagination: PaginationDto) {
    return this.usersService.findAll(user, pagination);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: UUID, @CurrentUser() user: TokenDto) {
    return this.usersService.findOne(id, user);
  }

  @Put(':id')
  update(@Param('id', ParseUUIDPipe) id: UUID, @Body() updateUserDto: UpdateUserDto, @CurrentUser() user: TokenDto) {
    return this.usersService.update(id, updateUserDto, user);
  }

  @Roles(RoleAccess.ADMIN, RoleAccess.SECRETARIO)
  @Patch(':id/reactivate')
  @HttpCode(HttpStatus.NO_CONTENT)
  reactivate(@Param('id', ParseUUIDPipe) id: UUID, @CurrentUser() user: TokenDto) {
    return this.usersService.reactivate(id, user);
  }

  @Roles(RoleAccess.ADMIN, RoleAccess.SECRETARIO)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: UUID, @CurrentUser() user: TokenDto) {
    return this.usersService.remove(id, user);
  }
}
