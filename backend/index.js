/* eslint-disable import/extensions */
import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import allRoutes from './routes/index.js';
const app = express();

// middlewares;
app.use(cors()); // ajuda na conexão com o front-end, permite requests do React
app.use(morgan('tiny')); // pacote que auxilia no controle de logs no console do node
app.use(express.json());
app.use(cookieParser()); // parses the incoming cookies from request to JSON value..

// routes
app.use('/api', allRoutes);

// error Handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ message, stack: err.stack });
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
  });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

app.listen(process.env.PORT || 8000, () => {
  connectDB();
});
