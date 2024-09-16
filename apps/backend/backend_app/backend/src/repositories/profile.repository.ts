import { Profile } from '../entities/profiles.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Profile)
export class ProfileRepository extends Repository<Profile> {}
