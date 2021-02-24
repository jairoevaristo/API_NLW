import { Router } from "express";

import { userRouter } from "./userRoutes";
import { surveyRouter } from "./surveyRoutes";

const router = Router();

router.use("/users", userRouter);
router.use("/survey", surveyRouter);

export { router };