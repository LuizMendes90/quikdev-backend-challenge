import { getRepository, Repository } from 'typeorm';
import User from '../../entity/User';
import UserSchema from '../../schemas/User';

class UserRepository {
  private repository: Repository<UserSchema>;

  constructor() {
    this.repository = getRepository(UserSchema);
  }

  async createUser(user: User): Promise<boolean> {
    const userSchema = new UserSchema();

    userSchema.id = user.id;
    userSchema.name = user.name;
    userSchema.username = user.username;
    userSchema.birthdate = user.birthdate;
    userSchema.address = user.address;
    userSchema.addressNumber = user.addressNumber;
    userSchema.primaryPhone = user.primaryPhone;
    userSchema.description = user.description;
    userSchema.createdAt = user.createdAt;

    let response;

    try {
      response = await this.repository.save(userSchema);
    } catch (error) {
      console.log(error);
    }

    return !!response;
  }
}

export default UserRepository;
