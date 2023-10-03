import express from 'express';
import {
  createCustomer,
  listCustomers
} from '../controllers/customer.controller';
import { validate } from '../middleware/validate';
import { createCustomerSchema } from '../schemas/customer.schema';

const router = express.Router();

router
  .route('/')
  .post(
    validate(createCustomerSchema),
    createCustomer
  )
  .get(listCustomers);

export default router;