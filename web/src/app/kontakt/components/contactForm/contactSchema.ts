import { z } from 'zod';
const emailRegex = new RegExp('^[a-zA-ZæøåÆØÅ0-9._%+-]+@[a-zA-ZæøåÆØÅ0-9.-]+\\.[a-zA-Z]{2,63}$');

export const contactSchema = z.object({
  name: z.string().min(1, { message: 'Navn er påkrevd' }).max(40, {
    message: 'Navn kan ikke overstige 40 bokstaver',
  }),
  email: z
    .string()
    .min(1, { message: 'E-postadresse er påkrevd' })
    .regex(emailRegex, { message: 'E-postadressen er ikke gyldig' }),
  telephone: z.string(),
  message: z
    .string()
    .min(1, { message: 'Melding er påkrevd' })
    .max(500, { message: 'Melding kan ikke være over 500 bokstaver' }),
});
