// routes/services.js
import express from 'express';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const router = express.Router();
const filePath = path.resolve('data/services.json');

router.get('/', (req, res) => {
  const services = JSON.parse(fs.readFileSync(filePath));

  // Fancy terminal output for each service
  console.log(chalk.blue.bold('\nAvailable Services'));
  services.forEach(service => {
    console.log(
      chalk.green(`\n→ ${service.title}`) +
      chalk.gray(`\n   ID:`) + ` ${service.id}` +
      chalk.gray(`\n   Description:`) + ` ${service.description}` +
      chalk.gray(`\n   Tags:`) + ` ${service.tags.join(', ')}` +
      chalk.gray(`\n   Price Range:`) + ` ${service.priceRange}` +
      chalk.gray(`\n   Status:`) + ` ${service.status}`
    );
  });

  res.json(services);
});

router.get('/:id', (req, res) => {
  const services = JSON.parse(fs.readFileSync(filePath));
  const service = services.find(s => s.id === req.params.id);
  if (service) {
    console.log(
      chalk.cyan(`\nService requested:`),
      chalk.yellowBright(service.title)
    );
    res.json(service);
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

export default router;