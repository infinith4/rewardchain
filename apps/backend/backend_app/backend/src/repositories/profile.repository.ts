import { Repository } from 'typeorm';
import { Profile } from '../entities/profiles.entity';

export class ProfileRepository extends Repository<Profile> {}