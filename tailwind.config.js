/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      listStyleImage: { checkmark: 'url("/check.png")' },
      fontFamily: {
        "plus-jak": ['"Plus Jakarta Sans"', "sans"],
      },
      colors: {
        lightBlue: "#BFEFFF",
        hardBlue: "#008cdb",
        green: "#00b3d6",
      },
    },
  },
  plugins: [require("daisyui")],
};
