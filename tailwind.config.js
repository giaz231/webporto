/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "plus-jak": ['"Plus Jakarta Sans"', "sans"],
      },
      colors: {
        lightBlue: "#BFEFFF",
        hardBlue: "#008cdb",
        green: "#00b9d1",
      },
    },
  },
  plugins: [require("daisyui")],
};