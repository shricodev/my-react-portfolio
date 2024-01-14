/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins",
      secondary: "Rajdhani",
    },
    extend: {
      container: {
        // to center the elemnt horizontally
        center: true,
      },
      transitionDuration: {
        400: "400ms",
        500: "500ms",
        600: "600ms",
      },
      screens: {
        sm: "600px",
        md: "1024px",
        768: "768px",
        xsm: "500px",
        1500: "1500px",
      },
      rotate: {
        10: "10deg",
      },
      borderRadius: {
        "2rem": "2rem",
      },
      colors: {
        primary: "#4bb5f5",
      },
      backgroundImage: {
        site: "url(./assets/site-bg.webp)",
      },
    },
  },
  plugins: [],
};
