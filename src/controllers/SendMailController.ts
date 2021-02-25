import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepositories";
import { SurveysUserRepository } from "../repositories/SurveysUserRepository";
import { UserRepository } from "../repositories/UsersRepository";

class SendMailController {

  async execute(request: Request, response: Response) {
    const { email, survey_id } = request.body;

    const userRepository = getCustomRepository(UserRepository);
    const surveyRepository = getCustomRepository(SurveysRepository);
    const surveysUserRepository = getCustomRepository(SurveysUserRepository);

    const userAlreadyExists = await userRepository.findOne({ email });

    if (!userAlreadyExists) {
      return response.status(400).json({ error: "User does not exists" });
    }

    const surveyAlreadyExists = await surveyRepository.findOne({ id: survey_id });

    if (!surveyAlreadyExists) {
      return response.status(400).json({ error: "Survey does not exists" });
    }

    const surveyUser = surveysUserRepository.create({
      user_id: userAlreadyExists.id,
      survey_id
    });

    await surveysUserRepository.save(surveyUser);

    return response.status(201).json(surveyUser);
  }
}

export { SendMailController };