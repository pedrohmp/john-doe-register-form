import { object, string, TypeOf } from 'zod';

export const createCustomerSchema = object({
  body: object({
    name: string({
      required_error: 'Name is required',
    }),
    cpf: string({
      required_error: 'Cpf is required',
    }),
		favoriteColor: string({
      required_error: 'favorite color is required',
    }),
  }),
});


export type CreateCustomerInput = TypeOf<typeof createCustomerSchema>['body'];