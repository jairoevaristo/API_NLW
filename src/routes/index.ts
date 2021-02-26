import { Router } from "express";

import { userRouter } from "./userRoutes";
import { surveyRouter } from "./surveyRoutes";
import { surveyUserRouter } from "./surveyUserRoutes";
import { AnswerController } from "../controllers/AnswerController";

const answerController = new AnswerController();

const router = Router();

router.get("/", answerController.execute);

router.use("/users", userRouter);
router.use("/surveys", surveyRouter);
router.use("/sendMail", surveyUserRouter);

router.get("/answers/:value", answerController.execute);

export { router };