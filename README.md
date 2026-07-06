# ✦ sumayea.dev ✦

> *Crafting digital experiences with precision and purpose*

[![Next.js](https://img.shields.io/badge/Next.js-15.1.7-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4.0-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Drizzle](https://img.shields.io/badge/Drizzle-0.30.0-5C4EE5?style=for-the-badge&logo=drizzle&logoColor=white)](https://orm.drizzle.team/)
[![Neon](https://img.shields.io/badge/Neon_PostgreSQL-00D9A2?style=for-the-badge&logo=neon&logoColor=white)](https://neon.tech/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

---

## 🌟 Overview

**sumayea.dev** is a modern, full-stack portfolio website built with Next.js 15, TypeScript, and Drizzle ORM. It serves as a professional showcase for my journey as a Full Stack Developer, blending my background in Business Administration (MBA) with software engineering and AI integration.

This portfolio is designed to be:
- 🎨 **Visually Stunning** — Premium design with dark/light mode
- 🚀 **Performance Optimized** — 90+ Lighthouse scores
- 📱 **Fully Responsive** — Perfect on all devices
- 🔐 **Secure** — Authentication with Auth.js v5
- 📝 **Dynamic** — Content managed through database

---

## 📋 Table of Contents

- [✦ sumayea.dev ✦](#-sumayeadev-)
  - [🌟 Overview](#-overview)
  - [📋 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
    - [🎨 **Design \& UX**](#-design--ux)
    - [📝 **Content Management**](#-content-management)
    - [🔐 **Authentication**](#-authentication)
    - [🛠️ **Technical Features**](#️-technical-features)
  - [💻 Technology Stack](#-technology-stack)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Deployment](#deployment)
  - [📁 Project Structure](#-project-structure)
  - [└── package.json           # Dependencies and scripts](#-packagejson------------dependencies-and-scripts)
  - [Installation](#installation)
- [1. Clone the repository](#1-clone-the-repository)
  - [Environment Variables](#environment-variables)
- [Database](#database)
- [Authentication](#authentication)
- [Email (Resend)](#email-resend)
- [Optional: Gmail SMTP (if not using Resend)](#optional-gmail-smtp-if-not-using-resend)
  - [🚀 Deployment](#-deployment)
  - [Live URL: https://sumayea-dev.vercel.app](#live-url-httpssumayea-devvercelapp)
  - [🔐 Admin Dashboard](#-admin-dashboard)
    - [Login Credentials](#login-credentials)
    - [Admin Features](#admin-features)
  - [🌐 Live Demo](#-live-demo)
  - [📊 Database Schema](#-database-schema)
    - [Tables](#tables)
  - [🤝 Contributing](#-contributing)
  - [📝 License](#-license)
  - [🙏 Acknowledgments](#-acknowledgments)
  - [📬 Contact](#-contact)

---

## ✨ Features

### 🎨 **Design & UX**
- ✅ Dark/Light theme with smooth transitions
- ✅ Glassmorphism effects and gradient backgrounds
- ✅ Custom animated scrollbar
- ✅ Responsive hamburger menu for mobile
- ✅ Floating music player (optional)

### 📝 **Content Management**
- ✅ Dynamic projects with tech stack tags
- ✅ Skills categorized (Frontend, Backend, Database, AI)
- ✅ Education and experience sections
- ✅ Blog posts auto-fetched from dev.to
- ✅ Contact form with email sending

### 🔐 **Authentication**
- ✅ Admin login with credentials
- ✅ Protected dashboard routes
- ✅ Session management with Auth.js v5

### 🛠️ **Technical Features**
- ✅ Server-side rendering with Next.js App Router
- ✅ Type-safe database queries with Drizzle ORM
- ✅ PostgreSQL database with Neon
- ✅ API routes for contact form and data management
- ✅ Image optimization with Next.js Image

---

## 💻 Technology Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.1.7 | React framework with App Router |
| TypeScript | 5.4.0 | Type-safe JavaScript |
| Tailwind CSS | 3.4.0 | Utility-first styling |
| Framer Motion | 11.0.0 | Smooth animations |
| Lucide React | Latest | Icon library |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| Drizzle ORM | 0.30.0 | Type-safe ORM |
| Neon PostgreSQL | Latest | Serverless database |
| Auth.js | 5.0.0 | Authentication |
| Resend | Latest | Email delivery |

### Deployment
| Technology | Purpose |
|------------|---------|
| Vercel | Hosting & deployment |
| GitHub | Version control |

---

## 📁 Project Structure
sumayea.dev/
├── app/
│   ├── (public)/          # Public routes (home, projects, blog, about)
│   ├── (admin)/           # Admin routes (dashboard, manage content)
│   ├── api/               # API routes (auth, projects, posts, contact)
│   └── layout.tsx         # Root layout
├── components/
│   ├── layout/            # Navbar, Footer, ThemeToggle
│   ├── sections/          # Hero, About, Projects, Skills, Education, Blog, Contact
│   └── ui/                # Reusable UI components
├── db/
│   ├── schema/            # Database schema definitions
│   └── index.ts           # Database connection
├── lib/                   # Utilities (prisma, auth, helpers)
├── public/                # Static assets (images, resume)
├── scripts/               # Seed scripts
├── .env.local             # Environment variables
├── next.config.ts         # Next.js configuration
└── package.json           # Dependencies and scripts
---


## Installation
# 1. Clone the repository
```
git clone https://github.com/Sumayea104/sumayea.dev.git
cd sumayea.dev

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Create environment file
cp .env.example .env.local

# 4. Set up database
npx drizzle-kit generate
npx drizzle-kit migrate

# 5. Seed the database
node --env-file=.env.local --import tsx scripts/seed.ts

# 6. Start development server
npm run dev
```
---
## Environment Variables
- Create a .env.local file:
# Database
DATABASE_URL="postgresql://username:password@ep-xyz.neon.tech/db?sslmode=require"

# Authentication
NEXTAUTH_SECRET="your-32-character-secret"
NEXTAUTH_URL="http://localhost:3000"

# Email (Resend)
RESEND_API_KEY="re_xxxxxxxxxxxx"

# Optional: Gmail SMTP (if not using Resend)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"

---
## 🚀 Deployment
- Deploy to Vercel
```
# 1. Push to GitHub
git add .
git commit -m "Deploy to production"
git push origin main

# 2. Connect repository to Vercel
# 3. Add environment variables in Vercel dashboard
# 4. Deploy
```
---
## Live URL: https://sumayea-dev.vercel.app

---
## 🔐 Admin Dashboard

### Login Credentials
* **Email:** sumayearahman7@gmail.com
* **Password:** `admin123`

### Admin Features
* ✅ Manage projects (add, edit, delete)
* ✅ View contact messages
* ✅ Update portfolio settings
* ✅ Manage blog posts

---

## 🌐 Live Demo
* **Visit:** [https://sumayea-dev.vercel.app](https://sumayea-dev.vercel.app)

---

## 📊 Database Schema

### Tables

| Table | Description |
| :--- | :--- |
| **users** | Admin users |
| **projects** | Portfolio projects |
| **project_images** | Project screenshots |
| **skills** | Technical skills |
| **contact_messages** | Contact form submissions |
| **blog_posts** | Blog posts (coming soon) |
| **portfolio_settings** | Dynamic portfolio info |

---

## 🤝 Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments
* [Next.js](https://nextjs.org/) - React framework
* [Tailwind CSS](https://tailwindcss.com/) - CSS framework
* [Drizzle ORM](https://orm.drizzle.team/) - Type-safe ORM
* [Neon](https://neon.tech/) - Serverless PostgreSQL
* [Vercel](https://vercel.com/) - Hosting platform
* [Lucide](https://lucide.dev/) - Icon library
* [shadcn/ui](https://ui.shadcn.com/) - UI components

---

## 📬 Contact
* **Portfolio:** [https://sumayea.dev](https://sumayea.dev)
* **Email:** sumayearahman7@gmail.com
* **GitHub:** [https://github.com/Sumayea104](https://github.com/Sumayea104)
* **LinkedIn:** [https://linkedin.com/in/sumayea-rahman](https://linkedin.com/in/sumayea-rahman)
* **Twitter/X:** [https://x.com/RahmanSuma22098](https://x.com/RahmanSuma22098)

---

<div align="center">
  <p>Built with ❤️ and ☕ in Dhaka, Bangladesh</p>
  <i>"Code is poetry, and your portfolio is its anthology"</i>
</div>