import {  z } from "zod";

export const createUserSchema = z.object({
  email: z.email("Invalid email address"),
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  slug: z.string().min(1).max(100).optional(),
});

export const updateUserSchema = z.object({
  email: z.email("Invalid email address").optional(),
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters")
    .optional(),
});

export type createUserDto = z.infer<typeof createUserSchema>;
export type updateUserDto = z.infer<typeof updateUserSchema>;
