
# Gamehok Frontend 🎮

A fast and easy-to-use gaming website built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This platform is made for gamers to join tournaments, organize scrims, and connect with others. I have implemented a pixel-perfect home page, a comprehensive "My Tournament" section featuring both lobbies and overview pages, and fully responsive sidebars and navbars that strictly follow the provided Figma designs.

## 🚀 Getting Started

### What you need
- npm, yarn, or pnpm installed on your computer.

### How to install
1. **Clone the project:**
   ```bash
   git clone <https://github.com/Saniya1976/gamehok_Frontend>
   ```
2. **Install the packages:**
   ```bash
   npm install
   ```
3. **Start the project:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## ✨ Main Features
- **Works on all devices**: The layout looks great on mobile, tablets, and desktops.
- **Scrims & Battles**: Special sections to find daily practice matches and competitive games.
- **Game Categories**: Quickly find games like BGMI and COD Mobile with simple navigation.
- **Smart Mobile Menu**: A bottom navigation bar designed specifically for mobile users to move around easily.

## 🎨 Design
The website is built to look exactly like the original designs. We focus on making sure everything looks clean and consistent on every device.

## 🗃️ Data & Types
- **Figma Data**: All static content and design data are centralized in `data.ts` to ensure the UI matches the Figma specifications.
- **Type Safety**: Dedicated TypeScript interfaces are defined within the data layer to maintain strict type-checking across all components.

## 📱 Mobile Features
- **Bouncy Bird UI**: Special banners and buttons that only show up on phones and tablets to make the mobile experience better.

## 🛠️ Tools We Used
- **Framework**: [Next.js](https://nextjs.org/) (The base of the website).
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (For making it look good).
- **Icons**: [Lucide React](https://lucide.dev/) (For simple and clean icons).
- **Language**: **TypeScript** (To help prevent coding errors).
- **Organization**: The code is organized into small, manageable pieces so it's easy to update.


## ⚠️ Important Notes
- **Image Quality**: The `HeroBanner` currently uses a picture (`greenstar.png`) with a solid background due to the unavailability of the original SVG or transparent image from Figma.
- **Suggestion**: For the best look, we should replace this with a **transparent image (SVG or PNG)** so it blends perfectly with the background.
