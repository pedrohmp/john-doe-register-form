require('dotenv').config();
import express from 'express';
import { AppDataSource } from './config/database';
import customerRouter from './routes/customer.routes'
import cors from 'cors';

const PORT = process.env.PORT || 5000

AppDataSource.initialize()
  .then(async () => {
    const app = express();

    app.use(cors());

    app.use(express.json({ limit: '10kb' }));
    app.use('/api/customer', customerRouter);

    app.listen(PORT);
    console.log(`Server started with pid: ${process.pid} on port: ${PORT}`);
  })
  .catch((error) => console.log(error));