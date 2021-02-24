import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UsersRepository";

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;
    
    const usersRepository = getCustomRepository(UserRepository)

    const userExist = await usersRepository.findOne({ email });

    if (userExist) return response.status(400).json({ message: "User already exists!" });

    const user = usersRepository.create({
      name, email
    });

    await usersRepository.save(user);

    return response.json(user);
  }
};

export { UserController };