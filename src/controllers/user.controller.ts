import { Request, Response } from "express";
import { findAllUsers as findAllUsersService } from "../services/user.service.js";
import { findUserById as findUserByIdService } from "../services/user.service.js";
import { sendSuccess } from "../utils/api-response.js";

export async function findAllUsers(_req: Request, res: Response) {
  const response = await findAllUsersService();
  res.json(response);
  sendSuccess(res, response);
}

export async function findUserById(req: Request, res: Response) {
  const { id } = req.params;
  const response = await findUserByIdService(Number(id));
  sendSuccess(res, response);
}

export async function createUser(_req : Request,res : Response){
  return res.json({});
}
