/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        customBrown: "#A07B4F",
        customGray: "#ECE3D9",
        customWhite: "#969696",
        customBrownie: "#BDA384",
        customPink: "#ECE3D9",
        customBrown2: "#A3927E",
        customGray2: "#a3927e9c",
        customGray3: "#DADADA",
      },
    },
  },
  plugins: [],
};
