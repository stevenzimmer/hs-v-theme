/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
    content: [
        "./src/index.js",
        "./src/js/*.js",
        "./src/layouts/**/*.html",
        "./src/modules/*.module/*.{html,js}",
        "./src/partials/**/*.html",
        "./src/templates/**/*.html",
        "./src/sections/**/*.html",

    ],
    theme: {
        extend: {
            colors: {
                v: {
                    purple: "#504DB8",
                    offwhite: "#f5f4f7",
                    grey: "#5D697D",
                    blue: "#27acf1",
                    body: "#4D4D50",
                    black: "#2F2F35",
                },
            },
        },
        container: {
            center: true,
            screens: {
                "2xl": "1260px",
            },
        },
    },
    plugins: [],
};
