import { getAll, getUserById } from "../repositories/user.repository.js";
import { notFound } from "../utils/api-error.js";

export async function findAllUsers(){
    const users = await getAll();
    return users;
}

export async function findUserById(id : number){
    const user = await getUserById(id);
    if(!user){
        throw notFound("User not found");
    }
    return user;
}