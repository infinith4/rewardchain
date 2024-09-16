import { User } from '../../entities/users.entity';
import { Profile } from '../../entities/profiles.entity';
import { faker } from '@faker-js/faker';
import { UserDto } from '../../dtos/users.dto';

const user_id = faker.number.int();
export const generateMockUser = (count = 1) => {
  const users: User[] = [];
  for (let i = 0; i < count; i++) {
    let user = new User();
    user.id = user_id,
    user.first_name = faker.name.firstName(),
    user.last_name = faker.name.lastName(),
    user.avatar_url = "",
    user.user_type = "client",
    user.username = faker.person.fullName(),
    user.email = faker.internet.email(),
    user.hashed_password = faker.string.alphanumeric({length: 7, casing: 'mixed'}),
    user.last_login_at = new Date(),
    user.created_at = new Date(),
    user.updated_at = new Date(),
    users.push(user);
  }

  return users;
};

export const generateUserDto: () => UserDto = () => ({
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  avatar_url: "",
  user_type: "client", 
  username: faker.person.fullName(),
  email: faker.internet.email(), 
  hashed_password : faker.string.alphanumeric({length: 7, casing: 'mixed'}),
  last_login_at: new Date(),
  created_at: new Date(),
  updated_at: new Date(),
});

const test_profile = new Profile();
test_profile.id = faker.number.int();
test_profile.user_id = user_id;
test_profile.specification = "specification01",
test_profile.bio = "bio01";
test_profile.website = "website01";
test_profile.email = faker.internet.email();

export const toUserEntity: (UserDto) => User = (dto) => ({
    id: user_id,
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    avatar_url: "",
    user_type: "client", 
    username: faker.person.fullName(),
    email: faker.internet.email(), 
    hashed_password : faker.string.alphanumeric({length: 7, casing: 'mixed'}),
    last_login_at: new Date(),
    created_at: new Date(),
    updated_at: new Date(),
    profile: new Profile()
  });