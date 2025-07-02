import { z } from "zod";

export const taskSchema = z.object({
  email: z
    .string()
    .min(1, 'Digite um email')
    .email('Digite um email válido')
});

export type TaskFormData = z.infer<typeof taskSchema>;