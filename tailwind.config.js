/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                edgeOrange: '#FF4B2B',
                edgeBlack: '#070707',
                edgeGray: '#0f1724',
                edgeMuted: '#9ca3af'
            },
            fontFamily: {
                heading: ['Roboto Slab', 'serif'],
                body: ['Inter', 'system-ui', 'sans-serif'],
                cinzel: ['"Cinzel Decorative"', 'cursive'],
                courier: ['"Courier Prime"', 'monospace']
            }
        },
    },
    plugins: [],
}
