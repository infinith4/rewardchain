import { faker } from '@faker-js/faker';
import { Profile } from '../../entities/profiles.entity';
import { ProfileDto } from '../../dtos/profiles.dto';
import { User } from '../../entities/users.entity';

const profile_id = faker.number.int();
export const generateMockProfile = (count = 1) => {
  const profiles: Profile[] = [];
  for (let i = 0; i < count; i++) {
    let profile = new Profile();
    profile.id = profile_id,
    profile.specification = faker.string.alphanumeric({length: 7, casing: 'mixed'}),
    profile.bio = faker.string.alphanumeric({length: 7, casing: 'mixed'}),
    profile.website = faker.string.alphanumeric({length: 7, casing: 'mixed'}),
    profile.email = faker.internet.email(),
    profile.created_at = new Date(),
    profile.updated_at = new Date(),
    profiles.push(profile);
  }

  return profiles;
};

export const generateProfileDto: () => ProfileDto = () => ({
  id: profile_id,
  user_id: 1,
  specification: faker.string.alphanumeric({length: 7, casing: 'mixed'}),
  bio: faker.string.alphanumeric({length: 7, casing: 'mixed'}),
  website: faker.string.alphanumeric({length: 7, casing: 'mixed'}),
  email: faker.string.alphanumeric({length: 7, casing: 'mixed'}),
  created_at: new Date(),
  updated_at: new Date()
});


export const toProfileEntity: (dto: ProfileDto) => Profile = (dto) => ({
    id: profile_id,
    user_id: dto.user_id,
    // {{ edit_1 }}: 'user' プロパティを追加
    user: new User(), // ここで 'user' プロパティを追加
    specification: faker.string.alphanumeric({length: 7, casing: 'mixed'}),
    bio: faker.string.alphanumeric({length: 7, casing: 'mixed'}),
    website: faker.string.alphanumeric({length: 7, casing: 'mixed'}),
    email: faker.string.alphanumeric({length: 7, casing: 'mixed'}),
    created_at: new Date(),
    updated_at: new Date()
  });