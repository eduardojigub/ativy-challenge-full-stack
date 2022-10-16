import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log('MongoDB Connected');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const PORT = process.env.PORT || 8000;
const app = express();

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
