/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            container: {
                center: true,
                // to center the elemnt in the center horizontally
                margin: "0 auto",
            },
            transitionDuration: {
                400: "400ms",
                500: "500ms",
                600: "600ms",
            },
            screens: {
                1024: "1024px",
            },
        },
    },
    plugins: [],
};
