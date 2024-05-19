/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        saving: "rgba(75, 192, 192)",
        expense: "rgba(255, 99, 132)",
        investment: "rgba(54, 162, 235)",
      },
    },
  },
};
