// /** @type {import('postcss-load-config').Config} */
// export default {
//   plugins: {
//     '@tailwindcss/postcss': {}, // CRITICAL: This line must use @tailwindcss/postcss
//     autoprefixer: {},
//   },
// };


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Scans your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all relevant files in your src directory
  ],
  theme: {
    extend: {
      colors: {
        'ipl-blue': '#004b8c',
        'ipl-gold': '#ffd700',
      }
    },
  },
  plugins: [],
}