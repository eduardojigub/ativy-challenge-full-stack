/* eslint-disable import/extensions */
import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import allRoutes from './routes/index.js';

const app = express();

const PORT = process.env.PORT || 8000;

// middlewares;
app.use(cors()); // ajuda na conexão com o front-end, permite requests do React
app.use(morgan('tiny')); // pacote que auxilia no controle de logs no console do node
app.use(express.json());
app.use(cookieParser()); // parses the incoming cookies from request to JSON value.

// routes
app.use('/api', allRoutes);

// error Handler
app.use((err, req, res) => {
  const status = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ message, stack: err.stack });
});

// função que connectDB é a função que conecta o mongo ao Atlas, usando o .env
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING, connectionParams);
    console.log('MongoDB Connected');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
