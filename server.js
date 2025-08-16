import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db.js';

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
  res.send('🚀 AI Meeting Scheduler backend is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));


