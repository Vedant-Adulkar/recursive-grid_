# 🎮 Recursive Grid

An interactive **3x3 grid game** built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**. Click boxes to increment values and trigger cascading ripple effects based on mathematical rules!

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwind-css)

---

## 🎯 Game Rules

### Core Mechanics
- **Click any box** to increment its value by 1
- **Locked boxes** (value ≥ 15) turn **red** and cannot be clicked
- **Even values** have a **gray background**
- **Odd values** have a **dark blue background**

### Ripple Rules
After incrementing a box, the following rules apply automatically:

- **Rule A (Divisible by 3)**: If the new value is divisible by 3, the **right neighbor** decrements by 1
- **Rule B (Divisible by 5)**: If the new value is divisible by 5, the **below neighbor** increments by 2

> **Note**: Ripple effects only apply to **unlocked neighbors** within grid boundaries.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 20+ installed
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vedant-Adulkar/Recursive-grid.git
   cd Recursive-grid
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

---

## 📁 Project Structure

```
recursive-grid/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Grid.tsx            # Main grid component with state management
│   └── Box.tsx             # Individual box component with styling logic
├── utils/
│   └── gridLogic.ts        # Core game logic (pure functions)
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router |
| **React 19** | UI component library |
| **TypeScript** | Type-safe development |
| **Tailwind CSS 4** | Utility-first styling |
| **ESLint** | Code quality and linting |

---

## 🎨 Features

✅ **Clean Architecture**: Separation of UI components and game logic  
✅ **Type Safety**: Full TypeScript implementation  
✅ **Immutable State**: Proper React state management  
✅ **Responsive Design**: Works on all screen sizes  
✅ **Smooth Animations**: Hover and click effects  
✅ **Reset Functionality**: Start fresh anytime  
✅ **Edge Case Handling**: Locked boxes and boundary checks  

---

## 🧪 How to Play

1. **Start the game** - All boxes begin at value `0`
2. **Click any box** to increment its value
3. **Watch the ripple effects** as neighboring boxes change based on the rules
4. **Strategize** to avoid locking boxes (reaching value 15)
5. **Click Reset** to start over

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🌐 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this Next.js app:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Vedant-Adulkar/Recursive-grid)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Vedant Adulkar**

- GitHub: [@Vedant-Adulkar](https://github.com/Vedant-Adulkar)

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Font optimization with [Geist](https://vercel.com/font)

---

**Enjoy playing! 🎮**
