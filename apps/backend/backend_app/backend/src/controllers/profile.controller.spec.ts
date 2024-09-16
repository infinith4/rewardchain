import { Test, TestingModule } from '@nestjs/testing';
import { ProfileController } from './profile.controller';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../entities/profiles.entity';

describe('ProfileController', () => {
  let profileController: ProfileController;
  let profileService: ProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfileController],
      providers: [
        {
          provide: ProfileService,
          useValue: {
            findOne: jest.fn(), // モックメソッド
          },
        },
      ],
    }).compile();

    profileService = module.get<ProfileService>(ProfileService);
    profileController = module.get<ProfileController>(ProfileController);
  });

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
});
