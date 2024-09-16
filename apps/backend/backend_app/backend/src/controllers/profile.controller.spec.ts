import { Test, TestingModule } from '@nestjs/testing';
import { ProfileController } from './profile.controller';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../entities/profiles.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { generateMockProfile } from '../tests/fakers/profile_faker';
import { NotFoundException } from '@nestjs/common';

describe('ProfileController', () => {
  let profileController: ProfileController;
  let profileService: ProfileService;
  let mockRepository: Repository<Profile>;
  let controller: ProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfileController],
      providers: [
        ProfileService,
        {
          provide: getRepositoryToken(Profile),
          useClass: Repository,
        },
      ],
    }).compile();

    profileService = module.get<ProfileService>(ProfileService);
    profileController = module.get<ProfileController>(ProfileController);
    mockRepository = module.get<Repository<Profile>>(getRepositoryToken(Profile));
    controller = module.get<ProfileController>(ProfileController);
  });

  //https://developer.dip-net.co.jp/entry/2022/07/11/NestJS_x_Jest_x_TypeORM%E3%81%A7Unit~E2E%E3%83%86%E3%82%B9%E3%83%88%E3%82%92%E8%A1%8C%E3%81%86
  describe('getProfile', () => {
    it('should return a profile', async () => {
      const profile: Profile = new Profile(); // 期待されるプロファイル
      profile.id = 1;
      profile.specification = "specification01";
      profile.bio = "bio01";
      profile.website = "website01";
      profile.email = "email01";
      
      jest.spyOn(profileService, 'findOne').mockResolvedValue(profile); // モックの設定

      console.dir(await profileController.getProfile(1));

      expect(await profileController.getProfile(1)).toBe(profile); // テスト
    });
  });

  it('findOne method throws not found error when specified user does not exists.', async () => {
    jest.spyOn(mockRepository, 'findOne').mockImplementation(async () => null);

    expect.assertions(1);
    await expect(
      async () => await controller.getProfile(1),
    ).rejects.toThrow(NotFoundException); // https://jestjs.io/docs/asynchronous#resolves--rejects
  });

  it('findOne method returns a profile.', async () => {
    const profile = generateMockProfile().pop();
    profile.id = 123;

    jest.spyOn(mockRepository, 'findOne').mockImplementation(async () => profile);

    expect(await controller.getProfile(profile.id)).toEqual(profile);
  });
});
