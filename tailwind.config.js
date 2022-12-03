/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'dark-200': "#0f0f0f",
            },
            fontFamily: {
                dm: ['DM Sans', 'Roboto', 'sans-serif']
            }
        },
    },
    plugins: [],
}