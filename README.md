# 🧁 Friendly Cooking Converter

A playful, modern cooking converter for young bakers and TikTokers who are *done* trying to figure out what "1 cup of flour" means in real life.

**📍 Live demo:**  
👉 [https://friendly-cooking-convertor.vercel.app](https://friendly-cooking-convertor.vercel.app)

---

## 💡 Why this project?

If you've ever tried baking from a TikTok recipe and ended up with a disaster in the oven because “1 cup of sugar” turned into a guessing game — you’re not alone.

### The Problem:
- 🇺🇸 U.S.-based creators use *cups* for everything.
- 🇪🇺 Europeans use grams and milliliters.
- 📱 Viral TikTok recipes don’t come with converters.
- 🔥 Mistakes in baking lead to wasted ingredients and frustration.

**Solution?**  
This fun, modern app instantly converts baking measurements and oven temperatures from U.S. to European units – with professional accuracy and a mobile-first design.

---

## ✨ Features

- 🥄 **Volume → Weight Converter**  
  Convert cups, tablespoons, teaspoons, fluid ounces, milliliters, and liters to grams, ounces, pounds, or kilograms.

- 🌡️ **Temperature Converter**  
  Switch between Fahrenheit, Celsius, and gas marks instantly.

- 🍯 **11 Common Ingredients**  
  Supports flours, sugars, butter, oils, honey, milk, and cocoa powder – each with their own conversion weights.

- 📱 **TikTok-Ready Design**  
  Vibrant colors, mobile-friendly layout, minimal friction – perfect for a quick glance mid-recipe.

- ⚖️ **Accurate & Flexible**  
  Based on standardized baking data and tested with real-world ingredient weights.

---

## 📊 Data Source

Ingredient weight and temperature conversions were compiled through a **deep research exploration using ChatGPT** and verified with publicly available cooking references and sources.

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js 18+
- pnpm / npm / yarn

### 🛠️ Installation

```bash
git clone https://github.com/DenVelc/friendly-cooking-convertor
cd friendly-cooking-convertor
pnpm install   # or npm install / yarn install
```

### 🧪 Development

```bash
pnpm dev       # or npm run dev / yarn dev
```

Then open: [http://localhost:3000](http://localhost:3000)

---

## ☁️ Deployment

### 🔄 Deploy to Vercel

- This project is **fully configured** for Vercel.
- Just connect your GitHub repo, and Vercel handles the rest (zero-config).
- Auto-builds on push to `main`.

### 🧱 Build for production

```bash
pnpm build
pnpm start
```

---

## 🧰 Tech Stack

| Tool              | Description                         |
|-------------------|-------------------------------------|
| **Next.js 14**    | React framework with App Router     |
| **TypeScript**    | Type safety + modern JS features    |
| **Tailwind CSS**  | Utility-first CSS styling           |
| **Radix UI**      | Headless accessible UI components   |
| **Lucide Icons**  | Open-source icon set                |

---

## 🗂️ Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   └── tabs.tsx
│   └── cooking-converter.tsx
├── lib/
│   └── utils.ts
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

---

## 🤝 Contributing

- Ideas, issues or TikTok-inspired features? PRs and feedback welcome!
- Future features might include: dark mode, ingredient database expansion, or saving conversions.

---

## 📜 License

MIT License – free to use, share, or remix.

---

**Made with 💜 for bakers everywhere.**  
Let’s never mis-measure flour again. 🍰
