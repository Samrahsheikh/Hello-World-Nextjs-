// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Scans files in the `src` folder with JavaScript/TypeScript extensions
    "./pages/**/*.{js,ts,jsx,tsx}", // If using `pages` folder for components or pages
    "./components/**/*.{js,ts,jsx,tsx}", // If using a `components` folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
