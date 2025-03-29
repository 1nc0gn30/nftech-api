// routes/quotes.js
import { Router } from 'express';
const router = Router();

router.post('/', (req, res) => {
  const { name, email, service, details } = req.body;
  if (!name || !email || !service || !details) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  console.log(`\n📩 New quote request from ${name} for ${service}`);
  res.status(201).json({ message: 'Quote received', data: { name, email, service, details } });
});

export default router;
