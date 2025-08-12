// ipl-dashboard/frontend/tailwind.config.js
/** @type {import('tailwindcss').Config} */
import preset from 'tailwindcss/preset'; // Import the preset

export default {
  presets: [preset()], // Apply the preset
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ipl-blue': '#004b8c', // Your custom colors will still work
        'ipl-gold': '#ffd700',
      }
      // You might not even need to extend colors if the preset includes a good default palette
      // but extending is fine.
    },
  },
  plugins: [],
};