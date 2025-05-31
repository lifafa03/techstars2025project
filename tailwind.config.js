/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // If you are using the Pages Router (Next 12/13+), use:
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",

    // If you have an App Router directory (Next 13+), also include:
    "./src/app/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
