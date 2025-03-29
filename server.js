// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import servicesRouter from './routes/services.js';
import quotesRouter from './routes/quotes.js';
import fs from 'fs';
import path from 'path';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/status', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime(), version: '1.0.0' });
});

app.use('/services', servicesRouter);
app.use('/quotes', quotesRouter);

app.listen(PORT, () => {
  console.log(`NFTech API running on http://localhost:${PORT}`);
});
