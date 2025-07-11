# 📊 Inscripts Assignment – Spreadsheet UI Clone

A modern, responsive spreadsheet-style UI built with **React**, inspired by collaborative data tools like Airtable. This assignment replicates a functional admin dashboard UI that features row/column operations, color-coded data, status indicators, toolbars, and navbars – just like in enterprise tools.

---

## 🚀 About the Project

This project was developed as part of the **Inscripts Frontend Assignment**. The goal was to replicate a spreadsheet interface with:

- Dynamic and styled data table
- Status badges
- Toolbars & Navbar
- Custom header icons
- Scrollable layout using Tailwind CSS

---

## 🧩 Project Features

✅ Fully responsive layout  
✅ Color-coded header sections  
✅ Priority/status styling with visual indicators  
✅ Fixed Navbar & Toolbar  
✅ Scrollable table with headers  
✅ Icon-based column labels  
✅ Dummy data rendering from JSON  
✅ React Table integration

---

## ⚙️ Tech Stack

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
│ └── ...
├── src/
│ ├── assets/
│ │ └── DummyData.json # Contains dummy job request data
│ ├── components/
│ │ ├── TableApp.tsx # Layout wrapper with Navbar + Toolbar
│ │ ├── Table.tsx # Main spreadsheet table logic
│ │ ├── Navbar.tsx # Top navbar
│ │ └── Toolbar.tsx # Toolbar below navbar
│ ├── App.tsx # Renders the TableApp with table
│ └── main.tsx # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts



🛠️ Git Commands Used

``bash
# Initialize Git (if not already)
git init

# Set global config (once)
git config --global user.name "Mukulpal6050"
git config --global user.email "mukulpal6050@gmail.com"

# Stage all files
git add .

# Commit with a message
git commit -m "Initial commit with table layout"

# Connect to GitHub remote
git remote add origin https://github.com/Mukulpal6050/Inscripts-Assignment.git

# Push to GitHub
git push -u origin main

# Pull before pushing if remote is ahead
git pull origin main --rebase

# Resolve merge conflicts (if any), then:
git add .
git rebase --continue

# Final push
git push origin main


🌐 Live Deployment
✅ Public Link: https://inscripts-assignment-eljs-git-main-mukul-pals-projects.vercel.app/



🧪 Local Setup Instructions
# Clone the repo
git clone https://github.com/Mukulpal6050/Inscripts-Assignment.git

# Navigate into the folder
cd Inscripts-Assignment

# Install dependencies
npm install

# Start local server
npm run dev

# Visit:
http://localhost:5173
