import { getRepository, Repository } from 'typeorm';
import User from '../../entity/User';
import UserSchema from '../../schemas/User';
import IUserRepository from './IUserRepository';

class UserRepository implements IUserRepository {
  private repository: Repository<UserSchema>;

  constructor() {
    this.repository = getRepository(UserSchema);
  }

  async createUser(user: User): Promise<boolean> {
    const userSchema = new UserSchema();
    console.log(this.createUser);
    userSchema.name = user.name;
    userSchema.username = user.username;
    userSchema.birthdate = user.birthdate;
    userSchema.address = user.address;
    userSchema.addressNumber = user.addressNumber;
    userSchema.primaryPhone = user.primaryPhone;
    userSchema.description = user.description;
    userSchema.password = user.password;
    userSchema.createdAt = user.createdAt;

    let response;

    try {
      response = await this.repository.save(userSchema);
    } catch (error) {
      console.log(error);
    }

    return !!response;
  }

  async getUserByUserName(user: User): Promise<User | boolean> {
    const userSchema = new UserSchema();

    userSchema.username = user.username;

    const response = await this.repository.findOne(userSchema);
    if (response) {
      user.id = response.id;
      user.name = response.name;
      user.username = response.username;
      user.birthdate = response.birthdate;
      user.address = response.address;
      user.addressNumber = response.addressNumber;
      user.primaryPhone = response.primaryPhone;
      user.description = response.description;
      user.createdAt = response.createdAt;
    } else {
      return false;
    }

    return user;
  }

  async getUserWithPassword(user: User): Promise<User | boolean> {
    const userSchema = new UserSchema();

    userSchema.username = user.username;
    console.log(userSchema);
    const response = await this.repository.findOne(userSchema);
    if (response) {
      user.id = response.id;
      user.name = response.name;
      user.username = response.username;
      user.birthdate = response.birthdate;
      user.address = response.address;
      user.addressNumber = response.addressNumber;
      user.primaryPhone = response.primaryPhone;
      user.description = response.description;
      user.createdAt = response.createdAt;
    } else {
      return false;
    }

    return user;
  }

  async getUserById(user: User): Promise<User | boolean> {
    try {
      const response = await this.repository.findOne(user.id);

      if (response) {
        user.id = response.id;
        user.name = response.name;
        user.username = response.username;
        user.birthdate = response.birthdate;
        user.address = response.address;
        user.addressNumber = response.addressNumber;
        user.primaryPhone = response.primaryPhone;
        user.description = response.description;
        user.createdAt = response.createdAt;
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async verifyById(id: string): Promise<boolean> {
    try {
      const response = await this.repository.findOne(id);
      if (response) {
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async updateUser(id: string, user: User): Promise<boolean> {
    const userSchema = new UserSchema();

    userSchema.name = user.name;
    userSchema.username = user.username;
    userSchema.birthdate = user.birthdate;
    userSchema.address = user.address;
    userSchema.addressNumber = user.addressNumber;
    userSchema.primaryPhone = user.primaryPhone;
    userSchema.description = user.description;

    try {
      const response = await this.repository.update(id, userSchema);
      return !!response;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async deleteUser(id: string): Promise<boolean> {
    try {
      const response = await this.repository.delete(id);
      if (response) {
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default UserRepository;
