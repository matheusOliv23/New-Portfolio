/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': "#1e9bff",
                'dark-200': "#0f0f0f",
            },
            fontFamily: {
                dm: ['DM Sans', 'Roboto', 'sans-serif']
            },
            boxShadow: {
                '2xl': '0 0 35px #1e9bff'
            }
        },
    },
    plugins: [],
}