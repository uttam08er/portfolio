# 🚀 Uttam Kumar — Frontend Developer Portfolio

A world-class, modern portfolio built with React.js, Tailwind CSS v4, and Framer Motion.

## ✨ Features

- ⚛️ React 19 + Vite 8 — Lightning-fast dev
- 🌙 Dark / Light Mode with persistence
- 📱 Fully Responsive — Mobile-first
- ✨ Glassmorphism + Particle Background
- ⌨️ Typing Effect, Animated Counters, Scroll Progress
- 🔍 Project Filter + Search + Modal Popup
- 📬 EmailJS Contact Form ready
- 🔝 Back to Top + Loading Screen

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 📧 EmailJS Setup

In `src/sections/Contact.jsx`, replace the simulation:

```js
import emailjs from '@emailjs/browser';
await emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', formRef.current, 'PUBLIC_KEY');
```

## 🌐 Deploy

**Vercel:** `npx vercel`
**Netlify:** Drop the `dist/` folder
**GitHub Pages:** Set `base: '/repo-name/'` in vite.config.js then push `dist/`

## 🎨 Customize

Edit `src/data/portfolioData.js` to update all content.

Built with ❤️ by **Uttam Kumar**
