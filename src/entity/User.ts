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
}
