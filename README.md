# CV Maker

Simple CV builder built with React and TypeScript.

![alt text]({F09E3B8A-782A-4E9B-9B6F-5124E7C2D58A}.png)

![alt text]({96980EBB-5951-4A82-8BBD-C7692AA296F8}.png)
![alt text]({F80B9219-26AD-4050-AE8F-0478932F78CC}.png)

## 👤 Author

Peter Cisovsky

## 🚀 Features

- Create and edit CV sections (Personal, Work, Education, Skills, etc.)
- Multiple templates
- Language switch (EN / SK / DE)
- Live preview
- Print to PDF
- Local Storage

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