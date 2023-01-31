/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        // "./src/components/stories/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': "#1e9bff",
                'dark-200': "#09090b",
                'dark-300': '#09090b'
            },
            fontFamily: {
                dm: ['DM Sans', 'Roboto', 'sans-serif'],
                quicksand: ['Quicksand', 'sans-serif'],
                openSans: ['Open Sans', 'sans-serif']
            },
            boxShadow: {
                '2xl': '0 0 35px #1e9bff'
            }
        },
    },
    plugins: [],
}