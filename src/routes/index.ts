import { Router } from "express";

import { userRouter } from "./userRoutes";
import { surveyRouter } from "./surveyRoutes";
import { surveyUserRouter } from "./surveyUserRoutes";

const router = Router();

router.use("/users", userRouter);
router.use("/surveys", surveyRouter);
router.use("/sendMail", surveyUserRouter);

export { router };