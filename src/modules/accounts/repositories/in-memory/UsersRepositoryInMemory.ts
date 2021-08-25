import { User } from "../../infra/typeorm/entities/User";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

export default class UsersRepositoryInMemory implements IUsersRepository{
  users: User[] = [];

  async create({email, password, name}: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {email, password, name})

    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }

  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }
}