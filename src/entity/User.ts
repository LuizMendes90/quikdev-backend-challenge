import UserRepository from '../infrastructure/repository/UserRepository';

export default class User {
  id!: string;

  name!: string;

  username!: string;

  birthdate!: Date;

  address!: string;

  addressNumber!: string;

  primaryPhone!: string;

  description!: string;

  createdAt!: Date;

  private repo!: UserRepository;

  constructor() {
    this.repo = new UserRepository();
  }

  create = async (): Promise<boolean> =>
    !(await this.exist()) ? !!(await this.repo.createUser(this)) : false;

  exist = async (): Promise<boolean> =>
    !!(await this.repo.getUserByUserName(this));

  getById = async (id: string): Promise<User | boolean> => {
    this.id = id;

    const response = await this.repo.getUserById(this);

    return response ? this : false;
  };

  update = async (id: string): Promise<boolean> => {
    try {
      const user = new User();
      const userExists = await user.getById(this.id);
      if (userExists) {
        await this.repo.updateUser(id, this);
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  delete = async (id: string): Promise<boolean> => {
    try {
      const user = new User();
      const userExists = await user.getById(id);
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
