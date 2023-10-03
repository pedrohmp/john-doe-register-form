import {
  FindOptionsSelect,
  FindOptionsWhere,
} from 'typeorm';
import { AppDataSource } from '../config/database';
import { Customer } from '../entities/customer.entity';

const customerRepository = AppDataSource.getRepository(Customer);

export const saveCustomer = async (input: Partial<Customer>) => {
  return await customerRepository.save(customerRepository.create(input));
};

export const findCustomers = async (
  where: FindOptionsWhere<Customer> = {},
  select: FindOptionsSelect<Customer> = {},
) => {
  return await customerRepository.find({
    where,
    select,
  });
};