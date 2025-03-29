// README.md
# NFTech API

An Express-based API to showcase the services and quote system for Neal Frazier Tech.

## 🚀 Endpoints

### `GET /services`
Returns a list of offered services.

### `GET /services/:id`
Returns details of a specific service.

### `POST /quotes`
Submit a quote request with:
```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "service": "linux-support",
  "details": "I need help with Parrot OS firewall config."
}
```

### `GET /status`
Health check route showing uptime and version.

## 📦 Install & Run
```bash
npm install
npm run dev
```

## 📁 Structure
- `routes/` — API routes for services and quotes
- `data/` — Mock data JSON file
- `.env.example` — Sample environment config

## 🌐 Live URL
_Deploy it to Render, Railway, or Vercel and link it here._

---

Built with ❤️ by [Neal Frazier Tech](https://nealfrazier.tech)# nftech-api
