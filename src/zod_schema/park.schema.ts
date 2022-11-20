import { z, TypeOf } from 'zod';

export const parkSchema = z.object({
  body: z.object({
    id: z
        .string({ required_error: 'ID is required !' })
        .min(2,'You id must be more than 2'),
    name: z
      .string({ required_error: 'name is required !' })
      .min(4, 'You name must be more than 4 char'),
    type: z.enum(['rollercoaster', 'thriller','water'], { required_error: 'type is required and must be one of this (rollercoaster, thriller, water)!' }),
    tickets: z.number({ required_error: 'number is required !' }),
    price: z.number({ required_error: 'salary is required !' })
      
  }),
});

export type ParkSchemaType = TypeOf<typeof parkSchema>['body'];