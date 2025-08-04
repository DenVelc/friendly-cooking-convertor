# Friendly Cooking Converter

A playful, modern cooking converter app designed for young bakers and TikTok content creators. Convert volume measurements to weight instantly with professional accuracy!

## Features

- 🥄 **Volume to Weight Converter**: Convert cups, tablespoons, teaspoons, fluid ounces, milliliters, and liters to grams, ounces, pounds, or kilograms
- 🌡️ **Temperature Converter**: Convert between Fahrenheit, Celsius, and gas marks for oven temperatures
- 📱 **TikTok-Ready Design**: Vibrant colors, animations, and mobile-friendly interface
- ⚖️ **Professional Accuracy**: Based on standard baking measurements
- 🍰 **11 Common Ingredients**: Flours, sugars, butter, oils, honey, milk, and cocoa powder

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository or download the files
2. Install dependencies:

\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Deploy automatically with zero configuration

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible components
- **Lucide React** - Icons

## Project Structure

\`\`\`
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
\`\`\`

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).

---

Made with 💜 for bakers everywhere! 🍰
