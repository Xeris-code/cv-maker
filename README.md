# CV Maker

Simple CV builder built with React and TypeScript.

![alt text]({51DE17FB-6CBA-4DF6-86D1-1762222E38C5}.png)

## 👤 Author

Peter Cisovsky

## 🚀 Features

- Create and edit CV sections (Personal, Work, Education, Skills, etc.)
- Currently only one template is available.
- Language switch (EN / SK / DE)
- Live preview
- Print to PDF
- Local Storage

## 🎯 Future Improvements
- Improve validation
- Improve language translations
- Add more templates / Template switcher
- Sidebar spliting
- Better mobile support
- Export to json file
- Dark mode
- Preview feature
- AI helper / AI summary filler

## 🛠️ Tech Stack

- React
- TypeScript
- Tailwind CSS

## 🧠 Architecture
- AppShell – main state and layout
- BuilderPanel – form sections
- PreviewPanel – CV preview
- templates/ – individual template blocks and pages
- ui/ – reusable components
- lib/ – types, reducer, helpers

## 📦 Installation

```bash
git clone https://github.com/Xeris-code/cv-maker
cd cv-maker
npm install
npm run dev
