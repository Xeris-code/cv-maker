# CV Maker

Simple CV builder built with React and TypeScript.

![alt text]({74AA9DCC-1637-4932-9164-69D6A7D38D14}.png)

## 👤 Author

Peter Cisovsky

## 🚀 Features

- Create and edit CV sections (Personal, Work, Education, Skills, etc.)
- Multiple templates
- Language switch (EN / SK / DE)
- Live preview
- Print to PDF

## 🎯 Future Improvements
- Improve validation
- Add more templates
- Export as PDF file (server-side)
- Better mobile support

## 🛠️ Tech Stack

- React
- TypeScript
- Tailwind CSS

## 🧠 Architecture
- AppShell – main state and layout
- BuilderPanel – form sections
- PreviewPanel – CV preview
- sections/ – individual form sections
- ui/ – reusable components
- lib/ – types, reducer, helpers

## 📦 Installation

```bash
git clone https://github.com/Xeris-code/cv-maker
cd cv-maker
npm install
npm run dev