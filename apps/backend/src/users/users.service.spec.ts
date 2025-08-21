import { Test, TestingModule } from '@nestjs/testing';
import { 
  BadRequestException, 
  ForbiddenException, 
  NotFoundException,
  BadGatewayException 
} from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';
import { HashingServiceProtocol } from '../auth/hash/hashing.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { TokenDto } from './dto/token.dto';
import { UUID } from 'node:crypto';

describe('UsersService', () => {
  let service: UsersService;
  let prismaService: any;
  let hashingService: jest.Mocked<HashingServiceProtocol>;

  const mockUuid: UUID = '550e8400-e29b-41d4-a716-446655440000' as UUID;
  const mockCreatorUuid: UUID = '550e8400-e29b-41d4-a716-446655440001' as UUID;

  const mockTokenDto: TokenDto = {
    sub: mockCreatorUuid,
    email: 'admin@test.com',
    access: 1, // Admin
    iat: 1234567890,
    exp: 1234567890,
    aud: 'test',
    iss: 'test',
  };

  const mockCreateUserDto: CreateUserDto = {
    nome: 'Test User',
    email: 'test@test.com',
    senha: 'password123',
    roleId: 2,
  };

  const mockUser = {
    id_User: mockUuid,
    nome: 'Test User',
    email: 'test@test.com',
    senhaHash: 'hashedPassword',
    roleId: 2,
  };

  beforeEach(async () => {
    const mockPrismaService = {
      usuario: {
        create: jest.fn(),
        findMany: jest.fn(),
        findFirst: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
    };

    const mockHashingServiceProtocol = {
      hash: jest.fn(),
      compare: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
        {
          provide: HashingServiceProtocol,
          useValue: mockHashingServiceProtocol,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    prismaService = module.get(PrismaService) as any;
    hashingService = module.get(HashingServiceProtocol) as jest.Mocked<HashingServiceProtocol>;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a user successfully', async () => {
      const expectedResult = {
        id_User: mockUuid,
        nome: 'Test User',
        email: 'test@test.com',
        roleId: 2,
      };

      prismaService.usuario.findUnique.mockResolvedValue(null);
      hashingService.hash.mockResolvedValue('hashedPassword');
      prismaService.usuario.create.mockResolvedValue(expectedResult as any);

      const result = await service.create(mockCreateUserDto, mockTokenDto);

      expect(prismaService.usuario.findUnique).toHaveBeenCalledWith({
        where: { email: mockCreateUserDto.email },
      });
      expect(hashingService.hash).toHaveBeenCalledWith(mockCreateUserDto.senha);
      expect(prismaService.usuario.create).toHaveBeenCalledWith({
        data: {
          nome: mockCreateUserDto.nome,
          email: mockCreateUserDto.email,
          senhaHash: 'hashedPassword',
          roleId: mockCreateUserDto.roleId,
        },
        select: {
          id_User: true,
          nome: true,
          email: true,
          senhaHash: false,
          roleId: true,
        },
      });
      expect(result).toEqual(expectedResult);
    });

    it('should throw BadRequestException if email already exists', async () => {
      prismaService.usuario.findUnique.mockResolvedValue(mockUser as any);

      await expect(service.create(mockCreateUserDto, mockTokenDto))
        .rejects
        .toThrow(BadRequestException);
    });

    it('should throw ForbiddenException if creator tries to create user with equal or higher access', async () => {
      const creatorWithLowerAccess: TokenDto = {
        ...mockTokenDto,
        access: 2, // Manager
      };

      const createUserWithHigherAccess: CreateUserDto = {
        ...mockCreateUserDto,
        roleId: 1, // Admin
      };

      await expect(service.create(createUserWithHigherAccess, creatorWithLowerAccess))
        .rejects
        .toThrow(ForbiddenException);
    });

    it('should allow admin to create another admin', async () => {
      const adminCreateUserDto: CreateUserDto = {
        ...mockCreateUserDto,
        roleId: 1, // Admin
      };

      const expectedResult = {
        id_User: mockUuid,
        nome: 'Test User',
        email: 'test@test.com',
        roleId: 1,
      };

      prismaService.usuario.findUnique.mockResolvedValue(null);
      hashingService.hash.mockResolvedValue('hashedPassword');
      prismaService.usuario.create.mockResolvedValue(expectedResult as any);

      const result = await service.create(adminCreateUserDto, mockTokenDto);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('findAll', () => {
    it('should return all users with appropriate access level', async () => {
      const users = [
        { id_User: mockUuid, nome: 'User 1', email: 'user1@test.com', roleId: 2 },
        { id_User: mockCreatorUuid, nome: 'User 2', email: 'user2@test.com', roleId: 3 },
      ];

      prismaService.usuario.findMany.mockResolvedValue(users as any);

      const result = await service.findAll(mockTokenDto);

      expect(prismaService.usuario.findMany).toHaveBeenCalledWith({
        where: {
          roleId: {
            gte: mockTokenDto.access,
          },
        },
        select: {
          id_User: true,
          nome: true,
          email: true,
          senhaHash: false,
          roleId: true,
        },
      });
      expect(result).toEqual(users);
    });

    it('should throw NotFoundException if no users found', async () => {
      prismaService.usuario.findMany.mockResolvedValue([]);

      await expect(service.findAll(mockTokenDto))
        .rejects
        .toThrow(NotFoundException);
    });

    it('should throw BadGatewayException if users is null', async () => {
      prismaService.usuario.findMany.mockResolvedValue(null);

      await expect(service.findAll(mockTokenDto))
        .rejects
        .toThrow(BadGatewayException);
    });
  });

  describe('findOne', () => {
    it('should return user by id with appropriate access level', async () => {
      const userResult = {
        id_User: mockUuid,
        nome: 'Test User',
        email: 'test@test.com',
        roleId: 2,
      };

      prismaService.usuario.findFirst.mockResolvedValue(userResult as any);

      const result = await service.findOne(mockUuid, mockTokenDto);

      expect(prismaService.usuario.findFirst).toHaveBeenCalledWith({
        where: {
          id_User: mockUuid,
          roleId: {
            gte: mockTokenDto.access,
          },
        },
        select: {
          id_User: true,
          nome: true,
          email: true,
          senhaHash: false,
          roleId: true,
        },
      });
      expect(result).toEqual(userResult);
    });

    it('should throw NotFoundException if user not found or access denied', async () => {
      prismaService.usuario.findFirst.mockResolvedValue(null);

      await expect(service.findOne(mockUuid, mockTokenDto))
        .rejects
        .toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    const mockUpdateUserDto: UpdateUserDto = {
      nome: 'Updated User',
      email: 'updated@test.com',
    };

    it('should update user successfully', async () => {
      const updatedUser = {
        id_User: mockUuid,
        nome: 'Updated User',
        email: 'updated@test.com',
        roleId: 2,
      };

      prismaService.usuario.findFirst
        .mockResolvedValueOnce(mockUser as any) // First call for user lookup
        .mockResolvedValueOnce(null); // Second call for email uniqueness check
      
      prismaService.usuario.update.mockResolvedValue(updatedUser as any);

      const result = await service.update(mockUuid, mockUpdateUserDto, mockTokenDto);

      expect(prismaService.usuario.update).toHaveBeenCalledWith({
        where: { id_User: mockUuid },
        data: mockUpdateUserDto,
        select: {
          id_User: true,
          nome: true,
          email: true,
          roleId: true,
        },
      });
      expect(result).toEqual(updatedUser);
    });

    it('should throw NotFoundException if user not found', async () => {
      prismaService.usuario.findFirst.mockResolvedValue(null);

      await expect(service.update(mockUuid, mockUpdateUserDto, mockTokenDto))
        .rejects
        .toThrow(NotFoundException);
    });

    it('should throw ForbiddenException if trying to edit user with equal or higher access', async () => {
      const userWithHigherAccess = {
        ...mockUser,
        roleId: 1, // Admin
      };

      const creatorWithLowerAccess: TokenDto = {
        ...mockTokenDto,
        access: 2, // Manager
      };

      prismaService.usuario.findFirst.mockResolvedValue(userWithHigherAccess as any);

      await expect(service.update(mockUuid, mockUpdateUserDto, creatorWithLowerAccess))
        .rejects
        .toThrow(ForbiddenException);
    });

    it('should throw BadRequestException if email already exists for another user', async () => {
      const existingUserWithEmail = {
        id_User: 'different-uuid',
        email: 'updated@test.com',
      };

      prismaService.usuario.findFirst
        .mockResolvedValueOnce(mockUser as any) // First call for user lookup
        .mockResolvedValueOnce(existingUserWithEmail as any); // Second call for email check

      await expect(service.update(mockUuid, mockUpdateUserDto, mockTokenDto))
        .rejects
        .toThrow(BadRequestException);
    });

    it('should hash password when updating password', async () => {
      const updateWithPassword: UpdateUserDto = {
        ...mockUpdateUserDto,
        senha: 'newPassword123',
      };

      prismaService.usuario.findFirst
        .mockResolvedValueOnce(mockUser as any)
        .mockResolvedValueOnce(null);
      
      hashingService.hash.mockResolvedValue('newHashedPassword');
      prismaService.usuario.update.mockResolvedValue(mockUser as any);

      await service.update(mockUuid, updateWithPassword, mockTokenDto);

      expect(hashingService.hash).toHaveBeenCalledWith('newPassword123');
    });
  });

  describe('remove', () => {
    it('should remove user successfully', async () => {
      const expectedResult = { message: `Usuário com ID ${mockUuid} removido com sucesso.` };

      prismaService.usuario.findUnique.mockResolvedValue(mockUser as any);
      prismaService.usuario.delete.mockResolvedValue(mockUser as any);

      const result = await service.remove(mockUuid, mockTokenDto);

      expect(prismaService.usuario.delete).toHaveBeenCalledWith({
        where: { id_User: mockUuid },
      });
      expect(result).toEqual(expectedResult);
    });

    it('should throw NotFoundException if user not found', async () => {
      prismaService.usuario.findUnique.mockResolvedValue(null);

      await expect(service.remove(mockUuid, mockTokenDto))
        .rejects
        .toThrow(NotFoundException);
    });

    it('should throw ForbiddenException if trying to delete own account', async () => {
      const userToDelete = {
        ...mockUser,
        id_User: mockCreatorUuid, // Same as creator
      };

      prismaService.usuario.findUnique.mockResolvedValue(userToDelete as any);

      await expect(service.remove(mockCreatorUuid, mockTokenDto))
        .rejects
        .toThrow(ForbiddenException);
    });

    it('should throw ForbiddenException if trying to delete user with equal or higher access', async () => {
      const userWithHigherAccess = {
        ...mockUser,
        roleId: 1, // Admin level
      };

      const creatorWithLowerAccess: TokenDto = {
        ...mockTokenDto,
        access: 2, // Manager level
      };

      prismaService.usuario.findUnique.mockResolvedValue(userWithHigherAccess as any);

      await expect(service.remove(mockUuid, creatorWithLowerAccess))
        .rejects
        .toThrow(ForbiddenException);
    });

    it('should allow admin to delete another admin', async () => {
      const adminUser = {
        ...mockUser,
        roleId: 1, // Admin
      };

      const expectedResult = { message: `Usuário com ID ${mockUuid} removido com sucesso.` };

      prismaService.usuario.findUnique.mockResolvedValue(adminUser as any);
      prismaService.usuario.delete.mockResolvedValue(adminUser as any);

      const result = await service.remove(mockUuid, mockTokenDto);

      expect(result).toEqual(expectedResult);
    });
  });
});
