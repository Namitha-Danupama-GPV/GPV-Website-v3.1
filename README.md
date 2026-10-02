# 🌐 Global Pearl Ventures (GPV) Website

The official web application for **Global Pearl Ventures** — empowering digital transformation with enterprise software solutions across Healthcare, Aviation, Education, and Local Services.

Built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally on your machine.

### 📋 Prerequisites

Ensure you have the following installed on your system:
- **Node.js**: `v18.17.0` or higher (Node v20+ recommended)
- **npm**: `v9.x` or higher (comes with Node.js)

---

## ⚙️ Installation & Running Locally

### 1. Clone the Repository
```bash
git clone https://github.com/Global-Pearl-Ventures/GPV-Website-v2.2.git
cd GPV-Website-v2.2
```

### 2. Install Dependencies
Install all required project dependencies:
```bash
npm install
```

### 3. Start the Development Server
Launch the Next.js local development server:
```bash
npm run dev
```

### 4. Open in Your Browser
Open your browser and navigate to:
```text
http://localhost:3000
```
The application will automatically hot-reload whenever you save changes to the codebase.

---

## 🛠️ Build & Production Commands

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the development server at `http://localhost:3000`. |
| `npm run build` | Compiles the production build into the `.next` directory. |
| `npm run start` | Serves the production build locally. |
| `npx tsc --noEmit` | Runs TypeScript type checker to verify zero type errors. |
| `npm run lint` | Runs Next.js ESLint code quality checks. |

---

## 📂 Project Architecture Overview

```text
GPV-Website/
├── app/                      # Next.js 15 App Router Pages
│   ├── page.tsx              # Homepage
│   ├── about-us/             # About Us Page
│   ├── our-products/         # Our Products Page
│   ├── our-services/         # Our Services Page & Capabilities Dock
│   ├── Industries/           # Industries Showcase Page
│   ├── why-choose-us/        # Why Choose Us Page
│   ├── careers/              # Careers & Open Positions Page
│   └── get-in-touch/         # Get in Touch / Contact Form Page
├── components/               # Reusable React & UI Components
│   ├── main-nav.tsx          # Responsive Header & Glassmorphic Mobile Menu
│   ├── footer.tsx            # Global Footer Component
│   ├── AwardSplashScreen.tsx # Award Victory Matrix Digital Rain Splash Screen
│   ├── progress-circle.tsx   # Floating Scroll-to-Top Indicator
│   └── ui/                   # Radix UI / Tailwind Utility Components
├── public/                   # Static Media Assets, Logos, and Images
├── metadata/                 # SEO & Default Page Metadata Configurations
└── package.json              # Dependencies and Build Scripts
```

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Radix UI primitives
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & Three.js (WebGL)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Form Submissions**: EmailJS Integration

---

## 📄 License

© 2026 **Global Pearl Ventures**. All rights reserved.
