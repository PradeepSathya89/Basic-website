# Luxora — React + Vite Company Website

A premium retail/e-commerce company website built with **React 18** and **Vite 5**.

## 🚀 Getting Started

```bash
# 1. Navigate into the project folder
cd luxora

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open http://localhost:5173
```

## 📦 Build for Production
```bash
npm run build
npm run preview
```

## 🗂 Project Structure
```
src/
├── components/
│   ├── Navbar.jsx / .module.css
│   ├── Hero.jsx / .module.css
│   ├── Marquee.jsx / .module.css
│   ├── Services.jsx / .module.css
│   ├── About.jsx / .module.css
│   ├── Testimonials.jsx / .module.css
│   ├── Contact.jsx / .module.css
│   └── Footer.jsx / .module.css
├── hooks/
│   └── useReveal.js       ← custom scroll animation hook
├── App.jsx
├── main.jsx
└── index.css              ← CSS variables & keyframes
```

## ✏️ Customise
- **Brand name** → find & replace "Luxora" across all files
- **Colors** → edit CSS variables in `src/index.css`
- **Services** → edit the `services` array in `Services.jsx`
- **Testimonials** → edit the `reviews` array in `Testimonials.jsx`
- **Contact form** → wire to [Formspree](https://formspree.io) in `Contact.jsx`
