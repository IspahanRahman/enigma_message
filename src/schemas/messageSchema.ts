import { z } from 'zod';

export const messageSchema = z.object({
    content: z.string()
    .min(10, 'Message must be at least 10 characters long')
    .max(300, 'Message must not exceed 300 characters')
})