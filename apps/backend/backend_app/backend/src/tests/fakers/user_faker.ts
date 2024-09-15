import { User } from '../../entities/users.entity';
import { faker } from '@faker-js/faker';
import { UserDto } from '../../dtos/users.dto';

export const generateMockUser = (count = 1) => {
  const users: User[] = [];
  for (let i = 0; i < count; i++) {
    let user = new User();
    user.id = faker.datatype.number(),
    user.first_name = faker.name.firstName(),
    user.last_name = faker.name.lastName(),
    user.avatar_url  = "",
    user.user_type = "client", 
    user.username = faker.person.fullName(),
    user.email = faker.internet.email(), 
    user.hashed_password  = faker.string.alphanumeric({length: 7, casing: 'mixed'}),
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

export const toUserEntity: (UserDto) => User = (dto) => ({
  id: faker.datatype.number(),
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