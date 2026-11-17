import { createUserSchema, updateUserSchema } from "../dtos/user.dto.js";
import {
  create,
  findByEmail,
  getAll,
  getUserById,
  remove,
  update,
} from "../repositories/user.repository.js";
import { conflict, notFound } from "../utils/api-error.js";

export async function findAllUsers() {
  const users = await getAll();
  return users;
}

export async function findUserById(id: number) {
  const user = await getUserById(id);
  if (!user) {
    throw notFound("User not found");
  }
  return user;
}

export async function createUser(data: createUserSchema) {
  const existingUser = await findByEmail(data.email);
  if (existingUser) {
    throw conflict("User already exist");
  }
  return create(data);
}

export async function updateUser(id: number, data: updateUserSchema) {
  const user = await findUserById(id);
  if (!user) {
    throw notFound("User not found");
  }
  if (data.email && data.email !==  user.email) {
    const existingUser = await findByEmail(data.email);
    if (existingUser) {
      throw conflict("User already exist");
    }
  }
  return update(id,data);
}

export async function deleteUser(id : number){
  const user = findUserById(id);
  if(!user){
    throw notFound("User not found");
  }
  return remove(id);
}