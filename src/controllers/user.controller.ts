import { Request, Response } from "express";
import {
  findAllUsers as findAllUsersService,
  findUserById as findUserByIdService,
  createUser as createUserService,
  updateUser as updateUserService,
  deleteUser as deleteUserService
} from "../services/user.service.js";
import { sendSuccess } from "../utils/api-response.js";

export async function findAllUsers(_req: Request, res: Response) {
  const response = await findAllUsersService();
  // res.json(response);
  sendSuccess(res, response);
}

export async function findUserById(req: Request, res: Response) {
  const { id } = req.params;
  const response = await findUserByIdService(Number(id));
  sendSuccess(res, response);
}

export async function createUser(req: Request, res: Response) {
  const newUser = await createUserService(req.body);
  sendSuccess(res, newUser, 201, "User created successfully");
}

export async function updateUser(req: Request, res: Response) {
  const { id } = req.params;
  const updatedUser = await updateUserService(Number(id), req.body);
  sendSuccess(res, updatedUser, 200, "User is update successfully");
}

export async function deleteUser(req: Request, res: Response) {
  const { id } = req.params;
  const deletedUser = await deleteUserService(Number(id));
  sendSuccess(res,deletedUser,200,"User deleted successfully")
}
