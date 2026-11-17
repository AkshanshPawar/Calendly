import { Router } from "express";
import {
  createUser,
  deleteUser,
  findAllUsers,
  findUserById,
  updateUser,
} from "../controllers/user.controller.js";
import { createUserSchema, updateUserSchema } from "../dtos/user.dto.js";
import { validate } from "../middlewares/validate.js";

export const userRouter: Router = Router();

userRouter.get("/", findAllUsers);
userRouter.get("/:id", findUserById);
userRouter.post("/", validate(createUserSchema), createUser);
userRouter.post("/:id", validate(updateUserSchema), updateUser);
userRouter.delete("/:id", deleteUser);
