import * as z from "zod"

export const NewPasswordSchema = z.object({
    password: z.string().min(8,{
        message:"Minimim 8 characters required"
    }),
})  

export const ResetSchema = z.object({
    email: z.string().email({
        message:"Email is required"
    }),
})

export const LoginSchema = z.object({
    email: z.string().email({
        message:"Email is required"
    }),
    password: z.string().min(1, {
        message:"Password is required"
    }),
    code: z.optional(z.string()),
})

export const RegisterSchema = z.object({
    email: z.string().email({
        message:"Email is required"
    }),
    password: z.string().min(8, {
        message:"Minimum 8 caracter required"
    }),
    fullname: z.string().min(1,{
        message:"First name is required"
    })
})