import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from '../services/user.service';
import { Repository } from 'typeorm';
import { User } from '../entities/users.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { generateMockUser } from '../../test/faker/users-faker';

describe('UsersController', () => {
  let mockRepository: Repository<User>;
  let controller: UserController;

  // 各テストケース実行前に必要なインスタンスを生成
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
    controller = module.get<UsersController>(UsersController);
  });

  it('findOne method returns a user.', async () => {
    // 独自実装したメソッドでtestデータの生成
    const user = generateMockUser().pop();
    user.id = 123;

    // モックしたい関数のモック実装を渡す
    jest.spyOn(mockRepository, 'findOne').mockImplementation(async () => user);

    // 期待される結果であるか検証する
    expect(await controller.findOne(user.id.toString())).toEqual(user);
  });
});

// import { Test, TestingModule } from '@nestjs/testing';
// import { UserController } from './user.controller';
// import { UserService } from '../services/user.service';
// import { UserModule } from '../modules/user.module'; // 追加
// import { UserDto } from '../dtos/users.dto';
// import { User } from '../entities/users.entity';
// import { Profile } from '../entities/profiles.entity';

// describe('UserController', () => {
//   let userController: UserController;

//   beforeEach(async () => {
//     const app: TestingModule = await Test.createTestingModule({
//       imports: [UserModule], // 追加
//     }).compile();

//     userController = app.get<UserController>(UserController);
//   });

//   describe('root', () => {
//     it('should return postuser', () => {
//       let userDto = new UserDto();
//       userDto.user_type = "client";
//       userDto.first_name = "dave1";
//       userDto.last_name = "January1";
//       userDto.username = "dave1";
//       userDto.email = "infinith4+dave@gmail.com";
//       userDto.hashed_password = "hashed_password";
//       userDto.avatar_url = "";
//       userDto.last_login_at = new Date("2024-09-10T00:44:37.000Z"),
//       userDto.created_at =  new Date("2024-09-10T00:44:37.000Z"),
//       userDto.updated_at = new Date("2024-09-10T00:44:37.000Z");
      
//       let expectuser = new User();
//       expectuser.user_type = userDto.user_type;
//       expectuser.first_name = userDto.first_name;
//       expectuser.last_name = userDto.last_name;
//       expectuser.username = userDto.username;
//       expectuser.email = userDto.email;
//       expectuser.hashed_password = userDto.hashed_password;
//       expectuser.avatar_url = userDto.avatar_url;
//       expectuser.last_login_at = userDto.last_login_at;
//       expectuser.created_at = userDto.created_at;
//       expectuser.updated_at = userDto.updated_at;
      
//       const profile = new Profile();
//       profile.specification = "specification01";
//       profile.bio = "bio01";
//       profile.website = "website01";
//       profile.email = "email01";
//       expectuser.profile = profile; // 変更
//       console.log(userController.postSignup(userDto));
//       expect(userController.postSignup(userDto)).toStrictEqual('Hello World!');

//     });
//   });
// });
