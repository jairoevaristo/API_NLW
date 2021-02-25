import { Router } from "express";
import { SendMailController } from "../controllers/SendMailController";

const surveyUserRouter = Router();
 
const sendMailController = new SendMailController();

surveyUserRouter.post("/", sendMailController.execute);

export { surveyUserRouter };