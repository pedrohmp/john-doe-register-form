import { NextFunction, Request, Response } from 'express';
import { findCustomers, saveCustomer } from '../services/customer.service';
import { CreateCustomerInput } from '../schemas/customer.schema';

export const createCustomer = async (
  req: Request<{},{}, CreateCustomerInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const customer = await saveCustomer(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        customer,
      },
    });
  } catch (err: any) {
    if (err.code === '23505') {
      return res.status(409).json({
        status: 'fail',
        message: 'Post with that title already exist',
      });
    }
    next(err);
  }
};

export const listCustomers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const customers = await findCustomers({}, {});

    res.status(200).json({
      status: 'success',
      results: customers.length,
      data: {
        customers,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

