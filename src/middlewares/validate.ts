import {Request as ExpressRequest,Response, NextFunction } from "express";
import { badRequest } from "../utils/api-error.js";
import z from "zod";



export const validate = (schema: z.ZodType) => (req : ExpressRequest,_res : Response, next : NextFunction) => {

    const result = schema.safeParse(req.body);

    if(!result.success){
        throw badRequest("Validation failed",result.error.issues);
    }

    (req as any).body = result.data;
    next();
}
