/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#0041AA",
        "secondary": "#060C3C",  
        "dark": "#000D22",  
        "neutral": "#44484F",  
      }
    },
  },
  plugins: [],
}

