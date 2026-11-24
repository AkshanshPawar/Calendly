import slug from "slug";
import { createUserDto, updateUserDto } from "../dtos/user.dto.js";
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

export async function createUser(data: createUserDto) {
  const existingUser = await findByEmail(data.email);
  if (existingUser) {
    throw conflict("User already exist");
  }
  const slugPassed = data.slug ? data.slug : slug(data.name, { lower: true }); // todo: make the slug unique

  return create({ ...data, slug: slugPassed });
}

export async function updateUser(id: number, data: updateUserDto) {
  const user = await findUserById(id);
  if (!user) {
    throw notFound("User not found");
  }
  if (data.email && data.email !== user.email) {
    const existingUser = await findByEmail(data.email);
    if (existingUser) {
      throw conflict("User already exist");
    }
  }
  return update(id, data);
}

export async function deleteUser(id: number) {
  const user = findUserById(id);
  if (!user) {
    throw notFound("User not found");
  }
  return remove(id);
}
