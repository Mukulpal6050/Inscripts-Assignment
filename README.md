# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {# 🧮 Inscripts Spreadsheet Assignment

This project is a spreadsheet-style table interface built for the frontend assignment at **Inscripts (I) Private Limited**. It showcases dynamic data rendering, sorting, and styled table headers and cells using **React**, **TypeScript**, **Tailwind CSS**, and **@tanstack/react-table v8**.

---

## 🚀 Features

- 📊 Dynamic table rendering with sortable columns
- 🟢 Colored status and priority badges
- 🔠 Icon-based headers for better visual context
- 🧠 Clean, modular component structure
- ⚡ Built using modern React with Vite and TypeScript
- 🌐 Fully responsive design with horizontal scroll

---

## 🛠️ Tech Stack

- **React 18**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **@tanstack/react-table**
- **React Icons**

---

## 📁 Folder Structure

spreadsheet/
├── public/
├── src/
│ ├── assets/ # Dummy data (JSON) and images
│ ├── components/ # Table, Toolbar, Navbar, BottomBar
│ ├── App.tsx # Main app structure
│ ├── main.tsx # Entry point
│ └── index.css # Tailwind base styles
├── tailwind.config.js # Tailwind CSS config
├── vite.config.ts # Vite build config
├── tsconfig.json # TypeScript settings






---

## 📸 UI Preview

![Spreadsheet UI](./src/assets/panel.png)

---

## 🧪 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Mukulpal6050/Inscripts-Assignment.git
cd Inscripts-Assignment


### Install dependencies

npm install 



## NOTES 

Dummy data is stored in src/assets/DummyData.json

Custom column header icons are added via react-icons

Cell background and text styles are conditionally applied

This is a frontend-only implementation — no backend involved



## About me

Mukul Pal
📧 mukulpal6050@gmail.com
💻 GitHub - Mukulpal6050


        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
