import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from '../services/user.service';
import { FindOneOptions, Repository } from 'typeorm';
import { User } from '../entities/users.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { faker } from '@faker-js/faker';
import { NotFoundException } from '@nestjs/common';
import { UserDto } from '../dtos/users.dto'
import {
  generateUserDto,
  generateMockUser,
  toUserEntity,
} from '../tests/fakers/user_faker';

describe('UserController', () => {
  let mockRepository: Repository<User>;
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    mockRepository = module.get<Repository<User>>(getRepositoryToken(User));
    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // it('findAll method returns users array.', async () => {
  //   const expected = generateMockUser(3);
  //   jest.spyOn(mockRepository, 'find').mockImplementation(async () => expected);

  //   const res = await controller.findAll();
  //   expect(res.length).toBe(3);
  //   expect(res).toEqual(expected);
  // });

  // it('findOne method throws not found error when specified user does not exists.', async () => {
  //   jest.spyOn(mockRepository, 'findOne').mockImplementation(async () => null);

  //   expect.assertions(1);
  //   await expect(
  //     async () => await controller.getUser(10),
  //   ).rejects.toThrow(NotFoundException); // https://jestjs.io/docs/asynchronous#resolves--rejects
  // });

  // it('getUser method returns a user.', async () => {
  //   const user = generateMockUser().pop();
  //   user.id = 10;

  //   jest.spyOn(mockRepository, 'getUser').mockImplementation(async () => user);

  //   expect(await controller.getUser(user.id)).toEqual(user);
  // });

  // it('create method returns user entity when user is successfully created.', async () => {
  //   jest
  //     .spyOn(mockRepository, 'save')
  //     .mockImplementation(async (dto) => toUserEntity(dto));

  //   const dto = generateUserDto();
  //   expect(await controller.postSignup(dto)).toEqual(expect.objectContaining(dto));
  // });

  // it('update method throws not found error when specified user does not exists.', async () => {
  //   jest
  //     .spyOn(mockRepository, 'update')
  //     .mockImplementation(async (id, dto) => ({
  //       raw: null,
  //       affected: 0,
  //       generatedMaps: [],
  //     }));

  //   const dto = generateUserDto();

  //   expect.assertions(1);
  //   await expect(
  //     async () => await controller.update(10, dto),
  //   ).rejects.toThrow(NotFoundException); // https://jestjs.io/docs/asynchronous#resolves--rejects
  // });

  // it('update method executed successfully.', async () => {
  //   jest
  //     .spyOn(mockRepository, 'update')
  //     .mockImplementation(async (id, dto) => ({
  //       raw: id,
  //       affected: 1,
  //       generatedMaps: [dto],
  //     }));

  //   jest
  //     .spyOn(mockRepository, 'getUser')
  //     //@ts-ignore
  //     .mockImplementation(async ({ where: { id } }: FindOneOptions<User>) => {
  //       const user = generateMockUser().pop();
  //       user.id = id;

  //       return user;
  //     });

  //   const user: User = generateMockUser().pop();
  //   const dto: UpdateUserDto = { firstName: faker.name.firstName() };
  //   const res = await controller.update(user.id, dto);
  //   expect(res.id).toEqual(user.id);
  // });

  // it('delete method throws not found error when specified user does not exists.', async () => {
  //   jest.spyOn(mockRepository, 'softDelete').mockImplementation(async (id) => ({
  //     raw: null,
  //     affected: 0,
  //     generatedMaps: [],
  //   }));

  //   expect.assertions(1);
  //   await expect(
  //     async () => await controller.delete(11),
  //   ).rejects.toThrow(NotFoundException);
  // });

  // it('delete method executed successfully.', async () => {
  //   jest.spyOn(mockRepository, 'softDelete').mockImplementation(async (id) => ({
  //     raw: id,
  //     affected: 1,
  //     generatedMaps: [],
  //   }));

  //   const res = await controller.delete(11);
  //   expect(res);

  //   expect(await controller.delete(11)).toBeUndefined();
  // });
});