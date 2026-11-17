import { Router } from "express";
import { createUser, findAllUsers, findUserById } from "../controllers/user.controller.js";
import { createUserSchema } from "../dtos/user.dto.js";
import { validate } from "../middlewares/validate.js";

export const userRouter: Router = Router();

userRouter.get("/", findAllUsers);
userRouter.get("/:id", findUserById);
userRouter.post("/",validate(createUserSchema),createUser);
