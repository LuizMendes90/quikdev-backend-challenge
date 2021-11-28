import IUserRepository from '../infrastructure/repository/IUserRepository';
import TokenJWT from '../infrastructure/token/TokenJWT';
import Bcript from '../utils/crypt/BCrypt';

export default class User {
  id!: string;

  name!: string;

  username!: string;

  birthdate!: Date;

  address!: string;

  addressNumber!: string;

  primaryPhone!: string;

  description!: string;

  password!: string;

  createdAt!: Date;

  constructor(private repo: IUserRepository) {}

  create = async (): Promise<boolean> =>
    !(await this.exist()) ? !!(await this.repo.createUser(this)) : false;

  exist = async (): Promise<boolean> =>
    !!(await this.repo.getUserByUserName(this));

  getById = async (id: string): Promise<User | boolean> => {
    this.id = id;

    const response = await this.repo.getUserById(this);

    return response ? this : false;
  };

  login = async (): Promise<string | boolean> => {
    try {
      const response = await this.repo.getUserWithPassword(this);
      if (response) {
        const crypt = new Bcript();
        crypt.compare(this.password, response.password);
        const token = new TokenJWT();
        return token.generate(response).token;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  verifyExistById = async (id: string): Promise<boolean> =>
    !!(await this.repo.verifyById(id));

  update = async (id: string): Promise<boolean> => {
    try {
      const userExists = await this.verifyExistById(id);
      if (userExists) {
        return !!this.repo.updateUser(id, this);
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  delete = async (id: string): Promise<boolean> => {
    try {
      const userExists = await this.verifyExistById(id);
      if (userExists) {
        return !!(await this.repo.deleteUser(id));
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
}
