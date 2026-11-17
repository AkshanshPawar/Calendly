import { email, z } from "zod";


export const createUserSchema = z.object({
    email : z.email("Invalid email address"),
    name : z.string().min(1,"Name is required").max(100,"Name must be less than 100 characters")
});

export const updateUserSchema = z.object({
    email : z.email("Invalid email address").optional(),
    name : z.string().min(1,"Name is required").max(100,"Name must be less than 100 characters").optional()
})

export type createUserSchema = z.infer<typeof createUserSchema>;
export type updateUserSchema = z.infer<typeof updateUserSchema>;