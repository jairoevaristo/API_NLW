import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysUserRepository } from "../repositories/SurveysUserRepository";

class AnswerController {

  async execute(request: Request, response: Response) {
    const { value } = request.params;
    const { u } = request.query;

    const surveysUserRepository = getCustomRepository(SurveysUserRepository);

    const surveyUser = await surveysUserRepository.findOne({
      id: String(u)
    });

    if (!surveyUser) {
      return response.status(400).json({
        error: "Survey Users does not exists!"
      })
    }

    surveyUser.value = Number(value);

    await surveysUserRepository.save(surveyUser);

    return response.status(201).json(surveyUser);

  }
};

export { AnswerController };