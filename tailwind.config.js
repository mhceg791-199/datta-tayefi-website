/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#2d2d2f",
        lightColor: "#e0e0d4",
        mainGold: "#C5A363",
      },
    },
  },
  plugins: [],
});
